import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';

const FoundersPage: React.FC = () => {
  const founders = [
    {
      name: "Vamsi Krishna Nekkanti",
      role: "Founder & CEO",
      image: "/assets/vamsi_krishna.png",
      background: "15+ years of experience with top tech companies including ValueLabs, Pramati, CA Technologies, and Cognizant (Clients: Microsoft, Adobe, LinkedIn, AVEVA). Expert problem solver with technical expertise in full-stack development.",
      education: "MCA - 2010",
      achievements: "Led multiple enterprise-level projects delivering critical business solutions"
    },
    {
      name: "Shanmukhee Prasanna",
      role: "Co-Founder",
      image: "/assets/shanmukhee_prasanna.png",
      background: "8+ years of experience in Finance and Banking. Currently working as Manager at HDFC Bank, Ponnur branch.",
      education: "B.Com, IPCC and MHR",
      achievements: "Successfully managed financial operations and established strong relationships with key clients and stakeholders"
    }
  ];

  return (
    <PrintLayout>
      <header className="mb-8">
        <div className="border-b border-softgrey pb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-20" />
              <h2 className="text-lg font-montserrat font-semibold mt-2 px-3 py-1 bg-gradient-to-r from-navy/10 to-sky/10 border-l-4 border-navy inline-block">
                <span className="text-navy">Innovate Boldly <span className="mx-1 text-navy/40 font-light">|</span> Implement Brilliantly</span>
              </h2>
            </div>
            <div className="text-right text-sm">
              <p className="mb-1"><span className="font-semibold text-navy">CIN:</span> U62099AP2024PTC113617</p>
              <p className="mb-1"><span className="font-semibold text-navy">GSTN:</span> 37ABMCS5778H1ZK</p>
              <p className="mb-1"><span className="font-semibold text-navy">Address:</span></p>
              <p className="leading-snug">Vidya Nagar, Ponnuru,<br />Amaravathi, Guntur Dist,<br />Andhra Pradesh, India - 522124</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-montserrat font-bold text-navy">LEADERSHIP TEAM</h1>
        </div>
      </header>

      <div className="mb-10">
        <h2 className="text-xl font-montserrat font-bold text-navy mb-4 text-center">THE VISIONARIES BEHIND SOIL SOFT TECHNOLOGIES</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white border border-softgrey rounded-lg overflow-hidden shadow-md text-center">
              <div className="p-4">
                <div className="flex justify-center mb-6">
                  <div className="w-56 h-56 rounded-full p-2 bg-gradient-to-r from-navy via-forest to-sky shadow-xl flex items-center justify-center">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-52 h-52 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-montserrat font-bold text-navy">{founder.name}</h3>
                <p className="text-forest font-poppins font-medium mb-4">{founder.role}</p>
                
                <div className="text-left space-y-3 mt-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-navy">Background</h4>
                    <p className="text-sm">{founder.background}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-poppins font-semibold text-navy">Education</h4>
                    <p className="text-sm">{founder.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-poppins font-semibold text-navy">Key Achievements</h4>
                    <p className="text-sm">{founder.achievements}</p>
                  </div>
                  
                  {founder.name === "Vamsi Krishna Nekkanti" && (
                    <div className="mt-4 pt-4 border-t border-navy/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-poppins font-semibold text-navy flex items-center">
                            <i className="fab fa-linkedin text-blue-600 mr-2"></i> LinkedIn Profile
                          </h4>
                          <a 
                            href="https://www.linkedin.com/in/vamsikrishquest/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            linkedin.com/in/vamsikrishquest
                          </a>
                        </div>
                        <div className="w-20 h-20">
                          <img 
                            src="/images/linkedin-qr.png" 
                            alt="LinkedIn QR Code" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageFooter pageNumber={6} pageName="Leadership Team" />
    </PrintLayout>
  );
};

export default FoundersPage;