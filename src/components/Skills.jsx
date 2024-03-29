import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Skills(){
    const skills = ["html5", "css3", "js", "react", "tailwind", "postcss", "jquery", "bootstrap"]
    const ani = useScrollFadeIn();

    return (
        <div id="skills">
            <h2 className="text-left text-4xl font-bold mb-20 fadeInUp">SKILLS</h2>

            <ul className="grid grid-cols-5 gap-10" {...ani}>
                {skills.map((skill, i)=>{
                    return(
                        <li className="flex items-center justify-center mb-5" key={i}>
                            <picture>
                                <source srcSet={`./images/${skill}.webp`} type="image/webp" />  
                                <img src={`./images/${skill}.png`} alt={skill} />
                            </picture>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}