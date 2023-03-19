import { useEffect, useState } from 'react'
import starLogo from './assets/icon-star.svg'
import thanksLogo from './assets/illustration-thank-you.svg'
import './App.css'

// Start with the mockup
// Step 1: Break the UI into a component hierarchy
// Step 2: Build a static version in React
// Step 3: Find the minimal but complete representation of UI state
// Step 4: Identify where your state should live
// Step 5: Add inverse data flow


function Card() {
  const [rate, setRate] = useState('')
  const [submited, setSubmited] = useState(false)

  if (!submited) {
    console.log("not submited")
    return (
      <main >
        <SvgImg src={starLogo} className={"star"} />
        <TextDesciption />
        <RatingSelector rate={rate} setRate={setRate} />
        <SubmitBtn rate={rate} setSubmited={setSubmited} />
      </main>
    )
  } else {
    return (
      <main className='submited'>
        <SvgImg src={thanksLogo} className={"pic"}/>
        <ThankYouText rate={rate} />
      </main>
    ) 
  }
}

function SvgImg({src, className}) {
  return (
    <div className={className}>
      <img src={src} />
    </div>
    ) 
}

function TextDesciption() {
  return (
    <div className='text-description'>
      <h1 className='text-head'>how did we do?</h1>
      <p className='text-p'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    </div>
  )
}

function ThankYouText({ rate }) {
  return (
    <>
      <p className="rate-display" id="rate-display">You selected {rate} out of 5</p>
      <h1 className='thanks-head'>Thank you!</h1>
      <p className="thanks-p">We Appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </>
  )
}



function RateButon({ id, value, rate, setRate}) {
  return <button className='rate' id={id} onClick={(e) => {setRate(e.target.id)}}>{value}</button>
}

function RatingSelector({rate, setRate}) {
  return(
    <div className='selector'>
      {[1,2,3,4,5].map((n) => {
        return (
          <RateButon key={n} id={n} value={n} rate={rate} setRate={setRate} />
          )
    })}
    </div>
  )
}

function SubmitBtn({rate, setSubmited}) {
  return (
    <>
      <div className='submit'>
        <button className="submit-btn" onClick={() => { rate ? setSubmited(true) : setSubmited(false) }}>SUBMIT</button>
      </div>
    </>
  )
}

export default Card;

