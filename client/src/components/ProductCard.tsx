import React from 'react';

interface Feature {
  icon: string;
  text: string;
}

interface ProductCardProps {
  name: string;
  icon: string;
  description: string;
  features: Feature[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, icon, description, features }) => {
  return (
    <div className="bg-softgrey rounded-lg overflow-hidden shadow-sm">
      <div className="bg-navy text-white p-4 flex items-center">
        <div className="rounded-full bg-white text-navy p-3 mr-3">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <h2 className="text-xl font-poppins font-semibold">{name}</h2>
      </div>
      <div className="p-6">
        <p className="mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <i className={`fas fa-${feature.icon} text-forest mr-2 mt-1`}></i>
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
