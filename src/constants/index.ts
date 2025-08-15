import { Award, BookOpen, Clock, Eye, Globe, Mail, MapPin, Phone, Target, Users, } from "lucide-react";

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
    title_key: 'courses.frontend.title',
    description_key: 'courses.frontend.description',
    duration_months: 6,
    level_key: 'beginner', // courses.level.beginner deb ham yozsa bo'ladi
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    price_amount: '325,000'
  },
  {
    id: 2,
    title_key: 'courses.backend.title',
    description_key: 'courses.backend.description',
    duration_months: 8,
    level_key: 'intermediate',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    price_amount: '325,000'
  },
  {
    id: 3,
    title_key: 'courses.computer_literacy.title',
    description_key: 'courses.computer_literacy.description',
    duration_months: 2,
    level_key: 'beginner',
    image: 'https://bilgi.uz/upload/resize_cache/iblock/a47/jgri9zvx35kcmqp6gw33ejq021i9rgcc/780_470_2/ZuhrStar.jpg',
    price_amount: '250,000'
  },
  {
    id: 4,
    title_key: 'courses.ui_ux.title',
    description_key: 'courses.ui_ux.description',
    duration_months: 5,
    level_key: 'beginner',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    price_amount: '350,000'
  },
  {
    id: 6,
    title_key: 'courses.korean.title',
    description_key: 'courses.korean.description',
    duration_months: 6,
    level_key: 'beginner',
    image: 'https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg',
    price_amount: '300,000'
  }
];


export const statsData = [
  { 
    label: 'stats.students', 
    value: '2500+', 
    icon: Users
  },
  { 
    label: 'stats.courses', 
    value: '25+', 
    icon: BookOpen 
  },
  { 
    label: 'stats.certificates', 
    value: '1800+', 
    icon: Award 
  },
  { 
    label: 'stats.experience', 
    value: 'stats.years', 
    years: 5,
    icon: Clock 
  }
];
export const stats2 = [
  { number: '50+', labelKey: "statsLabels1.teachersCount" },       // O'qituvchilar soni
  { number: '100+', labelKey: "statsLabels1.yearsExperience" },    // Yillik tajriba
  { number: '2500+', labelKey: "statsLabels1.students" },          // Talabalar
  { number: '4.8', labelKey: "statsLabels1.averageRating" }        // O'rtacha reyting
];



export const contactInfo = [
  {
    icon: Phone,
    titleKey: 'contact.info.phone',
    details: ['+998 (77) 030-43-21', '+998 (93) 030-43-21'],
    descriptionKey: 'contact.infoDesc.phone',
  },
  {
    icon: Mail,
    titleKey: 'contact.info.email',
    details: ['info@itmarkazi.uz', 'admin@itmarkazi.uz'],
    descriptionKey: 'contact.infoDesc.email',
  },
  {
    icon: MapPin,
    titleKey: 'contact.info.address',
    details: ['Jizzax sh, Zarbdor tumani', 'Davlat xizmatlari binosi, 1-qavat'],
  },
  {
    icon: Clock,
    titleKey: 'contact.info.workingHours',
    details: ['Dushanba - Shanba: 8:00 - 18:00'],
    descriptionKey: 'contact.infoDesc.workingHours',
  },
];


export const achievements = [
  { number: '2500+', labelKey: 'about2.achievements.items.0.label' },
  { number: '95%', labelKey: 'about2.achievements.items.1.label' },
  { number: '25+', labelKey: 'about2.achievements.items.2.label' },
  { number: '50+', labelKey: 'about2.achievements.items.3.label' }
];

export const values = [
  { icon: Target, titleKey: 'about2.values.items.0.title', descriptionKey: 'about2.values.items.0.description' },
  { icon: Eye, titleKey: 'about2.values.items.1.title', descriptionKey: 'about2.values.items.1.description' },
  { icon: Award, titleKey: 'about2.values.items.2.title', descriptionKey: 'about2.values.items.2.description' },
  { icon: Globe, titleKey: 'about2.values.items.3.title', descriptionKey: 'about2.values.items.3.description' }
];

export const oqituvchilar = [
  {
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    nameKey: 'about2.team.members.0.name',
    roleKey: 'about2.team.members.0.role',
    descriptionKey: 'about2.team.members.0.description'
  },
  {
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    nameKey: 'about2.team.members.1.name',
    roleKey: 'about2.team.members.1.role',
    descriptionKey: 'about2.team.members.1.description'
  },
  {
    image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400',
    nameKey: 'about2.team.members.2.name',
    roleKey: 'about2.team.members.2.role',
    descriptionKey: 'about2.team.members.2.description'
  },
  
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

//   export const coursess = [
//   {
//     id: 1,
//     title: "card.frontend.title",
//     description:
//       "card.frontend.description",
//     fullDescription:
//       "Ushbu kurs React.js ning barcha asosiy va ilg'or mavzularini qamrab oladi. Siz React hooks, context API, Redux, React Router kabi muhim texnologiyalarni o'rganasiz. Kurs davomida real loyihalar ustida ishlab, portfolio uchun professional loyihalar yaratasiz.",
//     category: "Frontend",
//     level: "card.level.beginner",
//     duration: "8 oy",
//     students: 730,
//     rating: 4.9,
//     price: "325,000",
//     originalPrice: "500,000",
//     image:
//       "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
//     instructor: {
//       name: "Nodir",
//       role: "Senior Frontend Developer",
//       avatar:
//         "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
//       experience: "2+ yil",
//       courses: 2,
//       students: 250,
//     },
//     curriculum: [
//       {
//         module: "Modul 1: React Asoslari",
//         lessons: 8,
//         duration: "3 hafta",
//         topics: [
//           "React ga kirish",
//           "Components va JSX",
//           "Props va State",
//           "Event Handling",
//           "Conditional Rendering",
//           "Lists va Keys",
//           "Forms bilan ishlash",
//           "Lifecycle Methods",
//         ],
//       },
//       {
//         module: "Modul 2: React Hooks",
//         lessons: 6,
//         duration: "2 hafta",
//         topics: [
//           "useState Hook",
//           "useEffect Hook",
//           "useContext Hook",
//           "useReducer Hook",
//           "Custom Hooks",
//           "Hook Rules va Best Practices",
//         ],
//       },
//     ],
//     features: [
//       "Professional darajadagi bilimlar",
//       "Real loyihalar ustida amaliyot",
//       "Shaxsiy mentor yordami",
//       "Rasmiy sertifikat",
//       "Ish joyiga ko'mak",
//     ],
//     requirements: [
//       "HTML va CSS bilimi (boshlang'ich daraja)",
//       "JavaScript asoslari",
//       "Kompyuter va internet aloqasi",
//     ],
//   },
//   {
//     id: 2,
//     title: "Backend Development",
//     description:
//       "Angular Node.js va Express.js bilan server tomonni professional darajada rivojlantiring",
//     fullDescription:
//       "Ushbu kursda siz Node.js, Express.js, MongoDB va Angular yordamida zamonaviy backend tizimlarini yaratishni o'rganasiz. API yaratish, autentifikatsiya, xavfsizlik va ma'lumotlar bazasi bilan ishlash chuqur o‘rganiladi.",
//     category: "Backend",
//     level: "O'rta",
//     duration: "7 oy",
//     students: 320,
//     rating: 4.8,
//     price: "325,000",
//     originalPrice: "480,000",
//     image:
//       "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500",
//     instructor: {
//       name: "Temur Axmatov",
//       role: "Senior Backend Developer",
//       avatar:
//         "https://images.stockcake.com/public/e/7/1/e71ca2d8-cda0-461f-9d70-1e3c0dcb2d3f_large/handsome-man-portrait-stockcake.jpg",
//       experience: "7+ yil",
//       courses: 8,
//       students: 900,
//     },
//     curriculum: [
//       {
//         module: "Modul 1: Backend Asoslari",
//         lessons: 6,
//         duration: "3 hafta",
//         topics: [
//           "Node.js ga kirish",
//           "Express.js asoslari",
//           "REST API yaratish",
//           "Middleware bilan ishlash",
//           "Ma'lumotlar bazasi bilan ulanish",
//           "Error handling",
//         ],
//       },
//       {
//         module: "Modul 2: Angular Integratsiyasi",
//         lessons: 5,
//         duration: "2 hafta",
//         topics: [
//           "Angular asoslari",
//           "Frontend-backend integratsiyasi",
//           "HTTP so'rovlar",
//           "Token asosida autentifikatsiya",
//           "Data binding va services",
//         ],
//       },
//     ],
//     features: [
//       "Full-stack bilimlar",
//       "Real loyihalar",
//       "Ma'lumotlar bazasi bilan ishlash",
//       "Xavfsizlik asoslari",
//       "Rasmiy sertifikat",
//     ],
//     requirements: [
//       "JavaScript asoslari",
//       "Frontend asoslari",
//       "Kompyuter va internet aloqasi",
//     ],
//   },
//   {
//     id: 3,
//     title: "Kompyuter Savodxonligi",
//     description:
//       "Kompyuter, ofis dasturlari va internetdan samarali foydalanishni o'rganing",
//     fullDescription:
//       "Kurs davomida siz Windows operatsion tizimi, Microsoft Word, Excel, PowerPoint, Google xizmatlari va internet xavfsizligi haqida bilib olasiz. Yangi boshlovchilar uchun mos va kundalik hayotda ham, ish jarayonida ham foydali bo‘ladi.",
//     category: "Kampyuter Savodxonligi",
//     level: "Boshlang'ich",
//     duration: "4 oy",
//     students: 500,
//     rating: 4.7,
//     price: "200,000",
//     originalPrice: "300,000",
//     image:
//       "https://bilgi.uz/upload/resize_cache/iblock/a47/jgri9zvx35kcmqp6gw33ejq021i9rgcc/780_470_2/ZuhrStar.jpg",
//     instructor: {
//       name: "Muxlisa",
//       role: "IT O'qituvchi",
//       avatar:
//         "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500",
//       experience: "3+ yil",
//       courses: 3,
//       students: 400,
//     },
//     curriculum: [
//       {
//         module: "Modul 1: Kompyuter Asoslari",
//         lessons: 5,
//         duration: "2 hafta",
//         topics: [
//           "Windows asoslari",
//           "Fayl va papkalar bilan ishlash",
//           "Klaviatura va sichqoncha amaliyoti",
//           "Dasturlarni o‘rnatish va o‘chirish",
//           "Internet asoslari",
//         ],
//       },
//       {
//         module: "Modul 2: Ofis Dasturlari",
//         lessons: 6,
//         duration: "2 hafta",
//         topics: [
//           "Microsoft Word",
//           "Microsoft Excel",
//           "Microsoft PowerPoint",
//           "Google Docs",
//           "Google Sheets",
//           "Google Slides",
//         ],
//       },
//     ],
//     features: [
//       "Yangi boshlovchilar uchun mos",
//       "Amaliy mashg'ulotlar",
//       "Oson tushunarli darslar",
//       "Sertifikat",
//     ],
//     requirements: ["Kompyuter va internet aloqasi"],
//   },
//   {
//     id: 4,
//     title: "Koreys Tili",
//     description:
//       "Noldan koreys tilini o‘rganing va muloqot qila olish darajasiga chiqing",
//     fullDescription:
//       "Ushbu kursda siz koreys alifbosi, grammatikasi, talaffuzi va kundalik so‘zlashuv iboralarini o‘rganasiz. Til amaliyotlari va audio-video materiallar yordamida eshitish, gapirish, o‘qish va yozish ko‘nikmalaringizni rivojlantirasiz.",
//     category: "Koreys Tili",
//     level: "Boshlang'ich",
//     duration: "6 oy",
//     students: 450,
//     rating: 4.9,
//     price: "300,000",
//     originalPrice: "450,000",
//     image:
//       "https://toping.uz/storage/articles/230/JeNBJeQgAAf2zTBSXAWCWftRzvoP2hyK.webp",
//     instructor: {
//       name: "Aziza",
//       role: "Koreys Tili O'qituvchisi",
//       avatar:
//         "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500",
//       experience: "5+ yil",
//       courses: 5,
//       students: 800,
//     },
//     curriculum: [
//       {
//         module: "Modul 1: Kirish",
//         lessons: 4,
//         duration: "2 hafta",
//         topics: [
//           "Hangul alifbosi",
//           "Tovushlar va talaffuz",
//           "O‘zini tanishtirish",
//           "Oddiy salomlashuvlar",
//         ],
//       },
//       {
//         module: "Modul 2: Grammatik Asoslar",
//         lessons: 6,
//         duration: "3 hafta",
//         topics: [
//           "Otlar va fe’llar",
//           "Gap tuzilishi",
//           "Zamonlar",
//           "Savol va inkor gaplar",
//           "Sanash va vaqt",
//           "Kunlik iboralar",
//         ],
//       },
//     ],
//     features: [
//       "Talaffuz va tinglash mashqlari",
//       "Audio-video materiallar",
//       "Amaliy suhbat darslari",
//       "Sertifikat",
//     ],
//     requirements: ["Qiziqish va muntazam mashq qilish istagi"],
//   },
//   {
//     id: 5,
//     title: "UI/UX Design",
//     description:
//       "Figma va Adobe XD yordamida foydalanuvchi interfeyslari yaratishni o‘rganing",
//     fullDescription:
//       "Kurs davomida siz zamonaviy UI/UX dizayn prinsiplari, rang tanlash, tipografiya va foydalanuvchi tajribasini oshirish usullarini o‘rganasiz. Real loyihalarda ishlash orqali portfoliongizni boyitasiz.",
//     category: "Dizayn",
//     level: "Boshlang'ich",
//     duration: "5 oy",
//     students: 380,
//     rating: 4.8,
//     price: "250,000",
//     originalPrice: "400,000",
//     image:
//       "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=500",
//     instructor: {
//       name: "Dilshod",
//       role: "UI/UX Dizayner",
//       avatar:
//         "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=500",
//       experience: "4+ yil",
//       courses: 4,
//       students: 600,
//     },
//     curriculum: [
//       {
//         module: "Modul 1: Dizayn Asoslari",
//         lessons: 5,
//         duration: "2 hafta",
//         topics: [
//           "UI va UX farqi",
//           "Dizayn prinsiplari",
//           "Ranglar nazariyasi",
//           "Tipografiya",
//           "Layout va grid tizimlari",
//         ],
//       },
//       {
//         module: "Modul 2: Figma Asoslari",
//         lessons: 6,
//         duration: "3 hafta",
//         topics: [
//           "Figma interfeysi",
//           "Frame va komponentlar",
//           "Style va effektlar",
//           "Prototype yaratish",
//           "Responsive dizayn",
//           "Amaliy loyiha",
//         ],
//       },
//     ],
//     features: [
//       "Portfolioga ega bo‘lish imkoniyati",
//       "Real loyihalarda amaliyot",
//       "Mentor yordami",
//       "Sertifikat",
//     ],
//     requirements: ["Kompyuter va internet aloqasi", "Ijodkorlik"],
//   },
//   {
//     id: 6,
//     title: "Data Science",
//     description:
//       "Python, Pandas, NumPy va Machine Learning asoslarini o‘rganing",
//     fullDescription:
//       "Kurs davomida siz ma’lumotlarni tahlil qilish, tozalash, vizualizatsiya qilish va mashinani o‘qitish asoslarini o‘rganasiz. Real datasetlar ustida ishlash orqali amaliy ko‘nikmalarga ega bo‘lasiz.",
//     category: "Data",
//     level: "Yuqori",
//     duration: "9 oy",
//     students: 210,
//     rating: 4.9,
//     price: "400,000",
//     originalPrice: "600,000",
//     image:
//       "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
//     instructor: {
//       name: "Javlon",
//       role: "Data Scientist",
//       avatar:
//         "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=500",
//       experience: "6+ yil",
//       courses: 6,
//       students: 450,
//     },
//     curriculum: [
//       {
//         module: "Modul 1: Python Asoslari",
//         lessons: 5,
//         duration: "3 hafta",
//         topics: [
//           "Python sintaksisi",
//           "Ma’lumot turlari",
//           "Funksiyalar",
//           "Modullar",
//           "Fayllar bilan ishlash",
//         ],
//       },
//       {
//         module: "Modul 2: Data Analysis Kutubxonalari",
//         lessons: 6,
//         duration: "3 hafta",
//         topics: [
//           "NumPy asoslari",
//           "Pandas bilan ishlash",
//           "Matplotlib va Seaborn",
//           "Ma’lumotlarni tozalash",
//           "Vizualizatsiya",
//           "Statistik tahlil",
//         ],
//       },
//     ],
//     features: [
//       "Amaliy datasetlar bilan ishlash",
//       "Mashina o‘qitish asoslari",
//       "Portfolio loyihasi",
//       "Sertifikat",
//     ],
//     requirements: [
//       "Python asoslari",
//       "Matematika va statistika bilimlari",
//       "Kompyuter va internet aloqasi",
//     ],
//   },
// ];
export const coursess = [
  
  {
    id: 1,
    title: "card.frontend.title",
    description: "card.frontend.description",
    fullDescription: "card.frontend.fullDescription",
    category: "Frontend",
    level: "Boshlang'ich",
    duration: "card.frontend.duration",
    students: "80",
    rating: "4.2",
    price: "325,000",
    originalPrice: "500,000",
    image: "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
    instructor: {
      name: "card.frontend.name",
      role: "card.frontend.role",
      avatar: "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
      experience: "2+ yil",
      courses: "1+ yil",
      students: "250",
    },
    curriculum: [
      {
        module: "card.frontend.module1.name",
        lessons: "8",
        duration: "card.frontend.module1.duration",
        topics: [
          "card.frontend.topics.module1",
          "card.frontend.topics.module2",
          "card.frontend.topics.module3",
          "card.frontend.topics.module4",
          "card.frontend.topics.module5",
          "card.frontend.topics.module6",
          "card.frontend.topics.module7",
          "card.frontend.topics.module8",
        ],
      },
      {
        module: "card.frontend.module2.module",
        lessons: "6",
        duration: "card.frontend.module2.duration",
        topics: [
        "card.frontend.topics2.module1",
          "card.frontend.topics2.module2",
          "card.frontend.topics2.module3",
          "card.frontend.topics2.module4",
          "card.frontend.topics2.module5",
          "card.frontend.topics2.module6",
        ],
      },
    ],
    features: [
      "card.frontend.features.item1",
      "card.frontend.features.item2",
      "card.frontend.features.item3",
      "card.frontend.features.item4",
      "card.frontend.features.item5",
    ],
    requirements: [
      "card.frontend.requirements.item1",
      "card.frontend.requirements.item2",
      "card.frontend.requirements.item3",
    ],
  },
  {
    id: 2,
    title: "card.backend.title",
    description: "card.backend.description",
    fullDescription: "card.backend.fullDescription",
    category: "Backend",
    level: "Yuqori",
    duration: "8 oy",
    students: "35",
    rating: "4.8",
    price: "325,000",
    originalPrice: "480,000",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500",
    instructor: {
      name: "card.backend.name",
      role: "card.backend.role",
      avatar: "https://images.stockcake.com/public/e/7/1/e71ca2d8-cda0-461f-9d70-1e3c0dcb2d3f_large/handsome-man-portrait-stockcake.jpg",
      experience: "6+ yil",
      students: "350",
    },
    curriculum: [
      {
        module: "card.backend.module1.title",
        duration: "card.backend.module1.duration",
        topics: [
          "card.backend.topics.module1",
          "card.backend.topics.module2",
          "card.backend.topics.module3",
          "card.backend.topics.module4",
          "card.backend.topics.module5",
          "card.backend.topics.module6",
        ],
      },
      {
        module: "card.backend.module2.module",
        
        duration: "card.backend.module2.module",
        topics: [
          "card.backend.topics2.module1",
          "card.backend.topics2.module2",
          "card.backendtopics2.module3",
          "card.backend.topics2.module4",
          "card.backend.topics2.module5",
        ],
      },
    ],
    features: [
      "card.backend.features.item1",
      "card.backend.features.item2",
      "card.backend.features.item3",
      "card.backend.features.item4",
      "card.backend.features.item5",
    ],
    requirements: [
      "card.backend.requirements.item1",
      "card.backend.requirements.item2",
      "card.backend.requirements.item3",
    ],
  },{
    id: 3,
    title: "card.computers.title",
    description: "card.computers.description",
    fullDescription: "card.computers.fullDescription",
    category: "Kampyuter Savodxonligi",
    level: "Boshlang'ich",
    duration: "4 oy",
    students: "80",
    rating: "4.5",
    price: "200,000",
    originalPrice: "300,000",
    image: "https://bilgi.uz/upload/resize_cache/iblock/a47/jgri9zvx35kcmqp6gw33ejq021i9rgcc/780_470_2/ZuhrStar.jpg",
    instructor: {
      name: "card.computers.name",
      role: "card.computers.role",
      avatar: "https://bilgi.uz/upload/resize_cache/iblock/a47/jgri9zvx35kcmqp6gw33ejq021i9rgcc/780_470_2/ZuhrStar.jpg",
      experience: "2+ yil",
      
      students: "80",
    },
    curriculum: [
      {
        module: "card.computers.module1.name",
        
        duration: "card.computers.module1.duration",
        topics: [
          "card.computers.topics.module1",
          "card.computers.topics.module2",
          "card.computers.topics.module3",
          "card.computers.topics.module4",
          "card.computers.topics.module5"
          
        ],
      },
      {
        module: "card.computers.module2.module",
        
        duration: "card.computers.module2.duration",
        topics: [
          "card.computers.topic2.module1",
          "card.computers.topic2.module2",
          "card.computers.topic2.module3",
          "card.computers.topic2.module4",
          "card.computers.topic2.module5",
          "card.computers.topic2.module6",
        ],
      },
    ],
    features: [
      "card.computers.features.item1",
      "card.computers.features.item2",
      "card.computers.features.item3",
      "card.computers.features.item4",
      "card.computers.features.item5",
    ],
    requirements: [
      "card.computers.requirements.item1",
      "card.computers.requirements.item2",
      "card.computers.requirements.item3",
      "card.computers.requirements.item4",
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
    image: "https://static.vecteezy.com/system/resources/previews/026/408/668/non_2x/man-fashion-smile-face-handsome-portrait-hipster-photo.jpg",
    role_key: "instructors.nodir.role",
    specialization_key: "instructors.nodir.specialization",
    experience_key: "instructors.nodir.experience",
    bio_key: "instructors.nodir.bio",
    achievements_keys: [
      "instructors.nodir.achievements.item1",
      "instructors.nodir.achievements.item2",
      "instructors.nodir.achievements.item3"
    ],
    students: 250,
    rating: 4.0,
    courses: 3
  },
  {
    id: 2,
    name: "Timur Axmatov",
    image: "https://images.stockcake.com/public/e/7/1/e71ca2d8-cda0-461f-9d70-1e3c0dcb2d3f_large/handsome-man-portrait-stockcake.jpg",
    role_key: "instructors.temur.role",
    specialization_key: "instructors.temur.specialization",
    experience_key: "instructors.temur.experience",
    bio_key: "instructors.temur.bio",
    achievements_keys: [
      "instructors.temur.achievements.item1",
      "instructors.temur.achievements.item2",
      "instructors.temur.achievements.item3",
      "instructors.temur.achievements.item4"
    ],
    students: 480,
    rating: 5.0,
    courses: 8
  },
  {
    id: 3,
    name: "Muxlisa",
    image: "src/assets/muxlisa.jpg",
    role_key: "instructors.muxlisa.role",
    specialization_key: "instructors.muxlisa.specialization",
    experience_key: "instructors.muxlisa.experience",
    bio_key: "instructors.muxlisa.bio",
    achievements_keys: [
      "instructors.muxlisa.achievements.item1",
      "instructors.muxlisa.achievements.item2"
    ],
    students: 320,
    rating: 4.5,
    courses: 3
  }
];
