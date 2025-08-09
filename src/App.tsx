
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import Header from './shared/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import InstructorsPage from './pages/InstructorsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  return (
    
      <div className="min-h-screen ">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    
  );
}

export default App;