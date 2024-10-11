import React from 'react';
import { Activity, Droplet, Heart, Moon, Target } from 'lucide-react';
import { HealthData, Goal } from '../types';
import ProgressRing from './ProgressRing';

interface DashboardProps {
  healthData: HealthData;
  goals: Goal[];
}

const Dashboard: React.FC<DashboardProps> = ({ healthData, goals }) => {
  const calculateProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Health Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-2" />
              <h3 className="text-lg font-semibold">Heart Rate</h3>
            </div>
            <ProgressRing progress={calculateProgress(healthData.heartRate, 100)} size={60} strokeWidth={6} />
          </div>
          <p className="text-2xl font-bold">{healthData.heartRate} BPM</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Activity className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold">Steps</h3>
            </div>
            <ProgressRing progress={calculateProgress(healthData.steps, 10000)} size={60} strokeWidth={6} />
          </div>
          <p className="text-2xl font-bold">{healthData.steps}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Moon className="w-6 h-6 text-indigo-500 mr-2" />
              <h3 className="text-lg font-semibold">Sleep</h3>
            </div>
            <ProgressRing progress={calculateProgress(healthData.sleep, 8)} size={60} strokeWidth={6} />
          </div>
          <p className="text-2xl font-bold">{healthData.sleep} hours</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Droplet className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold">Water Intake</h3>
            </div>
            <ProgressRing progress={calculateProgress(healthData.waterIntake, 2000)} size={60} strokeWidth={6} />
          </div>
          <p className="text-2xl font-bold">{healthData.waterIntake} ml</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Your Goals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <Target className="w-6 h-6 text-purple-500 mr-2" />
                <h4 className="text-lg font-semibold">{goal.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
              <ProgressRing progress={calculateProgress(goal.current, goal.target)} size={80} strokeWidth={8} />
              <p className="mt-2 text-center">{goal.current} / {goal.target} {goal.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;