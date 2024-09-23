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

const venueService = {
  async createVenue(venueData) {

    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      
      const response = await apiClient.post('/venues',venueData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 201) {
        throw new Error('Venue creation failed');
      }

      $toast.success('Venue created successfully');
      return response.data;
    } catch (error) {
      $toast.error('Venue creation failed');
      throw error;
    }
  },

  async getVenues() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.get('/venues', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to fetch venues');
      }

      return response.data;
    } catch (error) {
      $toast.error('Failed to fetch venues');
      throw error;
    }
  },
  async getCountries() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
  
    try {
        
      const response = await apiClient.get('/countries');
  
      if (response.status !== 200) {
        throw new Error('Failed to fetch countries');
     
      }
  
      return response.data;
    } catch (error) {
      $toast.error('Failed to fetch countries');
      throw error;
    }
  },
  
  async updateVenue(venueId, venueData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.put(`/venues/${venueId}`, venueData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Venue update failed');
      }

      $toast.success('Venue updated successfully');
      return response.data;
    } catch (error) {
      $toast.error('Venue update failed');
      throw error;
    }
  },

  async deleteVenue(venueId) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.delete(`/venues/${venueId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Venue deletion failed');
      }

      $toast.success('Venue deleted successfully');
      return response.data;
    } catch (error) {
      $toast.error('Venue deletion failed');
      throw error;
    }
  }
};

export default venueService;
