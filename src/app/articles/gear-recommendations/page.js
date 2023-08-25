import {Nav} from '../../page.js'
import './page.css'
function Gear() {
    return (
        <>
            {Nav()}
            <main>
                <div id='cover'>
                    <h1 className='text-amber-300 text-7xl text-center font-extrabold z-10 select-none' >Gear Recommendations</h1>
                    <img className='object-cover -z-10 absolute left-0 top-0' src='/media/articles/gear-recommendations/gear-background.jpg'></img>
                </div>
            </main>

        </>
    )
}

export default Gear