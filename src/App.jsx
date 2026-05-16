import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interest from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="bg-white dark:bg-darkbg text-gray-800 dark:text-gray-100">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Interest />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}