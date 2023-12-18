import {React, useState } from 'react'

const FormQuestion = ({question, options, changeForm, count, isRequired, hasFreeType}) => {
    
    const [radioSelected, setRadioSelected] = useState();

    const displayField = (option, index) => {
        return <label key={option + index}>
            <input className="formInput" type="radio" id={option} name={"question" + count} value={option} onChange={(e) => onChangeForm(index)} checked={radioSelected === index} />
            <span className="form-label">{option}</span>
        </label>
    }

    const formOptions = options.map((option, index) => {
        return displayField(option, index)
    });

    const onChangeForm = (index) => {
        setRadioSelected(index)
        changeForm(count, index)
    }

    return <div className="form-question">
        <h6>{question}{isRequired && " *"}</h6>
        {formOptions}
    </div>
}

export default FormQuestion;