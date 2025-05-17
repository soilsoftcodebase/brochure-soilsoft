import React from 'react';

interface PageFooterProps {
  pageNumber: number;
  pageName: string;
}

const PageFooter: React.FC<PageFooterProps> = ({ pageName }) => {
  return (
    <footer className="absolute bottom-3 left-0 right-0 flex justify-between items-center px-10 text-xs text-navy/70">
      <div>{pageName}</div>
      <div>Soil Soft Technologies Pvt. Ltd.</div>
    </footer>
  );
};

export default PageFooter;
