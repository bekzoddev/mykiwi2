
const Newgoods = ({img,title,time,price}) => {

  return (
  <Link to="/goods">
    <div  className="card new-card">
      <img className="card-img" src={img} alt="img"/>
      <div className="card-bottom">
        <h4 className="card-title">{title}</h4>
        <span className="card-time">{time}</span>
        <span className="card-price">{price}</span>
      </div>
    </div>
  </Link>
  )
}
export default Newgoods;