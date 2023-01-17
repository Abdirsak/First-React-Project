function About (){
    return <div className="about" id="About">
        <h3 className="sub-heading">About us</h3>
        <h1 className="heading">why choose us?</h1>
        <div className="rows">
            <img src="https://www.trane.com/img/products/weatherguard-top-accessory.png" alt="aboutimage" className="image"/>
            <div className="content">
            <h3>Best Electronic items in the country</h3>
            <p>Basic electronics covers common electronic components and their circuits.
            If you want to buy electronics in a simple way this app will be helpful to you.
            It contains a detail explanation of each electronics component.
            Brush up before taking the electronics exam.</p>
            <p>Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.</p>
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-shipping-fast"/>
                    <span className="span">free delivery</span>
                </div>
                <div className="icons">
                    <i className="fas fa-dollar-sign"/>
                    <span>Easey payments</span>
                </div>
                <div className="icons">
                    <i className="fas fa-headset"/>
                    <span>24/7 services</span>
                </div>
            </div>
            <a href="#" className="btn">Learn more</a>
        </div>
        </div>
    </div>
}
export default About