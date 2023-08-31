import Image from 'next/image'
import './page.css'
import { list } from 'postcss';

function featuredContent(src, alt, text, link, att) {
  return (
    <div className='p-8 w-4/5 m-2 pb-0 '>
        <a href={link}>
          <img className='w-full h-auto' src={src} alt={alt} />
        </a>
        <span><a className='text-blue-700 text-xs' href={att}>Source</a></span>
        <a href={link}>
          <h2 className='text-3xl'>{alt}</h2>
        </a>
        <p>{text}</p>
      
      <a className='text-blue-700' href={link}>Learn More</a>  
      </div>
  )
}

export function Article(intro, content, conclusion) {
  if (!Array.isArray(content)) {
    throw new Error('content is not an array');
  }

  return (
    <div>
      <p className='mb-8'>{intro}</p>
      {content.map((paragraph, index) => {
        const lines = paragraph.split('\n'); // Split paragraph into lines
        const title = lines[0]; // First line is the title
        const contentLines = lines.slice(1); // Rest of the lines are content
        
        return (
          <div key={index}>
            <ol>
              <li className='text-xl font-extrabold'>{title}</li>
              {contentLines.map((line, lineIndex) => (
                <p className='mb-8' key={lineIndex}>{line}</p>
              ))}
            </ol>
          </div>
        );
      })}
      <span className='text-xl font-extrabold'>Conclusion</span>
      <p className=''>{conclusion}</p>
    </div>
  );
}



export function Nav() {
  return (
    <nav className='flex gap-5 justify-evenly items-center w-full'>
        <img className='h-auto w-1/12 flex-col' src="/media/icon.png" alt="logo" />
        
        <div><a href="/">Home</a></div>
        <div><a href="">Contact Us</a></div>
        <div><a href="">Privacy Policy</a></div>
        <div><a href="">ToS</a></div>
        <div><a href="">About Us</a></div>
      </nav>
  )
}

function App() {

  return (
    <>
      {Nav()}

      <main>
        <section id='hero'>
          <video className="object-cover absolute -z-50 left-0 right-0 top-0 bottom-0" autoPlay playsInline loop muted poster='./media/heroframe.jpg'>
            <source src="./media/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className='text-amber-300 text-7xl text-center font-extrabold z-10 select-none'>Unlock the World of Kickboxing: Techniques, History, Fitness, and More.</h1>

          <div className='flex justify-center h-1/5 mt-40'>
            <button className='w-1/4 rounded-xl text-white text-4xl font-extrabold' type="button"><a href="">Join now</a></button>
          </div>

        </section>
            
        <section id='featured-content' className='relative grid grid-flow-col grid-rows-2 justify-items-center gap-2 pt-24'>
          {featuredContent("./media/kickboxing-techniques.jpg", "Kickboxing Techniques", "Briefly explain the importance of kickboxing techniques...", "  techniques.html", "https://pixabay.com/es/users/claudio_scott-4913238/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2282001")}
          {featuredContent("./media/kickboxing-history.jpg", "History of Kickboxing", "Explore the evolution and significance of kickboxing...", "history.html", "https://pixabay.com/users/patrickbrassard0-1312305/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=894190")}
          {featuredContent("./media/fitness-benefits.jpg", "Fitness Benefits", "Discover the physical and mental advantages of kickboxing...", "fitness.html", "https://pixabay.com/es/users/stevepb-282134/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2465478")}
          {featuredContent("./media/kickboxing-gear.jpg", "Gear Recommendations", "Find the best gear for an optimal kickboxing experience...", "./articles/gear-recommendations", "https://www.freepik.com/free-photo/view-pair-boxing-gloves_41553999.htm#query=kickboxing%20gear&position=4&from_view=search&track=ais")}
        </section>
      </main>

      <footer className='p-12 h-fit bg-gray-500 flex justify-between'>
        <span className='text-gray-300 font-extralight'>The Kickboxing Hub</span>
        {/* Remember to change the mail and change the icon*/}
        <a href='mailto:ffernandezbeccari@hotmail.com' className='text-gray-300 font-extralight border-b border-solid border-gray-300'>Mail</a>
      </footer>
    </>
  )
}

export default App
