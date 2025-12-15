export interface Medication {
  id: string;
  name: string;
  nameAr?: string;
  type: 'paracetamol' | 'ibuprofen' | 'suppository' | 'combo';
  form: 'syrup' | 'drops' | 'suppository' | 'tablet';
  concentration: number; // mg per ml or mg per unit
  unit: string;
  image?: string;
  ageRestriction?: {
    minMonths?: number;
    maxMonths?: number;
    minYears?: number;
    maxYears?: number;
  };
  notes?: string;
}

// Saudi Arabia Medications
export const saudiMedications: Medication[] = [
  // Paracetamol Syrups
  { id: 'sa-adol-syrup', name: 'Adol Syrup', nameAr: 'أدول شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/sa/adol-syrup.png' },
  { id: 'sa-adol-drops', name: 'Adol Drops', nameAr: 'أدول قطرات', type: 'paracetamol', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/sa/adol-drops.png' },
  { id: 'sa-fevadol-syrup', name: 'Fevadol Syrup', nameAr: 'فيفادول شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/sa/fevadol-syrup.png' },
  { id: 'sa-fevadol-drops', name: 'Fevadol Drops', nameAr: 'فيفادول قطرات', type: 'paracetamol', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/sa/fevadol-drops.png' },
  { id: 'sa-panadol-syrup', name: 'Panadol Syrup', nameAr: 'بنادول شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/sa/panadol-syrup.png' },
  { id: 'sa-tempra-syrup', name: 'Tempra Syrup', nameAr: 'تمبرا شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/sa/tempra-syrup.png' },
  { id: 'sa-tempra-drops', name: 'Tempra Drops', nameAr: 'تمبرا قطرات', type: 'paracetamol', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/sa/tempra-drops.png' },
  // Ibuprofen
  { id: 'sa-brufen-syrup', name: 'Brufen Syrup', nameAr: 'بروفين شراب', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/sa/brufen-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'sa-advil-syrup', name: 'Advil Syrup', nameAr: 'أدفيل شراب', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/sa/advil-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'sa-nurofen-syrup', name: 'Nurofen Syrup', nameAr: 'نيوروفين شراب', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/sa/nurofen-syrup.png', ageRestriction: { minMonths: 6 } },
  // Suppositories
  { id: 'sa-adol-supp-125', name: 'Adol Suppository 125mg', nameAr: 'أدول تحاميل 125', type: 'suppository', form: 'suppository', concentration: 125, unit: 'mg', image: '/images/sa/adol-supp-125.png' },
  { id: 'sa-adol-supp-250', name: 'Adol Suppository 250mg', nameAr: 'أدول تحاميل 250', type: 'suppository', form: 'suppository', concentration: 250, unit: 'mg', image: '/images/sa/adol-supp-250.png' },
  { id: 'sa-fevadol-supp-125', name: 'Fevadol Suppository 125mg', nameAr: 'فيفادول تحاميل 125', type: 'suppository', form: 'suppository', concentration: 125, unit: 'mg', image: '/images/sa/fevadol-supp-125.png' },
  { id: 'sa-fevadol-supp-250', name: 'Fevadol Suppository 250mg', nameAr: 'فيفادول تحاميل 250', type: 'suppository', form: 'suppository', concentration: 250, unit: 'mg', image: '/images/sa/fevadol-supp-250.png' },
];

// Philippines Medications
export const philippinesMedications: Medication[] = [
  { id: 'ph-biogesic-syrup', name: 'Biogesic Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ph/biogesic-syrup.png' },
  { id: 'ph-biogesic-drops', name: 'Biogesic Drops', type: 'paracetamol', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/ph/biogesic-drops.png' },
  { id: 'ph-tempra-syrup', name: 'Tempra Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ph/tempra-syrup.png' },
  { id: 'ph-calpol-syrup', name: 'Calpol Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ph/calpol-syrup.png' },
  { id: 'ph-doliprane-syrup', name: 'Doliprane Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ph/doliprane-syrup.png' },
  { id: 'ph-advil-syrup', name: 'Advil Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/ph/advil-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'ph-medicol-syrup', name: 'Medicol Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/ph/medicol-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'ph-dolan-syrup', name: 'Dolan Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/ph/dolan-syrup.png', ageRestriction: { minMonths: 6 } },
];

// Indonesia Medications
export const indonesiaMedications: Medication[] = [
  { id: 'id-sanmol-syrup', name: 'Sanmol Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/id/sanmol-syrup.png' },
  { id: 'id-sanmol-drops', name: 'Sanmol Drops', type: 'paracetamol', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/id/sanmol-drops.png' },
  { id: 'id-tempra-syrup', name: 'Tempra Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/id/tempra-syrup.png' },
  { id: 'id-panadol-syrup', name: 'Panadol Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/id/panadol-syrup.png' },
  { id: 'id-dumin-syrup', name: 'Dumin Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/id/dumin-syrup.png' },
  { id: 'id-proris-syrup', name: 'Proris Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/id/proris-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'id-bufect-syrup', name: 'Bufect Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/id/bufect-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'id-ibuprofen-syrup', name: 'Ibuprofen Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/id/ibuprofen-syrup.png', ageRestriction: { minMonths: 6 } },
];

// Turkey Medications
export const turkeyMedications: Medication[] = [
  { id: 'tr-calpol-syrup', name: 'Calpol Şurup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/tr/calpol-syrup.png' },
  { id: 'tr-parol-syrup', name: 'Parol Şurup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/tr/parol-syrup.png' },
  { id: 'tr-tylol-syrup', name: 'Tylol Şurup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/tr/tylol-syrup.png' },
  { id: 'tr-minoset-syrup', name: 'Minoset Şurup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/tr/minoset-syrup.png' },
  { id: 'tr-brufen-syrup', name: 'Brufen Şurup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/tr/brufen-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'tr-nurofen-syrup', name: 'Nurofen Şurup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/tr/nurofen-syrup.png', ageRestriction: { minMonths: 6 } },
];

// Mexico Medications
export const mexicoMedications: Medication[] = [
  { id: 'mx-tempra-syrup', name: 'Tempra Jarabe', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/mx/tempra-syrup.png' },
  { id: 'mx-tylenol-syrup', name: 'Tylenol Jarabe', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/mx/tylenol-syrup.png' },
  { id: 'mx-paracetamol-syrup', name: 'Paracetamol Jarabe', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/mx/paracetamol-syrup.png' },
  { id: 'mx-motrin-syrup', name: 'Motrin Jarabe', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/mx/motrin-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'mx-advil-syrup', name: 'Advil Jarabe', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/mx/advil-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'mx-tempra-supp', name: 'Tempra Supositorio', type: 'suppository', form: 'suppository', concentration: 125, unit: 'mg', image: '/images/mx/tempra-supp.png' },
];

// Brazil Medications
export const brazilMedications: Medication[] = [
  { id: 'br-tylenol-syrup', name: 'Tylenol Bebê', type: 'paracetamol', form: 'syrup', concentration: 100, unit: 'mg/ml', image: '/images/br/tylenol-syrup.png' },
  { id: 'br-paracetamol-syrup', name: 'Paracetamol Gotas', type: 'paracetamol', form: 'drops', concentration: 200, unit: 'mg/ml', image: '/images/br/paracetamol-drops.png' },
  { id: 'br-dipirona-syrup', name: 'Dipirona Gotas', type: 'paracetamol', form: 'drops', concentration: 500, unit: 'mg/ml', image: '/images/br/dipirona-drops.png' },
  { id: 'br-novalgina-syrup', name: 'Novalgina Gotas', type: 'paracetamol', form: 'drops', concentration: 500, unit: 'mg/ml', image: '/images/br/novalgina-drops.png' },
  { id: 'br-alivium-syrup', name: 'Alivium Gotas', type: 'ibuprofen', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/br/alivium-drops.png', ageRestriction: { minMonths: 6 } },
  { id: 'br-ibuprofeno-syrup', name: 'Ibuprofeno Gotas', type: 'ibuprofen', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/br/ibuprofeno-drops.png', ageRestriction: { minMonths: 6 } },
];

// Nigeria Medications
export const nigeriaMedications: Medication[] = [
  { id: 'ng-panadol-syrup', name: 'Panadol Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ng/panadol-syrup.png' },
  { id: 'ng-emzor-syrup', name: 'Emzor Paracetamol', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ng/emzor-syrup.png' },
  { id: 'ng-calpol-syrup', name: 'Calpol Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ng/calpol-syrup.png' },
  { id: 'ng-boska-syrup', name: 'Boska Paracetamol', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/ng/boska-syrup.png' },
  { id: 'ng-ibuprofen-syrup', name: 'Ibuprofen Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/ng/ibuprofen-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'ng-brufen-syrup', name: 'Brufen Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/ng/brufen-syrup.png', ageRestriction: { minMonths: 6 } },
];

// India Medications
export const indiaMedications: Medication[] = [
  { id: 'in-crocin-syrup', name: 'Crocin Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/in/crocin-syrup.png' },
  { id: 'in-calpol-syrup', name: 'Calpol Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/in/calpol-syrup.png' },
  { id: 'in-dolo-syrup', name: 'Dolo Syrup', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/in/dolo-syrup.png' },
  { id: 'in-paracip-drops', name: 'Paracip Drops', type: 'paracetamol', form: 'drops', concentration: 100, unit: 'mg/ml', image: '/images/in/paracip-drops.png' },
  { id: 'in-brufen-syrup', name: 'Brufen Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/in/brufen-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'in-ibugesic-syrup', name: 'Ibugesic Syrup', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/in/ibugesic-syrup.png', ageRestriction: { minMonths: 6 } },
];

// Egypt Medications
export const egyptMedications: Medication[] = [
  { id: 'eg-cetal-syrup', name: 'Cetal Syrup', nameAr: 'سيتال شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/eg/cetal-syrup.png' },
  { id: 'eg-panadol-syrup', name: 'Panadol Syrup', nameAr: 'بنادول شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/eg/panadol-syrup.png' },
  { id: 'eg-abimol-syrup', name: 'Abimol Syrup', nameAr: 'أبيمول شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/eg/abimol-syrup.png' },
  { id: 'eg-paramol-syrup', name: 'Paramol Syrup', nameAr: 'بارامول شراب', type: 'paracetamol', form: 'syrup', concentration: 120, unit: 'mg/5ml', image: '/images/eg/paramol-syrup.png' },
  { id: 'eg-brufen-syrup', name: 'Brufen Syrup', nameAr: 'بروفين شراب', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/eg/brufen-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'eg-ibuprofen-syrup', name: 'Ibuprofen Syrup', nameAr: 'ايبوبروفين شراب', type: 'ibuprofen', form: 'syrup', concentration: 100, unit: 'mg/5ml', image: '/images/eg/ibuprofen-syrup.png', ageRestriction: { minMonths: 6 } },
  { id: 'eg-cetal-supp-125', name: 'Cetal Suppository 125mg', nameAr: 'سيتال تحاميل 125', type: 'suppository', form: 'suppository', concentration: 125, unit: 'mg', image: '/images/eg/cetal-supp-125.png' },
  { id: 'eg-cetal-supp-250', name: 'Cetal Suppository 250mg', nameAr: 'سيتال تحاميل 250', type: 'suppository', form: 'suppository', concentration: 250, unit: 'mg', image: '/images/eg/cetal-supp-250.png' },
];

// Get medications by country code
export const getMedicationsByCountry = (countryCode: string): Medication[] => {
  const medicationsMap: Record<string, Medication[]> = {
    sa: saudiMedications,
    ph: philippinesMedications,
    id: indonesiaMedications,
    tr: turkeyMedications,
    mx: mexicoMedications,
    br: brazilMedications,
    ng: nigeriaMedications,
    in: indiaMedications,
    eg: egyptMedications,
  };
  return medicationsMap[countryCode] || [];
};
