import timeIcon from './assets/icon-clock.svg'
export default function TimeLeft() {
    return (
        <div className='time'>
            <img src={timeIcon} alt="tik tok" />
            <p className='time-text'>3 days left</p>
        </div>
    )
}