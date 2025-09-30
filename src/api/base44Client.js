import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68dbc45228cd555b8b7f8d8e", 
  requiresAuth: true // Ensure authentication is required for all operations
});
