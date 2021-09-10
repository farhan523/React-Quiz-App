import React from 'react'
import QuestionCard from './QuestionCard';
import SelectCategory from './SelectCategory'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return (
        <Router>
            <div className="home">


                <Switch>
                    <Route exact path="/">
                        <SelectCategory />
                    </Route>
                    <Route path="/quiz">
                        <QuestionCard />
                    </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default Home
