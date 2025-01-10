import { PrivyProvider as PrivyProviderBase } from '@privy-io/react-auth';
import { ReactNode } from 'react';

const PRIVY_APP_ID = "classy-insert-your-app-id"; // Replace with your Privy app ID

export const PrivyProvider = ({ children }: { children: ReactNode }) => {
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