import { Award, BookOpen, Clock, Eye, Globe, Mail, MapPin, Phone, Target, Users } from "lucide-react";
export const navItems = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.about', path: '/courses' },
  { name: 'nav.services', path: '/about' },
  { name: 'nav.instructors', path: '/instructors' },
  { name: 'nav.blog', path: '/blog' },
  { name: 'nav.contact', path: '/contact' },
];
export const courses = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'React, Vue.js, Angular asosida zamonaviy veb-saytlar yaratish',
    duration: '6 oy',
    level: 'Boshlang\'ich',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
    price: '1,500,000'
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Node.js, Python, Java bilan server tomonni rivojlantirish',
    duration: '8 oy',
    level: "O'rta",
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
    price: '1,800,000'
  },
  {
    id: 3,
    name: 'Muxlisa',
    title: 'Komp\'yuter Savodxonligi',
    description: 'Microsoft Office, internet va xavfsizlik asoslarini o‘rganish',
    duration: '4 oy',
    level: 'Boshlang\'ich',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500',
    price: '1,000,000'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Figma va Adobe XD yordamida foydalanuvchi interfeyslari yaratish',
    duration: '5 oy',
    level: 'Boshlang\'ich',
    image: 'https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=500',
    price: '1,200,000'
  },
  {
    id: 5,
    title: 'Data Science',
    description: 'Python, Pandas, NumPy va Machine Learning asoslarini o\'rganish',
    duration: '9 oy',
    level: "Yuqori",
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500',
    price: '2,500,000'
  },
  {
    id: 6,
    name: 'Aziza',
    title: 'Koreys Tili',
    description: 'Koreys tilining boshlang‘ich va o‘rta darajadagi grammatikasi hamda so‘z boyligini o‘rganish',
    duration: '6 oy',
    level: "Boshlang'ich",
    image: 'https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg?auto=compress&cs=tinysrgb&w=500',
    price: '1,800,000'
  }
];

  export const stats = [
    { label: 'Faol talabalar', value: '2500+', icon: Users },
    { label: 'Kurslar soni', value: '25+', icon: BookOpen },
    { label: 'Sertifikatlar', value: '1800+', icon: Award },
    { label: "O'qitish tajribasi", value: '5+ yil', icon: Clock },
  ];

export const stats2 = [
            { number: '50+', label: "O'qituvchilar soni" },
              { number: '100+', label: 'Yillik tajriba' },
              { number: '2500+', label: 'Talabalar' },
              { number: '4.8', label: "O'rtacha reyting" }
]

 export  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon raqami',
      details: ['+998 (77) 030-43-21', '+998 (93) 030-43-21'],
      description: 'Ish kunlari 8:00 dan 18:00 gacha'
    },
    {
      icon: Mail,
      title: 'Email manzili',
      details: ['info@itmarkazi.uz', 'admin@itmarkazi.uz'],
      description: '24 soat ichida javob beramiz'
    },
    {
      icon: MapPin,
      title: 'Manzil',
      details: ['Jizzax sh, Zarbdor tumani', 'Davlat xizmatlari binosi, 1-qavat'],
      
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      details: ['Dushanba - Shanba: 8:00 - 18:00'],
      description: 'Yakshanba dam olish kuni'
    }
  ];
  export const oqituvchilar = [
              {
                name: 'Temur Ahmatov',
                role: ' Direktor va Fullstack Dasturchi',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: '7 yillik IT sohasidagi tajriba'
              },
              {
                name: 'Nodir',
                role: 'Frontend dasturchi',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: '2 yillik Frondend Dasturchi'
              },
              {
                name: 'Muhlisa',
                role: 'Kampyuter Savodhonlik Oqituvchi',
                image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: '2 Yillik Tajribaga Ega Mutahasis'
              },
              {
                name: 'Jahongir',
                role: 'Frondend Dasturchi',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: '1.5 yillik tajribaga ega dasturchi'
              },
            ]
            export const values = [
    {
      icon: Target,
      title: 'Maqsadimiz',
      description: 'Zamonaviy IT kadrlarni tayyorlash va ularning professional rivojlanishiga yordam berish'
    },
    {
      icon: Eye,
      title: 'Vizyonimiz',
      description: "O'zbekistondagi eng yetakchi IT ta'lim markaziga aylanish va xalqaro standartlarni joriy etish"
    },
    {
      icon: Award,
      title: 'Sifat',
      description: 'Yuqori sifatli ta\'lim va amaliy ko\'nikmalar orqali talabalarni ish bozorига tayyorlash'
    },
    {
      icon: Globe,
      title: 'Global yondashuv',
      description: 'Xalqaro standartlar va eng yangi texnologiyalar asosida ta\'lim berish'
    }
  ];
  export   const achievements = [
    { number: '2500+', label: 'Muvaffaqiyatli bitiruvchi' },
    { number: '95%', label: 'Ish joylashgan bitiruvchilar' },
    { number: '25+', label: 'Professional kurslar' },
    { number: '50+', label: 'Tajribali o\'qituvchilar' }
  ];


  export   const blogPosts = [
    {
      id: 1,
      title: 'React 18 da nima yangi? Asosiy o\'zgarishlar',
      excerpt: 'React 18 versiyasidagi eng muhim yangiliklar va ularni qo\'llash yo\'llari haqida batafsil ma\'lumot.',
      content: 'React 18 da Concurrent Features, Automatic Batching, Suspense kabi yangi imkoniyatlar...',
      author: 'Akmal Rahimov',
      date: '2025-01-15',
      category: 'Dasturlash',
      readTime: '5 daqiqa',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      title: 'Junior Developer uchun karyera maslahatlar',
      excerpt: 'IT sohasida ish boshlayotgan yoshlar uchun foydali maslahatlar va yo\'l-yo\'riqlar.',
      content: 'IT sohasida muvaffaqiyatli karyera qurish uchun kerakli ko\'nikmalar...',
      author: 'Sevara Abdullayeva',
      date: '2025-01-12',
      category: 'Karyera',
      readTime: '8 daqiqa',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Karyera', 'Maslahat', 'Junior']
    },
    {
      id: 3,
      title: 'Python yoki JavaScript: Qaysi birini tanlash?',
      excerpt: 'Dasturlashni o\'rganishni boshlayotganlar uchun Python va JavaScript taqqoslovi.',
      content: 'Python va JavaScript tillarining afzalliklari va kamchiliklari...',
      author: 'Jasur Tursunov',
      date: '2025-01-10',
      category: 'Dasturlash',
      readTime: '6 daqiqa',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'JavaScript', 'Taqqoslash']
    },
    {
      id: 4,
      title: 'UI/UX Design trends 2025',
      excerpt: '2025-yilda kuzatilishi kutilayotgan asosiy UI/UX design trendlari.',
      content: 'Minimalizm, dark mode, 3D elementlar va boshqa trendlar...',
      author: 'Dilnoza Karimova',
      date: '2025-01-08',
      category: 'Texnologiya',
      readTime: '7 daqiqa',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['UI/UX', 'Design', 'Trends']
    },
    {
      id: 5,
      title: 'Machine Learning bilan tanishish',
      excerpt: 'Sun\'iy intellekt va machine learning asoslari haqida boshlang\'ich ma\'lumot.',
      content: 'Machine learning nima va u qanday ishlaydi...',
      author: 'Bobur Ahmedov',
      date: '2025-01-05',
      category: 'Texnologiya',
      readTime: '10 daqiqa',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AI', 'Machine Learning', 'Data Science']
    },
    {
      id: 6,
      title: 'DevOps amaliyotlari: Docker va Kubernetes',
      excerpt: 'Zamonaviy DevOps amaliyotlari va containerization texnologiyalari.',
      content: 'Docker va Kubernetes yordamida ilovalarni deploy qilish...',
      author: 'Madina Yusupova',
      date: '2025-01-03',
      category: 'Texnologiya',
      readTime: '12 daqiqa',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['DevOps', 'Docker', 'Kubernetes']
    }
  ];

  export const coursess = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Html Css Javascript React.js yordamida zamonaviy veb-interfeyslari yaratishni o'rganing",
    fullDescription:
      "Ushbu kurs React.js ning barcha asosiy va ilg'or mavzularini qamrab oladi. Siz React hooks, context API, Redux, React Router kabi muhim texnologiyalarni o'rganasiz. Kurs davomida real loyihalar ustida ishlab, portfolio uchun professional loyihalar yaratasiz.",
    category: "Frontend",
    level: "Boshlang'ich",
    duration: "8 oy",
    students: 730,
    rating: 4.9,
    price: "325,000",
    originalPrice: "500,000",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "Nodir",
      role: "Senior Frontend Developer",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
      experience: "2+ yil",
      courses: 2,
      students: 250,
    },
    curriculum: [
      {
        module: "Modul 1: React Asoslari",
        lessons: 8,
        duration: "3 hafta",
        topics: [
          "React ga kirish",
          "Components va JSX",
          "Props va State",
          "Event Handling",
          "Conditional Rendering",
          "Lists va Keys",
          "Forms bilan ishlash",
          "Lifecycle Methods",
        ],
      },
      {
        module: "Modul 2: React Hooks",
        lessons: 6,
        duration: "2 hafta",
        topics: [
          "useState Hook",
          "useEffect Hook",
          "useContext Hook",
          "useReducer Hook",
          "Custom Hooks",
          "Hook Rules va Best Practices",
        ],
      },
    ],
    features: [
      "Professional darajadagi bilimlar",
      "Real loyihalar ustida amaliyot",
      "Shaxsiy mentor yordami",
      "Rasmiy sertifikat",
      "Ish joyiga ko'mak",
    ],
    requirements: [
      "HTML va CSS bilimi (boshlang'ich daraja)",
      "JavaScript asoslari",
      "Kompyuter va internet aloqasi",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Angular Node.js va Express.js bilan server tomonni professional darajada rivojlantiring",
    fullDescription:
      "Ushbu kursda siz Node.js, Express.js, MongoDB va Angular yordamida zamonaviy backend tizimlarini yaratishni o'rganasiz. API yaratish, autentifikatsiya, xavfsizlik va ma'lumotlar bazasi bilan ishlash chuqur o‘rganiladi.",
    category: "Backend",
    level: "O'rta",
    duration: "7 oy",
    students: 320,
    rating: 4.8,
    price: "325,000",
    originalPrice: "480,000",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "Temur Axmatov",
      role: "Senior Backend Developer",
      avatar:
        "https://images.stockcake.com/public/e/7/1/e71ca2d8-cda0-461f-9d70-1e3c0dcb2d3f_large/handsome-man-portrait-stockcake.jpg",
      experience: "7+ yil",
      courses: 8,
      students: 900,
    },
    curriculum: [
      {
        module: "Modul 1: Backend Asoslari",
        lessons: 6,
        duration: "3 hafta",
        topics: [
          "Node.js ga kirish",
          "Express.js asoslari",
          "REST API yaratish",
          "Middleware bilan ishlash",
          "Ma'lumotlar bazasi bilan ulanish",
          "Error handling",
        ],
      },
      {
        module: "Modul 2: Angular Integratsiyasi",
        lessons: 5,
        duration: "2 hafta",
        topics: [
          "Angular asoslari",
          "Frontend-backend integratsiyasi",
          "HTTP so'rovlar",
          "Token asosida autentifikatsiya",
          "Data binding va services",
        ],
      },
    ],
    features: [
      "Full-stack bilimlar",
      "Real loyihalar",
      "Ma'lumotlar bazasi bilan ishlash",
      "Xavfsizlik asoslari",
      "Rasmiy sertifikat",
    ],
    requirements: [
      "JavaScript asoslari",
      "Frontend asoslari",
      "Kompyuter va internet aloqasi",
    ],
  },
  {
    id: 3,
    title: "Kompyuter Savodxonligi",
    description:
      "Kompyuter, ofis dasturlari va internetdan samarali foydalanishni o'rganing",
    fullDescription:
      "Kurs davomida siz Windows operatsion tizimi, Microsoft Word, Excel, PowerPoint, Google xizmatlari va internet xavfsizligi haqida bilib olasiz. Yangi boshlovchilar uchun mos va kundalik hayotda ham, ish jarayonida ham foydali bo‘ladi.",
    category: "IT Asoslari",
    level: "Boshlang'ich",
    duration: "4 oy",
    students: 500,
    rating: 4.7,
    price: "200,000",
    originalPrice: "300,000",
    image:
      "https://images.pexels.com/photos/374748/pexels-photo-374748.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "Muxlisa",
      role: "IT O'qituvchi",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500",
      experience: "3+ yil",
      courses: 3,
      students: 400,
    },
    curriculum: [
      {
        module: "Modul 1: Kompyuter Asoslari",
        lessons: 5,
        duration: "2 hafta",
        topics: [
          "Windows asoslari",
          "Fayl va papkalar bilan ishlash",
          "Klaviatura va sichqoncha amaliyoti",
          "Dasturlarni o‘rnatish va o‘chirish",
          "Internet asoslari",
        ],
      },
      {
        module: "Modul 2: Ofis Dasturlari",
        lessons: 6,
        duration: "2 hafta",
        topics: [
          "Microsoft Word",
          "Microsoft Excel",
          "Microsoft PowerPoint",
          "Google Docs",
          "Google Sheets",
          "Google Slides",
        ],
      },
    ],
    features: [
      "Yangi boshlovchilar uchun mos",
      "Amaliy mashg'ulotlar",
      "Oson tushunarli darslar",
      "Sertifikat",
    ],
    requirements: ["Kompyuter va internet aloqasi"],
  },
  {
    id: 4,
    title: "Koreys Tili",
    description:
      "Noldan koreys tilini o‘rganing va muloqot qila olish darajasiga chiqing",
    fullDescription:
      "Ushbu kursda siz koreys alifbosi, grammatikasi, talaffuzi va kundalik so‘zlashuv iboralarini o‘rganasiz. Til amaliyotlari va audio-video materiallar yordamida eshitish, gapirish, o‘qish va yozish ko‘nikmalaringizni rivojlantirasiz.",
    category: "Til o‘rganish",
    level: "Boshlang'ich",
    duration: "6 oy",
    students: 450,
    rating: 4.9,
    price: "300,000",
    originalPrice: "450,000",
    image:
      "https://images.pexels.com/photos/3228764/pexels-photo-3228764.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "Aziza",
      role: "Koreys Tili O'qituvchisi",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500",
      experience: "5+ yil",
      courses: 5,
      students: 800,
    },
    curriculum: [
      {
        module: "Modul 1: Kirish",
        lessons: 4,
        duration: "2 hafta",
        topics: [
          "Hangul alifbosi",
          "Tovushlar va talaffuz",
          "O‘zini tanishtirish",
          "Oddiy salomlashuvlar",
        ],
      },
      {
        module: "Modul 2: Grammatik Asoslar",
        lessons: 6,
        duration: "3 hafta",
        topics: [
          "Otlar va fe’llar",
          "Gap tuzilishi",
          "Zamonlar",
          "Savol va inkor gaplar",
          "Sanash va vaqt",
          "Kunlik iboralar",
        ],
      },
    ],
    features: [
      "Talaffuz va tinglash mashqlari",
      "Audio-video materiallar",
      "Amaliy suhbat darslari",
      "Sertifikat",
    ],
    requirements: ["Qiziqish va muntazam mashq qilish istagi"],
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Figma va Adobe XD yordamida foydalanuvchi interfeyslari yaratishni o‘rganing",
    fullDescription:
      "Kurs davomida siz zamonaviy UI/UX dizayn prinsiplari, rang tanlash, tipografiya va foydalanuvchi tajribasini oshirish usullarini o‘rganasiz. Real loyihalarda ishlash orqali portfoliongizni boyitasiz.",
    category: "Dizayn",
    level: "Boshlang'ich",
    duration: "5 oy",
    students: 380,
    rating: 4.8,
    price: "250,000",
    originalPrice: "400,000",
    image:
      "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "Dilshod",
      role: "UI/UX Dizayner",
      avatar:
        "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=500",
      experience: "4+ yil",
      courses: 4,
      students: 600,
    },
    curriculum: [
      {
        module: "Modul 1: Dizayn Asoslari",
        lessons: 5,
        duration: "2 hafta",
        topics: [
          "UI va UX farqi",
          "Dizayn prinsiplari",
          "Ranglar nazariyasi",
          "Tipografiya",
          "Layout va grid tizimlari",
        ],
      },
      {
        module: "Modul 2: Figma Asoslari",
        lessons: 6,
        duration: "3 hafta",
        topics: [
          "Figma interfeysi",
          "Frame va komponentlar",
          "Style va effektlar",
          "Prototype yaratish",
          "Responsive dizayn",
          "Amaliy loyiha",
        ],
      },
    ],
    features: [
      "Portfolioga ega bo‘lish imkoniyati",
      "Real loyihalarda amaliyot",
      "Mentor yordami",
      "Sertifikat",
    ],
    requirements: ["Kompyuter va internet aloqasi", "Ijodkorlik"],
  },
  {
    id: 6,
    title: "Data Science",
    description:
      "Python, Pandas, NumPy va Machine Learning asoslarini o‘rganing",
    fullDescription:
      "Kurs davomida siz ma’lumotlarni tahlil qilish, tozalash, vizualizatsiya qilish va mashinani o‘qitish asoslarini o‘rganasiz. Real datasetlar ustida ishlash orqali amaliy ko‘nikmalarga ega bo‘lasiz.",
    category: "Data",
    level: "Yuqori",
    duration: "9 oy",
    students: 210,
    rating: 4.9,
    price: "400,000",
    originalPrice: "600,000",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "Javlon",
      role: "Data Scientist",
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=500",
      experience: "6+ yil",
      courses: 6,
      students: 450,
    },
    curriculum: [
      {
        module: "Modul 1: Python Asoslari",
        lessons: 5,
        duration: "3 hafta",
        topics: [
          "Python sintaksisi",
          "Ma’lumot turlari",
          "Funksiyalar",
          "Modullar",
          "Fayllar bilan ishlash",
        ],
      },
      {
        module: "Modul 2: Data Analysis Kutubxonalari",
        lessons: 6,
        duration: "3 hafta",
        topics: [
          "NumPy asoslari",
          "Pandas bilan ishlash",
          "Matplotlib va Seaborn",
          "Ma’lumotlarni tozalash",
          "Vizualizatsiya",
          "Statistik tahlil",
        ],
      },
    ],
    features: [
      "Amaliy datasetlar bilan ishlash",
      "Mashina o‘qitish asoslari",
      "Portfolio loyihasi",
      "Sertifikat",
    ],
    requirements: [
      "Python asoslari",
      "Matematika va statistika bilimlari",
      "Kompyuter va internet aloqasi",
    ],
  },
];



export const instructors = [
  {
    id: 1,
    name: "Nodir",
    role: "Middle Frontend Developer",
    specialization: "React, Vue.js, Angular",
    experience: "2 yil",
    students: 250,
    rating: 4.0,
    courses: 3,
    image:
      "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
    bio: "Google va Microsoft kabi yirik kompaniyalarda ishlagan. Frontend texnologiyalari bo'yicha mutaxassis.",
    achievements: [
      "Google Developer Expert",
      "Microsoft MVP",
      "50+ loyiha yaratgan",
    ],
  },
  {
    id: 2,
    name: "Temur Axmatov",
    role: "Senior Backend Developer",
    specialization: "Node.js, Python, Java",
    experience: "7 yil",
    students: 480,
    rating: 5.0,
    courses: 8,
    image:
      "https://images.stockcake.com/public/e/7/1/e71ca2d8-cda0-461f-9d70-1e3c0dcb2d3f_large/handsome-man-portrait-stockcake.jpg",
    bio: "Angular Node.js va Express.js bilan server tomonni professional darajada rivojlantiring",
    achievements: ["Angular", "Node.js", "1Express.js", "va boshqalar"],
  },
 
];

// instructors.ts

export const instructorss = [
  {
    id: 1,
    name: "Nodir",
    role: "Middle Frontend Developer",
    specialization: "React, Vue.js, Angular",
    experience: "2 yil",
    students: 250,
    rating: 4.0,
    courses: 3,
    image:
      "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
    bio: "Google va Microsoft kabi yirik kompaniyalarda ishlagan. Frontend texnologiyalari bo'yicha mutaxassis.",
    achievements: [
      "Google Developer Expert",
      "Microsoft MVP",
      "50+ loyiha yaratgan",
    ],
  },
  {
    id: 2,
    name: "Temur Axmatov",
    role: "Senior Backend Developer",
    specialization: "Node.js, Python, Java",
    experience: "7 yil",
    students: 480,
    rating: 5.0,
    courses: 8,
    image:
      "https://images.stockcake.com/public/e/7/1/e71ca2d8-cda0-461f-9d70-1e3c0dcb2d3f_large/handsome-man-portrait-stockcake.jpg",
    bio: "Angular Node.js va Express.js bilan server tomonni professional darajada rivojlantiring",
    achievements: ["Angular", "Node.js", "1Express.js", "va boshqalar"],
  },
  {
    id: 3,
    name: "Muxlisa",
    role: "Kampyuter Savodhonligi",
    specialization: "Microsoft Office, AI",
    experience: "2 yil",
    students: 320,
    rating: 4.5,
    courses: 3,
    image: "src/assets/muxlisa.jpg",
    bio: "Kompyuterdan samarali foydalanish, Microsoft Office dasturlari, internet va xavfsizlik asoslarini o‘rganing.",
    achievements: ["Microsoft Office", "AI"],
  },
  {
    id: 4,
    name: "Jahon",
    role: "Frontend Devoloper",
    specialization: "Html, Css, Javascript",
    experience: "1.5 yil",
    students: 100,
    rating: 3.8,
    courses: 3,
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dizayn sohasida ko'p yillik tajribaga ega. Foydalanuvchi tajribasi va interfeys dizayni bo'yicha ekspert.",
    achievements: [
      "Adobe Certified Expert",
      "Design System Expert",
      "UX Research Specialist",
    ],
  },
] 
