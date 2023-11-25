import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons'

function Timer({minutes, seconds}) {

    return (
        <div className="flex w-[80px] h-[50px] items-center justify-start gap-1">
            <FontAwesomeIcon icon={faClock} size='sm' />
            <h4 className='font-semibold'>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h4>
        </div>
    )
}

export default Timer