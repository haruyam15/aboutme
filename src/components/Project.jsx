import useScrollFadeIn from '../hooks/useScrollFadeIn';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Project(){
    const ani1 = useScrollFadeIn();
    const ani2 = useScrollFadeIn();
    const ani3 = useScrollFadeIn();
    const ani4 = useScrollFadeIn();

    return (
        <div id="project">
            <h2 className="text-left text-4xl font-bold mb-20" {...ani1}>PROJECT</h2>

            <ul className="px-4">
                <li className="mb-40" {...ani2}>
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
                    </div>

                    
                    
                </li>
                <li className="mb-40" {...ani3}>
                    <p className="text-2xl font-bold text-left mb-10">• 인스타그램 ・ 유튜브 계정분석 플랫폼 CINDI</p>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col justify-between text-left text-lg mr-10">
                            <div>
                                <p>CINDI는 광고주의 인스타그램 계정과 유튜브 채널을 <strong>분석</strong>해주는 플랫폼입니다.</p>
                                <p>반복되는 UI가 많아 <strong>재사용성</strong>을 고려한 HTML, CSS 작성을 경험 해 볼 수 있었습니다.</p>
                                <p>많은 수치와 복잡한 그래프들을 <strong>어떻게 하면 보기 쉽게 그릴 수 있을지 고민</strong>해 볼 수 있는 작업이었습니다. </p>
                            </div>

                            <ul className="flex justify-start items-center mt-12">
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


                <li className="mb-28" {...ani4}>
                    <p className="text-2xl font-bold text-left mb-10">• 클라이언트 이벤트 페이지 퍼블리싱</p>

                    <div className="flex justify-between items-stretch">
                        <div className="flex flex-col justify-start text-left text-lg mr-10 z-10">
                            <div className="mt-5 mb-16">
                                <p>삼성생명, 삼성카드, KB국민카드, 현대캐피탈, 아시아나, 푸르지오, 락토핏, 현대해상, 카카오뱅크, LG전자 등 많은 클라이언트의 <strong>이벤트 랜딩페이지를 제작</strong>했습니다.</p>
                            </div>
                            <div>
                                <p>클라이언트마다 다른 <strong>다양한 조건과 작업 환경</strong>에서의 웹 퍼블리싱을 경험했습니다.</p>
                                <p>PC, Mobile, 태블릿, 반응형 등 <strong>다양한 디바이스</strong>에서 볼 수 있는 페이지를 만들었습니다.</p>
                                <p>미니게임, 룰렛이벤트, 설문조사, SNS 공유, 영상시청, 퀴즈 등 다양한 이벤트로 <strong>여러방식의 페이지 제작</strong>을 경험했습니다</p>
                            </div>

                            <ul className="flex justify-start items-center mt-12">
                                <li className="mr-2"><picture><source srcSet="./images/html5.webp" type="image/webp" widtd="50" /><img src="./images/html5.png" alt="html5" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/css3.webp" type="image/webp" widtd="50" /><img src="./images/css3.png" alt="css3" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/js.webp" type="image/webp" widtd="50" /><img src="./images/js.png" alt="js" width="50" /></picture></li>
                                <li className="mr-2"><picture><source srcSet="./images/jquery.webp" type="image/webp" widtd="50" /><img src="./images/jquery.png" alt="jquery" width="50" /></picture></li>
                            </ul>
                        </div>

                        
                    
                        <div className="w-[600px] -mt-16">
                            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} loop={true} className="projectSwiper">
                                <SwiperSlide>
                                    <picture><source srcSet="./images/asiana.webp" type="image/webp" /><img src="./images/asiana.jpg" alt="asiana"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/samsungcard.webp" type="image/webp" /><img src="./images/samsungcard.jpg" alt="samsungcard"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/galaxystore.webp" type="image/webp" /><img src="./images/galaxystore.jpg" alt="galaxystore"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/lactofit.webp" type="image/webp" /><img src="./images/lactofit.jpg" alt="lactofit"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/terra.webp" type="image/webp" /><img src="./images/terra.jpg" alt="terra"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <video autoPlay loop muted playsInline>
                                        <source src="./images/kakaobank.webm" type="video/webm" />
                                        <source src="./images/kakaobank.mp4" type="video/mp4" />
                                    </video>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/hyundai.webp" type="image/webp" /><img src="./images/hyundai.jpg" alt="hyundai"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/jayjun.webp" type="image/webp" /><img src="./images/jayjun.jpg" alt="jayjun"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/kbcard.webp" type="image/webp" /><img src="./images/kbcard.jpg" alt="kbcard"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/samsunglife.webp" type="image/webp" /><img src="./images/samsunglife.jpg" alt="samsunglife"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/prugio.webp" type="image/webp" /><img src="./images/prugio.jpg" alt="prugio"/></picture>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <picture><source srcSet="./images/hyundaidirect.webp" type="image/webp" /><img src="./images/hyundaidirect.jpg" alt="hyundaidirect"/></picture>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>

                </li>
            </ul>
        </div>
    );

}