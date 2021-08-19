import React from "react" 
const Buttons = ({ goodIncrement,
          neutralIncrement,
    badIncrement }) => {   
      return ( <div>
          <button type="button" onClick={goodIncrement}>
            Good
          </button>
          <button type="button" onClick={neutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={badIncrement}>
            Bad
          </button>
        </div> )
}
export default Buttons