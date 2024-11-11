<template>
  <div>
    <!-- Header Section -->
    <VCard title="Header Settings">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <VFileInput
              
                label="Upload Logo"
              
             
                @change="handleLogoChange"

                class="mb-4"
              />
               <!-- Preview for Logo -->
               
         

               <img  v-if="logoPreview" :src="logoPreview" alt="Logo Preview" class="preview-image mb-4" />

              <VFileInput
               
                label="Upload Banner Image"
                type="file"
           
                @change="handleBannerChange"


                class="mb-4"
              />
             
              <img v-if="bannerImagePreview" :src="bannerImagePreview" alt="Banner Preview" class="preview-image mb-4" />

            </VCol>
          </VRow>
          <VCol cols="12" class="d-flex gap-4">
            <VBtn @click="saveSettings('header')">Update Header Settings</VBtn>
          </VCol>
        </VForm>
      </VCardText>
    </VCard>

    <!-- Home Page Section -->
    <VCard title="Home Page Settings" class="mt-4">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <VFileInput
                v-model="sliderImages"
                label="Upload Slider Images"
                multiple
                accept="image/*"
                @change="handleSliderImagesChange"
                class="mb-4"
              />
            </VCol>
          </VRow>
          <VCol cols="12" class="d-flex gap-4">
            <VBtn @click="saveSettings('home')">Update Home Page Settings</VBtn>
          </VCol>
        </VForm>
      </VCardText>
    </VCard>

    <!-- Footer Section -->
    <VCard title="Footer Settings" class="mt-4">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <VFileInput
            
                label="Upload Footer Logo"
                type="file"
                accept="image/*"
                @change="handleFooterLogoChange"

                class="mb-4"
              />
              <img v-if="footerLogoPreview" :src="footerLogoPreview" alt="Banner Preview" class="preview-image mb-4" />

              <VTextarea
                v-model="footerDescription"
                label="Footer Description"
                placeholder="Enter footer description"
                class="mb-4"
              />
              <VTextarea
                v-model="categories"
                label="Footer Categories (Comma Separated)"
                placeholder="Enter categories separated by commas"
                class="mb-4"
              />
              <VTextField
                v-model="copyrightText"
                label="Copyright Text"
                placeholder="Enter copyright text"
                class="mb-4"
              />
              <VTextField
                v-model="contactInfo.address"
                label="Contact Address"
                placeholder="Enter contact address"
                class="mb-4"
              />
              <VTextField
                v-model="contactInfo.phone"
                label="Contact Phone"
                placeholder="Enter contact phone number"
                class="mb-4"
              />
              <VTextField
                v-model="contactInfo.email"
                label="Contact Email"
                placeholder="Enter contact email"
                class="mb-4"
              />
            </VCol>
          </VRow>
          <VCol cols="12" class="d-flex gap-4 mt-4">
            <VBtn @click="saveSettings('footer')">Update Footer Settings</VBtn>
          </VCol>
        </VForm>
      </VCardText>
    </VCard>

    <!-- Social Media Section -->
    <VCard title="Social Media Links" class="mt-4">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="socialLinks.facebook"
                label="Facebook URL"
                placeholder="Enter Facebook URL"
                class="mb-4"
              />
              <VTextField
                v-model="socialLinks.twitter"
                label="Twitter URL"
                placeholder="Enter Twitter URL"
                class="mb-4"
              />
              <VTextField
                v-model="socialLinks.instagram"
                label="Instagram URL"
                placeholder="Enter Instagram URL"
                class="mb-4"
              />
              <VTextField
                v-model="socialLinks.youtube"
                label="YouTube URL"
                placeholder="Enter YouTube URL"
                class="mb-4"
              />
              <VTextField
                v-model="socialLinks.linkedin"
                label="LinkedIn URL"
                placeholder="Enter LinkedIn URL"
                class="mb-4"
              />
            </VCol>
          </VRow>
          <VCol cols="12" class="d-flex gap-4">
            <VBtn @click="saveSettings('social')">Update Social Media Links</VBtn>
          </VCol>
        </VForm>
      </VCardText>
    </VCard>

    <!-- Quick Links Section -->
    <VCard title="Quick Links Settings" class="mt-4">
      <VCardText>
        <VForm>
          <VRow>
            <VCol cols="12">
              <!-- Quick Links List -->
              <VRow v-for="(link, index) in quickLinks" :key="index" class="align-center mb-2">
                <!-- Title Field -->
                <VCol cols="5">
                  <VTextField
                    v-model="link.title"
                    label="Link Title"
                    placeholder="Enter title"
                    class="mb-2"
                  />
                </VCol>

                <!-- URL Field -->
                <VCol cols="5">
                  <VTextField
                    v-model="link.url"
                    label="Link URL"
                    placeholder="Enter URL"
                    class="mb-2"
                  />
                </VCol>

                <!-- Delete Button -->
                <VCol cols="2" class="d-flex justify-end">
                  <VBtn icon color="error" @click="removeQuickLink(index)" text>
                    <i class="ri-delete-bin-line"></i>
                  </VBtn>
                </VCol>
              </VRow>

              <!-- Add New Button -->
              <VBtn @click="addQuickLink" color="primary" class="mt-2">
                Add New
              </VBtn>
            </VCol>
          </VRow>

          <VCol cols="12" class="d-flex gap-4 mt-4">
            <VBtn @click="saveSettings('footer')">Update Footer Settings</VBtn>
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

// Header Section

const bannerImagePreview = ref(null);
const logoPreview = ref('');
const footerLogoPreview = ref('');

// Home Page Section
const sliderImages = ref([]);

// Footer Section
const footerLogo = ref(null);
const footerDescription = ref('');
const quickLinks = ref([{ title: '', url: '' }]);
const categories = ref('');
const copyrightText = ref('');
const contactInfo = ref({
  address: '',
  phone: '',
  email: ''
});
const formData = ref({
  headerLogo: '',
  bannerImage:'',
  footerLogo:''
 
});
// Social Media Section
const socialLinks = ref({
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  linkedin: ''
});
const baseURL= `${$config.public.imageBase}`;

// Utility function to read files as Base64
const handleLogoChange = (event) => {

  const file = event.target.files[0];
  if (file) {
    formData.headerLogo = file;
    const reader = new FileReader();
    reader.onload = () => {

          logoPreview.value = reader.result;
       
          formData.headerLogo =reader.result
      
    
    };
    reader.readAsDataURL(file);
  }
};

const handleBannerChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.bannerImage = file; // Set the file object to formData
    const reader = new FileReader();
    reader.onload = () => {
      bannerImagePreview.value = reader.result; // Set the preview to the Base64 string
      formData.bannerImage = reader.result; // Update formData with the Base64 string
    };
    reader.readAsDataURL(file); // Convert file to Base64
  }
};
const handleFooterLogoChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.footerLogo = file; // Set the file object to formData
    const reader = new FileReader();
    reader.onload = () => {
      footerLogoPreview.value = reader.result; // Set the preview to the Base64 string
      formData.footerLogo = reader.result; // Update formData with the Base64 string
    };
    reader.readAsDataURL(file); // Convert file to Base64
  }
};


// Fetch existing settings from the backend
const fetchSettings = async () => {
  try {
    const settings = await settingsService.getSettings();

    // Map footer settings data
 
  

    const footerSettings = settings.footer_settings || {};
    // footerLogo.value = footerSettings.footerLogo || null;
    footerDescription.value = footerSettings.footerDescription || '';
    quickLinks.value = footerSettings.quickLinks || [];
    categories.value = footerSettings.categories ? footerSettings.categories.join(', ') : '';
    copyrightText.value = footerSettings.copyrightText || '';
    contactInfo.value = footerSettings.contactInfo || { address: '', phone: '', email: '' };

    // Map other settings data
    // logo.value = settings.logo || null;
    // bannerImage.value = settings.bannerImage || null;
    sliderImages.value = settings.sliderImages || [];
    socialLinks.value = settings.social_links || {
      facebook: '',
      twitter: '',
      instagram: '',
      youtube: '',
      linkedin: '',
    };
    formData.value = settings.header_settings.logo ;
    logoPreview.value = baseURL+ settings.header_settings.logo;
    bannerImagePreview.value = baseURL+ settings.header_settings.bannerImage;
    footerLogoPreview.value = baseURL +  footerSettings.footerLogo;
  // bannerImage.value = settings.header_settings;
  } catch (error) {
    console.error('Error fetching settings:', error);
  }
};
// Add a new quick link
const addQuickLink = () => {
  quickLinks.value.push({ title: '', url: '' });
};

// Remove a quick link by index
const removeQuickLink = (index) => {
  quickLinks.value.splice(index, 1);
};

// Save or update settings
const saveSettings = async (section) => {


  try {
    let settingsData = {};
    let endpoint = '/settings'; // Update this to your actual endpoint if needed

    switch (section) {
      case 'header':
        settingsData = {
          key: 'header_settings', // Replace with actual key
          value: {
            logo: formData.headerLogo ,
            bannerImage: formData.bannerImage
          }
        };
        break;
      case 'home':
        settingsData = {
          key: 'home_page_settings', // Replace with actual key
          value: {
            sliderImages: sliderImages.value
          }
        };
        break;
      case 'footer':
        settingsData = {
          key: 'footer_settings', // Replace with actual key
          value: {
            footerLogo:  formData.footerLogo ,
            footerDescription: footerDescription.value,
            quickLinks: quickLinks.value,
            categories: categories.value.split(',').map(cat => cat.trim()),
            copyrightText: copyrightText.value,
            contactInfo: {
              address: contactInfo.value.address || '',
              phone: contactInfo.value.phone || '',
              email: contactInfo.value.email || ''
            }
          }
        };
        break;
      case 'social':
        const validateSocialLinks = (links) => {
          const defaultUrl = '';
          return {
            facebook: typeof links.facebook === 'string' ? links.facebook : defaultUrl,
            twitter: typeof links.twitter === 'string' ? links.twitter : defaultUrl,
            instagram: typeof links.instagram === 'string' ? links.instagram : defaultUrl,
            youtube: typeof links.youtube === 'string' ? links.youtube : defaultUrl,
            linkedin: typeof links.linkedin === 'string' ? links.linkedin : defaultUrl
          };
        };
        
        settingsData = {
          key: 'social_links', // Replace with actual key
          value: validateSocialLinks(socialLinks.value)
        };
        break;
    }

    console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} Settings Data:`, settingsData);
    await settingsService.updateSettings(settingsData, `${section.charAt(0).toUpperCase() + section.slice(1)} settings updated successfully`, `Failed to update ${section} settings`);
    console.log(`${section.charAt(0).toUpperCase() + section.slice(1)} settings updated successfully`);
  } catch (error) {
    console.error(`Error updating ${section} settings:`, error);
  }
};

// Fetch settings on component mount
onMounted(fetchSettings);
</script>

<style scoped>
.preview-image {
  max-width: 15%; /* Responsive */
  height: auto; /* Maintain aspect ratio */
  border: 1px solid #ddd; /* Optional border */
  margin-top: 8px; /* Spacing */
}
/* Add your custom styles here */
</style>

