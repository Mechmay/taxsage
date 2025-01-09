import { Calculator, ChartBar, FileText } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-primary py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Web3 Tax Calculator</h1>
        <p className="text-white/90 text-lg mb-8">
          Simple, accurate crypto tax calculations for your Web3 transactions
        </p>
      </div>
    </header>
  );
};