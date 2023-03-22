import Bar from "./Bar";
import Contact from "./Contact";
import Main from "./Main";
import Project from "./Project";
import Skills from "./Skills";
import Study from "./Study";

export default function Content(){
    

    return (
        <div id="content" className="pt-[88px]">
            <Main />
            <Bar/>
            <Skills/>
            <Bar/>
            <Project/>
            <Bar/>
            <Study />
            <Bar/>
            <Contact/>
        </div>
    );

}