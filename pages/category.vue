<script setup>
definePageMeta({
  middleware: 'auth'
});
import { ref, onMounted, nextTick } from 'vue';
import categoryService from '~/services/categoryService';

const categoryName = ref('');
const icon = ref('');
const search = ref('');
const status = ref(false);
const categories = ref([]);
const isEdit = ref(false);
const editCategoryId = ref(null);

const formRef = ref(null);

const headers = [
  { title: 'Name', value: 'name' },
  { title: 'Icon', value: 'icon' },
  { title: 'Status', value: 'status' },
  { title: 'Actions', value: 'actions', sortable: false },
];

const fetchCategories = async () => {
  try {
    categories.value = await categoryService.getCategories();
    console.log(categories.value)
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};


onMounted(() => {
  fetchCategories();
  admin.value = localStorage.getItem('admin');
});
const submitForm = async () => {
  try {
    const categoryData = {
      name: categoryName.value,
      icon: icon.value,
      status: status.value ? 1 : 0, // Convert boolean to 1 or 0
    };

    if (isEdit.value && editCategoryId.value) {
      await categoryService.updateCategory(editCategoryId.value, categoryData);
      console.log('Category updated successfully');
    } else {
      await categoryService.createCategory(categoryData);
      console.log('Category created successfully');
    }

    resetForm();
    fetchCategories();
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const editCategory = async (category) => {
  categoryName.value = category.name;
  icon.value = category.icon;
  status.value = category.status === 1; // Set status to true if category.status is 1
  isEdit.value = true;
  editCategoryId.value = category.id;

  await nextTick();
  if (formRef.value) {
    formRef.value.scrollIntoView({ behavior: 'smooth' });
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const result = await useNuxtApp().$swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      await categoryService.deleteCategory(categoryId);
      await useNuxtApp().$swal.fire({
        title: 'Deleted!',
        text: 'The category has been deleted.',
        icon: 'success',
        timer: 1500,
      });
      fetchCategories(); // Refresh the categories after successful deletion
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    await useNuxtApp().$swal.fire({
      title: 'Error!',
      text: 'Something went wrong while deleting the category.',
      icon: 'error',
      timer: 1500,
    });
  }
};

const resetForm = () => {
  categoryName.value = '';
  icon.value = '';
  status.value = false;
  isEdit.value = false;
  editCategoryId.value = null;
};
</script>

<template>
  <div v-if="admin=='supergazette@gmail.com'">
    <VRow>
      <VCol cols="12" md="10">
        <div ref="formRef">
          <VCard title="Create Category">
            <VCardText>
              <VForm @submit.prevent="submitForm">
                <VRow>
                  <VCol cols="12">
                    <VTextField
                      v-model="categoryName"
                      label="Category Name"
                      placeholder="Enter category name"
                      required
                    />
                  </VCol>

                  <VCol cols="12">
                    <VTextField
                      v-model="icon"
                      label="Icon URL"
                      placeholder="Enter icon URL"
                    />
                  </VCol>

                  <VCol cols="12">
                    <VCheckbox
                      v-model="status"
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
        </div>
        <VCard title="" class="mt-4">
          <VCardText>
            <VCard flat>
              <VCardTitle class="d-flex align-center pe-2">
                <VIcon icon="mdi-video-input-component"></VIcon> &nbsp;
                Category List
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
                :items="categories"
                :headers="headers"
              >
                <template v-slot:item.name="{ item }">
                  {{ item.name }}
                </template>

                <template v-slot:item.icon="{ item }">
                  {{ item.icon }}
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
                  <VBtn icon color="primary" @click="editCategory(item)">
                    <i class="ri-edit-box-line"></i>
                  </VBtn>
                  <VBtn icon color="error" @click="deleteCategory(item.id)">
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


