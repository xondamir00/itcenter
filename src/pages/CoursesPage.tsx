import { SiLevelsdotfyi } from "react-icons/si";
import  { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Users, Star, ChevronRight } from "lucide-react";
import { containerVariants, itemVariants } from "../type";
import { coursess } from "@/constants";
import { useTranslation } from "react-i18next";

const categories = ['Barchasi', 'Frontend', 'Backend', 'Kampyuter Savodxonligi'];
const levels = ['Barchasi', "Boshlang'ich", "O'rta", "Yuqori"];

const CoursesPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedLevel, setSelectedLevel] = useState('Barchasi');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursess.filter(course => {
    const categoryMatch =
      selectedCategory === "Barchasi" ||
      course.category.toLowerCase() === selectedCategory.toLowerCase();
    const levelMatch =
      selectedLevel === "Barchasi" ||
      course.level.toLowerCase() === selectedLevel.toLowerCase();
    const searchMatch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && levelMatch && searchMatch;
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen "
    >
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('courses.frontend.title') || "Barcha kurslar"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             {t("courses.frontend.description") || "IT sohasining barcha yo'nalishlarida professional ko'nikmalar oling"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Kurs qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Kategoriya:</span>
                <div className="w-full flex gap-3 items-center flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 border hover:bg-gray-200'
                      }`}
                    >
                      {t(category)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <SiLevelsdotfyi size={20} />
                <span className="font-medium">Daraja: </span>
                <div className="w-full flex items-center gap-3 flex-wrap">
                  {levels.map(level => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                        selectedLevel === level
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 border hover:bg-gray-200'
                      }`}
                    >
                      {t(level)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length ? filteredCourses.map(course => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t(course.level)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-sm font-medium">
                      {t(course.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(course.title)}</h3>
                  <p className="text-gray-600 mb-4  lg:h-[13vh]">{t(course.description)}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {t(course.duration)}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} talaba
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{course.price} so'm</span>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="group w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    {t('blog.learnmore')}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )) : (
              <motion.div variants={itemVariants} className="text-center py-12 col-span-full">
                <p className="text-xl text-gray-500">Hech qanday kurs topilmadi</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CoursesPage;
