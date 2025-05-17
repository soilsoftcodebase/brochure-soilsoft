import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import BarChart from '../components/BarChart';
import soilSoftLogo from '@assets/Logo_final copy.png';

const BusinessModelPage: React.FC = () => {
  const revenueData = [
    { product: "APIGen", year2024: "0", year2025: "50K", year2026: "25L" },
    { product: "Service Projects", year2024: "0", year2025: "20L", year2026: "45L" },
    { product: "Knowledge Quest", year2024: "0", year2025: "0", year2026: "0" },
    { product: "Photogenic", year2024: "0", year2025: "0", year2026: "0" }
  ];

  const barChartData = [
    { year: "2025", apiGen: 0.5, otherProducts: 20, total: "₹20.5L" },
    { year: "2026", apiGen: 25, otherProducts: 45, total: "₹70L" },
    { year: "2027", apiGen: 80, otherProducts: 120, total: "₹2Cr" }
  ];

  return (
    <PrintLayout>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-14" />
          <h1 className="text-2xl font-montserrat font-bold text-navy">BUSINESS MODEL</h1>
        </div>
        <div className="flex justify-center mt-2">
          <div className="bg-navy inline-block px-6 py-1.5 rounded-full shadow-md">
            <p className="text-lg font-poppins font-semibold text-white tracking-wider">
              INVESTMENT APPEAL
              <span className="ml-1.5 text-sky">•</span>
              <span className="ml-1 text-forest">•</span>
              <span className="ml-1 text-sky">•</span>
            </p>
          </div>
        </div>
      </header>

      {/* Revenue Forecast */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-montserrat font-bold text-navy">REVENUE FORECAST</h2>
          <div className="bg-sky/20 rounded-full px-3 py-1 text-sm font-medium text-navy">
            Projected Growth: 2025-2027
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-navy/20">
          {/* Header Box */}
          <div className="bg-gradient-to-r from-navy to-forest p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Estimated Income Projection</h3>
                <p className="text-sm opacity-90">Conservative Estimates (in ₹)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 px-3 py-2 rounded-lg text-center">
                  <p className="text-xs opacity-80">2024 Earned</p>
                  <p className="font-semibold">₹4 Lakhs</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">₹2+ Crore</p>
                  <p className="text-xs opacity-90">Total by 2027</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Table with better styling */}
          <div className="p-4">
            <table className="w-full mb-4 border-collapse rounded-md overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-navy/20 to-forest/15">
                  <th className="text-left font-poppins p-3 rounded-tl-md">Product</th>
                  <th className="text-right font-poppins p-3">2024 ₹<span className="text-xs ml-1 font-normal text-forest">(Actual)</span></th>
                  <th className="text-right font-poppins p-3">2025 ₹</th>
                  <th className="text-right font-poppins p-3">2026 ₹</th>
                  <th className="text-right font-poppins p-3 rounded-tr-md">2027 ₹<span className="text-xs ml-1 font-normal text-forest">(Projected)</span></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {revenueData.map((row, index) => (
                  <tr key={index} className="hover:bg-navy/5 transition-colors">
                    <td className="py-3 px-3 font-medium border-b border-gray-100">{row.product}</td>
                    <td className="py-3 px-3 text-right border-b border-gray-100">
                      {row.product === "Service Projects" ? "4L" : "-"}
                    </td>
                    <td className="py-3 px-3 text-right border-b border-gray-100">{row.year2025}</td>
                    <td className="py-3 px-3 text-right border-b border-gray-100">{row.year2026}</td>
                    <td className="py-3 px-3 text-right border-b border-gray-100">
                      {row.product === "APIGen" ? "80L" : 
                       row.product === "Service Projects" ? "95L" :
                       row.product === "Knowledge Quest" ? "20L" : "5L"}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-forest/10 to-navy/15 font-semibold">
                  <td className="py-3 px-3 rounded-bl-md">Total</td>
                  <td className="py-3 px-3 text-right">₹4L</td>
                  <td className="py-3 px-3 text-right">₹20.5L</td>
                  <td className="py-3 px-3 text-right">₹70L</td>
                  <td className="py-3 px-3 text-right rounded-br-md">₹2Cr</td>
                </tr>
              </tbody>
            </table>
          
            {/* Bar Chart Visualization */}
            <div className="pt-2">
              <BarChart data={barChartData} />
            </div>
            
            <div className="mt-4 bg-sky/10 p-3 rounded-md text-sm text-navy">
              <p className="mb-2"><span className="font-medium">Note:</span> Knowledge Quest and Photogenic will start generating revenue from 2027, with initial focus on product development in 2026.</p>
              
              <div className="border-t border-navy/20 mt-2 pt-2">
                <p className="flex items-center font-medium text-forest">
                  <i className="fas fa-globe-americas mr-2"></i> US Software Company Targets
                </p>
                <p className="mt-1">APIGen demos will be targeted at US-based software companies like Adobe, Atlassian, and Microsoft for early adoption and strategic partnership opportunities. This approach will accelerate global market penetration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PageFooter pageNumber={4} pageName="Business Model" />
    </PrintLayout>
  );
};

export default BusinessModelPage;
