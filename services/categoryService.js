import axios from 'axios';

const createApiClient = () => {
  const { $config } = useNuxtApp(); // Retrieve config here

  const apiClient = axios.create({
    baseURL: `${$config.public.apiBase}`,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return apiClient;
};
const categoryService = {
    async createCategory(categoryData) {
      const { $toast } = useNuxtApp();
      const apiClient = createApiClient();
  
      try {
        const token = localStorage.getItem('admin_token');
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await apiClient.post('/categories', categoryData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        if (response.status !== 201) {
          throw new Error('Category creation failed');
        }
  
        $toast.success('Category created successfully');
        return response.data;
      } catch (error) {
        $toast.error('Category creation failed');
        throw error;
      }
    },
  
    async getCategories() {
        const { $toast } = useNuxtApp();
        const apiClient = createApiClient();
    
        try {
          const token = localStorage.getItem('admin_token');
          if (!token) {
            throw new Error('No token found');
          }
    
          const response = await apiClient.get('/categories', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
    
          if (response.status !== 200) {
            throw new Error('Failed to fetch categories');
          }
    
          return response.data;
        } catch (error) {
          $toast.error('Failed to fetch categories');
          throw error;
        }
      },
    
      async updateCategory(categoryId, categoryData) {
        // ...existing code...
      },
    async updateCategory(categoryId, categoryData) {
      const { $toast } = useNuxtApp();
      const apiClient = createApiClient();
  
      try {
        const token = localStorage.getItem('admin_token');
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await apiClient.put(`/categories/${categoryId}`, categoryData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        if (response.status !== 200) {
          throw new Error('Category update failed');
        }
  
        $toast.success('Category updated successfully');
        return response.data;
      } catch (error) {
        $toast.error('Category update failed');
        throw error;
      }
    },
  
    async deleteCategory(categoryId) {
      const { $toast } = useNuxtApp();
      const apiClient = createApiClient();
  
      try {
        const token = localStorage.getItem('admin_token');
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await apiClient.delete(`/categories/${categoryId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        // if (response.status !== 200) {
        //   throw new Error('Category deletion failed');
        // }
  
        $toast.success('Category deleted successfully');
        return response.data;
      } catch (error) {
        $toast.error('Category deletion failed');
        throw error;
      }
    },
  };
  
  export default categoryService;
  