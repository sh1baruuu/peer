import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Timer({ minutes, seconds }) {
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    return (
        <div className="flex lg:w-[80px] w-[65px] h-[50px] items-center justify-start gap-1">
            <FontAwesomeIcon icon={faClock} size="sm" />
            <h4 className="font-semibold">{formattedTime}</h4>
        </div>
    );
}

export default Timer;
