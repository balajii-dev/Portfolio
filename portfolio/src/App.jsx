import React, { useState } from 'react'
import { Element } from 'react-scroll' 
import Header from './Components/Header'
import TopContainer from './TopContainer/TopContainer'
import SkillContainer from './SkillContainer/SkillContainer'
import Contact from './Contact/Contact'
import Experience from './ExperienceContent/ExperienceContent'
import Footer from './Components/Footer'
import Projects from './ProjectContent/ProjectContent'
import Message from './Components/Message'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='bg-gray-900 relative'>
      <Header onJoinClick={() => setIsModalOpen(true)} />
      
      <TopContainer />
      <SkillContainer />
      <Element name="Projects">
        <Projects />
      </Element>

      <Experience />
      <Contact />
      <Footer />

      <Message 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default App
