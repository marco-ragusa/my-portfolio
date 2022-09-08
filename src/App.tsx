import './App.css';
import { useRef } from 'react';
import { NavBar } from './NavBar/NavBar'
import { About } from './About/About'
import { SkillBars } from './SkillBars/SkillBars';
import { Experience } from './Experience/Experience';
import { Contacts } from './Contacts/Contacts';


export const App = () => {
  const elmRef = {
    About: useRef<null|HTMLElement>(null),
    Experiences: useRef<null|HTMLElement>(null),
    Contacts: useRef<null|HTMLElement>(null),
  }

  return (
    <>
      <NavBar elms={elmRef}></NavBar>
      <About elm={elmRef.About}></About>
      <SkillBars></SkillBars>
      <Experience elm={elmRef.Experiences}></Experience>
      <Contacts elm={elmRef.Contacts}></Contacts>
    </>
  );
}