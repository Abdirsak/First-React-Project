import Earphone3 from "./Images/Earphone3.jpg";
function SecondSlide(){
    return <section className="home">
    <div className="home-slider">
        <div className="Wrapper">
            <div className="slide">
                <div className="Content">
                    <span>Our Special Tech</span>
                    <h3>Headphones</h3>
                    <p>Headphones themselves are essentially a pair of small speakers that are attached to a band that is positioned across the wearer's head to enable the speakers to be positioned over the ears Normally there are cushions that are placed around the speakers and over the ears for comfort.</p>
                    <a href="#" className="btn">Order now</a>
                </div>
                <div className="Image">
                    <img src={Earphone3} w alt="image1" width={450} ></img>
                </div>
            </div>

        </div>
    </div>
</section>
}
export default SecondSlide