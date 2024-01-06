var base_url = process.env.REACT_APP_DOMAIN ? process.env.REACT_APP_DOMAIN : "/"

var auth_key = process.env.REACT_APP_REQUEST_AUTH_KEY


export async function submitForm(data, storeageID, formIndex) {
    var auth_header = "Bearer " + auth_key;
    var url = base_url + 'api/submit-form';
    var questionsDict = {"responses": data }
    var questionsWrapper = {"storeageID": storeageID, "formIndex" : formIndex, "questions": JSON.stringify(questionsDict)}
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth_header },
        body: JSON.stringify(questionsWrapper)
    }).catch((e) => {
        console.log("Request to submit form returned an error " + e);
    });
    if(response.status !== 200) {
        console.log("Error submitting form. Status: " + response.status)
        return null;
    } else {
        return await response.ok;
    }
}

export async function formArrival(data) {
    var auth_header = "Bearer " + auth_key;
    var url = base_url + 'api/form-arrival';

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth_header },
        body: JSON.stringify(data)
    }).catch((e) => {
        console.log("Request to submit form returned an error " + e);
    });
    if(response.status !== 200) {
        console.log("Error submitting form. Status: " + response.status)
        return null;
    } else {
        return await response.ok;
    }
}

export async function submitQuestion(index, user_ID, questionIndex, formIndex, multipleOptions, otherAnswer=null) {
    var auth_header = "Bearer " + auth_key;
    
    var url = base_url + 'api/submit-question';

    var answerData = {"userID": user_ID, "questionIndex":questionIndex, "answerIndex": index, "formIndex" : formIndex, "multipleOptions": multipleOptions, "otherAnswer" : otherAnswer}
    console.log("The URL: " + url)
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth_header },
        body: JSON.stringify(answerData)
    }).catch((e) => {
        console.log("Request to submit form returned an error " + e);
    });
    if(response.status !== 200) {
        console.log("Error submitting form. Status: " + response.status)
        return null;
    } else {
        return await response.ok;
    }
}