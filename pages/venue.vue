<script setup>
definePageMeta({
  middleware: 'auth'
});
import { ref, onMounted, nextTick } from 'vue';
import venueService from '~/services/venueService';
// import countryService from '~/services/countryService';

// Venue information
const country = ref('');
const countries = ref([]);
const venueName = ref('');
const description = ref('');
const googleMapLink = ref('');
const search = ref('');
const venues = ref([]);
const isEdit = ref(false);
const editVenueId = ref(null);

const formRef = ref(null);

const headers = [
  { title: 'Country', value: 'country' },
  { title: 'Venue Name', value: 'venueName' },
  { title: 'Description', value: 'description' },
  { title: 'Google Map Link', value: 'googleMapLink' },
  { title: 'Actions', value: 'actions', sortable: false },
];

const fetchVenues = async () => {
  try {
    venues.value = await venueService.getVenues();
    console.log(venues.value);
  } catch (error) {
    console.error('Error fetching venues:', error);
  }
};

const fetchCountries = async () => {
  try {
    countries.value = await venueService.getCountries();
   
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

onMounted(() => {

  fetchCountries();
  fetchVenues();
});

const submitForm = async () => {
  try {
    const venueData = {
      country: country.value,
      venue_name: venueName.value,
      description: description.value,
      google_map_link: googleMapLink.value,
    };

    if (isEdit.value && editVenueId.value) {
      await venueService.updateVenue(editVenueId.value, venueData);
      console.log('Venue updated successfully');
    } else {
      await venueService.createVenue(venueData);
      console.log('Venue created successfully');
    }

    resetForm();
    fetchVenues();
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const editVenue = async (venue) => {
  country.value = venue.country;
  venueName.value = venue.venue_name;
  description.value = venue.description;
  googleMapLink.value = venue.google_map_link;
  isEdit.value = true;
  editVenueId.value = venue.id;

  await nextTick();
  if (formRef.value) {
    formRef.value.scrollIntoView({ behavior: 'smooth' });
  }
};

const deleteVenue = async (venueId) => {
  try {
    const result = await useNuxtApp().$swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      await venueService.deleteVenue(venueId);
      fetchVenues();
      useNuxtApp().$swal.fire('Deleted!', 'Venue has been deleted.', 'success');
    }
  } catch (error) {
    console.error('Error deleting venue:', error);
    useNuxtApp().$swal.fire('Error!', 'Failed to delete the venue.', 'error');
  }
};

const resetForm = () => {
  country.value = '';
  venueName.value = '';
  description.value = '';
  googleMapLink.value = '';
  isEdit.value = false;
  editVenueId.value = null;
};
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12" md="10">
        <div ref="formRef">
          <VCard title="Create Venue">
            <VCardText>
              <VForm @submit.prevent="submitForm">
                <VRow>
          
                  <VCol cols="12">
                    <VSelect
                      v-model="country"
                      :items="countries"
                       label="Select Country"                     
                       item-title="name"
                       item-value="id"
                      required
                    />
                  </VCol>

                  <VCol cols="12">
                    <VTextField
                      v-model="venueName"
                      label="Venue Name"
                      placeholder="Enter venue name"
                      required
                    />
                  </VCol>

                  <VCol cols="12">
                    <VTextField
                      v-model="description"
                      label="Description"
                      placeholder="Enter description"
                      required
                    />
                  </VCol>

                  <VCol cols="12">
                    <VTextField
                      v-model="googleMapLink"
                      label="Google Map Link"
                      placeholder="Enter Google Map link"
                    />
                  </VCol>

                  <VCol cols="12" class="d-flex gap-4">
                    <VBtn type="submit">
                      {{ isEdit ? 'Update' : 'Submit' }}
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
        <VCard title="" class="mt-4">
          <VCardText>
            <VCard flat>
              <VCardTitle class="d-flex align-center pe-2">
                <VIcon icon="mdi-video-input-component"></VIcon> &nbsp;
                Venue List
                <VSpacer></VSpacer>
                <VTextField
                  v-model="search"
                  density="compact"
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  variant="solo-filled"
                  flat
                  hide-details
                  single-line
                ></VTextField>
              </VCardTitle>

              <VDivider></VDivider>
              <VDataTable
                v-model:search="search"
                :items="venues"
                :headers="headers"
              >
                <template v-slot:item.country="{ item }">
                  {{ item.country?.name || 'N/A' }}
                </template>

                <template v-slot:item.venueName="{ item }">
                  {{ item.venue_name }}
                </template>

                <template v-slot:item.description="{ item }">
                  {{ item.description }}
                </template>

                <template v-slot:item.googleMapLink="{ item }">
                  <a :href="item.google_map_link" target="_blank"> {{ item.google_map_link.slice(0, 50) }}{{ item.google_map_link.length > 50 ? '...' : '' }}
                  </a>
                </template>

                <template v-slot:item.actions="{ item }">
                  <VBtn icon color="primary" @click="editVenue(item)">
                    <i class="ri-edit-box-line"></i>
                  </VBtn>
                  <VBtn icon color="error" @click="deleteVenue(item.id)">
                    <i class="ri-delete-bin-line"></i>
                  </VBtn>
                </template>
              </VDataTable>
            </VCard>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
