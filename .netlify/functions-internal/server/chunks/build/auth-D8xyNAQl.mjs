import { J as useNuxtApp } from './server.mjs';
import axios from 'axios';

const createApiClient = () => {
  const { $config } = useNuxtApp();
  const apiClient = axios.create({
    baseURL: `${$config.public.apiBase}`,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return apiClient;
};
const authService = {
  async logout() {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await apiClient.post("/admin/logout", {}, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status !== 200) {
        throw new Error("Logout failed");
      }
      localStorage.removeItem("admin_token");
      $toast.success("Logged out successfully");
      return response.data;
    } catch (error) {
      $toast.error("Logout failed");
      throw error;
    }
  },
  async login(credentials) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const response = await apiClient.post("/admin/login", credentials);
      if (response.status !== 200) {
        throw new Error("Login failed");
      }
      $toast.success("Logged in successfully");
      localStorage.setItem("admin_token", response.data.access_token);
      return response.data;
    } catch (error) {
      $toast.error("Login failed");
      throw error;
    }
  },
  async signup(username, email, password) {
    const { $toast } = useNuxtApp();
    const apiClient = createApiClient();
    try {
      const response = await apiClient.post("/admin/signup", { username, email, password });
      if (response.status !== 200) {
        throw new Error("Signup failed");
      }
      $toast.success("Signed up successfully");
      return response.data;
    } catch (error) {
      $toast.error("Signup failed");
      throw error;
    }
  }
};

export { authService as a };
