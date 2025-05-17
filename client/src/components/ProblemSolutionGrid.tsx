import React from 'react';

interface ProblemSolutionGridProps {
  problems: string[];
  solutions: string[];
}

const ProblemSolutionGrid: React.FC<ProblemSolutionGridProps> = ({ problems, solutions }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-softgrey rounded-lg p-4">
        <div className="flex items-center mb-2">
          <div className="rounded-full bg-red-500 text-white p-2 mr-2">
            <i className="fas fa-times"></i>
          </div>
          <h3 className="font-poppins font-medium">PROBLEM</h3>
        </div>
        <ul className="space-y-3">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-circle text-xs text-red-500 mt-1.5 mr-2"></i>
              <p>{problem}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-softgrey rounded-lg p-4">
        <div className="flex items-center mb-2">
          <div className="rounded-full bg-forest text-white p-2 mr-2">
            <i className="fas fa-check"></i>
          </div>
          <h3 className="font-poppins font-medium">OUR SOLUTION</h3>
        </div>
        <ul className="space-y-3">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-circle text-xs text-forest mt-1.5 mr-2"></i>
              <p>{solution}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProblemSolutionGrid;
