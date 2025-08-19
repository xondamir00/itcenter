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
  { number: '50+', labelKey: "statsLabels1.teachersCount" },       
  { number: '100+', labelKey: "statsLabels1.yearsExperience" },    
  { number: '2500+', labelKey: "statsLabels1.students" },          
  { number: '4.8', labelKey: "statsLabels1.averageRating" }        
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
      title: 'blog.cards1.name',
      excerpt: "blog.cards1.excerpt",
      content: 'blog.cards1.content',
      author: 'Akmal Rahimov',
      date: '2025-01-15',
      category: 'Dasturlash',
      readTime: 'blog.cards1.readTime',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ["blog.cards2.tags.item1","blog.cards2.tags.item2","blog.cards2.tags.item3"]
    },
    {
      id: 2,
      title: 'blog.cards2.name',
      excerpt: 'blog.cards2.excerpt',
      content: 'blog.cards2.content',
      author: 'Sevara Abdullayeva',
      date: '2025-01-12',
      category: 'Karyera',
      readTime: 'blog.cards2.readTime',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ["blog.cards2.tags.item1","blog.cards2.tags.item2","blog.cards2.tags.item3"]
    },
    {
      id: 3,
      title: 'blog.cards3.name',
      excerpt: 'blog.cards3.excerpt',
      content: 'blog.cards3.content',
      author: 'Jasur Tursunov',
      date: '2025-01-10',
      category: 'Dasturlash',
      readTime: 'blog.cards3.readTime',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ["blog.cards3.tags.item1","blog.cards3.tags.item2","blog.cards3.tags.item3"]
    }
  ];


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
        module: "card.backend.module1.name",
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
    price: "275,000",
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
