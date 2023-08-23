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
      <nav className='flex gap-5 justify-evenly items-center'>
        <img className='h-auto w-1/12 flex-col' src="/icon.png" alt="logo" />
        
        <div><a href="">Home</a></div>
        <div><a href="">Contact Us</a></div>
        <div><a href="">Privacy Policy</a></div>
        <div><a href="">ToS</a></div>
        <div><a href="">About Us</a></div>
      </nav>

      <main className='pl-2 pr-2'>
        <section>
          {/* Hero section content here */}
        </section>
            
        <section id='featured-content' className='grid grid-flow-col grid-rows-2 justify-items-center gap-2'>
        {featuredContent("src/assets/featured-content/kickboxing-techniques.jpg", "Kickboxing Techniques", "Briefly explain the importance of kickboxing techniques...", "  techniques.html")}
        {featuredContent("src/assets/featured-content/kickboxing-history.jpg", "History of Kickboxing", "Explore the evolution and significance of kickboxing...", "history.html")}
        {featuredContent("src/assets/featured-content/fitness-benefits.jpg", "Fitness Benefits", "Discover the physical and mental advantages of kickboxing...", "fitness.html")}
        {featuredContent("src/assets/featured-content/kickboxing-gear.jpg", "Gear Recommendations", "Find the best gear for an optimal kickboxing experience...", "gear.html")}
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
