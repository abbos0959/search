import React from 'react'

export const Form = (props) => {
    return (
        <div> 
              <input
          value={props.status}
          onChange={props.onChange}
          placeholder="programming language"
        ></input>
        <input
          value={props.stack}
          onChange={props.onChanged}
          placeholder="Enter your favourite stack"
        ></input>
        
            
        </div>
    )
}
