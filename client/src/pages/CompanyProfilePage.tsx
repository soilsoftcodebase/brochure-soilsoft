import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import CompanyBadge from '../components/CompanyBadge';
import InfoBox from '../components/InfoBox';
import TimelineItem from '../components/TimelineItem';
import soilSoftLogo from '@assets/Logo_final copy.png';
import headlineImg from '@assets/headline.png';
import yCombinatorLogo from '@assets/y_combinator_logo.png';

const CompanyProfilePage: React.FC = () => {
  return (
    <PrintLayout>
      <header className="mb-6">
        {/* Company Header with Logo, Tagline, CIN, GST and Address */}
        <div className="border-b border-softgrey pb-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-start gap-5">
              <div>
                <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-20" />
                <h2 className="text-lg font-montserrat font-semibold mt-2 px-3 py-1 bg-gradient-to-r from-navy/10 to-sky/10 border-l-4 border-navy inline-block">
                  <span className="text-navy">Innovate Boldly <span className="mx-1 text-navy/40 font-light">|</span> Implement Brilliantly</span>
                </h2>
              </div>
              <div className="text-center">
                <div className="bg-white p-2 rounded-lg shadow-md border border-forest/30">
                  <img 
                    src="/images/soilsoft-website-qr.png" 
                    alt="SoilSoft Website QR Code" 
                    className="h-20 w-20 object-contain" 
                  />
                </div>
                <p className="text-xs text-navy/70 mt-1">soilsoft.ai</p>
              </div>
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
          <div>
            <h1 className="text-2xl font-montserrat font-bold text-navy">COMPANY PROFILE</h1>
            
            <div className="flex items-center gap-4 mt-2 text-md text-navy/80">
              <div className="flex items-center">
                <i className="fas fa-envelope text-forest mr-2"></i>
                <span>vamsikrishna.nekkanti@soilsoft.ai</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2 text-md text-navy/80">
              <div className="flex items-center">
                <i className="fas fa-phone text-forest mr-2"></i>
                <span>+91 96426 69333</span>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-lg p-2 shadow-sm">
            <img src={yCombinatorLogo} alt="Y Combinator Logo" className="h-10" />
            <span className="ml-2 font-medium text-sm">Applied for 2025 batch</span>
          </div>
        </div>
      </header>

      <div className="bg-softgrey rounded-lg p-4 mb-2">        
        {/* Startup Badges Row */}
        <div className="flex flex-wrap gap-2 mb-2">
          <CompanyBadge icon="check-circle" color="forest" text="Startup India" />
          <CompanyBadge icon="check-circle" color="forest" text="MSME Registered" />
          <CompanyBadge icon="check-circle" color="forest" text="Trademark Registered" />
          <CompanyBadge icon="sync" color="sky" text="DPIIT In Progress" />
          <CompanyBadge icon="brain" color="sky" text="Patent Filing in Progress" />
        </div>

        {/* About Section with icons */}
        <div className="grid grid-cols-2 gap-4 mb-2">
          <InfoBox icon="calendar-alt" title="Founded" text="Jan 22, 2024 (Ram Janmabhoomi Day)" />
          <InfoBox icon="map-marker-alt" title="Location" text="Ponnur, Guntur District, Andhra Pradesh" />
          <InfoBox icon="globe" title="Website" text="www.soilsoft.ai" />
          <InfoBox icon="users" title="Core Team" text="10 Full-Time Employees (All from AP)" />
          <InfoBox icon="user-graduate" title="Interns Trained" text="30+ | Currently Active: 5+" className="col-span-2" />
        </div>
      </div>

      {/* Timeline Milestones Section */}
      <div className="mb-2">
        <h2 className="text-lg font-montserrat font-bold text-navy mb-2">GROWTH MILESTONES</h2>
        
        <div className="relative flex flex-wrap justify-between">
          <TimelineItem 
            icon="tools" 
            date="Jan 2024" 
            text="Company Registered" 
            isLast={false} 
          />
          
          <TimelineItem 
            icon="flask" 
            date="Mar-Oct 2024" 
            text="Completed Angular Trading Testing Project" 
            isLast={false} 
          />
          
          <TimelineItem 
            icon="rocket" 
            date="April 2025" 
            text="Released APIGen BETA" 
            isLast={false} 
          />
          
          <TimelineItem 
            icon="building" 
            date="May 2025" 
            text="Started ERP Project for Manpower Supply Firm" 
            isLast={false} 
          />
          
          <TimelineItem 
            icon="handshake" 
            date="May 2025" 
            text="Partnered with CMRS (Pune) for SAAS for CA Firms" 
            isLast={true} 
          />
        </div>
      </div>
      
      {/* Team & Innovation Summary (Compact) */}
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="bg-white border border-softgrey rounded-lg p-3">
          <h3 className="font-poppins font-medium text-navy text-sm mb-1">Our Team</h3>
          <p className="text-xs">A dedicated team of 10 full-time professionals from Andhra Pradesh focused on building innovative solutions. Primarily engineers with expertise in AI and software development.</p>
        </div>
        
        <div className="bg-white border border-softgrey rounded-lg p-3">
          <h3 className="font-poppins font-medium text-navy text-sm mb-1">Our Innovation</h3>
          <p className="text-xs">Creating cutting-edge technology solutions that address real-world challenges with high standards of quality and security. Focus on AI-driven automation and enterprise solutions.</p>
        </div>
      </div>
      
      <PageFooter pageNumber={1} pageName="Company Profile" />
    </PrintLayout>
  );
};

export default CompanyProfilePage;
