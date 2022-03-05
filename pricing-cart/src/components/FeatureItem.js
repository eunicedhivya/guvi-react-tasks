import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function FeatureItem({title, availability}){
    let featureIcon = availability ? faCheck : faXmark;
    let featureClass = availability ? "" : "text-muted";
    return (
        <li class={featureClass}><span className="fa-li"><FontAwesomeIcon icon={featureIcon} /></span>{title}</li>
    )
}

export default FeatureItem;