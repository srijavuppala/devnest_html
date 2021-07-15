const Card=(props)=>{
    return(
      <div className="Card">
          <h1>{props.name}</h1>
          <h4>you have consumed {props.number} cals today</h4>
      </div>
    )
}

export default Card