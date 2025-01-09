import { Header } from "@/components/Header";
import { Features } from "@/components/Features";
import { TransactionForm } from "@/components/TransactionForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Features />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Add Transaction</h2>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Index;