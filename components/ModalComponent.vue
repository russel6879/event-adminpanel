<template>
    <div class="modal fade" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Event</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateEvent">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="editFormData.title"
                      required
                    />
                  </div>
                </div>
                <!-- Add other fields similarly -->
              </div>
              <button type="submit" class="btn btn-primary mt-3">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue';
  import eventService from '~/services/eventService';
  
  // Define props
  const props = defineProps({
    event: Object, // Adjust according to the actual type
    countries: Array,
    venues: Array
  });
  
  // Define emits
  const emit = defineEmits(['update']);
  
  const modal = ref(null);
  const editFormData = ref({});
  
  // Function to open the modal and populate form data
  const openModal = (data) => {
    editFormData.value = { ...data };
    $(modal.value).modal('show');
  };
  
  // Function to close the modal
  const closeModal = () => {
    $(modal.value).modal('hide');
  };
  
  // Function to update event
  const updateEvent = async () => {
    try {
      await eventService.updateEvent(editFormData.value.id, editFormData.value);
      closeModal();
      emit('update');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  
  // Watch for changes in props.event and update form data
  watch(() => props.event, (newEvent) => {
    if (newEvent) {
      editFormData.value = { ...newEvent };
    }
  });
  </script>
  
  <style scoped>
  /* Add any custom styles for the modal here */
  </style>
  