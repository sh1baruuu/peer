import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HelpButton({onClick}) {
    return (
        <>

        <button
            className="absolute rounded-full rounded-br-none text-white grid place-items-center text-xs shadow-inner w-8 h-8 bg-slate-500 bottom-0 right-0"
            onClick={onClick}
            >
            <FontAwesomeIcon icon={faQuestion} size="lg" />
        </button>
            </>
    );
}

export default HelpButton;
