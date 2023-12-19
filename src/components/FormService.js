var base_url = process.env.REACT_APP_DOMAIN ? process.env.REACT_APP_DOMAIN : "/"


export async function submitForm(data, storeageID, formIndex) {
    var url = base_url + 'api/submit-form';
    var questionsDict = {"responses": data }
    var questionsWrapper = {"storeageID": storeageID, "formIndex" : formIndex, "questions": JSON.stringify(questionsDict)}
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    var url = base_url + 'api/form-arrival';

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

export async function submitQuestion(data) {
    var url = base_url + 'api/submit-question';
    console.log("The URL: " + url)
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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