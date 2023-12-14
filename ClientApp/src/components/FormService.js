
export async function submitForm(data) {
    var url = process.env.REACT_APP_DOMAIN + 'api/submit-form';
    var questionsDict = { "responses": data }
    var questionsWrapper = {"questions": JSON.stringify(questionsDict)}
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
        return await response.json();
    }
}