<template>
  <div>
    <!-- Custom Scripts Section -->
    <VCard title="Custom Scripts" class="mt-4">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <!-- Header Script Field -->
              <VTextarea
                v-model="scriptsSettings.headerScript"
                label="Custom Script"
                placeholder="Enter Custom Script"
                class="mb-4"
                rows="4"
              />

              <!-- Footer Script Field -->
              <!-- <VTextarea
                v-model="scriptsSettings.footerScript"
                label="Footer Script"
                placeholder="Enter Custom Footer Script"
                class="mb-4"
                rows="4"
              /> -->
            </VCol>
          </VRow>

          <!-- Save Button -->
          <VCol cols="12" class="d-flex gap-4">
            <VBtn @click="saveSettings('scripts')">Update Custom Scripts</VBtn>
          </VCol>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import settingsService from '~/services/settingsService';
const { $config } = useNuxtApp();

const scriptsSettings = ref({
  headerScript: '',
  footerScript: ''
});

// Fetch existing custom scripts settings from the backend
const fetchSettings = async () => {
  try {
    const settings = await settingsService.getSettings();
    const scriptsData = settings.custom_scripts || {};
    scriptsSettings.value.headerScript = scriptsData.headerScript || '';
    scriptsSettings.value.footerScript = scriptsData.footerScript || '';
  } catch (error) {
    console.error('Error fetching custom scripts settings:', error);
  }
};

// Save custom scripts settings
const saveSettings = async (section) => {
  try {
    let settingsData = {};

    if (section === 'scripts') {
      settingsData = {
        key: 'custom_scripts',
        value: {
          headerScript: scriptsSettings.value.headerScript,
          footerScript: scriptsSettings.value.footerScript
        }
      };
    }

    console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} Settings Data:`, settingsData);
    await settingsService.updateSettings(settingsData, `${section.charAt(0).toUpperCase() + section.slice(1)} Settings`);
    console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} Settings Updated Successfully`);
  } catch (error) {
    console.error(`Error updating ${section.charAt(0).toUpperCase() + section.slice(1)} settings:`, error);
  }
};

// Fetch settings on component mount
onMounted(() => {
  fetchSettings();
});
</script>

<style scoped>
/* Add custom styling if needed */
</style>
