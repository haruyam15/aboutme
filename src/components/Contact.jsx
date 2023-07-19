import { AiFillGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineMobile} from 'react-icons/ai'
import { RxNotionLogo } from 'react-icons/rx'
import useScrollFadeIn from '../hooks/useScrollFadeIn';
export default function Contact(){
    const ani1 = useScrollFadeIn();
    const ani2 = useScrollFadeIn();
    return (
        <div id="contact" className="mb-20">
            <h2 className="text-left text-4xl font-bold mb-20" {...ani1}>CONTACT</h2>

            <div {...ani2}>
                <div className="text-left mb-5">
                    <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=haruyam15@gmail.com" className="text-2xl font-bold" target="_blank">
                        MAIL : haruyam15@gmail.com
                    </a>

                    <p className="text-2xl font-bold mt-5">MOBILE : 010-9227-3676</p>
                </div>
                

                <ul className="flex justify-start items-center">
                    <li className="mr-10">
                        <a href="//github.com/haruyam15" className="flex flex-col items-center justify-between text-lg" target="_blank">
                            <p className="text-2xl font-bold mb-3">GITHUB</p>
                            <AiFillGithub className="h-[80px] w-auto"/>
                        </a>
                    </li>
                    <li className="mr-10">
                        <a href="//haruyam15.notion.site/03304485a7a84f94ac2b4d35256ac2d8" className="flex flex-col items-center justify-between text-lg" target="_blank">
                            <p className="text-2xl font-bold mb-3">NOTION</p>
                            <RxNotionLogo className="h-[80px] w-auto"/>
                        </a>
                    </li>
                    <li>
                        <a href="//www.instagram.com/haruyam15/" className="flex flex-col items-center justify-between text-lg" target="_blank">
                            <p className="text-2xl font-bold mb-3">INSTAGRAM</p>
                            <AiOutlineInstagram className="h-[80px] w-auto"/>
                        </a>
                    </li>

                    
                </ul>
            </div>
            
            
        </div>
    );

}