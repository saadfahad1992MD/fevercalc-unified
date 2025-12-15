import { useState, useMemo } from 'react';
import { Baby, Scale, Pill, Droplets, AlertTriangle, Calculator } from 'lucide-react';
import { Medication } from '@/data/medications';
import { Translation } from '@/translations';
import { calculateParacetamolDose, calculateIbuprofenDose, canUseIbuprofen, cn } from '@/lib/utils';

interface FeverCalculatorProps {
  medications: Medication[];
  translations: Translation;
  isRTL: boolean;
  language: string;
}

type AgeGroup = 'infant' | 'child' | null;
type MedicineForm = 'syrup' | 'suppository';

export function FeverCalculator({ medications, translations, isRTL, language }: FeverCalculatorProps) {
  const [ageGroup, setAgeGroup] = useState<AgeGroup>(null);
  const [ageValue, setAgeValue] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [medicineForm, setMedicineForm] = useState<MedicineForm>('syrup');
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);

  const ageInMonths = useMemo(() => {
    if (ageGroup === 'infant') return ageValue;
    return ageValue * 12;
  }, [ageGroup, ageValue]);

  const filteredMedications = useMemo(() => {
    return medications.filter(med => {
      if (medicineForm === 'syrup') {
        return med.form === 'syrup' || med.form === 'drops';
      }
      return med.form === 'suppository';
    });
  }, [medications, medicineForm]);

  const paracetamolMeds = useMemo(() => 
    filteredMedications.filter(m => m.type === 'paracetamol'),
    [filteredMedications]
  );

  const ibuprofenMeds = useMemo(() => 
    filteredMedications.filter(m => m.type === 'ibuprofen'),
    [filteredMedications]
  );

  const canShowIbuprofen = canUseIbuprofen(ageInMonths);

  const dosageResult = useMemo(() => {
    if (!selectedMedication || weight <= 0) return null;

    const calculateFn = selectedMedication.type === 'paracetamol' 
      ? calculateParacetamolDose 
      : calculateIbuprofenDose;

    return calculateFn(weight, selectedMedication.concentration, selectedMedication.unit);
  }, [selectedMedication, weight]);

  const handleReset = () => {
    setAgeGroup(null);
    setAgeValue(0);
    setWeight(0);
    setSelectedMedication(null);
  };

  return (
    <div className={cn("max-w-4xl mx-auto p-4", isRTL && "font-arabic")}>
      {/* Step 1: Age Selection */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
        <div className={cn("flex items-center gap-3 mb-4", isRTL && "flex-row-reverse")}>
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <Baby className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{translations.childInfo}</h2>
            <p className="text-sm text-gray-500">{translations.childInfoDesc}</p>
          </div>
        </div>

        <p className={cn("text-sm font-medium text-gray-700 mb-3", isRTL && "text-right")}>
          {translations.howOldIsChild}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setAgeGroup('infant')}
            className={cn(
              "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2",
              ageGroup === 'infant' 
                ? "border-primary-500 bg-primary-50" 
                : "border-gray-200 hover:border-primary-200"
            )}
          >
            <span className="text-2xl">👶</span>
            <span className="text-sm font-medium">{translations.lessThanYear}</span>
            <span className="text-xs text-gray-500">(1-12 {translations.months})</span>
          </button>

          <button
            onClick={() => setAgeGroup('child')}
            className={cn(
              "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2",
              ageGroup === 'child' 
                ? "border-primary-500 bg-primary-50" 
                : "border-gray-200 hover:border-primary-200"
            )}
          >
            <span className="text-2xl">🧒</span>
            <span className="text-sm font-medium">{translations.moreThanYear}</span>
            <span className="text-xs text-gray-500">(1-14 {translations.years})</span>
          </button>
        </div>

        {ageGroup && (
          <div className="mb-4">
            <input
              type="number"
              min={ageGroup === 'infant' ? 1 : 1}
              max={ageGroup === 'infant' ? 12 : 14}
              value={ageValue || ''}
              onChange={(e) => setAgeValue(Number(e.target.value))}
              placeholder={ageGroup === 'infant' ? translations.months : translations.years}
              className={cn(
                "w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                isRTL && "text-right"
              )}
            />
          </div>
        )}

        {/* Weight Input */}
        <div className={cn("flex items-center gap-3 mb-3", isRTL && "flex-row-reverse")}>
          <Scale className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-700">{translations.enterWeight}</span>
        </div>
        <input
          type="number"
          min={1}
          max={60}
          step={0.1}
          value={weight || ''}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder={translations.weightInKg}
          className={cn(
            "w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent",
            isRTL && "text-right"
          )}
        />
      </div>

      {/* Step 2: Medicine Form Selection */}
      {weight > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <p className={cn("text-sm font-medium text-gray-700 mb-3", isRTL && "text-right")}>
            {translations.chooseMedicineForm}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => { setMedicineForm('syrup'); setSelectedMedication(null); }}
              className={cn(
                "flex-1 p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2",
                medicineForm === 'syrup'
                  ? "border-primary-500 bg-primary-50"
                  : "border-gray-200 hover:border-primary-200"
              )}
            >
              <Droplets className="w-5 h-5" />
              <span className="font-medium">{translations.syrup}</span>
            </button>
            <button
              onClick={() => { setMedicineForm('suppository'); setSelectedMedication(null); }}
              className={cn(
                "flex-1 p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2",
                medicineForm === 'suppository'
                  ? "border-primary-500 bg-primary-50"
                  : "border-gray-200 hover:border-primary-200"
              )}
            >
              <Pill className="w-5 h-5" />
              <span className="font-medium">{translations.suppository}</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Medication Selection */}
      {weight > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          {/* Paracetamol Section */}
          <div className="mb-6">
            <h3 className={cn(
              "text-sm font-semibold text-primary-600 mb-3 flex items-center gap-2",
              isRTL && "flex-row-reverse"
            )}>
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              {translations.paracetamolMedicines}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {paracetamolMeds.map((med) => (
                <button
                  key={med.id}
                  onClick={() => setSelectedMedication(med)}
                  className={cn(
                    "p-3 rounded-xl border-2 transition-all text-center",
                    selectedMedication?.id === med.id
                      ? "border-primary-500 bg-primary-50"
                      : "border-gray-200 hover:border-primary-200"
                  )}
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-primary-500" />
                  </div>
                  <p className="text-xs font-medium text-gray-900 line-clamp-2">
                    {language === 'ar' && med.nameAr ? med.nameAr : med.name}
                  </p>
                  <p className="text-xs text-gray-500">{med.unit}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Ibuprofen Section */}
          {ibuprofenMeds.length > 0 && (
            <div>
              <h3 className={cn(
                "text-sm font-semibold text-orange-600 mb-3 flex items-center gap-2",
                isRTL && "flex-row-reverse"
              )}>
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {translations.ibuprofenMedicines}
              </h3>
              
              {!canShowIbuprofen && (
                <div className={cn(
                  "bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3 flex items-center gap-2",
                  isRTL && "flex-row-reverse"
                )}>
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <p className="text-sm text-amber-800">{translations.ibuprofenWarning}</p>
                </div>
              )}

              <div className={cn(
                "grid grid-cols-2 sm:grid-cols-3 gap-3",
                !canShowIbuprofen && "opacity-50 pointer-events-none"
              )}>
                {ibuprofenMeds.map((med) => (
                  <button
                    key={med.id}
                    onClick={() => canShowIbuprofen && setSelectedMedication(med)}
                    disabled={!canShowIbuprofen}
                    className={cn(
                      "p-3 rounded-xl border-2 transition-all text-center",
                      selectedMedication?.id === med.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-200"
                    )}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-xs font-medium text-gray-900 line-clamp-2">
                      {language === 'ar' && med.nameAr ? med.nameAr : med.name}
                    </p>
                    <p className="text-xs text-gray-500">{med.unit}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dosage Result */}
      {dosageResult && selectedMedication && (
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg p-6 text-white">
          <div className={cn("flex items-center gap-3 mb-4", isRTL && "flex-row-reverse")}>
            <Calculator className="w-6 h-6" />
            <h3 className="text-lg font-semibold">{translations.dosageResult}</h3>
          </div>

          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <p className="text-sm opacity-90 mb-1">{translations.recommendedDose}</p>
            <p className="text-3xl font-bold">
              {dosageResult.minVolume} - {dosageResult.maxVolume} {dosageResult.unit}
            </p>
            <p className="text-sm opacity-90 mt-1">
              ({dosageResult.minDose} - {dosageResult.maxDose} mg)
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-xs opacity-80">{translations.everyHours}</p>
              <p className="text-xl font-semibold">
                {selectedMedication.type === 'paracetamol' ? '4-6' : '6-8'} hrs
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-xs opacity-80">{translations.maxDailyDoses}</p>
              <p className="text-xl font-semibold">
                {selectedMedication.type === 'paracetamol' ? '4' : '3'} {translations.doses}
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-xs opacity-90">
              ⚠️ {translations.disclaimer}
            </p>
          </div>
        </div>
      )}

      {/* Reset Button */}
      {(ageGroup || weight > 0 || selectedMedication) && (
        <button
          onClick={handleReset}
          className="w-full mt-4 p-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
        >
          {translations.reset}
        </button>
      )}
    </div>
  );
}
