import { usePrivy } from '@privy-io/react-auth';
import { Button } from '@/components/ui/button';

export const WalletConnect = () => {
  const { login, logout, authenticated, user } = usePrivy();

  return (
    <div className="flex justify-end p-4">
      {authenticated ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Connected: {user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}
          </span>
          <Button variant="outline" onClick={logout}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button onClick={login}>Connect Wallet</Button>
      )}
    </div>
  );
};