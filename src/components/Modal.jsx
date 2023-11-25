import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import {
    faStar as emptyStar,
    faClock,
} from "@fortawesome/free-regular-svg-icons";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function Modal({ onClick, time, minutes, seconds, tenzies }) {
    const starRating = (t) => {
        if (t <= 30) {
            return [solidStar, solidStar, solidStar];
        } else if (t > 30 && t <= 60) {
            return [solidStar, solidStar, emptyStar];
        } else if (t > 60 && t <= 90) {
            return [solidStar, emptyStar, emptyStar];
        } else {
            return [emptyStar, emptyStar, emptyStar];
        }
    };

    const starIcons = starRating(time);

    const getStarRating = starIcons.map((start) => {
        const id = nanoid();
        return (
            <FontAwesomeIcon
                icon={start}
                size="2xl"
                className="text-[3.8rem]"
                key={id}
            />
        );
    });

    if (tenzies)
        return (
            <>
                <div className="flex justify-center items-center bg-black/50 absolute w-screen z-40 h-screen backdrop-blur-sm">
                <Confetti />
                    <div className="flex flex-col pt-10 px-5 pb-5 rounded-lg items-center z-20 bg-white-100 w-[400px] h-[390px]">
                        <div className="mt-3 mb-4  [&>*:nth-child(2)]:mx-[10px] [&>*:first-child]:text-[3rem]  text-yellow hover:shadow-none [&>*:last-child]:translate-y-[10px] [&>*:first-child]:translate-y-[10px] [&>*:last-child]:text-[3rem]">
                            {getStarRating}
                        </div>
                        <h1 className="font-bold my-3 text-[2rem] ">
                            Your Time!
                        </h1>
                        <h3 className="mt-3 mb-auto font-bold text-lg">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="mr-[5px]"
                            />
                            {`${minutes.toString().padStart(2, "0")}:${seconds
                                .toString()
                                .padStart(2, "0")}`}
                        </h3>
                        <button
                            onClick={onClick}
                            className="border-green-dark bg-green h-12 w-36 border-2 rounded-md shadow-inner mb-4 text-white font-bold"
                        >
                            NEW GAME
                        </button>
                    </div>
                </div>
            </>
        );
}

export default Modal;
