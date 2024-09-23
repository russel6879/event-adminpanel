import axios from 'axios';

const createApiClient = () => {
  const { $config } = useNuxtApp();

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

const settingsService = {
  async getSettings() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.get('/settings', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error('Failed to fetch settings');
      }

      return response.data;
    } catch (error) {
      $toast.error('Failed to fetch settings');
      console.error(error);
      throw error;
    }
  },

  async updateSettings(data, successMessage, errorMessage) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.patch('/settings', data, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw new Error('Failed to update settings');
      }

      $toast.success(successMessage);
      return response.data;
    } catch (error) {
      $toast.error(errorMessage);
      console.error(error);
      throw error;
    }
  },
};

export default settingsService;
