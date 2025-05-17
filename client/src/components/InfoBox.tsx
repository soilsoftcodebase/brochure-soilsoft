import React from 'react';

interface InfoBoxProps {
  icon: string;
  title: string;
  text: string;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, text, className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm flex items-start ${className}`}>
      <div className="rounded-full bg-forest text-white p-3 mr-4 flex-shrink-0">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>
        <h3 className="font-poppins font-medium">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoBox;
