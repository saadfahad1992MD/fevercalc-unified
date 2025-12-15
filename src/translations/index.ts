export interface Translation {
  // Header
  siteName: string;
  siteTagline: string;
  
  // Navigation
  calculator: string;
  medicalInfo: string;
  
  // Child Info
  childInfo: string;
  childInfoDesc: string;
  howOldIsChild: string;
  lessThanYear: string;
  moreThanYear: string;
  months: string;
  years: string;
  enterWeight: string;
  weightInKg: string;
  
  // Medicine Selection
  chooseMedicineForm: string;
  syrup: string;
  suppository: string;
  
  // Medicine Types
  paracetamolMedicines: string;
  ibuprofenMedicines: string;
  selectMedicine: string;
  
  // Dosage Results
  dosageResult: string;
  recommendedDose: string;
  everyHours: string;
  maxDailyDoses: string;
  doses: string;
  
  // Warnings
  warning: string;
  ibuprofenWarning: string;
  consultDoctor: string;
  disclaimer: string;
  
  // Actions
  calculate: string;
  reset: string;
  share: string;
  
  // Language Toggle
  switchLanguage: string;
  
  // Country Selector
  selectCountry: string;
  
  // Misc
  loading: string;
  error: string;
}

export const translations: Record<string, Translation> = {
  // Arabic (Saudi Arabia, Egypt)
  ar: {
    siteName: 'موقع حرارة',
    siteTagline: 'حاسبة جرعات أدوية خفض الحرارة والمسكنات للأطفال',
    calculator: 'الحاسبة',
    medicalInfo: 'معلومات طبية',
    childInfo: 'معلومات الطفل',
    childInfoDesc: 'أدخل عمر ووزن الطفل',
    howOldIsChild: 'كم عمر طفلك؟',
    lessThanYear: 'أقل من سنة',
    moreThanYear: 'أكثر من سنة',
    months: 'شهر',
    years: 'سنة',
    enterWeight: 'أدخل وزن الطفل',
    weightInKg: 'الوزن بالكيلوجرام',
    chooseMedicineForm: 'اختر شكل الدواء',
    syrup: 'الشراب',
    suppository: 'التحاميل',
    paracetamolMedicines: 'أدوية الباراسيتامول',
    ibuprofenMedicines: 'أدوية الإيبوبروفين',
    selectMedicine: 'اختر الدواء',
    dosageResult: 'نتيجة الجرعة',
    recommendedDose: 'الجرعة الموصى بها',
    everyHours: 'كل',
    maxDailyDoses: 'الحد الأقصى للجرعات اليومية',
    doses: 'جرعات',
    warning: 'تحذير',
    ibuprofenWarning: 'الإيبوبروفين غير مناسب للأطفال أقل من 6 أشهر',
    consultDoctor: 'استشر الطبيب قبل إعطاء أي دواء',
    disclaimer: 'هذه الحاسبة للاستخدام الإرشادي فقط ولا تغني عن استشارة الطبيب',
    calculate: 'احسب الجرعة',
    reset: 'إعادة تعيين',
    share: 'شارك',
    switchLanguage: 'English',
    selectCountry: 'اختر الدولة',
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
  },
  
  // English
  en: {
    siteName: 'FeverCalc',
    siteTagline: 'Fever Medicine Dosage Calculator for Children',
    calculator: 'Calculator',
    medicalInfo: 'Medical Info',
    childInfo: 'Child Information',
    childInfoDesc: 'Enter your child\'s age and weight',
    howOldIsChild: 'How old is your child?',
    lessThanYear: 'Less than 1 year',
    moreThanYear: 'More than 1 year',
    months: 'months',
    years: 'years',
    enterWeight: 'Enter child\'s weight',
    weightInKg: 'Weight in kg',
    chooseMedicineForm: 'Choose medicine form',
    syrup: 'Syrup',
    suppository: 'Suppository',
    paracetamolMedicines: 'Paracetamol Medicines',
    ibuprofenMedicines: 'Ibuprofen Medicines',
    selectMedicine: 'Select Medicine',
    dosageResult: 'Dosage Result',
    recommendedDose: 'Recommended Dose',
    everyHours: 'every',
    maxDailyDoses: 'Maximum daily doses',
    doses: 'doses',
    warning: 'Warning',
    ibuprofenWarning: 'Ibuprofen is not suitable for children under 6 months',
    consultDoctor: 'Consult a doctor before giving any medication',
    disclaimer: 'This calculator is for guidance only and does not replace medical advice',
    calculate: 'Calculate Dose',
    reset: 'Reset',
    share: 'Share',
    switchLanguage: 'العربية',
    selectCountry: 'Select Country',
    loading: 'Loading...',
    error: 'An error occurred',
  },
  
  // Indonesian (Bahasa Indonesia)
  id: {
    siteName: 'Kalkulator Demam',
    siteTagline: 'Kalkulator Dosis Obat Demam untuk Anak',
    calculator: 'Kalkulator',
    medicalInfo: 'Info Medis',
    childInfo: 'Informasi Anak',
    childInfoDesc: 'Masukkan usia dan berat badan anak',
    howOldIsChild: 'Berapa usia anak Anda?',
    lessThanYear: 'Kurang dari 1 tahun',
    moreThanYear: 'Lebih dari 1 tahun',
    months: 'bulan',
    years: 'tahun',
    enterWeight: 'Masukkan berat badan anak',
    weightInKg: 'Berat dalam kg',
    chooseMedicineForm: 'Pilih bentuk obat',
    syrup: 'Sirup',
    suppository: 'Supositoria',
    paracetamolMedicines: 'Obat Parasetamol',
    ibuprofenMedicines: 'Obat Ibuprofen',
    selectMedicine: 'Pilih Obat',
    dosageResult: 'Hasil Dosis',
    recommendedDose: 'Dosis yang Direkomendasikan',
    everyHours: 'setiap',
    maxDailyDoses: 'Dosis harian maksimum',
    doses: 'dosis',
    warning: 'Peringatan',
    ibuprofenWarning: 'Ibuprofen tidak cocok untuk anak di bawah 6 bulan',
    consultDoctor: 'Konsultasikan dengan dokter sebelum memberikan obat apapun',
    disclaimer: 'Kalkulator ini hanya untuk panduan dan tidak menggantikan saran medis',
    calculate: 'Hitung Dosis',
    reset: 'Reset',
    share: 'Bagikan',
    switchLanguage: 'English',
    selectCountry: 'Pilih Negara',
    loading: 'Memuat...',
    error: 'Terjadi kesalahan',
  },
  
  // Turkish
  tr: {
    siteName: 'Ateş Hesaplayıcı',
    siteTagline: 'Çocuklar için Ateş İlacı Doz Hesaplayıcı',
    calculator: 'Hesaplayıcı',
    medicalInfo: 'Tıbbi Bilgi',
    childInfo: 'Çocuk Bilgisi',
    childInfoDesc: 'Çocuğunuzun yaşını ve kilosunu girin',
    howOldIsChild: 'Çocuğunuz kaç yaşında?',
    lessThanYear: '1 yaşından küçük',
    moreThanYear: '1 yaşından büyük',
    months: 'ay',
    years: 'yaş',
    enterWeight: 'Çocuğun kilosunu girin',
    weightInKg: 'Kilo (kg)',
    chooseMedicineForm: 'İlaç formunu seçin',
    syrup: 'Şurup',
    suppository: 'Fitil',
    paracetamolMedicines: 'Parasetamol İlaçları',
    ibuprofenMedicines: 'İbuprofen İlaçları',
    selectMedicine: 'İlaç Seçin',
    dosageResult: 'Doz Sonucu',
    recommendedDose: 'Önerilen Doz',
    everyHours: 'her',
    maxDailyDoses: 'Günlük maksimum doz',
    doses: 'doz',
    warning: 'Uyarı',
    ibuprofenWarning: 'İbuprofen 6 aydan küçük çocuklar için uygun değildir',
    consultDoctor: 'Herhangi bir ilaç vermeden önce doktora danışın',
    disclaimer: 'Bu hesaplayıcı yalnızca rehberlik amaçlıdır ve tıbbi tavsiyenin yerini almaz',
    calculate: 'Dozu Hesapla',
    reset: 'Sıfırla',
    share: 'Paylaş',
    switchLanguage: 'English',
    selectCountry: 'Ülke Seçin',
    loading: 'Yükleniyor...',
    error: 'Bir hata oluştu',
  },
  
  // Spanish (Mexico)
  es: {
    siteName: 'Calculadora de Fiebre',
    siteTagline: 'Calculadora de Dosis de Medicamentos para la Fiebre en Niños',
    calculator: 'Calculadora',
    medicalInfo: 'Info Médica',
    childInfo: 'Información del Niño',
    childInfoDesc: 'Ingrese la edad y peso de su hijo',
    howOldIsChild: '¿Cuántos años tiene su hijo?',
    lessThanYear: 'Menos de 1 año',
    moreThanYear: 'Más de 1 año',
    months: 'meses',
    years: 'años',
    enterWeight: 'Ingrese el peso del niño',
    weightInKg: 'Peso en kg',
    chooseMedicineForm: 'Elija la forma del medicamento',
    syrup: 'Jarabe',
    suppository: 'Supositorio',
    paracetamolMedicines: 'Medicamentos de Paracetamol',
    ibuprofenMedicines: 'Medicamentos de Ibuprofeno',
    selectMedicine: 'Seleccionar Medicamento',
    dosageResult: 'Resultado de Dosis',
    recommendedDose: 'Dosis Recomendada',
    everyHours: 'cada',
    maxDailyDoses: 'Dosis diarias máximas',
    doses: 'dosis',
    warning: 'Advertencia',
    ibuprofenWarning: 'El ibuprofeno no es adecuado para niños menores de 6 meses',
    consultDoctor: 'Consulte a un médico antes de dar cualquier medicamento',
    disclaimer: 'Esta calculadora es solo para orientación y no reemplaza el consejo médico',
    calculate: 'Calcular Dosis',
    reset: 'Reiniciar',
    share: 'Compartir',
    switchLanguage: 'English',
    selectCountry: 'Seleccionar País',
    loading: 'Cargando...',
    error: 'Ocurrió un error',
  },
  
  // Portuguese (Brazil)
  pt: {
    siteName: 'Calculadora de Febre',
    siteTagline: 'Calculadora de Dosagem de Medicamentos para Febre em Crianças',
    calculator: 'Calculadora',
    medicalInfo: 'Info Médica',
    childInfo: 'Informações da Criança',
    childInfoDesc: 'Digite a idade e o peso da criança',
    howOldIsChild: 'Quantos anos tem seu filho?',
    lessThanYear: 'Menos de 1 ano',
    moreThanYear: 'Mais de 1 ano',
    months: 'meses',
    years: 'anos',
    enterWeight: 'Digite o peso da criança',
    weightInKg: 'Peso em kg',
    chooseMedicineForm: 'Escolha a forma do medicamento',
    syrup: 'Xarope',
    suppository: 'Supositório',
    paracetamolMedicines: 'Medicamentos de Paracetamol',
    ibuprofenMedicines: 'Medicamentos de Ibuprofeno',
    selectMedicine: 'Selecionar Medicamento',
    dosageResult: 'Resultado da Dosagem',
    recommendedDose: 'Dose Recomendada',
    everyHours: 'a cada',
    maxDailyDoses: 'Doses diárias máximas',
    doses: 'doses',
    warning: 'Aviso',
    ibuprofenWarning: 'O ibuprofeno não é adequado para crianças com menos de 6 meses',
    consultDoctor: 'Consulte um médico antes de dar qualquer medicamento',
    disclaimer: 'Esta calculadora é apenas para orientação e não substitui o aconselhamento médico',
    calculate: 'Calcular Dose',
    reset: 'Reiniciar',
    share: 'Compartilhar',
    switchLanguage: 'English',
    selectCountry: 'Selecionar País',
    loading: 'Carregando...',
    error: 'Ocorreu um erro',
  },
  
  // Tagalog (Philippines)
  tl: {
    siteName: 'Kalkulador ng Lagnat',
    siteTagline: 'Kalkulador ng Dosis ng Gamot sa Lagnat para sa mga Bata',
    calculator: 'Kalkulador',
    medicalInfo: 'Impormasyon Medikal',
    childInfo: 'Impormasyon ng Bata',
    childInfoDesc: 'Ilagay ang edad at timbang ng iyong anak',
    howOldIsChild: 'Ilang taon na ang iyong anak?',
    lessThanYear: 'Mas mababa sa 1 taon',
    moreThanYear: 'Higit sa 1 taon',
    months: 'buwan',
    years: 'taon',
    enterWeight: 'Ilagay ang timbang ng bata',
    weightInKg: 'Timbang sa kg',
    chooseMedicineForm: 'Pumili ng anyo ng gamot',
    syrup: 'Syrup',
    suppository: 'Suppository',
    paracetamolMedicines: 'Mga Gamot na Paracetamol',
    ibuprofenMedicines: 'Mga Gamot na Ibuprofen',
    selectMedicine: 'Pumili ng Gamot',
    dosageResult: 'Resulta ng Dosis',
    recommendedDose: 'Inirerekomendang Dosis',
    everyHours: 'bawat',
    maxDailyDoses: 'Maximum na araw-araw na dosis',
    doses: 'dosis',
    warning: 'Babala',
    ibuprofenWarning: 'Ang ibuprofen ay hindi angkop para sa mga batang wala pang 6 na buwan',
    consultDoctor: 'Kumonsulta sa doktor bago magbigay ng anumang gamot',
    disclaimer: 'Ang kalkulador na ito ay para sa gabay lamang at hindi pumapalit sa payo ng doktor',
    calculate: 'Kalkulahin ang Dosis',
    reset: 'I-reset',
    share: 'Ibahagi',
    switchLanguage: 'English',
    selectCountry: 'Pumili ng Bansa',
    loading: 'Naglo-load...',
    error: 'May naganap na error',
  },
  
  // Hindi (India)
  hi: {
    siteName: 'बुखार कैलकुलेटर',
    siteTagline: 'बच्चों के लिए बुखार की दवा खुराक कैलकुलेटर',
    calculator: 'कैलकुलेटर',
    medicalInfo: 'चिकित्सा जानकारी',
    childInfo: 'बच्चे की जानकारी',
    childInfoDesc: 'अपने बच्चे की उम्र और वजन दर्ज करें',
    howOldIsChild: 'आपके बच्चे की उम्र कितनी है?',
    lessThanYear: '1 साल से कम',
    moreThanYear: '1 साल से अधिक',
    months: 'महीने',
    years: 'साल',
    enterWeight: 'बच्चे का वजन दर्ज करें',
    weightInKg: 'वजन किलो में',
    chooseMedicineForm: 'दवा का रूप चुनें',
    syrup: 'सिरप',
    suppository: 'सपोसिटरी',
    paracetamolMedicines: 'पैरासिटामोल दवाएं',
    ibuprofenMedicines: 'इबुप्रोफेन दवाएं',
    selectMedicine: 'दवा चुनें',
    dosageResult: 'खुराक परिणाम',
    recommendedDose: 'अनुशंसित खुराक',
    everyHours: 'हर',
    maxDailyDoses: 'अधिकतम दैनिक खुराक',
    doses: 'खुराक',
    warning: 'चेतावनी',
    ibuprofenWarning: 'इबुप्रोफेन 6 महीने से कम उम्र के बच्चों के लिए उपयुक्त नहीं है',
    consultDoctor: 'कोई भी दवा देने से पहले डॉक्टर से परामर्श करें',
    disclaimer: 'यह कैलकुलेटर केवल मार्गदर्शन के लिए है और चिकित्सा सलाह का विकल्प नहीं है',
    calculate: 'खुराक की गणना करें',
    reset: 'रीसेट',
    share: 'शेयर करें',
    switchLanguage: 'English',
    selectCountry: 'देश चुनें',
    loading: 'लोड हो रहा है...',
    error: 'एक त्रुटि हुई',
  },
};

export const getTranslation = (lang: string): Translation => {
  return translations[lang] || translations.en;
};
