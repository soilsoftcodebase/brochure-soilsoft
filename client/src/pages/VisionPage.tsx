import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';

const VisionPage: React.FC = () => {
  return (
    <PrintLayout>
      <header className="mb-12">
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

        <div className="flex items-center justify-between mt-4">
          <h1 className="text-3xl font-montserrat font-bold text-navy">VISION & VALUES</h1>
        </div>
      </header>

      {/* Vision & Values Section */}
      <div className="bg-softgrey rounded-lg p-6 mb-6 shadow-md">
        <h2 className="text-3xl font-montserrat font-bold text-navy mb-8 text-center">OUR VISION & VALUES</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="bg-white p-7 rounded-lg border-2 border-navy">
              <div className="flex items-center mb-5">
                <div className="rounded-full bg-navy p-4 mr-4">
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold text-2xl">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">To empower employment in towns, deliver world-class products, and solve complex problems both in India and globally, creating significant impact through technological innovation.</p>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-7 rounded-lg border-2 border-forest">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-forest p-4 mr-4">
                  <i className="fas fa-handshake text-white text-2xl"></i>
                </div>
                <h3 className="font-poppins font-semibold text-2xl">Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">Develop innovative technology solutions that address global challenges while creating meaningful job opportunities in smaller towns and cities, establishing a new model for distributed tech excellence.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[
            { icon: "lightbulb", title: "Innovation", text: "Creating cutting-edge solutions and embracing new technologies" },
            { icon: "medal", title: "Excellence", text: "Committed to the highest standards of quality and professionalism" },
            { icon: "users", title: "Community", text: "Building a supportive tech ecosystem in Tier-2 and Tier-3 cities" }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center">
              <div className="rounded-full bg-sky inline-block p-4 mb-4">
                <i className={`fas fa-${value.icon} text-navy text-2xl`}></i>
              </div>
              <h3 className="font-poppins font-semibold mb-3 text-xl">{value.title}</h3>
              <p className="text-base">{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      <PageFooter pageNumber={7} pageName="Vision & Values" />
    </PrintLayout>
  );
};

export default VisionPage;
