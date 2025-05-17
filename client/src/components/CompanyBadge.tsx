import React from 'react';

interface CompanyBadgeProps {
  icon: string;
  color: 'forest' | 'sky';
  text: string;
}

const CompanyBadge: React.FC<CompanyBadgeProps> = ({ icon, color, text }) => {
  return (
    <span className="bg-white rounded-full px-4 py-2 text-sm font-medium flex items-center">
      <i className={`fas fa-${icon} text-${color} mr-2`}></i> {text}
    </span>
  );
};

export default CompanyBadge;
