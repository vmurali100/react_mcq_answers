import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const Mcq = () => {
    const [mcq,setMcq]=useState({
        question:"",
        choice1:"",
        choice2:"",
        choice3:"",
        choice4:"",
        correctAns:"",
    })

    const handleChange=(e)=>{
        let newQuestion={...mcq};
        newQuestion[e.target.name] = e.target.value;
        setMcq(newQuestion)
    }

    const handleSubmit=()=>{
        axios.post("http://localhost:3000/mcqs",mcq).then(()=>{
            console.log("MCQ Added Successfully !!")
            clearForm()
        })
    }
    const clearForm=()=>{
        setMcq({
            question:"",
            choice1:"",
            choice2:"",
            choice3:"",
            choice4:"",
            correctAns:"",
        })
    }
  return (
    <div>
      <form>
        <label htmlFor="question">Question : </label>
        <input type="text" name="question" value={mcq.question}  onChange={(e)=>{handleChange(e)}}/> <br />
        <label htmlFor="choice1">Choice 1 </label>
        <input type="text" name="choice1"  value={mcq.choice1}  onChange={(e)=>{handleChange(e)}} /> <br />
        <label htmlFor="choice1">Choice 2 </label>
        <input type="text" name="choice2"  value={mcq.choice2}  onChange={(e)=>{handleChange(e)}}/> <br />
        <label htmlFor="choice1">Choice 3 </label>
        <input type="text" name="choice3"  value={mcq.choice3}  onChange={(e)=>{handleChange(e)}}/> <br />
        <label htmlFor="choice1">Choice 4 </label>
        <input type="text" name="choice4"  value={mcq.choice4}  onChange={(e)=>{handleChange(e)}}/> <br />
        <label htmlFor="choice1">Correct Answer </label>
        <input type="text" name="correctAns"  value={mcq.correctAns}  onChange={(e)=>{handleChange(e)}}/> <br />
        <button type='button' onClick={handleSubmit}>Create a MCQ</button>
      </form>
    </div>
  )
}

export default Mcq
