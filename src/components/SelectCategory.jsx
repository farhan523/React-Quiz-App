import React from 'react'
import { useDispatch } from 'react-redux';
import { SELECT_CATEGORY } from '../store/actionType/actionType';
import sport from '../image/sports.jpg'
import film from '../image/film.jpg'
import comp from '../image/comp.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

async function ctaCat(e, dispatch) {
    console.log(e.target.attributes.value.value);
    await dispatch({
        type: SELECT_CATEGORY,
        categorie: e.target.attributes.value.value
    })
}


function SelectCategory() {

    let dispatch = useDispatch();


    return (
        <div className="select">
            <h1>Welcome to Quiz</h1>
            <h3>Choose one from the categories below and see how many questions you can answer correctly out of 10 questions!</h3>
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Link to="/quiz"  ><img className="imb" src={sport} value={'10'} onClick={(e) => ctaCat(e, dispatch)} style={{ width: '200px' }} /></Link>
                <Link to="/quiz" ><img className="imb" value={'18'} onClick={(e) => ctaCat(e, dispatch)} src={comp} style={{ width: '170px', paddingTop: 20 }} /></Link>
                <Link to="/quiz" ><img className="imb" value={'11'} onClick={(e) => ctaCat(e, dispatch)} src={film} style={{ width: '200px' }} /></Link>
            </div>
        </div>
    )
}

export default SelectCategory
