import React, { useState } from 'react';
import { HealthData } from '../types';
import { PlusCircle } from 'lucide-react';

interface DataInputProps {
  onDataUpdate: (data: Partial<HealthData>) => void;
}

const DataInput: React.FC<DataInputProps> = ({ onDataUpdate }) => {
  const [meal, setMeal] = useState('');
  const [exercise, setExercise] = useState('');
  const [sleep, setSleep] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDataUpdate({
      meals: [meal],
      exercise: [exercise],
      sleep: parseFloat(sleep),
      waterIntake: parseFloat(waterIntake),
      heartRate: parseInt(heartRate),
      steps: parseInt(steps),
    });
    setMeal('');
    setExercise('');
    setSleep('');
    setWaterIntake('');
    setHeartRate('');
    setSteps('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">Log Your Health Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="meal" className="block mb-1 font-medium">Meal</label>
            <input
              type="text"
              id="meal"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Grilled chicken salad"
            />
          </div>
          <div>
            <label htmlFor="exercise" className="block mb-1 font-medium">Exercise</label>
            <input
              type="text"
              id="exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 30 min jogging"
            />
          </div>
          <div>
            <label htmlFor="sleep" className="block mb-1 font-medium">Sleep (hours)</label>
            <input
              type="number"
              id="sleep"
              value={sleep}
              onChange={(e) => setSleep(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 8"
            />
          </div>
          <div>
            <label htmlFor="waterIntake" className="block mb-1 font-medium">Water Intake (ml)</label>
            <input
              type="number"
              id="waterIntake"
              value={waterIntake}
              onChange={(e) => setWaterIntake(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 2000"
            />
          </div>
          <div>
            <label htmlFor="heartRate" className="block mb-1 font-medium">Heart Rate (BPM)</label>
            <input
              type="number"
              id="heartRate"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 70"
            />
          </div>
          <div>
            <label htmlFor="steps" className="block mb-1 font-medium">Steps</label>
            <input
              type="number"
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 8000"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center">
          <PlusCircle className="w-5 h-5 mr-2" />
          Log Data
        </button>
      </form>
    </div>
  );
};

export default DataInput;