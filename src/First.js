import Watch3 from "./Images/Watch3.webp";
function FirstSlide(){
    return <section className="home">
        <div className="home-slider">
            <div className="Wrapper">
                <div className="slide">
                    <div className="Content">
                        <span>Our Special Tech</span>
                        <h3>Smart Watch</h3>
                        <p>its a wearable computing device that closely resembles a wristwatch or other time-keeping device</p>
                        <a href="#" className="btn">Order now</a>
                    </div>
                    <div className="Image">
                        <img src={Watch3} w alt="image1" width={450} ></img>
                    </div>
                </div>

            </div>
        </div>
    </section>
}
export default FirstSlide;