import React from "react"


    
const FeedbackOptions = ({onButtonIncrement}) => {
      return ( <div>
          <button type="button" name="good" onClick={onButtonIncrement}>
            Good
          </button>
          <button type="button" name="neutral" onClick={onButtonIncrement}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={onButtonIncrement}>
            Bad
          </button>
        </div> )
}
export default FeedbackOptions
    
