export default function Header() {
  const navs = ['Home', 'Skills', 'Side Projects', 'Projects', 'Contact'];

  const handleNavScroll = (event) => {
    const target = event.target.innerText;
    const headerHeight = document.getElementById('nav').offsetHeight;

    if (target === navs[0]) {
      //Home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const scrollTo =
        document.getElementById(target.toLowerCase()).offsetTop -
        headerHeight -
        80;
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <header id="nav" className="fixed top-0 left-0 z-50 w-full py-8 bg-white">
      <div className="max-w-[1500px] flex justify-between items-center m-auto px-24">
        <h1 id="logo" className="text-2xl font-bold">
          <a href="./" title="HARUYAM">
            HARUYAM
          </a>
        </h1>
        <ul className="flex text-lg">
          {navs.map((nav, i) => (
            <li
              className={`px-6 cursor-pointer`}
              onClick={handleNavScroll}
              key={i}
            >
              {nav}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
