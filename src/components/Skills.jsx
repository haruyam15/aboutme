import useScrollFadeIn from '../hooks/useScrollFadeIn';
const skills = [
  'html5',
  'css3',
  'js',
  'react',
  'typescript',
  'redux',
  'zustand',
  'tanstackQuery',
  'next',
  'tailwind',
];
const titleMap = {
  html5: 'HTML5',
  css3: 'CSS3',
  js: 'JavaScript',
  react: 'React',
  typescript: 'TypeScript',
  redux: 'Redux',
  zustand: 'Zustand',
  tanstackQuery: 'Tanstack Query',
  next: 'Next.js',
  tailwind: 'Tailwind CSS',
};
export default function Skills() {
  const ani = useScrollFadeIn();

  return (
    <div id="skills">
      <h2 className="text-left text-4xl font-bold mb-20 fadeInUp">SKILLS</h2>

      <ul className="grid grid-cols-5 gap-10" {...ani}>
        {skills.map((skill, i) => {
          return (
            <li className="flex items-center justify-center mb-5" key={i}>
              <img
                src={`./images/${skill}.svg`}
                alt={skill}
                title={titleMap[skill]}
                width="120"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
