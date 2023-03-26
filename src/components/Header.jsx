import { useEffect, useState } from "react";

export default function Header(){
    const navs = ["Home", "Skills", "Project", "Study", "Contact"];
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNavScroll = (event) => {        
        const target = event.target.innerText;
        const headerHeight = document.getElementById("nav").offsetHeight;
        
        if(target === navs[0]){ //Home
            window.scrollTo({top:0,behavior:'smooth'});
            setActiveIndex(0);
        }else { 
            const scrollTo = document.getElementById(target.toLowerCase()).offsetTop - headerHeight - 80 ;
            window.scrollTo({top: scrollTo, behavior: 'smooth'});
            setActiveIndex(navs.indexOf(target));
        }
    }

    // const handleScroll = () => {
    //     const scrollPosition = window.scrollY;

    // }

    // useEffect(() => {    
    //     window.addEventListener("scroll", handleScroll);
    // }, []);

    return (
        <header id="nav" className="fixed w-full top-0 left-0 py-8 bg-white z-50">
            <div className="max-w-[1500px] flex justify-between items-center m-auto px-24">
                <h1 id="logo" className="font-bold text-2xl"><a href="./" title="HARUYAM">HARUYAM</a></h1>
                <ul className="flex text-lg">
                    {
                        navs.map((nav, i)=> <li className={`px-6 cursor-pointer`} onClick={handleNavScroll} key={i}>{nav}</li> )
                    }
                </ul>
            </div>
        </header>
    );

}