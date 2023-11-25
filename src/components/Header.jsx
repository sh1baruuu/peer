import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({children}) {
    return (
        <div className="flex items-center flex-row-reverse md:flex-row justify-between h-[70px] w-full absolute top-0 right-0 py-5 px-7 ">
            <h1 className="w-14 h-8 font-black md:block hidden text-2xl uppercase">Ten<span className="text-red-600 text-3xl font-bold">Z</span>ies</h1>
            {children}
            <FontAwesomeIcon icon={faBars} />
        </div>
    );
}

export default Header;
