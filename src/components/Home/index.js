import { Link } from "react-router-dom";
import ImageSlider from "../HomeSlider";
import './index.scss';


const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm Que Bella Cookies and welcome to my page! 
                
                On this website you will be able to see previous orders,  
                
                inquire about new orders, 
                
                as well as seeing the events that are coming up!
                
                Some of these events will be at farmer markets, or some of them might be cookie decorating classes!</h1>
                <Link to='/contact' className="flat-button">Order Here</Link>
            </div>
            
            <div className='slider'>
                <ImageSlider />
            </div>

        </div>
    )
}


export default Home; 