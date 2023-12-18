export class Question {
    constructor(question, options, isRequired=false, hasFreeType=false) {
        this.question = question;
        this.options = options;
        this.isRequired = isRequired;
        this.hasFreeType = hasFreeType;
    }
}

const questions = []

questions.push(new Question("Thinking about how serious the effects of climate change will be, how much do you think climate change will harm people in Maine during the next 10 years?", ["A great deal", "A moderate amount", "Only a little", "Not at all"], true));

questions.push(new Question("Maine has committed to the goal of reducing this pollution by 40% by the year 2030. Do you support or oppose the government taking action to meet this goal and reduce climate change pollution?", ["Strongly support", "Somewhat support", "Somewhat oppose", "Strongly oppose"], true));

questions.push(new Question("How would you rank climate change as a political priority?", ["1", "2", "3", "4", "5 or greater"], true));

questions.push(new Question("In the past six months, have you engaged politically with climate change in any of the following ways?", ["Calling or emailing your elected officials", "Voting, advocating for, or commenting on climate legislation", "Discussing climate legislation with friends or family", "Other (please specify)"], true, true));

questions.push(new Question("How old are you?", ["< 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65<"]));

questions.push(new Question("How would you describe yourself?", ["Black or African American", "American Indian or Alaska Native", "Native Hawaiian or other Pacific Islander", "Asian", "White", "Multiple races", "Some other race"]));

questions.push(new Question("With which gender do you most identify?", ["Female", "Male", "Nonbinary", "Other"]));

questions.push(new Question("Which would you consider yourself?", ["Democrat", "Independant", "Republican", "Something else", "Don’t know"]));

questions.push(new Question("What is the highest level of education you have received?", ["Some high school", "High school or equivalent degree", "Some college, no degree", "Associate’s degree", "Bachelor’s degree", "Graduate or professional degree"]));

export default questions;
