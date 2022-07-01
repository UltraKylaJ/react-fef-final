import { Image } from "react-bootstrap";


function AboutUs() {
    return (
        <>
            <div className="img">
                <img src="https://unsplash.com/photos/kFoh7gacj_0" />
            </div>
            <div className="about-text">
                <h3>Welcome to our Company!</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
    )
}

export default AboutUs;

// Create an about page that can be navigated to via /about which contains a 
// paragraph of text (use placeholder text) and an image (use Unsplash or 
// other stock photo sites) side by side.