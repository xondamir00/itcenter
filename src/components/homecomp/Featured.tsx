import { ArrowRight, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

import { motion } from 'framer-motion';

import { containerVariants, itemVariants,  } from "../../type";
import { courses,  } from "@/constants";
  const threeCourses = courses.slice(0, 3);
  
const Featured = () => {
    
  
  
  return (
    
     <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold  mb-4">
              Mashhur kurslar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IT sohasining eng so'ralgan yo'nalishlarida chuqur bilim va amaliy ko'nikmalar oling
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {threeCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title_key}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.level_key}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold  mb-2">{course.title_key}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed h-[10vh]">{course.description_key}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Davomiyligi: {course.duration_months}</span>
                    <span className="text-2xl font-bold text-blue-600">{course.price_amount} so'm</span>
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

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Barcha kurslar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
  )
}

export default Featured