import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Project(){
    const ani1 = useScrollFadeIn();
    const ani2 = useScrollFadeIn();
    const ani3 = useScrollFadeIn();
    return (
        <div id="project">
            <h2 className="text-left text-4xl font-bold mb-20" {...ani1}>PROJECT</h2>

            <ul className="px-4">
                <li className="mb-20" {...ani2}>
                    <p className="text-2xl font-bold text-left mb-10">• 인트라넷 리뉴얼</p>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-between text-left text-lg mr-10">
                            <div>
                                <p>PHP로 만들어져있던 오래된 사내 인트라넷 개편했습니다.</p>
                                <p>오래전부터 여러 명을 거치면서 코드를 알아보기 힘들었고 <strong>UI개선</strong>도 필요했습니다.</p>
                                <p>화면 퍼블리싱부터 서버와 통신하며 <strong>데이터를 화면에 그리는 것</strong>까지 프론트엔드 전반적인 부분을 경험해 볼 수 있었습니다.</p>
                                <p><strong>사용자를 위한 최선의 UX/UI</strong>를 생각하며 작업했습니다.</p>
                                <p>어떻게 만들어야 <strong>사용자가 더 편리할지</strong> 생각하는 과정이 즐거웠습니다.</p>
                                <p>업무 영역을 조금씩 넓혀 볼 수 있었던 프로젝트였습니다.</p>
                            </div>

                            <ul className="flex justify-start items-center mt-5">
                                <li className="mr-2"><picture><source srcSet="./images/html5.webp" type="image/webp" widtd="50" /><img src="./images/html5.png" alt="html5" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/css3.webp" type="image/webp" widtd="50" /><img src="./images/css3.png" alt="css3" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/js.webp" type="image/webp" widtd="50" /><img src="./images/js.png" alt="js" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/jquery.webp" type="image/webp" widtd="50" /><img src="./images/jquery.png" alt="jquery" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/bootstrap.webp" type="image/webp" widtd="50" /><img src="./images/bootstrap.png" alt="bootstrap" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/ajax.webp" type="image/webp" widtd="50" /><img src="./images/ajax.png" alt="ajax" width="50" /></picture></li>
                            </ul>
                        </div>
                        <video autoPlay loop muted playsInline width={600}>
                            <source src="./images/intranet.webm" type="video/webm" />
                            <source src="./images/intranet.mp4" type="video/mp4" />
                        </video>
                        {/* <video src="./images/intranet_.mp4" width="600" autoPlay loop muted poster="./images/intranet_poster.png"></video> */}
                    </div>

                    
                    
                </li>
                <li className="mb-20" {...ani3}>
                    <p className="text-2xl font-bold text-left mb-10">• 인스타그램 ・ 유튜브 계정분석 플랫폼 CINDI</p>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-between text-left text-lg mr-10">
                            <div>
                                <p>CINDI는 광고주의 인스타그램 계정과 유튜브 채널을 <strong>분석</strong>해주는 플랫폼입니다.</p>
                                <p>반복되는 UI가 많아 <strong>재사용성</strong>을 고려한 HTML, CSS 작성을 경험 해 볼 수 있었습니다.</p>
                                {/* <p className="mb-2">화면 퍼블리싱을 담당했습니다.</p> */}
                                {/* <p className="indent-2">• CINDI 소개페이지 퍼블리싱</p>
                                <p className="indent-2">• 회원가입, 로그인 화면 퍼블리싱</p>
                                <p className="indent-2">• 계정 연동 화면 퍼블리싱</p>
                                <p className="indent-2">• 인스타그램</p>
                                <p className="indent-5">- 팔로워, 미디어, 스토리, 반응 등 분석데이터 화면 퍼블리싱</p>
                                <p className="indent-2">• 유튜브</p>
                                <p className="indent-5">- 채널 분석, 반응, 미디어, 조회, 구독자 등 분석데이터 화면 퍼블리싱</p>
                                <p className="indent-2">• 분석데이터 보고서 메일 폼 퍼블리싱</p> */}

                            </div>

                            <ul className="flex justify-start items-center mt-5">
                                <li className="mr-2"><picture><source srcSet="./images/html5.webp" type="image/webp" widtd="50" /><img src="./images/html5.png" alt="html5" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/css3.webp" type="image/webp" widtd="50" /><img src="./images/css3.png" alt="css3" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/js.webp" type="image/webp" widtd="50" /><img src="./images/js.png" alt="js" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/jquery.webp" type="image/webp" widtd="50" /><img src="./images/jquery.png" alt="jquery" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/bootstrap.webp" type="image/webp" widtd="50" /><img src="./images/bootstrap.png" alt="bootstrap" width="50" /></picture></li>
                            </ul>
                        </div>

                        <video autoPlay loop muted playsInline width={600}>
                            <source src="./images/cindi.webm" type="video/webm" />
                            <source src="./images/cindi.mp4" type="video/mp4" />
                        </video>
                    </div>
                </li>
            </ul>
        </div>
    );

}