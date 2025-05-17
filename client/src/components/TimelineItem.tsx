import React from 'react';

interface TimelineItemProps {
  icon: string;
  date: string;
  text: string;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, date, text, isLast }) => {
  return (
    <div className={`timeline-item relative bg-softgrey rounded-lg p-2 w-[18%] flex flex-col items-center text-center ${isLast ? '' : 'after:content-[""]'}`}>
      <div className="rounded-full bg-navy text-white p-2 mb-1">
        <i className={`fas fa-${icon} text-xs`}></i>
      </div>
      <p className="font-medium text-navy text-xs">{date}</p>
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default TimelineItem;
