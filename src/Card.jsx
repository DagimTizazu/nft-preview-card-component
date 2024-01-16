import iconEthereum from './assets/icon-ethereum.svg'
import clockIcon from './assets/icon-clock.svg'
import footerImage from './assets/image-avatar.png'

export default function Card() {
 
    return (
        <div className='card'>
            <div className='equi-img'><div className='hover-img'></div></div>
            <h1 className="heading-1">Equilibrium #3429</h1>
            <p className="text">Our Equilibrium collection promotes balance and calm.</p>
            <div className='price-and-time'>
                <div className='price'>
                    <img src={iconEthereum} alt="eth" />
                    <p className='price-text'>0.041 ETH</p>
                </div>
                <div className="time">
                <div className='time'>
                    <img src={clockIcon} alt="clock icon" />
                    <p className='time-text'>3 days left</p>
                </div>
                </div>
            </div>
            <hr className='line'></hr>
            <div className="footer-container">
                <img className='avatar-image' src={footerImage} alt="avatar" />
                <p className='footer-text'>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    )
}