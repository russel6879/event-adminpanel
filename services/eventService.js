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

const eventService = {
  async createEvent(eventData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.post('/admin/events', eventData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 201) {
        throw new Error('Event creation failed');
      }

      $toast.success('Event created successfully');
      return response.data;
    } catch (error) {
      $toast.error('Event creation failed');
      throw error;
    }
  },

  async getEvents() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.get('/admin/events', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to fetch events');
      }

      return response.data;
    } catch (error) {
      $toast.error('Failed to fetch events');
      throw error;
    }
  },
  async getVenuesByCountry(countryId) {
    const apiClient = createApiClient();
    try {
      const response = await apiClient.get(`/get-venue?country_id=${countryId}`);

      return response.data;
    } catch (error) {
      console.error(`Error fetching venues for country ID ${countryId}:`, error);
      throw error;
    }
  },
  async getEventById(eventId) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.get(`/events/${eventId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to fetch event details');
      }

      return response.data;
    } catch (error) {
      $toast.error('Failed to fetch event details');
      throw error;
    }
  },

  
  
    async updateEvent(eventId, eventData) {
      const { $toast } = useNuxtApp();
      const apiClient = createApiClient();
  
      try {
        const token = localStorage.getItem('admin_token');
        if (!token) {
          throw new Error('No token found');
        }
  
        const response = await apiClient.patch(`/admin/events/${eventId}`, eventData, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        if (response.status !== 200) {
          throw new Error('Event update failed');
        }
  
        $toast.success('Event updated successfully');
        return response.data;
      } catch (error) {
        $toast.error('Event update failed');
        throw error;
      }
    },

  async updateEventStatus(eventId, eventData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient(); // Assuming createApiClient is a function that sets up axios
  
    try {
      // Retrieve the admin token from local storage
      const token = localStorage.getItem('admin_token');
      
      if (!token) {
        throw new Error('No token found');
      }
  
      // Make the API request to update the event status
      const response = await apiClient.patch(`/admin/events/${eventId}/status`, eventData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      // Check if the response status is successful
      if (response.status !== 200) {
        throw new Error('Event update failed');
      }
  
      // Show a success toast notification
      $toast.success('Event updated successfully');
      
      // Return the response data
      return response.data;
    } catch (error) {
      // Show an error toast notification on failure
      $toast.error('Event update failed');
      throw error; // Rethrow the error to handle it further up the call stack if needed
    }
  },
  async updateEventSlug(eventId, slugData) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient(); // Assuming createApiClient sets up axios
  
    try {
      // Retrieve the admin token from local storage
      const token = localStorage.getItem('admin_token');
  
      if (!token) {
        throw new Error('No token found');
      }
  
      // Make the API request to update the event slug
      const response = await apiClient.patch(`/admin/events/${eventId}/slug`, slugData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      // Check if the response status is successful
      if (response.status !== 200) {
        throw new Error('Slug update failed');
      }
  
      // Show a success toast notification
      $toast.success('Event slug updated successfully');
  
      // Return the response data
      return response.data;
    } catch (error) {
      // Show an error toast notification on failure
      $toast.error('Slug update failed');
      throw error; // Rethrow the error to handle it further up the call stack if needed
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
  async deleteEvent(eventId) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();

    try {
      const token = localStorage.getItem('admin_token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await apiClient.delete(`/admin/events/${eventId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Event deletion failed');
      }

      $toast.success('Event deleted successfully');
      return response.data;
    } catch (error) {
      $toast.error('Event deletion failed');
      throw error;
    }
  }
};

export default eventService;
