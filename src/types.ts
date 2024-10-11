export interface HealthData {
  meals: string[];
  exercise: string[];
  sleep: number;
  waterIntake: number;
  heartRate: number;
  steps: number;
}

export interface Goal {
  name: string;
  description: string;
  target: number;
  current: number;
  unit: string;
}