import Profile from "./Profile";
import Typewriter from "typewriter-effect";

export default function Main(){

    return (
        <div id="main" className="flex justify-between items-center text-4xl font-medium text-left">
            <h2>
                <Typewriter options={{delay: 30}}
                    onInit={(typewriter)=> {
                    typewriter.typeString("안녕하세요.<br/><br/>제 이름은 <strong>배하은</strong> 입니다.<br/><br/>저는 웹퍼블리셔로 3년 근무했고<br/><br/>앞으로 포지션을 넓혀 <strong>프론트엔드 개발자</strong>가 되려고 합니다.")
                    .start();
                    }} 
                />
            </h2>

            <Profile />
            
        </div>
    );

}