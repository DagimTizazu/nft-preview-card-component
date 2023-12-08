import iconEthereum from './assets/icon-ethereum.svg'
import TimeLeft from './TimeLeft'

export default function Price() {
    return (
        <div className='price-and-time'>
            <div className='price'>
                <img src={iconEthereum} alt="eth" />
                <p className='price-text'>0.041 ETH</p>
            </div>
            <div className="time">
                <TimeLeft />
            </div>
        </div>
    )
}