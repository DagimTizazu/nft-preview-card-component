import footerImage from './assets/image-avatar.png'

export default function Footer() {
    return (
        <div className="footer-container">
            <img className='avatar-image' src={footerImage} alt="avatar" />
            <p className='footer-text'>Creation of <span>Jules Wyvern</span></p>
        </div>
    )
}