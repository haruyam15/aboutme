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
                                <p>PHP코드로 만들어져있던 오래된 사내 인트라넷 개편했습니다.</p>
                                <p>오래전부터 여러 명을 거치면서 소스를 알아보기 힘들었고 디자인도 올드했습니다.</p>
                                <p>코드를 작성할 때 주석을 적극 활용하여 누가 보아도 쉽게 알아볼 수 있도록 노력했습니다.</p>
                                <p>부트스트랩 테마를 활용해 화면을 먼저 만들고, 필요한 기능들을 기존 소스에서 떼어와 입히는 방식으로 진행했습니다.</p>
                                <p>퍼블리셔 포지션으로만 근무하다가, 이 작업을 계기로 업무영역을 넓힐 수 있었습니다.</p>
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
                                <p>CINDI는 광고주의 인스타그램 계정과 유튜브 채널을 분석해주는 플랫폼입니다.</p>
                                <p className="mb-2">화면 퍼블리싱을 담당했습니다.</p>
                                <p className="indent-2">• CINDI 소개페이지 퍼블리싱</p>
                                <p className="indent-2">• 회원가입, 로그인 화면 퍼블리싱</p>
                                <p className="indent-2">• 계정 연동 화면 퍼블리싱</p>
                                <p className="indent-2">• 인스타그램</p>
                                <p className="indent-5">- 팔로워, 미디어, 스토리, 반응 등 분석데이터 화면 퍼블리싱</p>
                                <p className="indent-2">• 유튜브</p>
                                <p className="indent-5">- 채널 분석, 반응, 미디어, 조회, 구독자 등 분석데이터 화면 퍼블리싱</p>
                                <p className="indent-2">• 분석데이터 보고서 메일 폼 퍼블리싱</p>

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