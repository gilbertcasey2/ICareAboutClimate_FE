import {React, useState } from 'react'

const FormQuestion = ({question, options, changeForm, count, isRequired, hasFreeType, multipleOptions}) => {
    
    const [radioSelected, setRadioSelected] = useState([]);
    const [inputText, setInputText] = useState("");

    const [inputActive, setInputActive] = useState(false)

    const displayField = (option, index) => {
        var inputType;
        multipleOptions ? inputType = "checkbox" : inputType = "radio"
        return <label key={option + index}>
            <input className="formInput" type={inputType} id={option} name={"question" + count} value={option} onChange={(e) => onChangeForm(index)} checked={radioSelected.includes(index)} />
            <span className="form-label">{option}</span>
        </label>
    }


    const formOptions = options.map((option, index) => {
        return displayField(option, index)
    });

    const onChangeForm = (index) => {
        var temp_array = radioSelected;
        if (multipleOptions) {
            const item_index = temp_array.indexOf(index);
            if (item_index > -1) {
                temp_array.splice(item_index, 1)
            } else {
                temp_array.push(index)
            }
            setRadioSelected(temp_array)
        } else {
            setRadioSelected([index])
        }
       
    
        if (inputText !== "" && inputActive) {
            changeForm(count, index, multipleOptions, inputText)
        } else {
            changeForm(count, index, multipleOptions)
        }

        if (!inputActive && hasFreeType && index===(options.length-1)) {
            setInputActive(true);
        } else {
            setInputActive(false);
        }
    }

    const optionalInput = () => {
        var inputClassNames = "optionalInput";
        !inputActive && (inputClassNames = inputClassNames + " inactive")
        return <div className="inputHolder"><input type="text" onChange={onChangeInput} onBlur={(e) => onChangeForm(options.length -1)} value={inputText} className={inputClassNames} /></div>
    }

    const onChangeInput = (e) => {
        setInputText(e.target.value)
    }

    return <div className="form-question">
        <h6>{question}{isRequired && " *"}</h6>
        {formOptions}
        {hasFreeType && optionalInput()}
    </div>
}

export default FormQuestion;