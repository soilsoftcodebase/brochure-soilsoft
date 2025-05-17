import React from 'react';

interface BarChartItem {
  year: string;
  apiGen: number;
  otherProducts: number;
  total: string;
}

interface BarChartProps {
  data: BarChartItem[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Calculate the maximum height
  const maxValue = Math.max(...data.map(item => item.apiGen + item.otherProducts));
  
  return (
    <div>
      <div className="flex items-end h-48 mt-4 space-x-12 px-8 justify-center">
        {data.map((item, index) => {
          const apiGenHeight = (item.apiGen / maxValue) * 150;
          const otherProductsHeight = (item.otherProducts / maxValue) * 150;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-16 bg-navy rounded-t-lg" 
                style={{ height: `${apiGenHeight}px` }}
              ></div>
              <div 
                className="w-16 bg-forest rounded-b-lg" 
                style={{ height: `${otherProductsHeight}px` }}
              ></div>
              <p className="mt-2 text-center text-sm font-medium">{item.year}</p>
              <p className="text-center text-sm">{item.total}</p>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-navy mr-2"></div>
          <span className="text-sm">APIGen</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-forest mr-2"></div>
          <span className="text-sm">Other Products</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
