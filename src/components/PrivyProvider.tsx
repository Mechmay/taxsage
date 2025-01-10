import { PrivyProvider as PrivyProviderBase } from '@privy-io/react-auth';
import { ReactNode } from 'react';

// Use environment variable or fallback to empty string
const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID || "";

export const PrivyProvider = ({ children }: { children: ReactNode }) => {
  if (!PRIVY_APP_ID) {
    console.error('Missing PRIVY_APP_ID environment variable');
  }

  return (
    <PrivyProviderBase
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['wallet', 'email'],
        appearance: {
          theme: 'light',
          accentColor: '#4F46E5',
        },
      }}
    >
      {children}
    </PrivyProviderBase>
  );
};