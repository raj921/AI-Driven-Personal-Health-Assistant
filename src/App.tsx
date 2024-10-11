import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DataInput from './components/DataInput';
import Recommendations from './components/Recommendations';
import HealthTimeline from './components/HealthTimeline';
import GoalSetting from './components/GoalSetting';
import { HealthData, Goal } from './types';

function App() {
  const [healthData, setHealthData] = useState<HealthData>({
    meals: [],
    exercise: [],
    sleep: 0,
    waterIntake: 0,
    heartRate: 0,
    steps: 0,
  });

  const [goals, setGoals] = useState<Goal[]>([]);

  const updateHealthData = (newData: Partial<HealthData>) => {
    setHealthData((prevData) => ({ ...prevData, ...newData }));
  };

  const addGoal = (goal: Goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Dashboard healthData={healthData} goals={goals} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <DataInput onDataUpdate={updateHealthData} />
            <HealthTimeline healthData={healthData} />
          </div>
          <div>
            <Recommendations healthData={healthData} />
            <GoalSetting onAddGoal={addGoal} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;