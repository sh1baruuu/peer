import { faDice, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import DiceContainer from "./components/DiceContainer";
import Die from "./components/Die";
import Header from "./components/Header";
import Modal from "./components/Modal";
import PlayButton from "./components/PlayButton";
import ResetButton from "./components/ResetButton";
import Timer from "./components/Timer";
import click from "./sounds/click.wav";
import click2 from "./sounds/click2.wav";
import error from "./sounds/error.wav";
import roll from "./sounds/roll.wav";
import win from "./sounds/win.wav";
import { allNewDice } from "./utils/allNewDice";
import { generateNewDie } from "./utils/generateNewDie";

function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    if (time === 60) {
        new Audio(error).play();
    }

    useEffect(() => {
        if (tenzies) {
            setIsRunning(false);
            new Audio(win).play();
        }
    }, [tenzies]);

    useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true);
        }
    }, [dice]);

    const resetGame = () => {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return generateNewDie();
            })
        );
        setIsRunning(false);
        setTime(0);
        new Audio(click2).play();
    };

    const newGame = () => {
        setTenzies(false);
        setTime(0);
        setDice(allNewDice());
        setIsRunning(false);
        new Audio(click2).play();
    };

    const rollDice = () => {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.isHeld ? die : generateNewDie();
            })
        );
        new Audio(roll).play();
    };

    const holdDice = (id) => {
        if (isRunning) {
            setDice((oldDice) =>
                oldDice.map((die) => {
                    return die.id === id
                        ? { ...die, isHeld: !die.isHeld }
                        : die;
                })
            );
        }
        new Audio(click).play();
    };

    const startGame = () => {
        setIsRunning(true);
        rollDice();
    };

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ));

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="flex flex-col h-screen w-screen justify-center overflow-hidden items-center bg-white-100 select-none">
            <Modal
                tenzies={tenzies}
                onClick={newGame}
                time={time}
                minutes={minutes}
                seconds={seconds}
            />
            <Header>
                <Timer minutes={minutes} seconds={seconds} run={isRunning} />
            </Header>
            <DiceContainer>{diceElements}</DiceContainer>
            {!tenzies &&
                (isRunning ? (
                        <PlayButton onClick={rollDice} icon={faDice} />

                ) : (
                    <PlayButton onClick={startGame} icon={faPlay} />
                ))}
            <div className="w-screen h-screen absolute flex z-[1] items-end">

            <div className=" overflow-hidden text-xs font-medium  h-5 flex justify-center items-center bottom-0 w-screen right-0 ">
            {isRunning && <ResetButton onClick={resetGame} />}
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
            </div>
        </div>
    );
}

export default App;
