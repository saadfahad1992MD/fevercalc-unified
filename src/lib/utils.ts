import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculate paracetamol dosage (10-15 mg/kg per dose)
export function calculateParacetamolDose(weightKg: number, concentration: number, unit: string): {
  minDose: number;
  maxDose: number;
  minVolume: number;
  maxVolume: number;
  unit: string;
} {
  const minDosePerKg = 10; // mg/kg
  const maxDosePerKg = 15; // mg/kg
  
  const minDose = weightKg * minDosePerKg;
  const maxDose = weightKg * maxDosePerKg;
  
  let minVolume: number;
  let maxVolume: number;
  let volumeUnit: string;
  
  if (unit.includes('5ml')) {
    // Syrup: mg/5ml
    minVolume = (minDose / concentration) * 5;
    maxVolume = (maxDose / concentration) * 5;
    volumeUnit = 'ml';
  } else if (unit.includes('ml')) {
    // Drops: mg/ml
    minVolume = minDose / concentration;
    maxVolume = maxDose / concentration;
    volumeUnit = 'ml';
  } else {
    // Suppository or tablet: mg per unit
    minVolume = minDose / concentration;
    maxVolume = maxDose / concentration;
    volumeUnit = 'units';
  }
  
  return {
    minDose: Math.round(minDose),
    maxDose: Math.round(maxDose),
    minVolume: Math.round(minVolume * 10) / 10,
    maxVolume: Math.round(maxVolume * 10) / 10,
    unit: volumeUnit,
  };
}

// Calculate ibuprofen dosage (5-10 mg/kg per dose)
export function calculateIbuprofenDose(weightKg: number, concentration: number, unit: string): {
  minDose: number;
  maxDose: number;
  minVolume: number;
  maxVolume: number;
  unit: string;
} {
  const minDosePerKg = 5; // mg/kg
  const maxDosePerKg = 10; // mg/kg
  
  const minDose = weightKg * minDosePerKg;
  const maxDose = weightKg * maxDosePerKg;
  
  let minVolume: number;
  let maxVolume: number;
  let volumeUnit: string;
  
  if (unit.includes('5ml')) {
    minVolume = (minDose / concentration) * 5;
    maxVolume = (maxDose / concentration) * 5;
    volumeUnit = 'ml';
  } else if (unit.includes('ml')) {
    minVolume = minDose / concentration;
    maxVolume = maxDose / concentration;
    volumeUnit = 'ml';
  } else {
    minVolume = minDose / concentration;
    maxVolume = maxDose / concentration;
    volumeUnit = 'units';
  }
  
  return {
    minDose: Math.round(minDose),
    maxDose: Math.round(maxDose),
    minVolume: Math.round(minVolume * 10) / 10,
    maxVolume: Math.round(maxVolume * 10) / 10,
    unit: volumeUnit,
  };
}

// Get suppository recommendation based on weight
export function getSuppositoryRecommendation(weightKg: number, availableStrengths: number[]): {
  strength: number;
  count: number;
} | null {
  const targetDose = weightKg * 12.5; // Middle of 10-15 mg/kg range
  
  // Find best matching suppository
  for (const strength of availableStrengths.sort((a, b) => b - a)) {
    if (strength <= targetDose) {
      return { strength, count: 1 };
    }
  }
  
  // If all suppositories are too strong, recommend the smallest
  const smallest = Math.min(...availableStrengths);
  if (targetDose >= smallest * 0.8) {
    return { strength: smallest, count: 1 };
  }
  
  return null;
}

// Format volume for display
export function formatVolume(volume: number): string {
  if (volume < 1) {
    return volume.toFixed(2);
  }
  return volume.toFixed(1);
}

// Check if child is eligible for ibuprofen (6+ months)
export function canUseIbuprofen(ageInMonths: number): boolean {
  return ageInMonths >= 6;
}
