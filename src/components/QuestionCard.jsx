import React, { useState, useEffect } from 'react'
import { fetchData } from '../store/actions/fetchData'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function QuestionCard() {

    const dispatch = useDispatch()

    const state = useSelector((state) => { return state })
    if (state[1]) {
        console.log(state.questions)
    }



    useEffect(() => {
        fetchData(dispatch, state)


    }, [])

    let [count, setCount] = useState(0)
    let [color, setColor] = useState('rgb(216, 216, 131)')
    let [color2, setColor2] = useState('rgb(216, 216, 131)')
    let [color3, setColor3] = useState('rgb(216, 216, 131)')
    let [next, setNext] = useState(false)
    let [able, setAble] = useState(false)
    let [display, setDisply] = useState('none')
    let [score, setScore] = useState(0)
    let [scoreBoard, setScoreBoard] = useState(false)

    function ctaButton(e) {
        setColor('rgb(216, 216, 131)')
        setColor2('rgb(216, 216, 131)')
        setColor3('rgb(216, 216, 131)')
        setNext(true)
        setDisply('block')
        setAble(true)
        e.target.disabled = false

        if (e.target.innerHTML == state.answers[count]) {
            setScore((prev) => prev + 1)
        }
    }



    function ctaNext() {
        setNext(false)
        setCount((prev) => prev + 1)
        setAble(false)
    }


    function ctaSubmit() {

        setScoreBoard(true)
    }

    if (scoreBoard) {
        return <div className="card">
            <h1>Your Score is {score} Out Of 10</h1>
            <Link to="/" style={{ padding: '10px 20px', textDecoration: 'none', backgroundColor: 'black', color: 'white' }}>Home</Link>
        </div>
    } else {
        return (
            <div className="card">

                {state.loading ? <Loader
                    style={{ alignSelf: 'MutatingDots' }}
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                /> : <h2>{state.questions[count].question} {count + 1} /10</h2>}
                {state.loading ? null : state.questions[count].incorrect_answers.map((item, index) => { return <button disabled={able} key={index} onClick={ctaButton} style={{ backgroundColor: { color } }} >{item}</button> })}
                {state.loading ? null : <button disabled={able} onClick={ctaButton}>{state.questions[count].correct_answer}</button>}
                {next && count < 9 ? <button onClick={ctaNext} style={{ backgroundColor: 'black', color: 'white', display: { display } }}>NEXT</button> : null}
                {count === 9 ? <button style={{ backgroundColor: 'black', color: 'white' }} onClick={ctaSubmit}>Submit</button> : null}
            </div>
        )
    }


}

export default QuestionCard
