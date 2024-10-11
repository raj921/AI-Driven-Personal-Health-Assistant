import React, { useState } from 'react';
import { Goal } from '../types';
import { Target } from 'lucide-react';

interface GoalSettingProps {
  onAddGoal: (goal: Goal) => void;
}

const GoalSetting: React.FC<GoalSettingProps> = ({ onAddGoal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [unit, setUnit] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddGoal({
      name,
      description,
      target: parseFloat(target),
      current: 0,
      unit,
    });
    setName('');
    setDescription('');
    setTarget('');
    setUnit('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Target className="w-6 h-6 mr-2 text-purple-500" />
        Set a New Goal
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Goal Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Daily Steps"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 font-medium">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Increase daily step count for better fitness"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="target" className="block mb-1 font-medium">Target</label>
            <input
              type="number"
              id="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., 10000"
              required
            />
          </div>
          <div>
            <label htmlFor="unit" className="block mb-1 font-medium">Unit</label>
            <input
              type="text"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., steps"
              required
            />
          </div>
        </div>
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default GoalSetting;