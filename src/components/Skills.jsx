export default function Skills(){
    const skills = ["html5", "css3", "js", "react", "tailwind", "postcss", "jquery", "bootstrap"]

    return (
        <div id="skills">
            <h2 className="text-left text-4xl font-bold mb-20">SKILLS</h2>

            <ul className="grid grid-cols-5 gap-10">
                {skills.map((skill, i)=>{
                    return(
                        <li className="flex items-center justify-center mb-5" key={i}><img src={`./images/${skill}.png`} alt={skill} /></li>
                    )
                })}
            </ul>
        </div>
    );

}