import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageCircle, } from 'lucide-react';
import { containerVariants, itemVariants } from '@/type';
import { contactInfo } from '@/constants';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    surname: '',
    subject: '',
    message: '',
  });

  const BOT_TOKEN = "8264244301:AAEIIfsLMHtTC6kNQxDquYxLKdf8Flt2dWA";
  const CHAT_ID = "6300197609";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Yangi xabar:
Ism: ${formData.name}
 telefon raqam: ${formData.phone}
 Familiya: ${formData.surname} 
 Mavzu: ${formData.subject}
 Xabar: ${formData.message}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });

      if (res.ok) {
        alert(t('contact.alert.success', 'Ma\'lumotlar botga yuborildi!'));
        setFormData({
          name: '',
          phone: '',
          surname: '',
          subject: '',
          message: '',
        });
      } else {
        alert(t('contact.alert.error', 'Xatolik yuz berdi!'));
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert(t('contact.alert.error', 'Xatolik yuz berdi!'));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen"
    >
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('contact.header.title', "Biz bilan bog'laning")}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('contact.header.subtitle', "Savollaringiz bormi? Biz sizga yordam berishga tayyormiz!")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
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
                  <h3 className="text-lg font-bold mb-2">{t(info.titleKey)}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                  {info.descriptionKey && (
                    <p className="text-sm text-gray-500">{t(info.descriptionKey)}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-transparent dark:border-2 border-white rounded-2xl my-5 shadow-lg p-6">
            <h3 className="lg:text-4xl text-xl text-center font-bold mb-6">{t('contact.quickContact.title', 'Tezkor aloqa')}</h3>
            <div className="space-y-4 flex w-full flex-wrap items-center justify-around">
              <div className="flex items-center py-4 px-8 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                <Phone className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <p className="font-medium text-black">{t('contact.quickContact.callUs', "Qo'ng'iroq qiling")}</p>
                  <p className="text-sm text-gray-600">+998 (77) 030-43-21</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-9 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-black">{t('contact.quickContact.writeEmail', 'Email yozing')}</p>
                  <p className="text-sm text-gray-600">info@itmarkazi.uz</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-9 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
                <MessageCircle className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-medium text-black">{t('contact.quickContact.telegram', 'Telegram orqali')}</p>
                  <p className="text-sm text-gray-600">@itmarkazi_uz</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl text-black shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{t('contact.form.title', 'Xabar yuborish')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name', 'Ism va familiya *')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.namePlaceholder', 'Ismingizni kiriting')}
                      />
                    </div>
                    <div>
                      <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.surname', 'Familiya *')}</label>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        required
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.surnamePlaceholder', 'Familiyangizni kiriting')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone', 'Telefon raqamingiz *')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={t('contact.form.phonePlaceholder', '+998 __ ___ ____')}
                    />
                  </div>

                  <div>
  <label
    htmlFor="subject"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    {t("contact.form.subject", "Mavzu *")}
  </label>
<Select
  name="subject"
  value={formData.subject}
  onValueChange={(value) =>
    setFormData((prev) => ({ ...prev, subject: value }))
  }
>
  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
    <SelectValue
      placeholder={t("contact.form.subjectPlaceholder", "Mavzuni tanlang")}
    />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="course-info">
      {t("contact.form.subjectOptions.courseInfo", "Kurslar haqida ma'lumot")}
    </SelectItem>
    <SelectItem value="enrollment">
      {t("contact.form.subjectOptions.enrollment", "Ro'yxatdan o'tish")}
    </SelectItem>
    <SelectItem value="consultation">
      {t("contact.form.subjectOptions.consultation", "Bepul maslahat")}
    </SelectItem>
    <SelectItem value="partnership">
      {t("contact.form.subjectOptions.partnership", "Hamkorlik")}
    </SelectItem>
    <SelectItem value="other">
      {t("contact.form.subjectOptions.other", "Boshqa")}
    </SelectItem>
  </SelectContent>
</Select>

</div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message', 'Xabar matni *')}</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder={t('contact.form.messagePlaceholder', 'Xabaringizni yozing...')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t('contact.form.submit', 'Xabar yuborish')}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={itemVariants}>
              <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-lg lg:text-xl font-semibold mb-4">
                  {t('contact.map.title', "Bizning manzil — 35X8+85M, Зарбдор, Jizzax viloyati, Ўзбекистон")}
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
                    {t('contact.map.openLink', 'Open in Google Maps')}
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
