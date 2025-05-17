import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';
import PieChart from '../components/PieChart';

const BusinessModelPage2: React.FC = () => {
    const monetizationData = [
    { product: "APIGen", model: "Enterprise SaaS", icon: "cloud", color: "navy" },
    { product: "HomeTown", model: "Vendor Subscription", icon: "home", color: "forest" },
    { product: "Knowledge Quest", model: "Direct Fee", icon: "book", color: "sky" },
    { product: "Photogenic", model: "Commission + Feature Packs", icon: "camera", color: "navy" },
    { product: "StyleWear", model: "Freemium + Affiliate Sales", icon: "tshirt", color: "forest" }
  ];

  const fundsData = [
    { category: "Product Development", percentage: 40, color: "navy" },
    { category: "Marketing & Branding", percentage: 30, color: "forest" },
    { category: "Infra & Scalability", percentage: 20, color: "sky" },
    { category: "Operations & Compliance", percentage: 10, color: "gray-400" }
  ];
  
    return (
    <PrintLayout>
      <header className="mb-2">
        <div className="flex justify-between items-center">
          <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-14" />
          <h1 className="text-2xl font-montserrat font-bold text-navy">BUSINESS MODEL</h1>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Monetization Summary */}
        <div>
          <h2 className="text-lg font-montserrat font-bold text-navy mb-2">MONETIZATION SUMMARY</h2>
          
          <ul className="space-y-2 bg-softgrey rounded-lg p-3">
            {monetizationData.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className={`rounded-full bg-${item.color} text-white p-1.5 mr-2`}>
                  <i className={`fas fa-${item.icon} text-sm`}></i>
                </div>
                <p className="text-sm"><span className="font-medium">{item.product}</span> → {item.model}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Use of Funds */}
        <div>
          <h2 className="text-lg font-montserrat font-bold text-navy mb-2">USE OF FUNDS</h2>
          
          <div className="bg-softgrey rounded-lg p-3">
            {/* Pie Chart Visualization */}
            <PieChart data={fundsData} />
            
            <ul className="space-y-1.5">
              {fundsData.map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className={`w-3 h-3 bg-${item.color} mr-2`}></div>
                  <p>{item.percentage}% – {item.category}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Investment Ask */}
      <div className="bg-gradient-to-r from-navy to-forest text-black rounded-lg p-2 mb-2 shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-montserrat font-bold flex items-center">
            <i className="fas fa-money-bill-wave mr-2"></i>
            SOIL SOFT ASK
          </h2>
          <div className="bg-white/20 px-2 py-0.5 rounded-md text-xs">
            May 2025
          </div>
        </div>
        
        <div className="bg-white text-navy rounded-lg p-3 mb-2 shadow-sm">
          <h3 className="font-poppins text-navy border-b border-navy/20 pb-1.5 mb-2 text-base">Investment Request</h3>
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-xl font-poppins font-bold text-navy">₹1 Crore</p>
              <p className="text-xs text-gray-500">10 Million INR</p>
            </div>
            <div className="bg-forest px-2 py-1 rounded-full text-white font-medium shadow-sm text-sm">
              <i className="fas fa-chart-line mr-1"></i> High ROI Potential
            </div>
          </div>
          
          <div className="flex bg-navy/5 p-2 rounded-lg mb-2 border-l-4 border-navy">
            <div className="border-l border-navy/20 pl-3">
              <p className="font-semibold text-navy text-sm">₹4 Crore</p>
              <p className="text-xs text-navy/70">Pre-money Valuation</p>
            </div>
          </div>
          
          <p className="font-medium text-sm">To accelerate growth, build AI product development, recruit top talent, and establish market leadership in targeted segments.</p>
          
          <div className="mt-2 bg-white/90 rounded-lg p-2 border border-forest/30">
            <h4 className="font-poppins text-navy font-medium flex items-center mb-1 text-sm">
              <i className="fas fa-hands-helping text-forest mr-2"></i> Funding Support
            </h4>
            <p className="text-xs text-navy">We're seeking strategic partners who can provide not just capital, but also access to networks, mentorship, and market opportunities. Angel investors and early-stage VCs who align with our vision are ideal partners.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="bg-white/90 rounded-lg p-3 border border-navy/30">
            <h3 className="font-poppins font-medium mb-2 flex items-center text-navy text-sm">
              <i className="fas fa-flask mr-2 text-forest"></i> R&D Priorities
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-forest mt-0.5 mr-1.5"></i>
                <span className="text-navy">AI-Driven Product Development (APIGen)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-forest mt-0.5 mr-1.5"></i>
                <span className="text-navy">AI Server Setup & Infrastructure (₹15-20 Lakhs)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-forest mt-0.5 mr-1.5"></i>
                <span className="text-navy">ML/AI Research Team Expansion</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/90 rounded-lg p-3 border border-navy/30">
            <h3 className="font-poppins font-medium mb-2 flex items-center text-navy text-sm">
              <i className="fas fa-users mr-2 text-forest"></i> Team Building
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-forest mt-0.5 mr-1.5"></i>
                <span className="text-navy">Recruiting Senior Tech Leadership</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-forest mt-0.5 mr-1.5"></i>
                <span className="text-navy">Marketing & Sales Team Formation</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-forest mt-0.5 mr-1.5"></i>
                <span className="text-navy">Product Engineering Talent from Towns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-softgrey rounded-lg p-4">
        <h2 className="text-lg font-montserrat font-bold text-navy mb-2 flex items-center">
          <i className="fas fa-id-card mr-2"></i>
          CONTACT US
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {[
            { icon: "phone", text: "+91 79899 79264" },
            { icon: "envelope", text: "connect@soilsoft.ai" },
            { icon: "globe", text: "www.soilsoft.ai" }
          ].map((contact, index) => (
            <div key={index} className="flex items-center">
              <div className="rounded-full bg-navy text-white p-2 mr-2">
                <i className={`fas fa-${contact.icon} text-sm`}></i>
              </div>
              <p className="text-sm">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>

      <PageFooter pageNumber={5} pageName="Business Model" />
    </PrintLayout>
  );
};

export default BusinessModelPage2;
