import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';

const FutureProductsPage2: React.FC = () => {
  const strategies = [
    { 
      icon: "chart-pie", 
      title: "Market Penetration", 
      description: "Targeting underserved Tier 2 & 3 cities with localized solutions"
    },
    { 
      icon: "handshake", 
      title: "Strategic Partnerships", 
      description: "Collaborating with local businesses and educational institutions"
    },
    { 
      icon: "bullhorn", 
      title: "Go-to-Market", 
      description: "Phased rollout starting with APIGen followed by platform solutions"
    }
  ];

  return (
    <PrintLayout>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-12" />
          <h1 className="text-xl font-montserrat font-bold text-navy">FUTURE PRODUCTS</h1>
        </div>
      </header>

      {/* Market Strategy Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-montserrat font-bold text-navy mb-6">MARKET STRATEGY</h2>
        <div className="grid grid-cols-3 gap-5">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white border border-softgrey rounded-lg p-5">
              <div className="rounded-full bg-navy text-white p-4 mx-auto mb-4 w-14 h-14 flex items-center justify-center">
                <i className={`fas fa-${strategy.icon} text-xl`}></i>
              </div>
              <h3 className="font-poppins font-semibold text-center mb-3 text-lg">{strategy.title}</h3>
              <p className="text-base text-center">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-sky/90 to-forest/90 rounded-lg p-4 mb-6 shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-navy px-8 py-3 rounded-full">
            <h2 className="text-2xl font-montserrat font-bold text-white">OUR INNOVATION APPROACH</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-navy w-14 h-14 flex items-center justify-center mr-4 shadow-md">
                <i className="fas fa-rocket text-2xl text-white"></i>
              </div>
              <h3 className="font-poppins font-semibold text-navy text-xl">
                Technology First
              </h3>
            </div>
            <p className="mb-8 text-base border-l-4 border-forest pl-4">
              Each product leverages cutting-edge technology including AI, cloud infrastructure, and data analytics to provide unique solutions.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-navy w-14 h-14 flex items-center justify-center mr-4 shadow-md">
                <i className="fas fa-users text-2xl text-white"></i>
              </div>
              <h3 className="font-poppins font-semibold text-navy text-xl">
                Local Talent
              </h3>
            </div>
            <p className="text-base border-l-4 border-forest pl-4">
              Development driven by local engineering talent from Andhra Pradesh, creating jobs and fostering regional tech ecosystem.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-5 shadow-md">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-forest w-14 h-14 flex items-center justify-center mr-4 shadow-md">
                <i className="fas fa-money-bill-wave text-2xl text-white"></i>
              </div>
              <h3 className="font-poppins font-semibold text-navy text-xl">
                Affordable Pricing
              </h3>
            </div>
            <p className="mb-8 text-base border-l-4 border-sky pl-4">
              Products designed with India-specific pricing strategies to ensure accessibility across economic segments.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-forest w-14 h-14 flex items-center justify-center mr-4 shadow-md">
                <i className="fas fa-globe-asia text-2xl text-white"></i>
              </div>
              <h3 className="font-poppins font-semibold text-navy text-xl">
                Global Standards
              </h3>
            </div>
            <p className="text-base border-l-4 border-sky pl-4">
              Building with global quality standards while addressing uniquely Indian market challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
      
      <PageFooter pageNumber={4} pageName="Future Products (cont.)" />
    </PrintLayout>
  );
};

export default FutureProductsPage2;
