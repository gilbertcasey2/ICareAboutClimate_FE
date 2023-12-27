import {React, useState, useEffect} from "react"
import { Navigate } from 'react-router-dom';

import FormQuestion from "./subComponents/formQuestion";
import questions from "./questions"
import { formArrival, submitForm, submitQuestion } from "./FormService";

import { v4 as uuidv4 } from 'uuid';
import CensusMap from "./subComponents/censusMap";

const ContributeForm = ({formIndex}) => {
    const [formDirty, setFormDirty] = useState(false)

    const [requiredQuestions, setRequiredQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [redirectCompleted, setRedirectCompleted] = useState();

    async function handleSubmit(e) {
        e.preventDefault()
        var result = await submitForm(answeredQuestions,localStorage.getItem('formID'), formIndex);
        localStorage.setItem('formCompleted', true)
        if (result != null) {
            setFormDirty(false)
            setRedirectCompleted("/complete")
        } else {
            setRedirectCompleted("/errors")
        }
        
    }

    useEffect(() => {
        if (localStorage.getItem('formID') === null) {
            var id = uuidv4()
            localStorage.setItem('formID', id);
            formArrival({"storeageID": id, "formIndex": formIndex});
        }
        // add all required questions
        for (let i=0; i < questions.length; i++) {
            if (questions[i].isRequired) {
                setRequiredQuestions(prevState => ([...prevState, i]));
            }
        };
        // now add location question, which is always required
        setRequiredQuestions(prevState => ([...prevState, questions.length]))
    }, [formIndex])

    const formChanged = (count, index, multipleOptions, response=null) => {

        // send question answer to backend
        submitQuestion(index, localStorage.getItem('formID'), count, formIndex, multipleOptions, response)

        // update answered questions
        setAnsweredQuestions(prevState => ([...prevState, {"questionIndex" : count, "answerIndex" : index, "otherAnswer": response, "isMultipleChoice": multipleOptions}]));
        // var isDone = true;

        // // See if all required questions are answered
        // for (let i=0; i < requiredQuestions.length; i++) {
        //     var isAnswered = false;
        //     for(let j=0; j < answeredQuestions.length;j++) {
        //         if (answeredQuestions[j].questionIndex === requiredQuestions[i] || requiredQuestions[i] === count) {
        //             isAnswered = true;
        //         }
        //     }
        //     if (!isAnswered) {
        //         isDone = false;
        //         break;
        //     }
        // }
        //isDone && setFormDirty(true)
    }

    const displayQuestion = (question, index) => {
        return <FormQuestion key={"question" + index} changeForm={formChanged} question={question.question} options={question.options} count={index} isRequired={question.isRequired} hasFreeType={question.hasFreeType} multipleOptions={question.multipleOptions} />
    }

    const getFormQuestions = questions.map((question, index) => {
        return displayQuestion(question, index)
    });

    const calculateRequiredAnswered = () => {
        // See if all required questions are answered
        console.log("rerunning")
        var isDone = true;
        for (let i=0; i < requiredQuestions.length; i++) {
            var isAnswered = false;
            for(let j=0; j < answeredQuestions.length;j++) {
                if (answeredQuestions[j].questionIndex === requiredQuestions[i]) {
                    isAnswered = true;
                }
            }
            if (!isAnswered) {
                isDone = false;
                break;
            }
        }
        if (isDone) {
            return true;
        } else {
            return false;
        }
    }

    if (redirectCompleted) {
        return <Navigate to={redirectCompleted} />
    } else {
        return <form onSubmit={handleSubmit}>
            {getFormQuestions}
            <CensusMap changeForm={formChanged} count={questions.length}/>
            {!formDirty && <p className="fillAll">Please fill out all required fields before submitting!</p>}
            <input type="submit" className={calculateRequiredAnswered() == true ? "button main form-btn" : "button main form-btn hidden"} value="Submit" />
        </form>
    }
    
}

export default ContributeForm;