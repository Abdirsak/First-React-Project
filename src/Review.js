import Swipper from "./Swiper";
function Review (){
    return <div className="review" id="Review">
        <h3 className="sub-heading">Customer's Review</h3>
        <h1 className="heading">What they say </h1>
        <div className="review-slider">
            <div className="wrapper">
            <Swipper />

            </div>
        </div>
    </div>
}
export default Review