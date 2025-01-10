import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { usePrivy } from '@privy-io/react-auth';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

export const TransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [transactions, setTransactions] = useState<any[]>([]);
  const { toast } = useToast();
  const { user, authenticated } = usePrivy();

  const client = createPublicClient({
    chain: mainnet,
    transport: http()
  });

  useEffect(() => {
    const fetchTransactions = async () => {
      if (authenticated && user?.wallet?.address) {
        try {
          const history = await client.getTransactionCount({
            address: user.wallet.address as `0x${string}`
          });
          
          // For demo purposes, we're just showing the transaction count
          // In a real app, you'd want to fetch actual transactions and calculate taxes
          toast({
            title: "Transactions Found",
            description: `Found ${history} transactions for your wallet`,
          });
          
          setTransactions([{ count: history }]);
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to fetch transactions",
            variant: "destructive",
          });
        }
      }
    };

    fetchTransactions();
  }, [authenticated, user?.wallet?.address]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !price) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success",
      description: "Transaction added successfully",
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount (ETH)</Label>
          <Input
            id="amount"
            type="number"
            step="0.0001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="price">Price (USD)</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <Button type="submit" className="w-full">
          Add Transaction
        </Button>
      </form>

      {transactions.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
          <p>Total Transactions: {transactions[0].count}</p>
        </div>
      )}
    </div>
  );
};