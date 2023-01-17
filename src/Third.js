import SmartPhone from "./Images/Smartphone2.webp";
function ThirdSlide(){
    return <section className="home">
    <div className="home-slider">
        <div className="Wrapper">
            <div className="slide">
                <div className="Content">
                    <span>Our Special Tech</span>
                    <h3>Apple Mobiles</h3>
                    <p>iPhone 13 Pro Max is that rare phone that gets a 5-star rating from us. You get superior cameras and video recording capabilities</p>
                    <a href="#" className="btn">Order now</a>
                </div>
                <div className="Image">
                    <img src={SmartPhone} w alt="image1" width={450} ></img>
                </div>
            </div>

        </div>
    </div>
</section>
}
export default ThirdSlide;