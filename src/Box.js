function Box (props){
    return  <div className="box">
    <img src={props.image} alt="image1"/>
    <h3>{props.name}</h3>
    <div className='stars'>
        <i className={props.fullStar}/>
        <i className={props.fullStar}/>
        <i className={props.fullStar}/>
        <i className={props.fullStar}/>
        <i className={props.halfStar}/>
    </div>
    <span>{props.price}</span>
    <a href= "#" className="btn"><i className={props.cart}></i></a>
</div>
}
export default Box