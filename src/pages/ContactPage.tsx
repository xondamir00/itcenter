import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { containerVariants, itemVariants } from '@/type';
import { contactInfo } from '@/constants';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    surname: '',
    subject: '',
    message: ''
  });

  const BOT_TOKEN = "8264244301:AAEIIfsLMHtTC6kNQxDquYxLKdf8Flt2dWA";
  const CHAT_ID = "6300197609"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
📩 Yangi xabar:
👤 Ism: ${formData.name}
📞 Telefon: ${formData.surname}
📧 Email: ${formData.phone}
📝 Mavzu: ${formData.subject}
💬 Xabar: ${formData.message}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      });

      if (res.ok) {
        alert("Ma'lumotlar botga yuborildi!");
        setFormData({
          name: '',
          phone: '',
          surname: '',
          subject: '',
          message: ''
        });
      } else {
        alert("Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="pt-16 min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Biz bilan bog'laning</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Savollaringiz bormi? Biz sizga yordam berishga tayyormiz!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                  <p className="text-sm text-gray-500">{info.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-transparent dark:border-2 border-white rounded-2xl my-5  shadow-lg p-6">
            <h3 className="text-xl text-center font-bold mb-6">Tezkor aloqa</h3>
            <div className="space-y-4 flex w-full flex-wrap items-center justify-around">
              <div className="flex items-center  py-4 px-8 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                <Phone className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-medium text-black ">Qo'ng'iroq qiling</p>
                  <p className="text-sm text-gray-600">+998 (77) 030-43-21</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-9 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-black">Email yozing</p>
                  <p className="text-sm text-gray-600">info@itmarkazi.uz</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-9 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
                <MessageCircle className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-medium text-black">Telegram orqali</p>
                  <p className="text-sm text-gray-600">@itmarkazi_uz</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl text-black shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Xabar yuborish</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ism va familiya *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Ismingizni kiriting"
                      />
                    </div>
                    <div>
                      <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">Surname</label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        required
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Surname"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon raqamingiz *</label>
                    <input
                      type="tel"
                      id="phonw"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+998 __ ___ ____"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Mavzu *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Mavzuni tanlang</option>
                      <option value="course-info">Kurslar haqida ma'lumot</option>
                      <option value="enrollment">Ro'yxatdan o'tish</option>
                      <option value="consultation">Bepul maslahat</option>
                      <option value="partnership">Hamkorlik</option>
                      <option value="other">Boshqa</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Xabar matni *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Xabaringizni yozing..."
                    />
                  </div>

                  <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                    <Send className="mr-2 h-5 w-5" /> Xabar yuborish
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants}>
              <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-lg lg:text-xl font-semibold mb-4">
                  Bizning manzil — 35X8+85M, Зарбдор, Jizzax viloyati, Узбекистон
                </h3>
                <div className="relative pb-[56.25%] h-[55vh] overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    title="Zarbador, Jizzax - Map"
                    src="https://www.google.com/maps?q=40.098389,68.1655&z=15&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-center mt-3 text-sm text-gray-600">
                  <a
                    href="https://www.google.com/maps?q=40.098389,68.1655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-700"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
