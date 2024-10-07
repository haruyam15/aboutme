import Profile from './Profile';
import Typewriter from 'typewriter-effect';

export default function Main() {
  return (
    <div
      id="main"
      className="flex justify-between items-center text-4xl font-medium text-left"
    >
      <h2>
        <Typewriter
          options={{ delay: 30 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '안녕하세요. 배하은입니다.<br/><br/>제 꿈은 <strong>카멜레온</strong>입니다.<br/><br/>변화를 두려워하지않고 어디서든 적응하고 잘 융화되지만,<br/><br/>그 안에서 나만의 독창적인 색깔을 보여주고 싶습니다.<br/><br/>저는 협업과 사람과의 관계를 중요하게 생각합니다.'
              )
              .start();
          }}
        />
      </h2>

      <Profile />
    </div>
  );
}
