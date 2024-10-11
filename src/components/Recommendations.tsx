import React from 'react';
import { HealthData } from '../types';

interface RecommendationsProps {
  healthData: HealthData;
}

const Recommendations: React.FC<RecommendationsProps> = ({ healthData }) => {
  // This is a placeholder for AI-generated recommendations
  // In a real application, this would call an API to get personalized recommendations
  const getRecommendations = () => {
    const recommendations = [];
    if (healthData.sleep < 7) {
      recommendations.push("Try to get at least 7 hours of sleep for better health.");
    }
    if (healthData.waterIntake < 2000) {
      recommendations.push("Aim to drink at least 2000ml of water per day.");
    }
    if (healthData.steps < 10000) {
      recommendations.push("Try to reach 10,000 steps a day for improved fitness.");
    }
    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
      {recommendations.length > 0 ? (
        <ul className="list-disc pl-5">
          {recommendations.map((rec, index) => (
            <li key={index} className="mb-2">{rec}</li>
          ))}
        </ul>
      ) : (
        <p>Great job! Keep up your healthy habits.</p>
      )}
    </div>
  );
};

export default Recommendations;