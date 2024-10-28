import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function Study() {
  const ani1 = useScrollFadeIn();
  const ani2 = useScrollFadeIn();
  const ani3 = useScrollFadeIn();
  // const ani4 = useScrollFadeIn();
  // const ani5 = useScrollFadeIn();

  return (
    <div id="study">
      <h2 className="text-left text-4xl font-bold mb-20" {...ani1}>
        STUDY
      </h2>

      <ul className="px-4">
        <li className="mb-20" {...ani2}>
          <p className="text-2xl font-bold text-left mb-10">
            • 플레이리스트 공유 플랫폼 PLY
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between text-left text-lg mr-10">
              <div>
                <p>- 공통 컴포넌트의 적절한 추상화로 재사용성과 확장성 향상</p>
                <p>
                  - 컴포넌트의 관심사 분리로(UI와 데이터로직) 유지보수성 강화
                </p>
                <p>
                  - 데이터 로직의 경우 커스텀 훅으로 관리하여 중복코드를 줄임
                </p>
                <p>
                  - useQuery를 사용하여 데이터 캐싱 및 로딩, 에러관리
                  <br />
                  -&gt; 성능 최적화 및 사용자경험 개선
                </p>
                <p>
                  - 소셜 네트워킹 핵심 기능인 좋아요, 팔로우, 댓글기능을
                  개발하여 플랫폼의 참여도와 사용자 체류 시간증가 기대
                </p>
              </div>

              <ul className="flex justify-start items-center mt-5">
                <li className="mr-2">
                  <img src="./images/html5.svg" alt="html5" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/css3.svg" alt="css3" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/js.svg" alt="js" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/react.svg" alt="react" width="45" />
                </li>
                <li className="mr-2">
                  <img
                    src="./images/typescript.svg"
                    alt="typescript"
                    width="45"
                  />
                </li>
              </ul>

              <dl className="mt-3">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="https://playply.netlify.app/"
                    target="_blank"
                  >
                    https://playply.netlify.app
                  </a>
                </dd>
              </dl>
            </div>
            <a href="https://playply.netlify.app/" target="_blank">
              <video autoPlay loop muted playsInline width={600}>
                <source src="./images/ply.webm" type="video/webm" />
                <source src="./images/ply.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
        </li>

        {/* <li className="mb-20" {...ani3}>
          <p className="text-2xl font-bold text-left mb-10">
            • React로 Youtube 똑같이 만들어보기
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between text-left text-lg mr-10">
              <div>
                <p>- Youtube API 사용</p>
                <p>- 키워드 검색기능</p>
                <p>- React Query와 React Router 사용</p>
                <p>- Tailwind CSS 사용</p>
                <p>- 반응형 UI</p>
              </div>

              <ul className="flex justify-start items-center mt-5">
                <li className="mr-2">
                  <img src="./images/html5.svg" alt="html5" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/css3.svg" alt="css3" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/js.svg" alt="js" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/react.svg" alt="react" width="45" />
                </li>
                <li className="mr-2">
                  <img
                    src="./images/tailwind-sm.svg"
                    alt="tailwind"
                    width="45"
                  />
                </li>
              </ul>

              <dl className="mt-3">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="//vermillion-genie-6f5e78.netlify.app/"
                    target="_blank"
                  >
                    https://vermillion-genie-6f5e78.netlify.app/
                  </a>
                </dd>
              </dl>
            </div>
            <a href="//vermillion-genie-6f5e78.netlify.app/" target="_blank">
              <video autoPlay loop muted playsInline width={600}>
                <source src="./images/youtube.webm" type="video/webm" />
                <source src="./images/youtube.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
        </li> */}

        <li className="mb-20" {...ani3}>
          <p className="text-2xl font-bold text-left mb-10">
            • 반려동물 용품 편집샵 Shoppy
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between text-left text-lg mr-10">
              <div>
                <p>- Firebase 실시간 데이터베이스 연동</p>
                <p>- Firebase 로그인 구현</p>
                <p>- React Query와 React Router 사용</p>
                <p>- Tailwind CSS 사용</p>
              </div>

              <ul className="flex justify-start items-center mt-5">
                <li className="mr-2">
                  <img src="./images/html5.svg" alt="html5" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/css3.svg" alt="css3" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/js.svg" alt="js" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/react.svg" alt="react" width="45" />
                </li>
                <li className="mr-2">
                  <img
                    src="./images/tailwind-sm.svg"
                    alt="tailwind"
                    width="45"
                  />
                </li>
                <li className="mr-2">
                  <img src="./images/firebase.svg" alt="firebase" width="45" />
                </li>
              </ul>

              <dl className="mt-3">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="https://graceful-crumble-587820.netlify.app/"
                    target="_blank"
                  >
                    https://graceful-crumble-587820.netlify.app/
                  </a>
                </dd>
              </dl>
            </div>
            <a
              href="https://graceful-crumble-587820.netlify.app/"
              target="_blank"
            >
              <video autoPlay loop muted playsInline width={600}>
                <source src="./images/shoppy.webm" type="video/webm" />
                <source src="./images/shoppy.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
        </li>

        {/* <li className="mb-20" {...ani4}>
          <p className="text-2xl font-bold text-left mb-10">
            • React로 TODO 앱 만들기
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between text-left text-lg mr-10">
              <div>
                <p>- 로컬스토리지를 사용해 로그인, 투두리스트 관리</p>
                <p>- Context API 사용하여 다크모드 지원</p>
                <p>- PostCSS 사용</p>
              </div>

              <ul className="flex justify-start items-center mt-5">
                <li className="mr-2">
                  <img src="./images/html5.svg" alt="html5" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/css3.svg" alt="css3" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/js.svg" alt="js" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/react.svg" alt="react" width="45" />
                </li>
                <li className="mr-2">
                  <img src="./images/postcss.svg" alt="postcss" width="45" />
                </li>
              </ul>

              <dl className="mt-3">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="//capable-biscuit-9029c8.netlify.app/"
                    target="_blank"
                  >
                    https://capable-biscuit-9029c8.netlify.app/
                  </a>
                </dd>
              </dl>
            </div>

            <a href="//capable-biscuit-9029c8.netlify.app/" target="_blank">
              <video autoPlay loop muted playsInline width={600}>
                <source src="./images/react.webm" type="video/webm" />
                <source src="./images/react.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
        </li>

        <li className="" {...ani5}>
          <p className="text-2xl font-bold text-left mb-10">
            • 바닐라 JS로 크롬 앱 만들기
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-between text-left text-lg mr-10">
              <div>
                <p>- 순수 JavaScript만을 사용</p>
                <p>- 로컬스토리지를 사용해 로그인, 투두리스트 관리</p>
                <p>- Weather API로 날씨 가져오기</p>
              </div>

              <ul className="flex justify-start items-center mt-5">
                <li className="mr-2">
                  <img src="./images/html5.svg" alt="html5" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/css3.svg" alt="css3" width="35" />
                </li>
                <li className="mr-2">
                  <img src="./images/js.svg" alt="js" width="35" />
                </li>
              </ul>

              <dl className="mt-3">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="//soft-medovik-8bf0ed.netlify.app/"
                    target="_blank"
                  >
                    https://soft-medovik-8bf0ed.netlify.app/
                  </a>
                </dd>
              </dl>
            </div>

            <a href="//soft-medovik-8bf0ed.netlify.app/" target="_blank">
              <video autoPlay loop muted playsInline width={600}>
                <source src="./images/vanillajs.webm" type="video/webm" />
                <source src="./images/vanillajs.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
