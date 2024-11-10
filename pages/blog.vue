<script setup>
definePageMeta({
  middleware: 'auth'
});
import { ref, onMounted, nextTick } from 'vue';
import blogService from '~/services/blogService';
import Editor from '~/components/Editor.vue';
const { $config } = useNuxtApp();
const baseURL= `${$config.public.imageBase}/`;
const formData = ref({
  title: '',
  description: '',
  featured_photo: null,
  status: false,
});

const imagePreview = ref(null);
const editorKey = ref(0);
const blogs = ref([]);
const isEdit = ref(false);
const editBlogId = ref(null);

const headers = [
  { title: 'Title', value: 'title' },
  { title: 'Status', value: 'status' },
  { title: 'Actions', value: 'actions', sortable: false },
];

const fetchBlogs = async () => {
  try {
    blogs.value = await blogService.getBlogs();
    console.log(blogs.value);
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

onMounted(fetchBlogs);

const submitForm = async () => {
  try {
    const blogData = {
      title: formData.value.title,
      description: formData.value.description,
      featured_photo: formData.value.featured_photo,
      status: formData.value.status ? 1 : 0,
    };

    if (isEdit.value && editBlogId.value) {
      await blogService.updateBlog(editBlogId.value, blogData);
      console.log('Blog updated successfully');
    } else {
      await blogService.createBlog(blogData);
      console.log('Blog created successfully');
    }

    resetForm();
    fetchBlogs();
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const editBlog = async (blog) => {
  formData.value.title = blog.title;
  formData.value.description = blog.description;
  formData.value.status = blog.status === 1;
  formData.value.featured_photo = blog.featured_photo;
  imagePreview.value = baseURL+blog.featured_photo;
  isEdit.value = true;
  editBlogId.value = blog.id;

  await nextTick();
  editorKey.value++;
};

const deleteBlog = async (blogId) => {
  try {
    await blogService.deleteBlog(blogId);
    fetchBlogs();
  } catch (error) {
    console.error('Error deleting blog:', error);
  }
};

const resetForm = () => {
  formData.value = {
    title: '',
    description: '',
    featured_photo: null,
    status: false,
  };
  imagePreview.value = null;
  isEdit.value = false;
  editBlogId.value = null;
  editorKey.value++;
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
      formData.value.featured_photo = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12" md="10">
        <VCard title="Create Blog (News & Article)">
          <VCardText>
            <VForm @submit.prevent="submitForm">
              <VRow>
                <VCol cols="12">
                  <VTextField
                    v-model="formData.title"
                    label="Title"
                    placeholder="Enter title"
                    required
                  />
                </VCol>

                <VCol cols="12">
                  <Editor :key="editorKey" v-model:content="formData.description" />
                </VCol>

                <VCol cols="12">
                  <VFileInput
                    label="Featured Photo"
                    @change="handleFileUpload"
                    required
                     class="mt-12"
                  />
                  <img v-if="imagePreview" :src="imagePreview" class="img-thumbnail mt-2" />
                </VCol>

                <VCol cols="12">
                  <VCheckbox
                    v-model="formData.status"
                    label="Active Status"
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

        <VCard title="Blog List" class="mt-4">
          <VCardText>
            <VDataTable
              :items="blogs"
              :headers="headers"
            >
              <template v-slot:item.title="{ item }">
                {{ item.title }}
              </template>

              <template v-slot:item.status="{ item }">
                <VChip
                  :color="item.status ? 'success' : 'error'"
                  :text="item.status ? 'Active' : 'Inactive'"
                  class="text-uppercase"
                  size="small"
                  label
                ></VChip>
              </template>

              <template v-slot:item.actions="{ item }">
                <VBtn icon color="primary" @click="editBlog(item)">
                  <i class="ri-edit-box-line"></i>
                </VBtn>
                <VBtn icon color="error" @click="deleteBlog(item.id)">
                  <i class="ri-delete-bin-line"></i>
                </VBtn>
              </template>
            </VDataTable>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
