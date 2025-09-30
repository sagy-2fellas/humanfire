import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

const appId = import.meta.env.VITE_BASE44_APP_ID;

if (!appId) {
  // Surface a clear runtime error in dev; avoid silent misconfigurations
  // eslint-disable-next-line no-console
  console.error('Missing VITE_BASE44_APP_ID. Add it to your .env.local file.');
}

// Create a client with authentication required
export const base44 = createClient({
  appId: appId || '',
  requiresAuth: true
});
