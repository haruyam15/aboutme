import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Study(){
    const ani1 = useScrollFadeIn();
    const ani2 = useScrollFadeIn();
    const ani3 = useScrollFadeIn();
    const ani4 = useScrollFadeIn();

    return (
        <div id="study">
            <h2 className="text-left text-4xl font-bold mb-20" {...ani1}>STUDY</h2>

            <ul className="px-4">
            <li className="mb-20" {...ani2}>
                    <p className="text-2xl font-bold text-left mb-10">• React로 Youtube 똑같이 만들어보기</p>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-between text-left text-lg mr-10">
                            <div>
                                <p>- Youtube API 사용</p>
                                <p>- 검색기능</p>
                                <p>- React Query와 React Router 사용</p>
                                <p>- Tailwind CSS 사용하여 반응형 UI</p>
                            </div>

                            <ul className="flex justify-start items-center mt-5">
                                <li className="mr-2"><picture><source srcSet="./images/html5.webp" type="image/webp" widtd="50" /><img src="./images/html5.png" alt="html5" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/css3.webp" type="image/webp" widtd="50" /><img src="./images/css3.png" alt="css3" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/js.webp" type="image/webp" widtd="50" /><img src="./images/js.png" alt="js" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/react.webp" type="image/webp" widtd="50" /><img src="./images/react.png" alt="react" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/tailwind-sm.webp" type="image/webp" widtd="50" /><img src="./images/tailwind-sm.png" alt="tailwind" width="50" /></picture></li>
                            </ul>

                            <dl className="mt-3">
                                <dt className="font-bold">URL</dt>
                                <dd><a className="text-[#38bdf8] underline underline-offset-8" href="//vermillion-genie-6f5e78.netlify.app/" target="_blank">https://vermillion-genie-6f5e78.netlify.app/</a></dd>
                            </dl>
                        </div>
                        <a href="//vermillion-genie-6f5e78.netlify.app/" target="_blank">
                            <video autoPlay loop muted playsInline width={600}>
                                <source src="./images/youtube.webm" type="video/webm" />
                                <source src="./images/youtube.mp4" type="video/mp4" />
                            </video>
                        </a>
                        {/* <a href="//vermillion-genie-6f5e78.netlify.app/" target="_blank"><img src="./images/youtube.gif" width="600" alt="유튜브 클론 바로가기" /></a> */}
                       
                    </div>
                </li>

                <li className="mb-20" {...ani3}>
                    <p className="text-2xl font-bold text-left mb-10">• React로 TODO 앱 만들기</p>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-between text-left text-lg mr-10">
                            <div>
                                <p>- 로컬스토리지를 사용해 로그인, 투두리스트 관리</p>
                                <p>- Context API 사용하여 다크모드 지원</p>
                                <p>- PostCSS 사용</p>
                            </div>

                            <ul className="flex justify-start items-center mt-5">
                                <li className="mr-2"><picture><source srcSet="./images/html5.webp" type="image/webp" widtd="50" /><img src="./images/html5.png" alt="html5" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/css3.webp" type="image/webp" widtd="50" /><img src="./images/css3.png" alt="css3" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/js.webp" type="image/webp" widtd="50" /><img src="./images/js.png" alt="js" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/react.webp" type="image/webp" widtd="50" /><img src="./images/react.png" alt="react" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/postcss.webp" type="image/webp" widtd="50" /><img src="./images/postcss.png" alt="postcss" width="50" /></picture></li>
                            </ul>

                            <dl className="mt-3">
                                <dt className="font-bold">URL</dt>
                                <dd><a className="text-[#38bdf8] underline underline-offset-8" href="//capable-biscuit-9029c8.netlify.app/" target="_blank">https://capable-biscuit-9029c8.netlify.app/</a></dd>
                            </dl>
                        </div>
                        
                        <a href="//capable-biscuit-9029c8.netlify.app/" target="_blank">
                            <video autoPlay loop muted playsInline width={600}>
                                <source src="./images/react.webm" type="video/webm" />
                                <source src="./images/react.mp4" type="video/mp4" />
                            </video>
                        </a>
                        {/* <a href="//capable-biscuit-9029c8.netlify.app/" target="_blank"><img src="./images/react.gif" width="600" alt="리액트 todo앱 바로가기" /></a> */}
                       
                    </div>
                </li>

                <li className="" {...ani4}>
                    <p className="text-2xl font-bold text-left mb-10">• 바닐라 JS로 크롬 앱 만들기</p>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-between text-left text-lg mr-10">
                            <div>
                                <p>- 순수 Javascript만을 사용</p>
                                <p>- 로컬스토리지를 사용해 로그인, 투두리스트 관리</p>
                                <p>- Weather API로 날씨 가져오기</p>
                            </div>

                            <ul className="flex justify-start items-center mt-5">
                                <li className="mr-2"><picture><source srcSet="./images/html5.webp" type="image/webp" widtd="50" /><img src="./images/html5.png" alt="html5" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/css3.webp" type="image/webp" widtd="50" /><img src="./images/css3.png" alt="css3" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/js.webp" type="image/webp" widtd="50" /><img src="./images/js.png" alt="js" width="50" /></picture></li>
                            </ul>

                            <dl className="mt-3">
                                <dt className="font-bold">URL</dt>
                                <dd><a className="text-[#38bdf8] underline underline-offset-8" href="//soft-medovik-8bf0ed.netlify.app/" target="_blank">https://soft-medovik-8bf0ed.netlify.app/</a></dd>
                            </dl>
                        </div>
                       
                        <a href="//soft-medovik-8bf0ed.netlify.app/" target="_blank">
                            <video autoPlay loop muted playsInline width={600}>
                                <source src="./images/vanillajs.webm" type="video/webm" />
                                <source src="./images/vanillajs.mp4" type="video/mp4" />
                            </video>
                        </a>
                        {/* <a href="//soft-medovik-8bf0ed.netlify.app/" target="_blank"><img src="./images/vanillajs.gif" width="600" alt="바닐라js todo앱 바로가기" /></a> */}
                       
                    </div>
                </li>


                
            </ul>
        </div>
    );

}