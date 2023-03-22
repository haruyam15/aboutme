export default function Skills(){
    const skills = ["html5", "css3", "js", "react", "tailwind", "postcss", "jquery", "bootstrap"]

    return (
        <div>
            <h2 className="text-left text-4xl font-bold mb-20">SKILLS</h2>

            <ul className="grid grid-cols-5 gap-10">
                {skills.map((skill)=>{
                    return(
                        <li className="flex items-center justify-center mb-5"><img src={`./images/${skill}.png`} alt={skill} /></li>
                    )
                })}
            </ul>
        </div>
    );

}