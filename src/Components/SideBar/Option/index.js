import { Container } from "./styles";

import { useHistory } from 'react-router-dom';

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Option({page, title, changePage, newPage, arrow}) {
    const history = useHistory();

    function ControlPage(){
        changePage(newPage);
        history.push(`${newPage}`);
        window.location.reload();
    }

 return (
    <Container onClick={ControlPage}  style={page === newPage ? {background: '#502927', borderRadius: 6} : {}}>
        <h1 style={page === newPage ? { color: '#FF5D47', fontWeight: 600 } : {}}>{title}</h1>
        {arrow == true && 
        <div style={{color: '#fff', marginLeft: '25%', display: 'flex', justifyContent: 'center'}}>
            {page === 'Limit' || page == 'payment-link' ? <FiChevronDown size={19}/> : <FiChevronUp size={19}/>}
        </div>}
    </Container>
 );
}