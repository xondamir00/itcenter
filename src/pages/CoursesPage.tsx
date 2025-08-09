import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, ChevronRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../type';
import { type Course } from '../type/index';

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedLevel, setSelectedLevel] = useState('Barchasi');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Barchasi', 'Frontend', 'Backend', 'Koreys tili', 'Kampyuter Savodxonligi'];
  const levels = ['Barchasi', "Boshlang'ich", "O'rta", "Ilg'or"];

  // Ma'lumotlarni db.json dan olish
  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then((data: Course[]) => setCourses(data))
      .catch(err => console.error("Ma'lumotlarni yuklashda xatolik:", err));
  }, []);

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'Barchasi' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'Barchasi' || course.level === selectedLevel;
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
      className="pt-16 min-h-screen bg-gray-50"
    >
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Barcha kurslar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IT sohasining barcha yo'nalishlarida professional ko'nikmalar oling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Kurs qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700">Kategoriya:</span>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">Daraja:</span>
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course) => (
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
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-2 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4  h-[10vh]">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
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
                    Batafsil ma'lumot
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-500">Hech qanday kurs topilmadi</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default CoursesPage;
