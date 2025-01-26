<template>
  <div v-if="admin=='supergazette@gmail.com'">
    <VRow>
      <VCol cols="12" md="10">
        <VCard title="" class="mt-4">
          <VCardText>
            <VCard flat>
              <VCardTitle class="d-flex align-center pe-2">
                <VIcon icon="mdi-calendar"></VIcon> &nbsp;
                Event List
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
                :items="events"
                :headers="headers"
              >
              <template v-slot:item.title="{ item }">
                  {{ item.title }}
                </template>

              <template v-slot:item.slug="{ item }">
                <VBtn text @click="openSlugDialog(item)">
                  <i class="ri-pencil-fill"></i> {{ item.slug }}
                </VBtn>
              </template>

            
                 <template v-slot:item.featured="{ item }">
                  <VCheckbox
                    :model-value="item.featured === 1" 
                    @click="toggleFeaturedStatus(item)"                 
                    hide-details
                    density="compact"
                    color="primary"
                  ></VCheckbox>
                   </template>
          
                <!-- <template v-slot:item.event_date_from="{ item }">
                  {{ item.event_date_from }}
                </template> -->

                <template v-slot:item.status="{ item }">
               
                  <VChip
                    :color="item.status === 'active' ? 'success' : 'error'"
                    :text="item.status=== 'active' ? 'active' : 'inactive'"
                    class="text-uppercase"
                    size="small"
                    label
                  @click="openDialog(item)"
                  ></VChip>
                </template>

                <template v-slot:item.actions="{ item }">
                  

                  <VBtn icon color="primary"> <NuxtLink  :to="`/edit-listing/${item.id}`" >
                    <i class="ri-edit-box-line white-icon" ></i>
                    </NuxtLink></VBtn>
                  <VBtn icon color="error" @click="deleteEvent(item.id)">
                    <i class="ri-delete-bin-line"></i>
                  </VBtn>
                </template>
              </VDataTable>
            </VCard>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- Slug Update Dialog -->
    <v-dialog v-model="slugDialog" width="auto">
                <v-card max-width="400">
                  <v-card-title>
                    Update Slug
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      v-model="newSlug"
                      label="Slug"
                      variant="outlined"
                      clearable
                       v-bind="{ size: 111 }"
                      ></v-text-field>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn color="primary" text @click="updateSlug">Update</v-btn>
                    <v-btn text @click="slugDialog = false">Cancel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

    <!-- Dialog Component -->
    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="400">
        <v-card-title>
          Update Status
        </v-card-title>
        <v-card-text>
          Do you want to update the status of this event?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-end">
          <v-btn color="primary" text @click="updateStatus('active')">Active</v-btn>
          <v-btn color="warning" text @click="updateStatus('inactive')">Inactive</v-btn>
          <v-btn color="error" text @click="updateStatus('rejected')">Reject</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import eventService from '~/services/eventService';
import ModalComponent from '~/components/ModalComponent.vue';
const dialog = ref(false);
const currentEvent = ref(null); // To store the current event data for status update
const slugDialog = ref(false);
const newSlug = ref('');
const events = ref([]);
const search = ref('');
const headers = [
  { title: 'Title', value: 'title' },
  { title: 'Slug', value: 'slug' },
  { title: 'Featured', value: 'featured' }, // Add this line

  // { title: 'Date', value: 'event_date_from' },
  { title: 'Status', value: 'status' },
  { title: 'Actions', value: 'actions', sortable: false },
];

const fetchExpiredEvents = async () => {
  try {
    events.value = await eventService.getExpiredEvents();
    console.log(events.value);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};


onMounted(() => {
  fetchExpiredEvents();
  admin.value = localStorage.getItem('admin');
});
const updateStatus = async (status) => {
  if (currentEvent.value) {
    let statusValue;
    switch (status) {
      case 'active':
        statusValue = 'active';
        break;
      case 'inactive':
        statusValue = 'inactive';
        break;
      case 'rejected':
        statusValue = 'rejected';
        break;
    }

    try {
      await eventService.updateEventStatus(currentEvent.value.id, { status: statusValue });
      fetchExpiredEvents();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      dialog.value = false; // Close the dialog after updating
    }
  }
};
const toggleFeaturedStatus = async (event) => {
  try {
    const updatedStatus = event.featured ? false : true; // Toggle the featured status
    await eventService.updateEventStatus(event.id, { featured: updatedStatus });
    fetchExpiredEvents(); // Refresh the list after the update
  } catch (error) {
    console.error('Error updating featured status:', error);
  }
};
const updateSlug = async () => {
  if (currentEvent.value && newSlug.value) {
    try {
      await eventService.updateEventSlug(currentEvent.value.id, { slug: newSlug.value });
      fetchExpiredEvents(); // Refresh the events list after updating
      slugDialog.value = false; // Close the dialog
    } catch (error) {
      console.error('Error updating slug:', error);
    }
  }
};
const openDialog = (event) => {
  currentEvent.value = event; // Set the current event to be updated

  dialog.value = true; // Open the dialog
};
const openSlugDialog = (event) => {
  currentEvent.value = event;
  newSlug.value = event.slug; // Pre-fill with the current slug
  slugDialog.value = true; // Open the dialog
};
const deleteEvent = async (eventId) => {
  confirmDialog({
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete this event?',
    confirm: async () => {
      try {
        await eventService.deleteEvent(eventId);
        fetchExpiredEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    },
  });
};

const editEvent = (event) => {
  const modal = $refs.modal;
  modal.openModal(event); // Open the modal with the event data
};
</script>
<style>

.white-icon {
  color:white !important
}
</style>
