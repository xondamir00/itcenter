import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Clock, Users, Star, Calendar, CheckCircle,
  FileText, Award, ArrowLeft
} from 'lucide-react';
import { containerVariants, itemVariants, type Course } from '../type/index';
import { coursess } from '@/constants';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const foundCourse = coursess.find((c) => c.id.toString() === id);
    setCourse(foundCourse || null);
  }, [id]);

  
  if (!course) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Kurs topilmadi</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen bg-gray-50"
    >
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/courses"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kurslarga qaytish
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2">
              <motion.div variants={itemVariants}>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{course.students} talaba</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                    <span>{course.rating} ({course.reviews ?? 0} sharh)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Har oy yangi guruh</span>
                  </div>
                </div>

                {/* Instructor */}
                {course.instructor && (
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{course.instructor.name}</h3>
                      <p className="text-sm text-gray-600">{course.instructor.role}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>{course.instructor.experience} tajriba</span>
                        <span>{course.instructor.courses} kurs</span>
                        <span>{course.instructor.students} talaba</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <motion.div variants={itemVariants} className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                        <span className="text-lg text-gray-900">so'm</span>
                      </div>
                      {course.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">{course.originalPrice} so'm</p>
                      )}
                      <p className="text-sm text-green-600 font-medium">25% chegirma!</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <Link to="/contact">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
                          Hoziroq yoziling
                        </button>
                      </Link>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        30 kunlik pul qaytarish kafolati
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Lifetime access
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Rasmiy sertifikat
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Mobil va kompyuter orqali
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {course.fullDescription && (
                <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurs haqida</h2>
                  <p className="text-gray-600 leading-relaxed">{course.fullDescription}</p>
                </motion.div>
              )}

              {course.curriculum && (
                <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Kurs dasturi</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <div className="p-4 bg-gray-50 border-b">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">{module.module}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{module.lessons} dars</span>
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {course.requirements && (
                <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Talablar</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <FileText className="h-5 w-5 text-blue-600 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {course.features && (
              <div className="lg:col-span-1">
                <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-yellow-500 mr-2" />
                    Kurs afzalliklari
                  </h2>
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CourseDetailPage;
