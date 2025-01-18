import './App.css'
import Testimonial from './Components/Testimonial'
import reviews from './Data'
function App() {
  return (
    <div className='top_container'>
      <div className='container'>
        <h1 className='heading'>Our Testimonials</h1>
        <div className='hr_line'></div>
        <Testimonial reviews={reviews}></Testimonial>
      </div>
      
    </div>
  )
}

export default App
