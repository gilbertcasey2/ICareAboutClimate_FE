export class Question {
    constructor(question, options, isRequired=false, hasFreeType=false, multipleOptions=false) {
        this.question = question;
        this.options = options;
        this.isRequired = isRequired;
        this.hasFreeType = hasFreeType;
        this.multipleOptions = multipleOptions;
    }
}

const questions = []

questions.push(new Question("How much do you think climate change will impact people in Maine over the next 10 years?", ["A great deal", "Somewhat", "Only a little", "Not at all"], true));

questions.push(new Question("Maine has committed to reducing greenhouse gas emissions by 40% by 2030. How do you feel about the government taking action  to meet this goal?", ["Strongly support", "Somewhat support", "Somewhat oppose", "Strongly oppose"], true));

questions.push(new Question("How would you rank climate change in your voting priorities?", ["Top priority", "High priority", "Medium priority", "Low priority", "Not a priority"], true));

questions.push(new Question("In the past six months, have you engaged politically with climate change in any of the following ways?", ["Discussing climate legislation with friends or family",  "Voting on climate legislation", "Calling or emailing your elected officials", "Commenting on or advocating for climate legislation", "Other (please specify)"], true, true, true));

questions.push(new Question("How old are you?", ["< 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65<"]));

questions.push(new Question("How would you describe yourself?", ["Black or African American", "American Indian or Alaska Native", "Native Hawaiian or other Pacific Islander", "Asian", "White", "Multiple races", "Some other race"], false, false, true));

questions.push(new Question("With which gender do you most identify?", ["Female", "Male", "Nonbinary", "Other"]));

questions.push(new Question("Which would you consider yourself?", ["Democrat", "Independant", "Republican", "Something else", "Don’t know"]));

questions.push(new Question("What is the highest level of education you have received?", ["Some high school", "High school or equivalent degree", "Some college, no degree", "Associate’s degree", "Bachelor’s degree", "Graduate or professional degree"]));

export default questions;
