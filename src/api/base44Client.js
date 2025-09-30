import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

const appId = import.meta.env.VITE_BASE44_APP_ID || 'demo-app-id';

if (!import.meta.env.VITE_BASE44_APP_ID) {
  // eslint-disable-next-line no-console
  console.warn('Using demo Base44 APP_ID. Add VITE_BASE44_APP_ID to your .env.local file for production.');
}

// Create a client with authentication required
export const base44 = createClient({
  appId: appId,
  requiresAuth: false // Set to false for demo mode
});
