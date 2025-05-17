import React from 'react';
import PrintLayout from '../components/PrintLayout';
import PageFooter from '../components/PageFooter';
import soilSoftLogo from '@assets/Logo_final copy.png';

const FutureProductsPage: React.FC = () => {
  const products = [
    {
      name: "HomeTown",
      releaseDate: "Nov 2025",
      icon: "home",
      description: "All-in-one platform for food, services, event bookings, and local shopping.",
      problem: "Tier 2 & 3 cities lack integrated digital platforms for local services and businesses",
      marketValue: "Local service platform market: $15B+ in India by 2027",
      solution: "Hyperlocal aggregator with curated vendors and service providers",
      features: [
        { icon: "lightbulb", text: "Subscription model for local vendors" },
        { icon: "map-marker-alt", text: "Focus: Tier 2 & 3 cities" },
        { icon: "store", text: "Local business digital transformation" }
      ]
    },
    {
      name: "Knowledge Quest",
      releaseDate: "2026",
      icon: "book",
      description: "Affordable research-based learning from STEM to higher education.",
      problem: "Quality education is unaffordable for millions of students in semi-urban and rural India",
      marketValue: "EdTech market in India: $10.4B by 2025, 40% CAGR",
      solution: "OTT model for education at fraction of traditional course costs",
      features: [
        { icon: "chart-line", text: "₹3,000/year" },
        { icon: "user-graduate", text: "Target: Students from semi-urban & rural India" },
        { icon: "language", text: "Multi-language content support" }
      ]
    },
    {
      name: "StyleWear",
      releaseDate: "2026",
      icon: "tshirt",
      description: "AI-powered app for personalized style suggestions, wardrobe planner, and eCom integration.",
      problem: "Fashion choices are overwhelming, leading to decision fatigue and unnecessary purchases",
      marketValue: "Fashion tech market: $50B globally by 2026",
      solution: "AI-driven personalization with wardrobe management and sustainability focus",
      features: [
        { icon: "shopping-bag", text: "Freemium + commission-based revenue" },
        { icon: "brain", text: "AI-powered styling algorithms" },
        { icon: "recycle", text: "Sustainable fashion focus" }
      ]
    },
    {
      name: "Photogenic",
      releaseDate: "May 2027",
      icon: "camera",
      description: "Not an editor – a service aggregator like Swiggy for photographers + editors.",
      problem: "Professional photography services are fragmented and lack standardized booking systems",
      marketValue: "Photography services market in India: $3B+ annually",
      solution: "On-demand platform connecting clients with verified photographers and editors",
      features: [
        { icon: "bullseye", text: "Vision: 1,000+ creative professionals under one digital brand" },
        { icon: "camera-retro", text: "Book weddings, events, editor packages on-demand" },
        { icon: "money-bill-wave", text: "Monetization: Commission on bookings + premium features" }
      ]
    }
  ];

  return (
    <PrintLayout>
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <img src={soilSoftLogo} alt="Soil Soft Technologies Logo" className="h-12" />
          <h1 className="text-xl font-montserrat font-bold text-navy">FUTURE PRODUCTS</h1>
        </div>
        <div className="flex justify-center mt-4">
          <div className="bg-navy inline-block px-4 py-2 rounded-full shadow-md">
            <p className="text-lg font-poppins font-semibold text-white tracking-wider">
              DIVERSIFIED TECH PORTFOLIO
              <span className="ml-1.5 text-sky">•</span>
              <span className="ml-1 text-forest">•</span>
              <span className="ml-1 text-sky">•</span>
            </p>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-5 mb-4">
        {products.map((product, index) => (
          <div key={index} className="bg-softgrey rounded-lg overflow-hidden">
            <div className="bg-navy text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-full bg-white text-navy p-4 mr-2">
                  <i className={`fas fa-${product.icon} text-sm`}></i>
                </div>
                <h2 className="text-lg font-poppins font-semibold">{product.name}</h2>
              </div>
              <div className="bg-white text-navy font-medium text-xs px-2 py-1 rounded-full shadow-sm flex items-center">
                <i className="fas fa-calendar-alt text-forest mr-1 text-md"></i>
                <span>{product.releaseDate}</span>
              </div>
            </div>
            <div className="p-3">
              <p className="mb-2 text-md">{product.description}</p>
              
              <div className="mb-2">
                <div className="flex items-start mb-1">
                  <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-1.5 text-md"></i>
                  <h4 className="font-medium text-sm">Problem:</h4>
                </div>
                <p className="text-xs ml-5">{product.problem}</p>
              </div>
              
              <div className="mb-2">
                <div className="flex items-start mb-1">
                  <i className="fas fa-chart-line text-navy mt-1 mr-1.5 text-md"></i>
                  <h4 className="font-medium text-sm">Market Value:</h4>
                </div>
                <p className="text-xs ml-5">{product.marketValue}</p>
              </div>
              
              <div className="mb-2">
                <div className="flex items-start mb-1">
                  <i className="fas fa-lightbulb text-forest mt-1 mr-1.5 text-md"></i>
                  <h4 className="font-medium text-sm">Solution:</h4>
                </div>
                <p className="text-sm ml-5">{product.solution}</p>
              </div>
              
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className={`fas fa-${feature.icon} text-forest mr-1.5 mt-1 text-md`}></i>
                    <p className="text-xs">{feature.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <PageFooter pageNumber={3} pageName="Future Products" />
    </PrintLayout>
  );
};

export default FutureProductsPage;
