import useScrollFadeIn from '../hooks/useScrollFadeIn';

export default function SideProjects() {
  const ani1 = useScrollFadeIn();
  const ani2 = useScrollFadeIn();
  const ani3 = useScrollFadeIn();
  const ani4 = useScrollFadeIn();
  // const ani5 = useScrollFadeIn();

  return (
    <div id="sideProjets">
      <h2 className="mb-20 text-4xl font-bold text-left" {...ani1}>
        SIDE PROJECTS
      </h2>

      <ul className="px-4">
        <li className="mb-40" {...ani2}>
          <p className="mb-10 text-2xl font-bold text-left">
            • 오디오 편집 툴 Voice4U
          </p>

          <div className="flex items-center justify-between">
            <div className="w-[600px] flex flex-col justify-between mr-10 text-lg text-left">
              <div>
                <p className="mb-2 font-bold">1) 백엔드 개발자와의 협업</p>
                <p>
                  API 설계에서 예상과 다른 결과물이 나와 어려움을 겪었습니다.
                </p>
                <p>
                  API 수정 필요성을 백엔드 개발자에게 설명하며 설득하는 과정에서
                  <strong> 서로의 상황을 명확히 이해</strong>하고 나의 입장을 잘
                  전달해야 <strong>설득력</strong>을 가질 수 있다는 점을 배우게
                  되었습니다.
                </p>
                <p className="mt-4 mb-2 font-bold">2) 제한된 개발 시간</p>
                <p>프로젝트 기간이 두 달이었지만,</p>
                <p>
                  실제 프론트엔드
                  <strong> 개발 시간</strong>은 점점 지연되며 일주일 정도로
                  <strong> 제한적</strong>
                  이었습니다.
                </p>
                <p>
                  마감 기한을 지키기 위해 <strong>기능 동작에 초점</strong>을
                  맞춰 개발했습니다.
                </p>
                <p>
                  필요한 API를 먼저 제안하는 등 <strong>적극적인 태도</strong>로
                  기간 확보가 어려운 상황에 대비해야 한다는 것을 느꼈습니다.
                </p>
                <p className="mt-4 mb-2 font-bold">
                  3) 타입스크립트 초기 설계의 중요성
                </p>
                <p>
                  촉박한 일정에 조급해져 타입{' '}
                  <strong>구조를 충분히 설계하지 못한 탓</strong>에 타입 충돌이
                  빈번히 발생했고 이로 인해 타입에러를 해결하는 데 많은 시간이
                  소요되었습니다.
                </p>
                <p>
                  과감하게{' '}
                  <strong>
                    타입 구조를 재설계하여 타입 안정성과 작업 효율성
                  </strong>
                  을 회복했습니다.
                </p>
                <p>
                  촉박한 일정일수록 초기 설계 단계에서 데이터 흐름과{' '}
                  <strong>타입 구조를 명확히 정의하면 </strong>
                  <strong>이후 작업 속도를 크게 높일 수 있다</strong>는 것을
                  깨달았습니다.
                </p>
              </div>

              <ul className="flex items-center justify-start mt-7">
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
                <li className="mr-2">
                  <img src="./images/zustand.svg" alt="zustand" width="45" />
                </li>
                <li className="mr-2">
                  <img
                    src="./images/tanstackQuery.svg"
                    alt="tanstackQuery"
                    width="45"
                  />
                </li>
                <li>
                  <img
                    src="./images/tailwind.svg"
                    alt="Tailwind CSS"
                    width="120"
                  />
                </li>
              </ul>

              <dl className="mt-5">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="https://additional.5re5park.site/"
                    target="_blank"
                  >
                    https://additional.5re5park.site/
                  </a>
                </dd>
              </dl>
            </div>
            <div className="-mt-36">
              <a href="https://additional.5re5park.site/" target="_blank">
                <video autoPlay loop muted playsInline width={600}>
                  <source src="./images/voice4you.webm" type="video/webm" />
                  <source src="./images/voice4you.mp4" type="video/mp4" />
                </video>
              </a>
            </div>
          </div>
        </li>

        <li className="mb-40" {...ani3}>
          <p className="mb-10 text-2xl font-bold text-left">
            • 플레이리스트 공유 플랫폼 PLY
          </p>

          <div className="flex items-center justify-between">
            <div className="w-[600px] flex flex-col justify-between mr-10 text-lg text-left">
              <div>
                <p className="mb-2 font-bold">
                  1) 컴포넌트 설계와 사용성 최적화
                </p>
                <p>
                  공통 컴포넌트를 설계하면서 <strong>유연성과 재사용성</strong>
                  을 높이는 방법을 고민했습니다.
                </p>
                <p>
                  예를들어 기본값 설정을 통해 props 없이도 동작 가능한 구조로
                  설계했고, 유연성을 고려하기 위해
                  <strong>어떤 상황에서 어떻게 사용될지</strong>
                  생각하며 만들었습니다.
                </p>
                <p className="mt-4 mb-2 font-bold">
                  2) 데이터 관리와 아키텍처 최적화
                </p>
                <p>
                  한 페이지에서 다양한 컴포넌트와 데이터 상태를 최적화하기 위해
                  데이터를 커스텀 훅으로 분리하고 UI와 로직을 명확히
                  구분했습니다. 또한, TanStack Query를 활용해 데이터 캐싱과 로딩
                  시간을 단축해 사용자 경험을 개선할 수 있었습니다.
                </p>
                <p className="mt-4 mb-2 font-bold">
                  3) 프로젝트 구조 개선과 배포
                </p>
                <p>
                  서버와 클라이언트를 하나의 패키지로 관리하던 구조를 개선하기
                  위해 두 부분을 독립적으로 분리했습니다. 클라이언트는 Netlify,
                  서버는 AWS EC2에 각각 배포하며, 더욱 유연하고 안정적인 배포
                  환경을 구축했습니다.
                </p>
              </div>

              <ul className="flex items-center justify-start mt-7">
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
                <li className="mr-2">
                  <img src="./images/zustand.svg" alt="zustand" width="45" />
                </li>
                <li className="mr-2">
                  <img
                    src="./images/tanstackQuery.svg"
                    alt="tanstackQuery"
                    width="45"
                  />
                </li>
                <li>
                  <img src="./images/emotion.png" alt="Emotion" width="45" />
                </li>
              </ul>

              <dl className="mt-5">
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
                <dt className="mt-4 font-bold">GitHub</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="https://github.com/haruyam15/ply"
                    target="_blank"
                  >
                    https://github.com/haruyam15/ply
                  </a>
                </dd>
              </dl>
            </div>
            <div className="-mt-24">
              <a href="https://playply.netlify.app/" target="_blank">
                <video autoPlay loop muted playsInline width={600}>
                  <source src="./images/ply.webm" type="video/webm" />
                  <source src="./images/ply.mp4" type="video/mp4" />
                </video>
              </a>
            </div>
          </div>
        </li>

        <li className="mb-40" {...ani4}>
          <p className="mb-10 text-2xl font-bold text-left">
            • 면접 스터디를 위한 서비스 - 면뿌
          </p>

          <div className="flex items-center justify-between">
            <div className="w-[600px] flex flex-col justify-between mr-10 text-lg text-left">
              <div>
                <p>
                  - 기출 질문을 등록하고 답변을 작성하여 스터디원들과 공유할 수
                  있는 서비스입니다.
                </p>
                <p>
                  - 스터디에 실질적인 도움을 주고자 구상했던 아이디어를 빠르게
                  구현해 공유했습니다.
                </p>
                <p>
                  - 개발 기간은 1~2일로, Tailwind CSS와 Radix UI를 활용해
                  효율적으로 제작했습니다.
                </p>
                <p>
                  - 실시간 데이터 동기화와 간편한 데이터베이스 활용을 위해
                  Firebase Realtime Database를 적용했습니다.
                </p>
                <p>
                  - 간단하고 작은 서비스라도 실제 사용자로부터 피드백을 받을 수
                  있다는 경험은 매우 소중하며, 이를 통해 사용자의 관점에서
                  서비스를 개선하고 성장할 수 있는 기회를 얻는 것이 중요하다고
                  생각합니다.
                </p>
              </div>

              <ul className="flex items-center justify-start mt-7">
                <li className="mr-2">
                  <img src="./images/react.svg" alt="react" width="45" />
                </li>
                <li className="mr-2">
                  <img
                    src="./images/tailwind.svg"
                    alt="Tailwind CSS"
                    width="120"
                  />
                </li>
                <li className="mr-2">
                  <img src="./images/radix.svg" alt="Radix UI" width="70" />
                </li>
                <li>
                  <img src="./images/firebase.svg" alt="Firebase" width="40" />
                </li>
              </ul>

              <dl className="mt-5">
                <dt className="font-bold">URL</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="https://myeonppu.netlify.app/"
                    target="_blank"
                  >
                    https://myeonppu.netlify.app/
                  </a>
                </dd>
                <dt className="mt-4 font-bold">GitHub</dt>
                <dd>
                  <a
                    className="text-[#38bdf8] underline underline-offset-8"
                    href="https://github.com/haruyam15/myeonppu"
                    target="_blank"
                  >
                    https://github.com/haruyam15/myeonppu
                  </a>
                </dd>
              </dl>
            </div>

            <a href="https://myeonppu.netlify.app/" target="_blank">
              <video autoPlay loop muted playsInline width={600}>
                <source src="./images/myeonppu.webm" type="video/webm" />
                <source src="./images/myeonppu.mp4" type="video/mp4" />
              </video>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
