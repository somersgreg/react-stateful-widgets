/*
INPUT Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/a664dfe7-2dde-48d1-8fa2-48066d98e515_input.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Yup, a single slice of state is enough! In it we'll keep track of the value of the input.
Whether the text shows royalblue or crimson can be derived from the length of the value of the input.

STEP 0:
  Study the component below, and import the state hook.

STEP 1:
  Create a slice of state called 'inputValue' and its 'setInputValue' buddy.
  We should initialize this state to the empty string.

STEP 2:
  Make the color of the text be crimson if the length of 'inputValue' goes over ten.

STEP 3:
  Interpolate the value of the input inside this <div />. How can we make it show in ALL CAPS? // INTERPOLATE??

STEP 4:
  Set the value of the input -found inside the event object- into state.  //WHAT DOES THIS MEAN - EVENT OBJECT?

STEP 5:
  Set the input value in state to be empty string. The reset still won't work, though! See the next step. //STATE??

STEP 6:
  For the input to reset correctly, it needs to "drink" its value from state!
  We need to add an extra prop to the <input /> element like so: value={inputValue}
*/

import React from 'react'; /* STEP 0 */
import {useState} from "react";// YOU CAN COMBINE THEM
export default function Input() {//OC
  /* STEP 1 */
const [inputValue, setinputValue] = useState("");
  const changeInput = evt => {//OC
    // When the input changes, its whole value can be found inside the event object.  // EVENT OBJECT??
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;//OC
    console.log("Input -> evt.target", evt.target)
    // console.log("Input -> value", value) // THE LETTER
    // console.log("Input -> evt", evt) // LOTS OF STUFF
    /* STEP 4 */
    setinputValue(value)//I DONT KNOW WHERE EVT OBJECT IS COMING FROM
  };//OC

  const reset = () => {//OC
    /* STEP 5 */
    setinputValue("")
  };//OC

  const style = {//OC
    fontSize: '1.5em',//OC
    marginBottom: '0.3em',//OC
    color: inputValue.length > 10 ? 'hotpink':'royalblue', /* STEP 2 */
  };//OC

  return (//OC
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}>{inputValue.toUpperCase()}</div> {/* STEP 3 I USED .toLocaleUpperCase BUT THAT IS FOR GEOGRAPHIC CONDITION*/}
      <div>
        <input id='input' type='text' onChange={changeInput}  value={inputValue}/> {/* STEP 6 I DONT KNOW WHAT THIS IS DOING value={inputValue} */ }
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
    </div>//OC
  );//OC
}//OC
