import { Calculator, ChartBar, FileText } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Easy Calculations",
      description: "Simple FIFO-based tax calculations for your crypto transactions",
    },
    {
      icon: <ChartBar className="w-8 h-8 text-primary" />,
      title: "Visual Reports",
      description: "Clear visual breakdowns of your tax liability",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Export Reports",
      description: "Download your tax reports in PDF format",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};