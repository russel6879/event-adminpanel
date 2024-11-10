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

const blogService = {
  async createBlog(blogData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.post('/blogs', blogData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 201) {
        throw new Error('Blog creation failed');
      }

      $toast.success('Blog created successfully');
      return response.data;
    } catch (error) {
      $toast.error('Blog creation failed');
      throw error;
    }
  },

  async getBlogs() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.get('/blogs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to fetch blogs');
      }

      return response.data;
    } catch (error) {
      $toast.error('Failed to fetch blogs');
      throw error;
    }
  },

  async updateBlog(blogId, blogData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.put(`/blogs/${blogId}`, blogData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Blog update failed');
      }

      $toast.success('Blog updated successfully');
      return response.data;
    } catch (error) {
      $toast.error('Blog update failed');
      throw error;
    }
  },

  async deleteBlog(blogId) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.delete(`/blogs/${blogId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      $toast.success('Blog deleted successfully');
      return response.data;
    } catch (error) {
      $toast.error('Blog deletion failed');
      throw error;
    }
  },
};

export default blogService;
