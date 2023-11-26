
function Footer() {
    return (
        <div className=" overflow-hidden text-xs font-medium  h-5 flex justify-center items-center bottom-0 w-screen right-0 ">
            © 2023 Tenzies by{" "}
            <a
                href="https://github.com/sh1baruuu/"
                target="blank"
                className="hover:text-blue-600 text-slate-800 pl-1 cursor-pointer hover:font-bold"
            >
                {" "}
                shibaruuu
            </a>
            . All rights reserved.
        </div>
    );
}

export default Footer;
