import {Nav, Article} from '../../page.js'
import './page.css'

function Gear() {
    return (
        <>
            {Nav()}
            <main>
                <div id='cover' className=''>
                    <h1 className='text-amber-300 text-7xl text-center font-extrabold z-10 select-none mt-24' >Gear Recommendations</h1>
                    <img className='object-cover -z-10 absolute left-0 top-0 block h-full w-full' src='/media/articles/gear-recommendations/gear-background.jpg'></img>
                </div>
                <div id='content' className='flex flex-row p-10 bg-gray-200'>
                    <div className='w-3/5 h-full'>
                        {Article("Kickboxing is a dynamic and intense sport that requires the right gear to ensure safety, comfort, and optimal performance. Whether you're a beginner or an experienced fighter, having the right equipment can make all the difference in your training and matches. In this article, we'll guide you through the essential kickboxing gear you need to train like a pro.",
                        ["1. Boxing Gloves \n Boxing gloves are a staple in kickboxing. Choose gloves that offer proper hand protection and wrist support. Look for gloves with high-density padding and a secure closure system. Brands like Everlast, Leone, and Fairtex are known for producing quality kickboxing gloves.",
                        "2. Hand Wraps \n Hand wraps provide additional wrist and knuckle support while protecting your hands from impact. Wrap your hands before putting on gloves to reduce the risk of injury. Opt for elastic hand wraps that offer flexibility and a snug fit.",
                        "3. Kickboxing Shorts \n Kickboxing shorts are designed to allow unrestricted movement during training and matches. Look for shorts made from breathable and durable materials. Many brands offer shorts with unique designs that let you express your personal style.",
                        "4. Mouthguard \n Protect your teeth and jaw with a high-quality mouthguard. Custom-fit mouthguards provide the best protection and comfort. Boil-and-bite mouthguards are also an option for a more affordable choice.",
                        "5. Shin Guards \n Shin guards are crucial for protecting your shins and feet during sparring and heavy bag training. Choose guards with ample padding and adjustable straps for a secure fit. Top brands like Venum and Hayabusa offer excellent options.",
                        "6. Headgear \n Headgear minimizes the risk of head injuries during sparring sessions. Look for headgear that offers sufficient padding around the temples, forehead, and back of the head. Ensure good visibility and ventilation. Although headgear does prevent cuts it also maximizes the risk of concussions so it isn't obligatory",
                        "7. Grappling Gloves \n If you're into mixed martial arts (MMA) or ground work, consider investing in grappling gloves. These gloves provide hand protection while allowing for grip and dexterity.",
                        "8. Ankle Supports \n Ankle supports or compression sleeves can help prevent sprains and injuries during intense kickboxing workouts. Look for moisture-wicking materials for comfort.",
                        "9. Training Pads and Focus Mitts \n For partner training, having training pads and focus mitts is essential. These tools allow you to practice strikes, combinations, and accuracy. Choose pads with adequate padding and ergonomic designs.",
                        "10. Gym Bag \n Keep all your gear organized in a spacious gym bag. Look for one with multiple compartments to separate clean gear from used items.",],
                        "Investing in the right kickboxing gear is a must for anyone serious about training and competing in this exhilarating sport. Each piece of equipment plays a vital role in ensuring your safety, comfort, and performance during training sessions and matches. Whether you're a beginner or a seasoned fighter, having the right gear can help you elevate your skills and reach your full potential in the world of kickboxing.")}

                        <h3 className='text-xl font-extrabold mt-8'>Gear Examples</h3>
                        <ol>
                            <li><b>Boxing Gloves:</b> <a href='https://www.everlast.com/pro-style-muay-thai-glove'>Everlast Pro Style</a>, <a href='https://www.leone1947.com/en/gloves/boxing-gloves/boxing-gloves-flag-gn212#GN212-01'>Leone Boxing Gloves Flag</a>, <a href='https://www.fairtex.com/universal-gloves-tight-fit-design.html'>Fairtex Muay Thai.</a></li>
                            <li><b>Hand Wraps:</b> Any handwraps from your local store which are around 4 meters long.</li>
                            <li><b>Kickboxing Shorts:</b> <a href="https://www.roninwear.com/en/hayabusa-chikara-4-fight-shorts-blue-p-14123.html">Hayabusa Chikara 4</a>, <a href="https://revgeareurope.co.uk/collections/shorts/products/original-muay-thai-shorts-black">Revgear Original</a>, <a href="https://anthem-athletics.com/products/infinity-g2-muay-thai-shorts?variant=31560648818775"></a>.</li>
                            <li><b>Mouthguard:</b> <a href="https://www.venum.com/es/products/venum-challenger-mouthguard-orange-black-1">Venum Challenger</a> or rugby mouthguards you can buy on a pharmacy.</li>
                            <li><b>Shin Guards:</b> <a href="https://www.fairtex.com/competition-shin-pads.html">Fairtex Competition</a>, <a href="https://www.venum.com/collections/shinguards/products/venum-elite-standup-shin-guards-matte-black">Venum Elite Standup</a>, <a href="https://www.hayabusafight.com/products/t3-striking-shin-guards?variant=21678153203825">Hayabusa T3 Striking</a>.</li>
                            <li><b>Headgear:</b> <a href="https://store.winning-usa.com/product24.html">Winning FG-2900</a>, <a href="https://rivalboxing.us/products/rival-rhg2-hybrid-headgear">Rival RHG2 Leather Ultra</a>, <a href="https://twinsfightwear.com/TWINS-SPECIAL-headgear-boxing-muay-thai-headgear-mma-headgear-signature-fhgl3-12-black-silver/">Twins Special Full-Face</a>.</li>
                            <li><b>Grappling Gloves:</b> <a href="https://rdxsports.com/t6-mma-sparring-gloves-7oz/">RDX MMA Gloves</a>, <a href="https://www.venum.com/products/sparring-gloves-venum-challenger-3-0-black-white">Venum Challenger 3.0 MMA</a>.</li>
                            <li><b>Ankle Supports:</b> Look for moisture-wicking materials for comfort.</li>
                            <li><b>Training Pads and Focus Mitts:</b> Choose pads with adequate padding and ergonomic designs.</li>
                            <li><b>Gym Bag:</b> Opt for a spacious bag with multiple compartments like the <a href="https://engageind.com/collections/backpack/products/essential-athlete-backpack">Engage Essential Athlete Backpack</a> or a duffel bag.</li>
                        </ol> 

                    </div>

                    {/* Images */}
                    
                    <div className='w-2/5 flex flex-col justify-between ml-4'>
                        <img className='gear-images' src="/media/articles/gear-recommendations/boxing-gloves.jpg" alt="Boxing Gloves" />
                        <img className='gear-images' src="/media/articles/gear-recommendations/mouthguard.jpg" alt="Mouthguard" />
                    </div>
                    
                </div>
            </main>

        </>
    )
}

export default Gear