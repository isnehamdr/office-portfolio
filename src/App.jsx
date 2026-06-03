import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Router>
      
        <Navbar />
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage/>} />
            <Route path="/works" element={<WorkPage />} />  
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        
        <Footer />
      
    </Router>
  )
}

export default App