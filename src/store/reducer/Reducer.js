import { UPLOAD_DATA, SELECT_CATEGORY } from "../actionType/actionType"

let initialState = {
    loading: true,
    questions: [],
    answers: [],
    categorie: ''
}


export const questionReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPLOAD_DATA:
            // console.log(action.payLoad)
            return {
                ...state,
                questions: action.payLoad,
                answers: action.answers,
                loading: false,
            }
        case SELECT_CATEGORY:
            return {
                loading: true,
                questions: [],
                answers: [],
                categorie: action.categorie,
            }
        default:
            return state
    }
}