import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix} from '@fortawesome/free-solid-svg-icons'

export default function Die(props) {
    const dieIsHeldStyle = {color: props.isHeld ? ' #F5F5F5' : "#202020"}
    const dieFaces = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

    const dieIsHeldBackground = {
        backgroundColor: props.isHeld ? "#202020" : " #F5F5F5",
        outline: props.isHeld ? "3px solid #202020" : "none",
    }

    return (
        <div 
            className="lg:h-[70px] lg:w-[70px] bg-green h-fit w-fit flex justify-content rounded-lg shadow-lg items-center active:scale-75" 
            style={dieIsHeldBackground}
            onClick={props.holdDice}
        >
            <FontAwesomeIcon className=" lg:text-[5rem] text-4xl md:text-[3.4rem]" style={dieIsHeldStyle} icon={dieFaces[props.value]}/>
        </div>
    )
}