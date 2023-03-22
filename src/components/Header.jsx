export default function Header(){

    return (
        <header className="fixed w-full top-0 left-0 py-8 bg-white z-50">
            <div className="max-w-[1500px] flex justify-between items-center m-auto px-24">
                <h1 id="logo" className="font-bold text-2xl">HARUYAM</h1>
                <ul className="flex text-lg">
                    <li className="px-6">Home</li>
                    <li className="px-6">Skills</li>
                    <li className="px-6">Project</li>
                    <li className="px-6">Study</li>
                    <li className="px-6">Contact</li>
                </ul>
            </div>
        </header>
    );

}