import React from 'react';

interface PrintLayoutProps {
  children: React.ReactNode;
}

const PrintLayout: React.FC<PrintLayoutProps> = ({ children }) => {
  return (
    <div className="page bg-white print:shadow-none shadow-md my-20 print:my-0 print:p-0 max-w-[210mm] min-h-[297mm] mx-auto p-6 print:size-a4 print:size-portrait">
      {children}
    </div>
  );
};

export default PrintLayout;
