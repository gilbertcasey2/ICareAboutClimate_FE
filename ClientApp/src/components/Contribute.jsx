import { useState, useEffect } from "react";
import ContributeForm from "./contributeForm";
import CompletedForm from "./completedForm";

const Contribute = ({formIndex}) => {
    var [completedForm, setCompletedForm] = useState(false)

    useEffect(() => {
        const isCompleted = localStorage.getItem('formCompleted');
        if (isCompleted) {
         setCompletedForm(true);
        }
      }, []);

    if (completedForm) {
        return <CompletedForm />
    } else {
        return <section className="contribute">
            <h1>How do you feel about climate change?</h1>
            <p className="subhead">Don’t worry- we’ll keep your answers private and never share them with anyone else.</p>
            <ContributeForm formIndex={formIndex} />
        </section>
    }

}

export default Contribute;