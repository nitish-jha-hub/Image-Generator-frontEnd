import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return(
        <div> 
            <Navbar page="home"/>
            <div className="homepage-main-container">
            website that combines login/signup functionality with an image generator.
            <br></br>
            Click on the "Login" button to login or "Signup" to create a new account.
            </div>
        </div>
    )
}

export default HomePage;