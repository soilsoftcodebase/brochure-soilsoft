import React from 'react';
import CompanyProfilePage from './CompanyProfilePage';
import FlagshipProductPage from './FlagshipProductPage';
import FlagshipProductPage2 from './FlagshipProductPage2';
import FutureProductsPage from './FutureProductsPage';
import FutureProductsPage2 from './FutureProductsPage2';
import BusinessModelPage from './BusinessModelPage';
import BusinessModelPage2 from './BusinessModelPage2';
import FoundersPage from './FoundersPage';
import VisionPage from './VisionPage';

const PrintAll: React.FC = () => {
  React.useEffect(() => {
    // Auto-trigger print when the page loads
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="no-print fixed top-0 left-0 right-0 bg-navy text-white p-4 z-50 text-center">
        <p>Preparing all pages for printing...</p>
      </div>
      <CompanyProfilePage />
      <FlagshipProductPage />
      <FlagshipProductPage2 />
      <FutureProductsPage />
      <FutureProductsPage2 />
      <BusinessModelPage />
      <BusinessModelPage2 />
      <FoundersPage />
      <VisionPage />
    </div>
  );
};

export default PrintAll;
