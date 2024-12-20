import Bar from './Bar';
import Contact from './Contact';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';
import SideProjects from './SideProjects';

export default function Content() {
  return (
    <div id="content" className="pt-[88px]">
      <Main />
      <Bar />
      <Skills />
      <Bar />
      <SideProjects />
      <Bar />
      <Projects />
      <Bar />
      <Contact />
    </div>
  );
}
