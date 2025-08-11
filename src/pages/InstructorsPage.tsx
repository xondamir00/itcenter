import {  instructorss, stats2 } from '@/constants';
import { containerVariants, itemVariants } from '@/type';
import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';


// 1. Interfeys

const InstructorsPage = () => {
  // 2. Tip bilan state
  

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen "
    >
      {/* Header */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold  mb-6">
              Bizning o'qituvchilar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IT sohasining eng tajribali va professional mutaxassislari sizni o'qitadi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats2.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instructors List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {instructorss.map((instructor) => (
              <motion.div
                key={instructor.id}
                variants={itemVariants}
                className="dark:bg-gray-300 border rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative p-6 pb-0">
                  <div className="text-center mb-6">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">{instructor.role}</p>
                    <p className="text-gray-600 text-sm">{instructor.specialization}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <BookOpen className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="font-bold text-gray-900">{instructor.courses}</span>
                      </div>
                      <p className="text-xs text-gray-600">Kurslar</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="font-bold text-gray-900">{instructor.students}</span>
                      </div>
                      <p className="text-xs text-gray-600">Talabalar</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-bold text-gray-900">{instructor.rating}</span>
                      <span className="text-gray-600 text-sm ml-1">reyting</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {instructor.experience} tajriba
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-gray-600 h-[8vh] text-sm mb-4 leading-relaxed">
                    {instructor.bio}
                  </p>

                  <div className="space-y-2 h-[10vh]">
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <Award className="h-3 w-3 mr-1 text-orange-500" />
                      <span className="font-medium">Yutuqlari:</span>
                    </div>
                    {instructor.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <Link to={'/contact'}>
                    <button className="w-full mt-6 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                      Kursga yozdirish
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              O'qituvchi bo'lishni xohlaysizmi?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              IT sohasidagi tajribangizni boshqalar bilan bo'lishishni istasangiz, bizga qo'shiling!
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl transition-colors">
              Ariza qoldirish
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default InstructorsPage;
