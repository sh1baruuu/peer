
function Header({ children }) {

    return (
        <div className="flex items-center justify-between h-[70px] w-full absolute top-0 right-0 py-5 lg:px-7 px-5 ">
            <h1 className="w-14 h-8 font-black md:block  text-xl  lg:text-2xl uppercase">
                Tenzies
            </h1>
            {children}
        </div>
    );
}

export default Header;
