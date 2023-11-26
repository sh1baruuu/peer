import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PlayButton({ onClick, icon}) {
    return (
        <button
            className="h-12 border-2 border-green-dark text-white bg-green shadow-inner active:shadow-none absolute lg:bottom-20 bottom-24  rounded-xl w-[140px] justify-self-end"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default PlayButton;
