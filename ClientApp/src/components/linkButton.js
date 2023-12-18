import { Link , useLocation } from "react-router-dom";

const LinkButton = (props) => {
    const location = useLocation();
    const newClass = props.className + " linkBox";
    let isActive = false;
    const pathArray = location.pathname.split("/");
    if(pathArray[1] === props.linkTo.split("/")[1]) {
        isActive = true;
    }

    return <Link className={isActive ? newClass + " selected" : newClass} to={props.linkTo}>{props.value}</Link>  
}

export default LinkButton;