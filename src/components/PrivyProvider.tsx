import { PrivyProvider as Provider } from '@privy-io/react-auth';
import { PropsWithChildren } from 'react';

export const PrivyProvider = ({ children }: PropsWithChildren) => {
  // Use a fallback ID if environment variable is not set
  const appId = import.meta.env.VITE_PRIVY_APP_ID || "clue-vacation-fallback";

  return (
    <Provider
      appId={appId}
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
      }}
    >
      {children}
    </Provider>
  );
};