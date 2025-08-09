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
      title: 'Mobile Development',
      description: 'React Native va Flutter yordamida mobil ilovalar yaratish',
      duration: '7 oy',
      level: "O'rta",
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '2,000,000'
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
