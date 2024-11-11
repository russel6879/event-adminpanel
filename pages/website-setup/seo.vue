<template>
  <div>
    <!-- SEO Settings Section -->
    <VCard title="SEO Settings" class="mt-4">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <!-- Meta Title Field -->
              <VTextField
                v-model="seoSettings.metaTitle"
                label="Meta Title"
                placeholder="Enter Meta Title"
                class="mb-4"
              />

              <!-- Meta Description Field -->
              <VTextarea
                v-model="seoSettings.metaDescription"
                label="Meta Description"
                placeholder="Enter Meta Description"
                class="mb-4"
              />

              <!-- Icon Upload Field -->
              <VFileInput
                label="Upload Favicon/Icon"
                accept="image/*"
                @change="handleIconChange"
                class="mb-4"
              />
              <img v-if="iconPreview" :src="iconPreview" alt="Icon Preview" class="preview-image mb-4" />
            </VCol>
          </VRow>
          <VCol cols="12" class="d-flex gap-4">
            <VBtn @click="saveSettings('seo')">Update SEO Settings</VBtn>
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

const seoSettings = ref({
  metaTitle: '',
  metaDescription: '',
  icon: null
});
const iconPreview = ref(null);
const formData = ref({
  seoIcon: ''
});
const baseURL = `${$config.public.imageBase}`;

// Fetch existing SEO settings from the backend
const fetchSettings = async () => {
  try {
    const settings = await settingsService.getSettings();
    const seoData = settings.seo_settings || {};
    seoSettings.value.metaTitle = seoData.metaTitle || '';
    seoSettings.value.metaDescription = seoData.metaDescription || '';
    formData.value.seoIcon = seoData.icon || '';
    iconPreview.value = baseURL + seoData.icon;
  } catch (error) {
    console.error('Error fetching SEO settings:', error);
  }
};

// Handle Icon Change and Preview
const handleIconChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.seoIcon = file;
    const reader = new FileReader();
    reader.onload = () => {
      iconPreview.value = reader.result;
      formData.value.seoIcon = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

// Save SEO settings
const saveSettings = async (section) => {
  try {
    let settingsData = {};

    if (section === 'seo') {
      settingsData = {
        key: 'seo_settings',
        value: {
          metaTitle: seoSettings.value.metaTitle,
          metaDescription: seoSettings.value.metaDescription,
          icon: formData.value.seoIcon
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
.preview-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
