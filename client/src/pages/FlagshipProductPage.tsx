import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';
import apiGenLogo from '@assets/APIGen logo.png';

const FlagshipProductPage: React.FC = () => {
  const marketData = [
    { name: "API Testing Market (2023)", value: "$1.5B", percentage: 60 },
    { name: "API Testing Market by 2032", value: "$12B", percentage: 95 },
    { name: "Performance Testing (2024)", value: "$1.2B", percentage: 45 },
    { name: "Performance Testing by 2033", value: "$8.5B", percentage: 85 }
  ];

  return (
    <PrintLayout>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-14" />
          <h1 className="text-2xl font-montserrat font-bold text-navy">FLAGSHIP PRODUCT</h1>
        </div>
      </header>

      {/* APIGen Banner */}
      <div className="bg-white border border-navy rounded-lg p-6 mb-4 flex justify-between items-center">
        <div>
          <img src={apiGenLogo} alt="APIGen Logo" className="h-16 mb-3" />
          <h2 className="text-xl font-poppins font-semibold text-navy">Next-Gen API Testing Platform</h2>
          <p className="text-forest">AI-powered, enterprise-grade, saves 60% of QA cost</p>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <div className="text-center">
            <div className="bg-white p-2 rounded-lg shadow-md border border-navy/20 mb-1">
              <img 
                src="/images/youtube-qr.png" 
                alt="Product Demo Video QR Code" 
                className="h-24 w-24 object-contain" 
              />
            </div>
            <p className="text-xs text-navy/70">Demo Video</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-2 rounded-lg shadow-md border border-navy/20 mb-1">
              <img 
                src="/images/apigen-website-qr.png" 
                alt="APIGen Website QR Code" 
                className="h-24 w-24 object-contain" 
              />
            </div>
            <p className="text-xs text-navy/70">apigen.soilsoft.ai</p>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="mb-4">
        <h2 className="text-xl font-montserrat font-bold text-navy mb-4">PROBLEM STATEMENT</h2>
        <div className="bg-softgrey rounded-lg p-6">
          <p className="mb-4">
            <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
            Modern enterprises struggle with API testing fragmentation, using multiple tools for different aspects of testing - security, performance, functional, and integration testing.
          </p>
          <p className="mb-4">
            <i className="fas fa-money-bill-wave text-red-500 mr-2"></i>
            This fragmentation leads to higher costs, longer testing cycles, reduced test coverage, and inconsistent quality across different API components.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="font-poppins font-semibold text-red-500 mb-2">Key Challenges:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                  <span>Multiple tools for testing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                  <span>Expensive QA process</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                  <span>No AI-driven test planning</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                  <span>Security & Performance not combined</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold text-forest mb-2">Our Solution:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-forest mt-1 mr-2"></i>
                  <span>One unified platform</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-forest mt-1 mr-2"></i>
                  <span>Saves 60% with automation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-forest mt-1 mr-2"></i>
                  <span>Built-in AI for test coverage</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-forest mt-1 mr-2"></i>
                  <span>Full-stack coverage in one place</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Market Snapshot */}
      <div className="mb-2">
        <h2 className="text-xl font-montserrat font-bold text-navy mb-4">MARKET VALUE</h2>
        
        <div className="bg-softgrey rounded-lg p-6">
          {marketData.map((item, index) => (
            <div key={index} className={`mb-${index < marketData.length - 1 ? '4' : '0'}`}>
              <div className="flex justify-between items-center mb-2">
                <p className="font-poppins">{item.name}</p>
                <p className="font-poppins font-semibold">{item.value}</p>
              </div>
              <div className="w-full bg-white rounded-full h-6">
                <div 
                  className={`${index % 2 === 0 ? 'bg-navy' : 'bg-forest'} h-6 rounded-full`} 
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <PageFooter pageNumber={2} pageName="Flagship Product - APIGen" />
    </PrintLayout>
  );
};

export default FlagshipProductPage;
