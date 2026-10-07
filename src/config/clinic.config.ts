import { ClinicConfig } from '../types/clinic';
import heroManImg from '../assets/images/hero_saudi_man_smile_1791358543798.jpg';
import heroWomanImg from '../assets/images/hero_saudi_woman_smile_1791358555912.jpg';
import doctorOrthoImg from '../assets/images/doctor_orthodontist_man_1791358585793.jpg';
import doctorCosmeticImg from '../assets/images/doctor_cosmetic_woman_1791358600156.jpg';
import teethBeforeVeneersImg from '../assets/images/teeth_before_veneers_1791364661992.jpg';
import teethAfterVeneersImg from '../assets/images/teeth_after_veneers_1791364671669.jpg';
import teethBeforeStainedImg from '../assets/images/teeth_before_stained_1791364637973.jpg';
import teethAfterCleanImg from '../assets/images/teeth_after_clean_1791364647765.jpg';

// Primary Default Clinic: Al-Yaqeen Specialized Dental & Orthodontic Complex
export const alYaqeenClinicConfig: ClinicConfig = {
  id: 'al-yaqeen',
  brand: {
    name: 'مجمع اليقين لطب وتقويم الأسنان التخصصي',
    nameEn: 'Al-Yaqeen Specialized Dental & Orthodontic Complex',
    tagline: 'ابتسامتكم.. خبرة رائدة ورعاية تخصصية بأحدث المعايير العالمية',
    taglineEn: 'Pioneering Dental Care & World-Class Orthodontic Excellence',
    licenseNumber: 'ترخيص وزارة الصحة: 1400039281',
    phone: '+966 11 482 9900',
    whatsappNumber: '+966550198822',
    email: 'care@al-yaqeen-dental.sa',
  },
  theme: {
    primary: '#1F8A9B', // Authentic Al-Yaqeen teal
    primaryDark: '#146471',
    primaryLight: '#EAF6F8',
    accent: '#C5A059', // Champagne gold
    accentLight: '#FDF9F0',
    bg: '#FAF9F5', // Warm ivory
    surface: '#FFFFFF',
    ink: '#1E293B',
  },
  hero: {
    badge: {
      ar: 'المجمع التخصصي الأول لطب وجراحة وتقويم الأسنان',
      en: 'Premier Specialized Dental & Orthodontic Center in KSA',
    },
    headline: {
      ar: 'ابتسامة طبيعية متناسقة.. تصنعها أيادٍ استشارية سعودية',
      en: 'Natural, Harmonious Smiles Crafted by Board-Certified Consultants',
    },
    subheadline: {
      ar: 'نجمع بين فن طب الأسنان التجميلي وأحدث تقنيات التشخيص الرقمي ثلاثي الأبعاد في بيئة هادئة ومريحة بمعايير تعقيم عالمية.',
      en: 'Merging cosmetic dental artistry with precision 3D digital diagnostics in a tranquil, world-standard clinical sanctuary.',
    },
    manImage: heroManImg,
    womanImage: heroWomanImg,
    statFloat: {
      number: '+24,000',
      label: {
        ar: 'ابتسامة مكتملة بنجاح',
        en: 'Happy Patient Smiles',
      },
    },
    certifiedBadge: {
      ar: 'استشاريون معتمدون من الهيئة السعودية للتخصصات الصحية',
      en: 'SCFHS Board-Certified Consultants',
    },
  },
  stats: [
    {
      number: '18+',
      label: { ar: 'عاماً من الخبرة والريادة', en: 'Years of Clinical Excellence' },
    },
    {
      number: '99.4%',
      label: { ar: 'نسبة رضا المرضى وتقييمات 5 نجوم', en: 'Patient Satisfaction Rate' },
    },
    {
      number: '3',
      label: { ar: 'فروع كبرى (الرياض، جدة، الخبر)', en: 'Flagship Centers in KSA' },
    },
    {
      number: '14',
      label: { ar: 'عيادة استشارية مجهزة بأحدث التقنيات', en: 'Specialized Clinical Suites' },
    },
  ],
  services: [
    {
      id: 'orthodontics',
      title: 'تقويم الأسنان المتقدم (الشفاف والمعدني)',
      titleEn: 'Advanced Orthodontics & Clear Aligners',
      shortDesc: 'تصحيح إطباق وتراصف الأسنان بتقنية الإنفزلاين الشفافة والتقويم الرقمي الدقيق.',
      shortDescEn: 'Precision digital bite alignment with Invisalign clear aligners & ceramic braces.',
      icon: 'Smile',
      priceFrom: 3400,
      duration: '6 إلى 18 شهراً',
      durationEn: '6 to 18 months',
      overview: 'نظام تقويم مخصص يعتمد على المسح ثلاثي الأبعاد لمحاكاة خطة حركة كل سن بدقة متناهية دون الحاجة لقوالب معجونية تقليدية.',
      overviewEn: 'Custom orthodontic planning using 3D digital scans for predictable tooth movement without traditional impression paste.',
      steps: [
        { ar: 'مسح فوري ثلاثي الأبعاد للفكين بكاميرا iTero', en: 'Real-time 3D optical intraoral scan' },
        { ar: 'محاكاة النتيجة النهائية قبل البدء مع الاستشاري', en: 'Digital 3D preview of your final smile' },
        { ar: 'تسليم القوالب الشفافة ومتابعة دورية رقمية', en: 'Delivery of custom aligners & digital checkups' },
        { ar: 'تثبيت نهائي للحفاظ على محاذاة الأسنان المستدامة', en: 'Retention phase to safeguard long-term results' }
      ],
      benefits: [
        { ar: 'قوالب شفافة غير مرئية أثناء الحديث', en: 'Virtually invisible aligners during daily life' },
        { ar: 'إمكانية نزعها أثناء تناول الطعام وتنظيف الأسنان', en: 'Removable for easy dining and oral hygiene' },
        { ar: 'جلسات متابعة مريحة وسريعة', en: 'Short, comfortable clinical check-ups' }
      ],
      faqs: [
        {
          q: { ar: 'هل التقويم الشفاف يناسب جميع الحالات؟', en: 'Are clear aligners suitable for all cases?' },
          a: { ar: 'يناسب غالبية حالات تزاحم وتفرق الأسنان ومشاكل العضة، ويحدد الاستشاري الخطة المناسبة بعد المسح ثلاثي الأبعاد.', en: 'They resolve the vast majority of alignment and bite issues; confirmed during 3D consultation.' }
        }
      ]
    },
    {
      id: 'implants',
      title: 'زراعة الأسنان الفورية والموجهة بالحاسوب',
      titleEn: 'Computer-Guided Dental Implants',
      shortDesc: 'تعويض الأسنان المفقودة بجذور تيتانيوم وزركونيا سويسرية فائقة الدقة بضمان مدى الحياة.',
      shortDescEn: 'Permanent tooth replacement using Swiss biocompatible implants with computer-guided surgical precision.',
      icon: 'Zap',
      priceFrom: 2900,
      duration: 'جلسة واحدة للزراعة + فترة الالتئام',
      durationEn: 'Single surgical session + healing phase',
      overview: 'تطبيق تقنية الدليل الجراحي الرقمي (Guided Surgery) لوضع الزرعة في مكانها التشريحي المثالي بأقل تدخل جراحي وبدون ألم.',
      overviewEn: 'Computer-guided placement ensuring microscopic anatomical accuracy with minimal invasive intervention and painless recovery.',
      steps: [
        { ar: 'أشعة مقطعية ثلاثية الأبعاد CBCT لفحص كثافة العظم', en: 'High-resolution CBCT 3D bone density assessment' },
        { ar: 'تصميم الدليل الجراحي الرقمي ثلاثي الأبعاد', en: 'Custom digital 3D surgical guide planning' },
        { ar: 'غرس الزرعة السويسرية تحت تخدير موضعي مريح', en: 'Painless implant placement in under 30 minutes' },
        { ar: 'تركيب التاج الزركوني النهائي المتناسق تماماً مع ابتسامتك', en: 'Final aesthetic zirconia crown fixation' }
      ],
      benefits: [
        { ar: 'مظهر ووظيفة مماثلة تماماً للأسنان الطبيعية', en: 'Feels, functions and looks just like natural teeth' },
        { ar: 'الحفاظ على عظام الفك وشكل الوجه من الضمور', en: 'Prevents bone loss and preserves facial structure' },
        { ar: 'ضمان دولي موثق على الزرعات السويسرية', en: 'Lifetime warranty on premium Swiss fixtures' }
      ],
      faqs: [
        {
          q: { ar: 'هل عملية زراعة الأسنان مؤلمة؟', en: 'Is dental implant surgery painful?' },
          a: { ar: 'تتم تحت تخدير موضعي فائق الفعالية وأقل تدخلاً من خلع السن العادي، ومعظم المرضى يمارسون عملهم في اليوم التالي.', en: 'Performed under gentle local anesthesia, usually causing less discomfort than a routine extraction.' }
        }
      ]
    },
    {
      id: 'veneers',
      title: 'ابتسامة هوليوود وعدسات الفينير واللومينير',
      titleEn: 'Porcelain Veneers & Hollywood Smile',
      shortDesc: 'عدسات خزفية فائقة الرقة (E-Max) مصممة بالذكاء الرقمي لدرجة لون طبيعية وتألق دائم.',
      shortDescEn: 'Ultra-thin E-Max ceramic veneers digitally customized for natural translucency and luminous beauty.',
      icon: 'Award',
      priceFrom: 1200,
      duration: 'جلستان فقط خلال أسبوع',
      durationEn: '2 visits within 7 days',
      overview: 'تصميم ابتسامة رقمية ثلاثية الأبعاد (Digital Smile Design) تلائم أبعاد وجهك وشفتيك قبل أي نحت، مع الحفاظ على بنية السن.',
      overviewEn: 'Digital Smile Design tailored to your facial symmetry and lip dynamics before micro-preparation, preserving natural enamel.',
      steps: [
        { ar: 'جلسة التصوير الرقمي وتحليل تناسق الوجه', en: 'Digital facial photography and biometric analysis' },
        { ar: 'تجربة الابتسامة المبدئية مباشرة داخل فمك (Mockup)', en: 'Try-in aesthetic mock-up test in your mouth' },
        { ar: 'تحضير دقيق جداً للمينا دون إضعاف السن', en: 'Micro-preparation preserving tooth enamel' },
        { ar: 'تثبيت عدسات E-Max الألمانية بروابط كيميائية متطورة', en: 'Permanent bonding of German E-Max porcelain veneers' }
      ],
      benefits: [
        { ar: 'مقاومة تامة للتصبغات والقهوة والشاي', en: 'Stain-resistant to coffee, tea and smoking' },
        { ar: 'بريق ولمعان طبيعي يعكس الضوء كالمينا الحقيقية', en: 'Natural optical translucency reflecting light effortlessly' },
        { ar: 'متانة تدوم لأكثر من 15-20 عاماً مع العناية', en: 'Durable longevity exceeding 15-20 years with care' }
      ],
      faqs: [
        {
          q: { ar: 'هل يتم حك الأسنان بشكل كبير؟', en: 'Will my teeth be heavily filed down?' },
          a: { ar: 'نعتمد بروتوكول Minimal Prep فائق الحذر، حيث لا يتجاوز الإعداد 0.3 إلى 0.5 ملم فقط.', en: 'We follow a strict Minimal-Prep protocol removing only 0.3 to 0.5mm of outer enamel.' }
        }
      ]
    },
    {
      id: 'whitening',
      title: 'تبييض الأسنان الاحترافي بالليزر والزووم',
      titleEn: 'Laser & Philips Zoom Teeth Whitening',
      shortDesc: 'تفتيح درجة لون الأسنان حتى 8 درجات في جلسة واحدة مدتها 45 دقيقة بدون حساسية.',
      shortDescEn: 'Brighten tooth shade up to 8 shades in a 45-minute painless session with enameled desensitizers.',
      icon: 'Sun',
      priceFrom: 650,
      duration: '45 دقيقة',
      durationEn: '45 minutes',
      overview: 'استخدام أحدث أجهزة الليزر البارد ونظام Zoom الأمريكي مع جل عازل لحماية اللثة ومواد مضادة للتحسس الفوري.',
      overviewEn: 'Utilizing cool laser systems and Philips Zoom technology alongside protective gingival barriers for zero sensitivity.',
      steps: [
        { ar: 'تنظيف سطحي وإزالة الجير والرواسب', en: 'Deep ultrasonic scaling and tartar removal' },
        { ar: 'تطبيق الطبقة الواقية على اللثة والأنسجة الرخوة', en: 'Gingival barrier isolation for complete gum safety' },
        { ar: 'تنشيط جل التبييض بواسطة ضوء الليزر المتطور', en: 'Laser-activated gel application in three 15-min cycles' },
        { ar: 'جلسة تغذية المينا بمعدن الفلورايد المقوي', en: 'Remineralizing fluoride glaze to prevent sensitivity' }
      ],
      benefits: [
        { ar: 'نتيجة فورية ملحوظة قبل مغادرة العيادة', en: 'Instant, visible brightness before you step out' },
        { ar: 'تقنية آمنة ومعتمدة من هيئة الغذاء والدواء', en: 'SFDA-approved formula gentle on tooth enamel' },
        { ar: 'تزويدك بقالب تبييض منزلي للحفاظ على النتائج', en: 'Includes home maintenance care kit' }
      ],
      faqs: [
        {
          q: { ar: 'كم تدوم نتيجة تبييض الأسنان؟', en: 'How long do whitening results last?' },
          a: { ar: 'تدوم بين سنة إلى سنتين بحسب العناية بالأسنان وتناول المشروبات الملونة.', en: 'Typically 1 to 2 years depending on daily habits and oral hygiene.' }
        }
      ]
    },
    {
      id: 'endodontics',
      title: 'علاج جذور وأعصاب الأسنان بجلسة واحدة',
      titleEn: 'Microscopic Single-Visit Root Canal',
      shortDesc: 'علاج ألم العصب المستعصي بالمجهر الجراحي المكبر والأجهزة الدوارة الحديثة بدون ألم.',
      shortDescEn: 'Painless, single-session root canal therapy under high-powered surgical microscopy.',
      icon: 'Activity',
      priceFrom: 750,
      duration: '40 إلى 60 دقيقة',
      durationEn: '40 to 60 minutes',
      overview: 'استئصال التهاب العصب وتنظيف القنوات المجهرية بدقة تحت تكبير 25X لضمان عدم عودة الالتهاب نهائياً والحفاظ على السن الطبيعي.',
      overviewEn: 'Eradicating pulp infection with 25X surgical microscope visualization to preserve your natural tooth permanently.',
      steps: [
        { ar: 'تخدير رقمي موضعي بدون ألم وخالٍ من وخز الإبرة المزعج', en: 'Computerized painless localized anesthesia' },
        { ar: 'تنظيف القنوات وتطهيرها بالليزر والموجات فوق الصوتية', en: 'Ultrasonic and laser canal irrigation' },
        { ar: 'حشو القنوات ثلاثي الأبعاد بمواد راتنجية متوافقة حيوياً', en: 'Hermetic 3D biocompatible obturation' },
        { ar: 'إعادة بناء التاج بحشوة تجميلية أو تاج زركونيا داعم', en: 'Crown buildup with cosmetic composite or ceramic' }
      ],
      benefits: [
        { ar: 'إنقاذ السن الطبيعي ومنع الحاجة لخلعه', en: 'Saves your natural tooth from extraction' },
        { ar: 'زوال الألم الحاد فور انتهاء الجلسة مباشرة', en: 'Immediate relief from severe toothache' },
        { ar: 'دقة لا تضاهى بفضل المجاهر الجراحية الألمانية', en: 'Unmatched precision with German surgical microscopes' }
      ],
      faqs: [
        {
          q: { ar: 'هل علاج العصب مؤلم؟', en: 'Is root canal treatment painful?' },
          a: { ar: 'العلاج نفسه يزيل الألم تماماً ولا يشعر المريض بأي وخز بفضل التخدير الحديث.', en: 'The procedure actually relieves your pain immediately under comfortable modern anesthesia.' }
        }
      ]
    },
    {
      id: 'oral-surgery',
      title: 'جراحة الفم والفكين وخلع ضرس العقل المطمور',
      titleEn: 'Oral Surgery & Wisdom Teeth Extraction',
      shortDesc: 'استئصال ضروس العقل جراحياً بأجهزة البيزوتومي الاهتزازية المتقدمة لسرعة الالتئام.',
      shortDescEn: 'Piezosurgery ultrasound extractions for painless wisdom teeth removal and rapid recovery.',
      icon: 'Shield',
      priceFrom: 850,
      duration: '30 دقيقة',
      durationEn: '30 minutes',
      overview: 'جراحة دقيقة لضروس العقل المطمورة قرب العصب الحسي باستخدام اهتزازات الموجات الصوتية التي تقطع العظم دون جرح الأنسجة الرخوة.',
      overviewEn: 'Ultrasound piezo bone surgery that protects nerves and soft tissues, dramatically speeding up postoperative healing.',
      steps: [
        { ar: 'تحديد مسار العصب بواسطة التصوير المقطعي ثلاثي الأبعاد', en: '3D nerve mapping with CBCT tomography' },
        { ar: 'فصل الضرس بتقنية البيزو فوق الصوتية بدون رضوض', en: 'Piezosurgery gentle tooth sectioning' },
        { ar: 'خياطة تجميلية دقيقة قابلة للامتصاص', en: 'Cosmetic absorbable micro-sutures' },
        { ar: 'متابعة ما بعد الجراحة وبروتوكول تسريع التئام اللثة', en: 'Fast-track postoperative recovery protocol' }
      ],
      benefits: [
        { ar: 'انعدام الانتفاخ الشديد والألم بعد الإجراء', en: 'Minimal postoperative swelling and bruising' },
        { ar: 'أمان كامل للأعصاب الحسية المجاورة', en: 'Complete safety for adjacent sensory nerves' },
        { ar: 'شفاء سريع خلال 48 ساعة فقط', en: 'Fast recovery within 48 hours' }
      ],
      faqs: [
        {
          q: { ar: 'متى أحتاج لخلع ضرس العقل؟', en: 'When do I need wisdom tooth removal?' },
          a: { ar: 'عند حدوث انطمار جزئي أو ضغط على الأسنان المجاورة أو التهابات متكررة في اللثة المحيطة.', en: 'When impaction causes crowding, pain, infection, or decay in adjacent molars.' }
        }
      ]
    },
    {
      id: 'pediatric',
      title: 'طب أسنان الأطفال والغاز الضاحك المريح',
      titleEn: 'Pediatric Dentistry & Nitrous Oxide',
      shortDesc: 'رعاية محببة ومرحة لأطفالكم في بيئة مهيأة خصيصاً مع خيار الغاز الضاحك الهادئ.',
      shortDescEn: 'Gentle, fear-free dental visits for children in a playful setting with laughing gas.',
      icon: 'Heart',
      priceFrom: 280,
      duration: '30 دقيقة',
      durationEn: '30 minutes',
      overview: 'أطباء استشاريون متخصصون في بناء علاقة إيجابية مع الطفل والتخلص من الخوف عبر أحدث تقنيات التهدئة الواعية والتعزيز الإيجابي.',
      overviewEn: 'Specialized pediatric dentists creating anxiety-free visits through positive behavioral reinforcement and laughing gas.',
      steps: [
        { ar: 'استقبال في صالة ألعاب واستكشاف ودي للعيادة', en: 'Playful reception and friendly clinic familiarization' },
        { ar: 'فحص ممتع وشرح بسيط للطفل بأسلوب مشوق', en: 'Fun interactive dental check-up' },
        { ar: 'تطبيق الفلورايد الوقائي وسد الشقوق لحماية الأسنان', en: 'Protective fissure sealants and fluoride application' },
        { ar: 'مكافأة وهدية بطل الأسنان لتعزيز شجاعته', en: 'Dental superhero award and bravery gift' }
      ],
      benefits: [
        { ar: 'توديع الخوف والرهاب من عيادات الأسنان نهائياً', en: 'Overcomes dental anxiety permanently' },
        { ar: 'حماية أسنان الطفل اللبنية لضمان بزوغ الأسنان الدائمة بانتظام', en: 'Protects primary teeth to guide straight permanent teeth' },
        { ar: 'بيئة مرحة ومريحة للأطفال وأولياء الأمور', en: 'Comfortable experience for children and parents' }
      ],
      faqs: [
        {
          q: { ar: 'هل الغاز الضاحك آمن للأطفال؟', en: 'Is nitrous oxide safe for kids?' },
          a: { ar: 'آمن تماماً ومعتمد عالمياً، ويزول مفعوله خلال دقائق بمجرد استنشاق الأكسجين الطبيعي.', en: 'Completely safe, medical-grade relaxation that wears off within minutes of breathing pure oxygen.' }
        }
      ]
    },
    {
      id: 'hygiene-perio',
      title: 'تنظيف الأسنان العميق وعلاج اللثة بالليزر',
      titleEn: 'Laser Gum Therapy & Deep Scaling',
      shortDesc: 'إزالة التكلسات والبلاك العنيد وعلاج نزيف اللثة وتورمها بتقنية الليزر الحيوي.',
      shortDescEn: 'Ultrasonic tartar removal and painless laser gum contouring and disinfection.',
      icon: 'CheckCircle2',
      priceFrom: 320,
      duration: '30 دقيقة',
      durationEn: '30 minutes',
      overview: 'جلسة تنظيف فائقة العناية تقضي على البكتيريا المسببة للرائحة والنزيف وتعيد للثة لونها الوردي الصحي المشدود.',
      overviewEn: 'Thorough biofilm removal with antimicrobial diode laser decontamination restoring firm, healthy pink gums.',
      steps: [
        { ar: 'فحص عمق الجيوب اللثوية بمسبار رقمي دقيق', en: 'Digital periodontal pocket depth assessment' },
        { ar: 'تقليح بالموجات فوق الصوتية وتلميع ناعم للمينا', en: 'Ultrasonic tartar scaling & air-flow polishing' },
        { ar: 'تطهير الجيوب اللثوية بأشعة الليزر الحيوية', en: 'Laser decontamination of bacterial pockets' },
        { ar: 'إرشادات مخصصة ومتابعة لصحة الفم اليومية', en: 'Personalized home oral hygiene prescription' }
      ],
      benefits: [
        { ar: 'وقف نزيف اللثة أثناء تنظيف الأسنان بالفرشاة', en: 'Stops bleeding while brushing immediately' },
        { ar: 'القضاء على رائحة الفم المزعجة تماماً', en: 'Eliminates stubborn oral odors' },
        { ar: 'حماية الأسنان من التخلخل وفقدان الدعم العظمي', en: 'Protects teeth from mobility and bone recession' }
      ],
      faqs: [
        {
          q: { ar: 'كم مرة ينصح بإجراء تنظيف الأسنان؟', en: 'How often is dental scaling recommended?' },
          a: { ar: 'ينصح الأطباء بإجراء تنظيف دوري كل 6 أشهر للحفاظ على سلامة اللثة والأسنان.', en: 'Every 6 months to prevent periodontal disease and tartar buildup.' }
        }
      ]
    }
  ],
  doctors: [
    {
      id: 'dr-saud',
      name: 'د. سعود بن ناصر العتيبي',
      nameEn: 'Dr. Saud Al-Otaibi',
      role: 'استشاري أول تقويم الأسنان والفكين',
      roleEn: 'Senior Consultant Orthodontist',
      specialty: 'تقويم الأسنان الرقمي وحالات الإنفزلاين المعقدة',
      specialtyEn: 'Digital Orthodontics & Complex Invisalign Cases',
      photo: doctorOrthoImg,
      bio: 'استشاري حاصل على البورد الأمريكي والبورد السعودي في تقويم الأسنان، خبرة تزيد عن 16 عاماً في تصميم الابتسامات وعلاج حالات عدم تناسق الفكين.',
      bioEn: 'American Board & Saudi Board Certified Consultant Orthodontist with over 16 years specializing in 3D digital smile design and craniofacial mechanics.',
      experienceYears: 16,
      education: [
        { ar: 'البورد الأمريكي في تقويم الأسنان والفكين (ABO)', en: 'American Board of Orthodontics (ABO)' },
        { ar: 'زمالة جامعة بنسلفانيا في تقويم الأسنان المتقدم', en: 'Fellowship in Orthodontics, University of Pennsylvania' },
        { ar: 'عضو الجمعية السعودية لتقويم الأسنان (SOS)', en: 'Saudi Orthodontic Society Member' }
      ],
      languages: ['العربية', 'English'],
      accentColor: '#1F8A9B',
      availableDays: { ar: 'السبت، الإثنين، الأربعاء', en: 'Sat, Mon, Wed' }
    },
    {
      id: 'dr-reem',
      name: 'د. ريم بنت عبد العزيز الغامدي',
      nameEn: 'Dr. Reem Al-Ghamdi',
      role: 'استشارية الاستعاضة السنية وتجميل الابتسامة',
      roleEn: 'Consultant Prosthodontist & Aesthetic Dentist',
      specialty: 'عدسات الفينير وابتسامة هوليوود وإعادة تأهيل الفم الكامل',
      specialtyEn: 'Porcelain Veneers & Full Mouth Aesthetic Rehabilitation',
      photo: doctorCosmeticImg,
      bio: 'استشارية معتمدة من جامعة جنيف، رائدة في تقنيات تصميم الابتسامة الرقمية فائقة الحذر (Minimal Prep Veneers)، قامت بتصميم أكثر من 4,000 ابتسامة متألقة.',
      bioEn: 'University of Geneva graduate and specialist in ultra-conservative Digital Smile Design (DSD), having designed over 4,000 radiant smiles.',
      experienceYears: 14,
      education: [
        { ar: 'دكتوراه في الاستعاضة السنية التجميلية - جامعة جنيف', en: 'PhD in Prosthodontics, University of Geneva' },
        { ar: 'عضو الأكاديمية الأمريكية لطب الأسنان التجميلي (AACD)', en: 'Member, American Academy of Cosmetic Dentistry' },
        { ar: 'البورد السعودي في الاستعاضة السنية', en: 'Saudi Board in Prosthodontics' }
      ],
      languages: ['العربية', 'English', 'Français'],
      accentColor: '#C5A059',
      availableDays: { ar: 'الأحد، الثلاثاء، الخميس', en: 'Sun, Tue, Thu' }
    },
    {
      id: 'dr-faisal',
      name: 'د. فيصل بن خالد الزهراني',
      nameEn: 'Dr. Faisal Al-Zahrani',
      role: 'استشاري جراحة الفم وزراعة الأسنان المتقدمة',
      roleEn: 'Consultant Oral Surgeon & Implantologist',
      specialty: 'الزراعة الفورية الموجهة بالحاسوب وبناء العظام المعقد',
      specialtyEn: 'Computer-Guided Implants & Advanced Bone Regeneration',
      photo: heroManImg,
      bio: 'استشاري حاصل على الزمالة الملكية البريطانية، متخصص في زراعة الأسنان الفورية بدون شق جراحي وتقنيات الرفع المجهري للجيوب الأنفية.',
      bioEn: 'Fellow of the Royal College of Surgeons (UK) specializing in flapless computer-guided immediate dental implants and sinus lift micro-surgery.',
      experienceYears: 15,
      education: [
        { ar: 'زمالة الكلية الملكية للجراحين في إدنبرة (FRCS)', en: 'Fellow of the Royal College of Surgeons Edinburgh' },
        { ar: 'دبلوم زراعة الأسنان المتقدمة - جامعة فرانكفورت', en: 'Diploma in Implantology, Goethe University Frankfurt' }
      ],
      languages: ['العربية', 'English'],
      accentColor: '#167280',
      availableDays: { ar: 'الأحد، الإثنين، الأربعاء', en: 'Sun, Mon, Wed' }
    },
    {
      id: 'dr-noura',
      name: 'د. نورة بنت فهد الشهري',
      nameEn: 'Dr. Noura Al-Shehri',
      role: 'أخصائية أولى طب أسنان الأطفال وصحة الفم',
      roleEn: 'Senior Specialist Pediatric Dentist',
      specialty: 'العلاج بالغاز الضاحك والوقاية المبكرة للأطفال',
      specialtyEn: 'Nitrous Oxide Sedation & Early Interceptive Care',
      photo: heroWomanImg,
      bio: 'متخصصة في توفير تجربة طبية مرحة للأطفال دون خوف، معتمدة في تقنيات التهدئة الواعية ورعاية أسنان ذوي الاحتياجات الخاصة.',
      bioEn: 'Specialist in child-friendly, trauma-free dentistry certified in conscious sedation and special-needs pediatric oral healthcare.',
      experienceYears: 11,
      education: [
        { ar: 'ماجستير طب أسنان الأطفال - جامعة الملك سعود', en: 'MSc Pediatric Dentistry, King Saud University' },
        { ar: 'عضو الأكاديمية الأوروبية لطب أسنان الأطفال (EAPD)', en: 'European Academy of Paediatric Dentistry Member' }
      ],
      languages: ['العربية', 'English'],
      accentColor: '#B8860B',
      availableDays: { ar: 'السبت، الثلاثاء، الخميس', en: 'Sat, Tue, Thu' }
    }
  ],
  beforeAfterCases: [
    {
      id: 'case-veneers-1',
      title: 'إعادة تصميم ابتسامة متكاملة (16 عدسة E-Max)',
      titleEn: 'Full Aesthetic Smile Makeover (16 E-Max Veneers)',
      treatment: 'عدسات فينير إيماكس ألمانية فائقة النعومة',
      treatmentEn: 'Ultra-thin E-Max Ceramic Veneers',
      category: 'veneers',
      duration: 'جلستان خلال 6 أيام',
      durationEn: '2 visits within 6 days',
      beforeImg: teethBeforeVeneersImg,
      afterImg: teethAfterVeneersImg,
      notes: 'علاج تصبغات حادة وتكسر حواف الأسنان مع الحفاظ الكامل على المينا الطبيعية بدون ألم.',
      notesEn: 'Correction of severe tetracycline stains and enamel fractures preserving natural tooth structure.'
    },
    {
      id: 'case-whitening-4',
      title: 'تنظيف وتبييض الأسنان بالليزر والزووم بعد إزالة الجير',
      titleEn: 'Ultrasonic Scaling & Philips Zoom Laser Whitening',
      treatment: 'تنظيف عميق للجير + نظام زووم وتبييض بارد',
      treatmentEn: 'Deep Scaling & Philips Zoom Whitening',
      category: 'whitening',
      duration: 'جلسة واحدة (45 دقيقة)',
      durationEn: 'Single 45-minute visit',
      beforeImg: teethBeforeStainedImg,
      afterImg: teethAfterCleanImg,
      notes: 'إزالة التكلسات والبلاك واصفرار القهوة وتفتيح 7 درجات على مقياس VITA بدون حساسية.',
      notesEn: 'Removal of stubborn plaque, calculus and stains; achieving 7 shades lightening with zero sensitivity.'
    },
    {
      id: 'case-implants-3',
      title: 'زراعة فورية وتعويض الأسنان الأمامية وتجميل اللثة',
      titleEn: 'Immediate Anterior Implants & Aesthetic Gum Line',
      treatment: 'زرعات سويسرية سترومان مع تيجان إيماكس',
      treatmentEn: 'Straumann Swiss Implants & E-Max Crowns',
      category: 'implants',
      duration: 'جلسة جراحية موجهة',
      durationEn: 'Single guided surgical appointment',
      beforeImg: teethBeforeVeneersImg,
      afterImg: teethAfterCleanImg,
      notes: 'استعادة الأسنان المفقودة بحمائية كاملة للثة المحيطة مع تطابق دقيق للون الأسنان الطبيعية.',
      notesEn: 'Restoration of missing teeth with natural gum contour and anatomical translucency.'
    },
    {
      id: 'case-invisalign-2',
      title: 'تصحيح تزاحم واصفرار الأسنان بالتقويم والتبييض',
      titleEn: 'Severe Crowding Alignment & Enamel Brightening',
      treatment: 'تقويم إنفزلاين الشفاف + تبييض نهائي',
      treatmentEn: 'Invisalign Clear Aligners & Whitening',
      category: 'orthodontics',
      duration: '10 أشهر',
      durationEn: '10 months',
      beforeImg: teethBeforeStainedImg,
      afterImg: teethAfterVeneersImg,
      notes: 'إعادة اصطفاف الأسنان وتفتيح اللون مع حماية اللثة وتنسيق خط الابتسامة بالكامل.',
      notesEn: 'Complete alignment correction and radiant brightening with perfect symmetry.'
    }
  ],
  branches: [
    {
      id: 'riyadh-olaya',
      city: 'الرياض',
      cityEn: 'Riyadh',
      name: 'فرع العليا التخصصي الرئيسي',
      nameEn: 'Olaya Flagship Medical Center',
      address: 'طريق الملك فهد، حي العليا، مقابل برج المملكة',
      addressEn: 'King Fahd Road, Al Olaya District, opposite Kingdom Tower',
      phone: '+966 11 482 9900',
      whatsapp: '+966550198822',
      workingHours: {
        ar: 'السبت - الخميس: 9:00 ص إلى 10:00 م | الجمعة: 4:00 م إلى 10:00 م',
        en: 'Sat - Thu: 9:00 AM - 10:00 PM | Fri: 4:00 PM - 10:00 PM'
      },
      googleMapsUrl: 'https://maps.google.com/?q=24.7136,46.6753',
      coordinates: { lat: 24.7136, lng: 46.6753 }
    },
    {
      id: 'jeddah-rawdah',
      city: 'جدة',
      cityEn: 'Jeddah',
      name: 'فرع الروضة والتحلية',
      nameEn: 'Al Rawdah & Tahlia Center',
      address: 'شارع الأمير محمد بن عبدالعزيز (التحلية)، حي الروضة',
      addressEn: 'Prince Mohammed Bin Abdulaziz St (Tahlia), Al Rawdah',
      phone: '+966 12 665 4411',
      whatsapp: '+966550198823',
      workingHours: {
        ar: 'السبت - الخميس: 9:30 ص إلى 10:30 م | الجمعة: 4:30 م إلى 10:30 م',
        en: 'Sat - Thu: 9:30 AM - 10:30 PM | Fri: 4:30 PM - 10:30 PM'
      },
      googleMapsUrl: 'https://maps.google.com/?q=21.5582,39.1672',
      coordinates: { lat: 21.5582, lng: 39.1672 }
    },
    {
      id: 'khobar-corniche',
      city: 'الخبر',
      cityEn: 'Al Khobar',
      name: 'فرع الكورنيش الشمالي',
      nameEn: 'North Corniche Center',
      address: 'طريق الأمير تركي، الكورنيش الشمالي، مجمع اليقين الطبي',
      addressEn: 'Prince Turki Road, North Corniche, Al-Yaqeen Complex',
      phone: '+966 13 889 7722',
      whatsapp: '+966550198824',
      workingHours: {
        ar: 'السبت - الخميس: 9:00 ص إلى 10:00 م | الجمعة: مغلق',
        en: 'Sat - Thu: 9:00 AM - 10:00 PM | Fri: Closed'
      },
      googleMapsUrl: 'https://maps.google.com/?q=26.2945,50.2104',
      coordinates: { lat: 26.2945, lng: 50.2104 }
    }
  ],
  symptoms: [
    {
      id: 'sharp-pain',
      label: 'ألم أسنان مفاجئ أو نابض',
      labelEn: 'Sudden or throbbing toothache',
      severity: 'high',
      description: 'ألم يزداد مع المشروبات الساخنة أو أثناء النوم ليلاً.',
      descriptionEn: 'Sharp throbbing pain worsening with hot beverages or when lying down.',
      recommendedServiceId: 'endodontics',
      recommendedSpecialist: 'استشاري علاج الجذور وأعصاب الأسنان',
      recommendedSpecialistEn: 'Consultant Endodontist'
    },
    {
      id: 'crooked-teeth',
      label: 'تزاحم أو اعوجاج في الأسنان',
      labelEn: 'Crowding or misaligned teeth',
      severity: 'medium',
      description: 'صعوبة تنظيف الأسنان أو عدم رضا عن تناسق الابتسامة.',
      descriptionEn: 'Difficulty cleaning tight teeth or dissatisfaction with smile symmetry.',
      recommendedServiceId: 'orthodontics',
      recommendedSpecialist: 'استشاري تقويم الأسنان والفكين',
      recommendedSpecialistEn: 'Consultant Orthodontist'
    },
    {
      id: 'bleeding-gums',
      label: 'نزيف أو انتفاخ اللثة عند التنظيف',
      labelEn: 'Bleeding or swollen gums',
      severity: 'medium',
      description: 'احمرار ونزيف دموي خفيف أثناء استخدام الفرشاة أو الخيط.',
      descriptionEn: 'Redness and bleeding during brushing or flossing with tender gums.',
      recommendedServiceId: 'hygiene-perio',
      recommendedSpecialist: 'أخصائي أمراض وجراحة اللثة بالليزر',
      recommendedSpecialistEn: 'Periodontist & Laser Specialist'
    },
    {
      id: 'missing-tooth',
      label: 'فقدان سن أو فراغ بين الأسنان',
      labelEn: 'Missing tooth or open gap',
      severity: 'high',
      description: 'صعوبة في المضغ أو تغير في مخارج الحروف وانحسار العظم.',
      descriptionEn: 'Chewing difficulty, phonetic changes or bone atrophy risk.',
      recommendedServiceId: 'implants',
      recommendedSpecialist: 'استشاري جراحة وزراعة الأسنان',
      recommendedSpecialistEn: 'Implant & Oral Surgery Consultant'
    },
    {
      id: 'yellowing',
      label: 'اصفرار وتصبغات في الابتسامة',
      labelEn: 'Yellowing & stubborn stains',
      severity: 'low',
      description: 'تغير لون الأسنان بسبب القهوة أو الشاي أو رغبة في ابتسامة أكثر إشراقاً.',
      descriptionEn: 'Discoloration from coffee, tea, or smoking seeking a luminous white smile.',
      recommendedServiceId: 'whitening',
      recommendedSpecialist: 'استشارية تجميل الأسنان وتبييض الليزر',
      recommendedSpecialistEn: 'Aesthetic Dentist & Laser Whitening'
    },
    {
      id: 'wisdom-tooth',
      label: 'ألم وضغط في آخر الفك (ضرس العقل)',
      labelEn: 'Wisdom tooth pressure or jaw pain',
      severity: 'high',
      description: 'صعوبة فتح الفم بالكامل وألم يمتد إلى الأذن والرأس.',
      descriptionEn: 'Stiffness opening mouth and pain radiating towards ear or temple.',
      recommendedServiceId: 'oral-surgery',
      recommendedSpecialist: 'استشاري جراحة الفم والفكين',
      recommendedSpecialistEn: 'Oral & Maxillofacial Surgeon'
    }
  ],
  technologies: [
    {
      id: 'itero-scan',
      title: 'المسح الرقمي ثلاثي الأبعاد (iTero 5D Plus)',
      titleEn: 'iTero 5D Plus Intraoral Scanner',
      description: 'التقاط 6,000 صورة رقمية في الثانية الواحدة لمجسم فمك بالكامل دون الحاجة لمعجون الطبعات المزعج مع كشف فوري للتسوس الداخلي.',
      descriptionEn: 'Captures 6,000 frames/sec for an ultra-accurate 3D digital oral model with near-infrared caries detection without impression paste.',
      icon: 'Camera',
      tag: 'دقة ميكرونية',
      tagEn: 'Sub-micron precision'
    },
    {
      id: 'cbct-3d',
      title: 'التصوير المقطعي ثلاثي الأبعاد منخفض الإشعاع (CBCT)',
      titleEn: 'Low-Dose 3D CBCT Tomography',
      description: 'تصوير عالي الدقة لعظام الفكين ومسارات الأعصاب بجرعة إشعاعية أقل بنسبة 80% من الأشعات التقليدية لتخطيط جراحي دقيق وموثوق.',
      descriptionEn: 'Comprehensive jaw and nerve canal visualization with 80% less radiation exposure for safest surgical navigation.',
      icon: 'Radio',
      tag: 'أمان إشعاعي فائق',
      tagEn: 'Ultra-low radiation'
    },
    {
      id: 'laser-biolase',
      title: 'ليزر الأسنان المائي بدون ألم (Waterlase iPlus)',
      titleEn: 'Painless Biolase Water Laser',
      description: 'علاج الأنسجة الصلبة والرخوة بالليزر والماء بدلاً من آلات الحفر الاهتزازية المزعجة وبدون الحاجة لإبر التخدير في معظم الحالات.',
      descriptionEn: 'Gentle laser-hydrokinetic dental therapy replacing dental drills with zero vibration and needle-free comfort.',
      icon: 'Zap',
      tag: 'بدون إبر أو حفر',
      tagEn: 'Needle-free comfort'
    },
    {
      id: 'melag-sterilization',
      title: 'نظام التعقيم المركزي الألماني الأوتوماتيكي (MELAG)',
      titleEn: 'German MELAG Central Sterilization',
      description: 'أعلى معايير مكافحة العدوى Class B مع تتبع رقمي مشفر بالباركود لكل أداة طبية لضمان سلامة 100% لكل مراجع.',
      descriptionEn: 'Medical Class-B automated autoclaves with digital barcode instrument tracking ensuring 100% biological sterility.',
      icon: 'ShieldCheck',
      tag: 'معايير مستشفيات عالمية',
      tagEn: 'Hospital-grade sterility'
    }
  ],
  testimonials: [
    {
      id: 'test-1',
      patientName: 'م. فهد السبيعي',
      patientNameEn: 'Eng. Fahad Al-Subaie',
      city: 'الرياض',
      treatment: 'تقويم إنفزلاين الشفاف مع د. سعود',
      treatmentEn: 'Invisalign Treatment with Dr. Saud',
      rating: 5,
      comment: 'تجربة فوق الممتازة في مجمع اليقين. كنت متردداً بشأن التقويم في سن الثلاثين، لكن الخطة كانت واضحة جداً بالمسح ثلاثي الأبعاد والنتيجة فاقت توقعاتي تماماً.',
      commentEn: 'Exceptional experience at Al-Yaqeen. The 3D scan allowed me to see the exact progression before even starting. My smile is completely transformed.',
      date: 'سبتمبر 2026'
    },
    {
      id: 'test-2',
      patientName: 'سارة الدوسري',
      patientNameEn: 'Sarah Al-Dosari',
      city: 'الخبر',
      treatment: 'ابتسامة هوليوود E-Max مع د. ريم',
      treatmentEn: 'E-Max Smile Makeover with Dr. Reem',
      rating: 5,
      comment: 'د. ريم فنانة حقيقية! اللون طبيعي جداً وشفاف ولا يبدو مصطنعاً على الإطلاق. الاستقبال والاهتمام بالتعقيم والتفاصيل كان على أعلى مستوى.',
      commentEn: 'Dr. Reem is a true artist. The porcelain color is so natural and translucent. The clinic feels like a peaceful five-star retreat.',
      date: 'أغسطس 2026'
    },
    {
      id: 'test-3',
      patientName: 'د. طارق المالكي',
      patientNameEn: 'Dr. Tariq Al-Malki',
      city: 'جدة',
      treatment: 'زراعة فورية موجهة مع د. فيصل',
      treatmentEn: 'Guided Implant with Dr. Faisal',
      rating: 5,
      comment: 'أجريت زراعة سنين بتقنية الدليل الرقمي بدون جراحة تقليدية. لم أشعر بأي ألم وداومت في اليوم التالي بشكل طبيعي. احترافية نادرة.',
      commentEn: 'Had two computer-guided implants placed. Flapless, painless, and I was back at work the very next morning. Truly remarkable surgical mastery.',
      date: 'يوليو 2026'
    }
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'هل يقبل مجمع اليقين بطاقات التأمين الطبي؟',
      questionEn: 'Do you accept health insurance plans?',
      answer: 'نعم، نحن معتمدون لدى كبرى شركات التأمين في المملكة ومنها (بوبا، التعاونية، ميدغلف، ملاذ، سلامة، تكافل الراجحي)، ونوفر ميزة الموافقة الفورية المباشرة.',
      answerEn: 'Yes, we are accredited with leading KSA insurance providers including Bupa, Tawuniya, Medgulf, Malath, and Al Rajhi Takaful with direct online billing approval.',
      category: 'insurance'
    },
    {
      id: 'faq-2',
      question: 'هل تتوفر خطط تقسيط ميسرة وبدون فوائد؟',
      questionEn: 'Are 0% interest installment plans available?',
      answer: 'نعم، نوفر خيارات دفع ميسرة عبر (تابي و تمارا) مقسمة على 4 دفعات بدون أي رسوم إضافية، بالإضافة لخطط تقسيط بنكية ميسرة للعلاجات الشاملة.',
      answerEn: 'Yes, we offer zero-interest installment options via Tabby and Tamara split across 4 months, alongside flexible bank financing for comprehensive treatments.',
      category: 'payment'
    },
    {
      id: 'faq-3',
      question: 'كيف أضمن أن نتيجة الفينير أو التقويم ستبدو طبيعية؟',
      questionEn: 'How can I ensure my smile looks natural?',
      answer: 'نتبع بروتوكول Digital Smile Design حيث نقوم بتركيب تجربة مؤقتة (Mock-up) مباشرة في فمك لتراها وتلتقط صوراً لها قبل البدء بأي إجراء دائم.',
      answerEn: 'We use Digital Smile Design to create an intraoral aesthetic mock-up you can test and photograph before any permanent procedure begins.',
      category: 'treatment'
    },
    {
      id: 'faq-4',
      question: 'ما هي مدة الانتظار بعد حجز الموعد؟',
      questionEn: 'What is the wait time after booking an appointment?',
      answer: 'نلتزم بنظام المواعيد الدقيقة المسبقة، ولا يتجاوز وقت الانتظار في صالة الاستقبال 10 دقائق من موعدك المحدد.',
      answerEn: 'We enforce an on-time appointment guarantee; reception wait time rarely exceeds 10 minutes from your confirmed slot.',
      category: 'appointments'
    }
  ]
};

// Preset Alternate Clinic 1: Lumina Aesthetic Dental Studio
export const luminaClinicConfig: ClinicConfig = {
  ...alYaqeenClinicConfig,
  id: 'lumina-dental',
  brand: {
    ...alYaqeenClinicConfig.brand,
    name: 'عيادات لومينا لطب وتجميل الأسنان',
    nameEn: 'Lumina Aesthetic Dental Studio',
    tagline: 'إشراقة ابتسامتك برؤية عصرية وتصميم شخصي فريد',
    taglineEn: 'Crafting Bespoke Smile Architecture & Luxury Aesthetics',
    licenseNumber: 'ترخيص وزارة الصحة: 1400048192',
    phone: '+966 11 200 4880',
    whatsappNumber: '+966551234880',
    email: 'hello@lumina-dental.sa',
  },
  theme: {
    primary: '#0D7E69', // Emerald sage
    primaryDark: '#085345',
    primaryLight: '#E8F5F2',
    accent: '#D4AF37', // Polished gold
    accentLight: '#FDFBF2',
    bg: '#FAF8F5',
    surface: '#FFFFFF',
    ink: '#1E293B',
  }
};

// Preset Alternate Clinic 2: Royal Smile Center
export const royalSmileClinicConfig: ClinicConfig = {
  ...alYaqeenClinicConfig,
  id: 'royal-smile',
  brand: {
    ...alYaqeenClinicConfig.brand,
    name: 'مركز الابتسامة الملكية لطب الأسنان',
    nameEn: 'Royal Smile Dental Sanctuary',
    tagline: 'طب أسنان ملكي يجمع الرقي الفندقي وأحدث التقنيات السويسرية',
    taglineEn: 'Royal Dental Sanctuary Merging Hospitality with Swiss Precision',
    licenseNumber: 'ترخيص وزارة الصحة: 1400051189',
    phone: '+966 11 988 2233',
    whatsappNumber: '+966559882233',
    email: 'vip@royalsmile.sa',
  },
  theme: {
    primary: '#1E5AA0', // Royal sapphire blue
    primaryDark: '#123D70',
    primaryLight: '#EDF4FC',
    accent: '#C79A42', // Warm amber gold
    accentLight: '#FAF5EA',
    bg: '#FAFAFA',
    surface: '#FFFFFF',
    ink: '#0F172A',
  }
};

export const CLINIC_PRESETS = [alYaqeenClinicConfig, luminaClinicConfig, royalSmileClinicConfig];
