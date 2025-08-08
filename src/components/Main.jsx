import Profile from './Profile';
import Typewriter from 'typewriter-effect';

export default function Main() {
  return (
    <div
      id="main"
      className="flex items-center justify-between text-3xl font-medium text-left"
    >
      <h2>
        <Typewriter
          options={{ delay: 30 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `안녕하세요. 배하은입니다.<br/><br/>저는 사용자와 비즈니스 흐름을 함께 고려한 화면을 고민합니다.<br/><br/>단순히 화면이 동작하는 데 그치지 않고,<br/><br/>‘왜 이렇게 되는지’를 코드 관점에서 이해하며 설계하려 노력합니다.<br/><br/>
다양한 관점을 존중하고,<br/><br/>감정에 치우치지 않는 유연한 소통을 중요하게 생각합니다.`
              )
              .start();
          }}
        />
      </h2>

      <Profile />
    </div>
  );
}
