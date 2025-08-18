import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineMobile,
} from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
export default function Contact() {
  const ani1 = useScrollFadeIn();
  const ani2 = useScrollFadeIn();
  return (
    <div id="contact" className="mb-20">
      <h2 className="mb-20 text-4xl font-bold text-left" {...ani1}>
        CONTACT
      </h2>

      <div {...ani2}>
        <div className="mb-5 text-left">
          <a
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=haruyam15@gmail.com"
            className="text-2xl font-bold"
            target="_blank"
          >
            MAIL : haruyam15@gmail.com
          </a>

          <p className="mt-5 text-2xl font-bold">MOBILE : 010-9227-3676</p>
        </div>

        <ul className="flex items-center justify-start">
          <li className="mr-10">
            <a
              href="//github.com/haruyam15"
              className="flex flex-col items-center justify-between text-lg"
              target="_blank"
            >
              <p className="mb-3 text-2xl font-bold">GITHUB</p>
              <AiFillGithub className="h-[80px] w-auto" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
