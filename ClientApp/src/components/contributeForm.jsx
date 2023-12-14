import {React, useState, useEffect} from "react"
import { Navigate } from 'react-router-dom';

import FormQuestion from "./subComponents/formQuestion";
import questions from "./formQuestions"
import { submitForm } from "./FormService";

const ContributeForm = (props) => {
    const [formDirty, setFormDirty] = useState(false)

    const [requiredQuestions, setRequiredQuestions] = useState([])
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const [redirectCompleted, setRedirectCompleted] = useState();

    async function handleSubmit(e) {
        e.preventDefault()
        var result = await submitForm(answeredQuestions);
        localStorage.setItem('formCompleted', true)
        if (result != null) {
            setFormDirty(false)
            setRedirectCompleted("/complete")
        } else {
            setRedirectCompleted("/errors")
        }
        
    }

    useEffect(() => {
        for (let i=0; i < questions.length; i++) {
            if (questions[i].isRequired) {
                setRequiredQuestions(prevState => ([...prevState, i]));
            }
        };
    }, [])

    const formChanged = (count, index) => {
        setAnsweredQuestions(prevState => ([...prevState, {"questionNumber" : count, "answer" : index}]));
        console.log(answeredQuestions)
        var isDone = true;
        for (let i=0; i < requiredQuestions.length; i++) {
            var isAnswered = false;
            for(let j=0; j < answeredQuestions.length;j++) {
                if (answeredQuestions[j].questionNumber === requiredQuestions[i] || requiredQuestions[i] === count) {
                    isAnswered = true;
                }
            }
            if (!isAnswered) {
                isDone = false;
                break;
            }
        }
        isDone && setFormDirty(true)
    }

    const displayQuestion = (question, index) => {
        return <FormQuestion key={"question" + index} changeForm={formChanged} question={question.question} options={question.options} count={index} isRequired={question.isRequired} hasFreeType={question.hasFreeType} />
    }

    const getFormQuestions = questions.map((question, index) => {
        return displayQuestion(question, index)
    });

    if (redirectCompleted) {
        return <Navigate to={redirectCompleted} />
    } else {
        return <form onSubmit={handleSubmit}>
            {getFormQuestions}
            {!formDirty && <p>Please fill out all required fields.</p>}
            <input type="submit" className={formDirty ? "button main form-btn" : "button main form-btn hidden"} value="Submit" />
        </form>
    }
    
}

export default ContributeForm;