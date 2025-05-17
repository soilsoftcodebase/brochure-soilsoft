import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';

const FlagshipProductPage2: React.FC = () => {
  return (
    <PrintLayout>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-14" />
          <h1 className="text-2xl font-montserrat font-bold text-navy">FLAGSHIP PRODUCT</h1>
        </div>
      </header>
      
      {/* Key Features Section */}
      <div className="mb-20">
        <h2 className="text-xl font-montserrat font-bold text-navy mb-8">KEY FEATURES</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          {[
            { icon: "robot", title: "AI-Powered Test Generation", description: "Automatically creates test cases based on API specifications" },
            { icon: "shield-alt", title: "Security Testing", description: "Identifies vulnerabilities using OWASP standards" },
            { icon: "tachometer-alt", title: "Performance Analytics", description: "Real-time metrics and load testing capabilities" },
            { icon: "sitemap", title: "End-to-End Testing", description: "Tests complete API workflows and dependencies" }
          ].map((feature, index) => (
            <div key={index} className="bg-white border border-softgrey rounded-lg p-4 flex items-start">
              <div className="rounded-full bg-forest text-white p-3 mr-3 flex-shrink-0">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-lg">{feature.title}</h3>
                <p className="text-md">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Model */}
      <div className="mb-20">
        <h2 className="text-2xl font-montserrat font-bold text-navy mb-8">PRICING & PLANS</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {/* Free Beta Plan */}
          <div className="bg-sky bg-opacity-20 rounded-lg overflow-hidden border border-sky">
            <div className="bg-sky bg-opacity-50 p-6 text-center">
              <h3 className="font-poppins font-semibold">Free Beta</h3>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-sm text-gray-600"> / 7 days</span>
                <p className="text-sm mt-1">1 user - 1 project</p>
              </div>
              
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Swagger / OpenAPI / Postman Import</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Auto Test Case Generation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Performance Testing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Auto Bug Analyzer (AI-powered)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Limited Executions</span>
                </li>
              </ul>
              
              <p className="text-xs text-center text-gray-500 italic">Perfect for individuals exploring API automation.</p>
            </div>
          </div>
          
          {/* SaaS Plan */}
          <div className="bg-white rounded-lg overflow-hidden border border-navy relative">
            <div className="bg-navy text-white p-6 text-center">
              <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-2 py-1 rounded-bl">Popular Choice</span>
              <h3 className="font-poppins font-semibold">SaaS Beta Plan</h3>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">$12</span>
                <span className="text-sm text-gray-600"> / user / month</span>
                <p className="text-sm mt-1">5 projects per user</p>
              </div>
              
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Everything in Free, plus:</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Unlimited Executions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Retry Failed Tests</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Export Results (PDF, Excel)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Basic CI/CD Integration</span>
                </li>
              </ul>
              
              <p className="text-xs text-center text-gray-500 italic">Designed for growing teams and testers.</p>
            </div>
          </div>
          
          {/* On-Premise Plan */}
          <div className="bg-purple-100 rounded-lg overflow-hidden border border-purple-300">
            <div className="bg-purple-200 p-6 text-center">
              <h3 className="font-poppins font-semibold">On-Premise Beta</h3>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-sm text-gray-600"> / 7 days</span>
                <p className="text-sm mt-1">then $25 / user / month</p>
                <p className="text-xs mt-1">Self-hosted - Min 5 users</p>
              </div>
              
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Everything in SaaS, plus:</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Air-Gapped & Firewall Environments</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Dockerized & CLI Setup</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Custom Plugin & Internal Repo Support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-forest mr-2 mt-2"></i>
                  <span>Full Data Ownership</span>
                </li>
              </ul>
              
              <p className="text-xs text-center text-gray-500 italic">Ideal for enterprises & secure environments.</p>
            </div>
          </div>
        </div>
      </div>
      
      <PageFooter pageNumber={3} pageName="Flagship Product - APIGen (cont.)" />
    </PrintLayout>
  );
};

export default FlagshipProductPage2;

