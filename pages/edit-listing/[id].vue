<template>
  <div>
    <VRow>
      <VCol cols="12" md="10">
        <div ref="formRef">
          <VCard title="Edit Event">
            <VCardText>
              <VForm @submit.prevent="updateEvent">
                <VRow>
                  <!-- Title -->
                  <VCol cols="12">
                    <VTextField
                      v-model="formData.title"
                      label="Title"
                      placeholder="Enter event title"
                      required
                    />
                  </VCol>

                  <!-- Event Type -->
                  <VCol cols="12" md="6">
                    <VSelect
                      v-model="formData.event_type"
                      :items="['online', 'physical', 'hybrid']"
                      label="Event Type"
                      placeholder="Select event type"
                      @change="checkEventType"
                      required
                    />
                  </VCol>

                  <!-- Country -->
                  <VCol cols="12" md="6" v-if="showLocationFields">
                    <VSelect
                      v-model="formData.country"
                      :items="countries"
                      item-title="name"
                      item-value="id"
                      label="Country"
                      placeholder="Select country"
                      @update:model-value="fetchVenues"
                      required
                    />
                  </VCol>

                  <!-- Venue -->
               
                  <VCol cols="12" md="6" v-if="showLocationFields">
                    <VSelect
                      v-model="formData.venue"
                      :items="venues.data"
                      item-title="venue_name"
                      item-value="venue_name"
                      label="Venue"
                      placeholder="Select venue"
                      required
                    />
                  </VCol>

                  <!-- Dates and Times -->
                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="formData.event_date_from"
                      label="Event Date From"
                      type="date"
                      required
                    />
                  </VCol>

                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="formData.event_date_to"
                      label="Event Date To"
                      type="date"
                      required
                    />
                  </VCol>

                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="formData.event_time_from"
                      label="Event Time From"
                      type="time"
                      required
                    />
                  </VCol>

                  <VCol cols="12" md="6">
                    <VTextField
                      v-model="formData.event_time_to"
                      label="Event Time To"
                      type="time"
                      required
                    />
                  </VCol>

                  <!-- Categories -->
                  <VCol cols="12">
                
                   
                    <Multiselect
                      v-model="selectedCategories"
                      :options="categories"
                      :multiple="true"
                      :close-on-select="false"
                      placeholder="Select categories"
                      label="name"
                      track-by="id"
                    />
                  </VCol>

                  <!-- Website Link -->
                  <VCol cols="12">
                    <VTextField
                      v-model="formData.website_link"
                      label="Website Link"
                      placeholder="Enter website link"
                      type="url"
                      required
                    />
                  </VCol>

                  <!-- Description -->
                  <VCol cols="12">
                    <Editor :key="editorKey" v-model:content="formData.description" />
                  </VCol>

                  <!-- Video Link -->
                  <VCol cols="12">
                    <VTextField
                      v-model="formData.video_link"
                      label="Video Link"
                      placeholder="Enter video link"
                      type="url"
                      class="mt-12"
                    />
                  </VCol>

                  <!-- Featured Photo -->
                  <VCol cols="12">
                    <VFileInput
                      label="Featured Photo"
                      @change="handleFileUpload"
                      required
                    />
                    <img v-if="imagePreview" :src="imagePreview" class="img-thumbnail mt-2" />
                  </VCol>

                  <!-- Action Buttons -->
                  <VCol cols="12" class="d-flex gap-4">
                    <VBtn type="submit">
                      Update Event
                    </VBtn>

                    <VBtn
                      type="reset"
                      color="secondary"
                      variant="outlined"
                      @click="resetForm"
                    >
                      Reset
                    </VBtn>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCard>
        </div>

    
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Multiselect from 'vue-multiselect';
import Editor from '~/components/Editor.vue';
import { useRoute } from 'vue-router';
import eventService from '~/services/eventService';
import 'vue-multiselect/dist/vue-multiselect.css';
const { $config } = useNuxtApp();
const baseURL= `${$config.public.imageBase}/`;
const route = useRoute();
const formData = ref({
  title: '',
  event_type: '',
  country: '',
  venue: '',
  event_date_from: '',
  event_date_to: '',
  event_time_from: '',
  event_time_to: '',
  category: [],
  website_link: '',
  description: '',
  video_link: '',
  featured_photo: ''
  
});
const countries = ref([]);
const venues = ref([]);
const categories = ref([]);
const selectedCategories = ref([]);

const imagePreview = ref('');
const editorKey = ref(1); // To re-render the editor
const events = ref([]);
const search = ref('');
const headers = ref([
  { text: 'Event Name', value: 'name' },
  { text: 'Event Type', value: 'event_type' },
  { text: 'Status', value: 'status' },
  { text: 'Actions', value: 'actions', sortable: false }
]);
const fetchCategories = async () => {
   try {
     categories.value = await eventService.getCategories();
   } catch (error) {
     console.error('Error fetching categories:', error);
   }
 };

 // Fetch countries
const fetchCountries = async () => {
  try {
    countries.value = await eventService.getCountries();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};
// Fetch event details by ID
const fetchEventDetails = async () => {
  try {
    const eventId = route.params.id;
    const event = await eventService.getEventById(eventId);
    formData.value = { ...event };
    const countryId= event.country
   
    formData.value.country = parseInt(countryId); // Ensure `event.country` is the ID

       // Convert category IDs to category objects
       const categoryIds = Array.isArray(event.category) ? event.category : JSON.parse(event.category);
selectedCategories.value = categories.value.filter(category =>
  categoryIds.includes(category.id)
);
    
    imagePreview.value = baseURL+event.featured_photo;
  } catch (error) {
    console.error('Error fetching event details:', error);
  }
};



// Fetch venues based on selected country
const fetchVenues = async () => {
 formData.value.venue="";
  try {
    if (formData.value.country) {
     
      venues.value = await eventService.getVenuesByCountry(formData.value.country);
      formData.venue=venues.value.data.venue_name
    }
  } catch (error) {
    console.error('Error fetching venues:', error);
  }
};

// Update event handler
const updateEvent = async () => {
  try {
    const eventId = route.params.id;
     const categoryIds = Array.isArray(selectedCategories.value) 
      ? selectedCategories.value.map(category => category.id)
      : [];
    formData.value.category=JSON.stringify(categoryIds);
    await eventService.updateEvent(eventId, formData.value);
    // Handle success (e.g., redirect or show a success message)
  } catch (error) {
    console.error('Error updating event:', error);
  }
};

// Handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.featured_photo = file;
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
          formData.value.featured_photo =reader.result

    };
    reader.readAsDataURL(file);
  }
};

// Check event type and toggle location fields
const showLocationFields = computed(() => formData.value.event_type !== 'online');


// Reset form handler
const resetForm = () => {
  formData.value = {
    title: '',
    event_type: '',
    country: '',
    venue: '',
    event_date_from: '',
    event_date_to: '',
    event_time_from: '',
    event_time_to: '',
    category: [],
    website_link: '',
    description: '',
    video_link: '',
    featured_photo: ''
  };
  selectedCategories.value = [];
  imagePreview.value = '';
  // Optionally, reset other states or values as needed
};

// On mounted, fetch event details and countries
onMounted(() => {
  fetchCategories();
  fetchCountries();
  fetchEventDetails();

  
});
</script>
