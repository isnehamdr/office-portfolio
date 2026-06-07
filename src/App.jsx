import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import BlogDetailPage from './pages/BlogDetailPage'
import BacktoTop from './components/BacktoTop'

function App() {
  return (
    <Router>
      
        <Navbar />
        <BacktoTop/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage/>} />
            <Route path="/works" element={<WorkPage />} />  
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactPage/>} /> 
          </Routes>
        
        <Footer />
      
    </Router>
  )
}

export default App