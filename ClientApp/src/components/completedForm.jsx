
import LeftMountain from "../img/leftMountains.png";
import Button from "./subComponents/button";

const CompletedForm = (props) => {

    return <section className="complete">
        <h1>Thank you.</h1>
        <h6>Your response is vital for this research.</h6>
        <Button isMain={true} isLink={true} linkPath="/" buttonText="Project Home"></Button>
        <img src={LeftMountain} className="mountains" alt="Mountains" /> 
    </section>
}

export default CompletedForm;