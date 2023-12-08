import Image from './Image'
import Heading from './Heading'
import Price from './Price'
import Footer from './Footer'

export default function Card() {
    return (
        <div className='card'>
             <Image />
             <Heading />
             <Price />
             <hr className='line'></hr>
             <Footer />
        </div>
    )
}