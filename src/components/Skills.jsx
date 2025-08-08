import useScrollFadeIn from '../hooks/useScrollFadeIn';
const skills = [
  'react',
  'nextjs',
  'js',
  'typescript',
  'tailwind',
  'tanstackQuery',
  'zustand',
  'redux',
  'storybook',
  // 'html5',
  // 'css3',
];

const widthMap = {
  tailwind: 'w-[220px]',
  storybook: 'w-[220px]',
  default: 'w-[120px]',
  redux: 'w-[180px]',
  js: 'w-[90px]',
};

const titleMap = {
  html5: 'HTML5',
  css3: 'CSS3',
  js: 'JavaScript',
  react: 'React',
  typescript: 'TypeScript',
  redux: 'Redux',
  zustand: 'Zustand',
  tanstackQuery: 'Tanstack Query',
  tailwind: 'Tailwind CSS',
  nextjs: 'Next.js',
  storybook: 'Storybook',
};
export default function Skills() {
  const ani = useScrollFadeIn();

  return (
    <div id="skills">
      <h2 className="mb-20 text-4xl font-bold text-left fadeInUp">SKILLS</h2>

      <ul className="grid grid-cols-5 gap-3" {...ani}>
        {skills.map((skill, i) => {
          return (
            <li className="flex items-center justify-center mb-3" key={i}>
              <img
                src={`./images/${skill}.svg`}
                alt={skill}
                title={titleMap[skill]}
                className={widthMap[skill] || widthMap.default}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
