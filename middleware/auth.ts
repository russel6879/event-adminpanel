// middleware/authenticated.ts

import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return; // Skip middleware on the server side

  const token = localStorage.getItem('admin_token');

  if (!token) {
    return navigateTo('/login'); // Redirect to login page if not authenticated
  }

  // Optionally, you can add more checks for token validity here
});
