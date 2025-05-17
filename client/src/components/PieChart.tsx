import React from 'react';

interface PieChartItem {
  category: string;
  percentage: number;
  color: string;
}

interface PieChartProps {
  data: PieChartItem[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  // SVG-based pie chart
  const size = 200;
  const center = size / 2;
  const radius = size / 2 - 10;
  
  // Calculate each slice
  let startAngle = 0;
  const slices = data.map((item, index) => {
    const angle = (item.percentage / 100) * 360;
    const endAngle = startAngle + angle;
    
    // Calculate SVG arc path
    const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
    
    // Large arc flag is 1 if angle > 180 degrees
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    // Create path
    const path = `
      M ${center},${center}
      L ${x1},${y1}
      A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}
      Z
    `;
    
    // Store the current end angle as the start angle for the next slice
    startAngle = endAngle;
    
    let colorClass = '';
    if (item.color === 'navy') colorClass = '#0A2342';
    else if (item.color === 'forest') colorClass = '#2E8B57';
    else if (item.color === 'sky') colorClass = '#A6E3E9';
    else if (item.color === 'gray-400') colorClass = '#CBD5E0';
    
    return { path, color: colorClass };
  });
  
  return (
    <div className="flex justify-center mb-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((slice, index) => (
          <path key={index} d={slice.path} fill={slice.color} />
        ))}
        {/* Add a small white circle in the center for a donut chart effect */}
        <circle cx={center} cy={center} r={radius / 2.5} fill="white" />
      </svg>
    </div>
  );
};

export default PieChart;
