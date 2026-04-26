import React, { useState } from "react";
//its a react,hoook - used for initializing
//variable in react function component using a setter method
function TextBoxRead(){
const [input, SetInput] = useState('');
const [output, SetOutput] = useState('');
const [user,setUser] = useState('');
const [email,setEmail] = useState('');
//this is arrow function for button click event
const handclick = () => {
    SetOutput('You entered: ' + input);
};
 return(
    <>
    <h1> Reading from Text Box</h1>
    <input type="text" value={input} onChange={(e) => SetInput (e.target.value)}/>
    <br />
    <button onClick={handclick}>
        click here to open input
    </button>
    <p>{output}</p>
    </>
 );
}
export default TextBoxRead;