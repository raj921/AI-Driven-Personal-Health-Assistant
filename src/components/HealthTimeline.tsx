import React from 'react';
import { HealthData } from '../types';
import { Calendar } from 'lucide-react';

interface HealthTimelineProps {
  healthData: HealthData;
}

const HealthTimeline: React.FC<HealthTimelineProps> = ({ healthData }) => {
  const timelineItems = [
    { title: 'Meal', data: healthData.meals[0] },
    { title: 'Exercise', data: healthData.exercise[0] },
    { title: 'Sleep', data: `${healthData.sleep} hours` },
    { title: 'Water Intake', data: `${healthData.waterIntake} ml` },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Calendar className="w-6 h-6 mr-2 text-blue-500" />
        Health Timeline
      </h2>
      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-blue-500 rounded-full w-3 h-3 mt-2 mr-4"></div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-600">{item.data || 'No data logged'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTimeline;