import React from 'react'
import Header from './header'
import Footer from './footer'
import Intro from '../components/Header'
import WhoIAm from '../components/Me'
import SkillsSection from '../components/Skills'
import ProjectsAccordion from '../components/Projects'
import EducationSection from '../components/Education'
import ContactMe from '../components/ContactMe'

const Layout = () => {
  return (
     <div className="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
    <Header/>
    <main>
      <Intro/>
      <WhoIAm/>
      <SkillsSection/>
      <ProjectsAccordion/>
      <EducationSection/>
      <ContactMe/>
    </main>
    <Footer/>
    </div>
  )
}

export default Layout