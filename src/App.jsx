import { useState } from 'react'
import './App.css'

function featuredContent(src, alt, text, link) {
    return (
      <div className='p-8 w-4/5 mt-4'>
              <img className='w-full h-auto' src={src} alt={alt} />
              <h2 className='text-3xl'>{alt}</h2>
              <p>{text}</p>
              <a className='text-blue-700' href={link}>Learn More</a>
    </div>
    )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex gap-5 justify-evenly items-center w-full'>
        <img className='h-auto w-1/12 flex-col' src="./media/icon.png" alt="logo" />
        
        <div><a href="">Home</a></div>
        <div><a href="">Contact Us</a></div>
        <div><a href="">Privacy Policy</a></div>
        <div><a href="">ToS</a></div>
        <div><a href="">About Us</a></div>
      </nav>

      <main>
        <section id='hero'>
          <video className="object-cover absolute -z-50 left-0 right-0 top-0 bottom-0" autoPlay playsInline loop muted>
            <source src="./media/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className='text-amber-300 text-7xl text-center font-extrabold z-10'>Unlock the World of Kickboxing: Techniques, History, Fitness, and More.</h1>
        </section>
            
        <section id='featured-content' className='relative grid grid-flow-col grid-rows-2 justify-items-center gap-2'>
          {featuredContent("./media/kickboxing-techniques.jpg", "Kickboxing Techniques", "Briefly explain the importance of kickboxing techniques...", "  techniques.html")}
          {featuredContent("./media/kickboxing-history.jpg", "History of Kickboxing", "Explore the evolution and significance of kickboxing...", "history.html")}
          {featuredContent("./media/fitness-benefits.jpg", "Fitness Benefits", "Discover the physical and mental advantages of kickboxing...", "fitness.html")}
          {featuredContent("./media/kickboxing-gear.jpg", "Gear Recommendations", "Find the best gear for an optimal kickboxing experience...", "gear.html")}
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
