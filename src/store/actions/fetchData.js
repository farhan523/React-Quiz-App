
import { UPLOAD_DATA } from "../actionType/actionType"


export const fetchData = async (dispatch, state) => {

    try {
        console.log(state.categorie)
        let res = await fetch(`https://opentdb.com/api.php?amount=10&category=${state.categorie}&difficulty=medium&type=multiple`)
        let data = await res.json();
        let answers = await data.results.map((item) => { return item.correct_answer })
        console.log(answers);
        dispatch({
            type: UPLOAD_DATA,
            payLoad: data.results,
            answers
        })
    } catch (err) {
        console.error(err)
    }



}

