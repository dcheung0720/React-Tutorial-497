// import './Cart.css';

const Cart = ({schedule, selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>The cart is empty</h2>
      : <div> <b>Courses Selected:</b> 
        {Object.entries(schedule["courses"])
        .filter(l => selected.includes(l[0]))
        .map((course, id) => (
          <div key={id}>
            <div className = "top"><b style = {{fontSize: "25px"}}>{course[1].term} {" CS "} {course[1].number}</b></div>
                <div className = "middle">{course[1].title}</div> 
                <div className = "bottom">Meeting Time: {course[1].meets}</div>
                <hr></hr>
          </div>
        ))}</div>
    }
  </div>
);

export default Cart;