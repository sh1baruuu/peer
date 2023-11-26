import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight as reset } from "@fortawesome/free-solid-svg-icons";

function ResetButton({ onClick }) {
    return (
        <button
            className="absolute rounded-full rounded-bl-none text-white grid place-items-center text-xs shadow-inner w-8 h-8 bg-green bottom-0 left-0"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={reset} size="lg" />
        </button>
    );
}

export default ResetButton;
