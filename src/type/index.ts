export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

 export  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
// src/types/course.ts
export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  experience: string;
  courses: number;
  students: number;
}

export interface CurriculumModule {
  module: string;
  lessons: number;
  duration: string;
  topics: string[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  originalPrice?: string;
  image: string;
  reviews?: number;
  fullDescription?: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    experience: string;
    courses: number;
    students: number;
  };
  curriculum?: {
    module: string;
    lessons: number;
    duration: string;
    topics: string[];
  }[];
  requirements: string[];
  features: string[];
}
// types/instructor.ts
export interface Instructor {
  id: number;
  name: string;
  image: string;
  role: string;
  specialization: string;
  courses: number;
  students: number;
  rating: number;
  experience: string;
  bio: string;
  achievements: string[];
}

