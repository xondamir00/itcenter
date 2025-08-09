
import { motion } from 'framer-motion';
import {   TrendingUp } from 'lucide-react';
import { achievements, oqituvchilar, values } from '@/constants';
import { containerVariants, itemVariants } from '@/type';

const AboutPage = () => {
  



  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Biz haqimizda
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              2022-yildan beri IT sohasida professional kadrlar tayyorlayotgan yetakchi ta'lim markazi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Bizning hikoyamiz
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IT Markazi 2022-yilda kichik bir guruh dasturchi va ta'lim sohasidagi mutaxassislar tomonidan tashkil etildi. 
                Bizning asosiy maqsadimiz O'zbekistonda sifatli IT ta'limni rivojlantirish va professional kadrlar tayyorlash edi.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                4 yil davomida biz 2500 dan ortiq talabani muvaffaqiyatli tayyorladik va ularning 95% i IT sohasida 
                o'z ish joylarini topdi. Bugun biz 25 dan ortiq kurslar taklif qilamiz va 50 dan ortiq tajribali 
                o'qituvchi bilan hamkorlik qilamiz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bizning ta'lim dasturlarimiz xalqaro standartlarga mos keladi va eng yangi texnologiyalarga asoslanadi. 
                Har bir talaba uchun individual yondashuv va amaliy loyihalar orqali real tajriba olish imkoniyatini yaratamiz.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IT ta'lim"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <TrendingUp className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">4+ yil</div>
                <div className="text-sm">tajriba</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bizning qadriyatlarimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har bir qaror va harakatimizda yo'llovchi bo'lgan asosiy tamoyillarimiz
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Bizning yutuqlarimiz
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Raqamlar orqali bizning muvaffaqiyatlarimizni ko'ring
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bizning jamoa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional va tajribali mutaxassislardan iborat kuchli jamoa
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {oqituvchilar.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;