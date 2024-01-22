import { Container } from "./styles";

import { useHistory } from 'react-router-dom'

export default function Option({page, title, changePage, newPage}) {
    const history = useHistory();

    function ControlPage(){
        changePage(newPage);
        history.push(`${newPage}`);
        window.location.reload();
    }

 return (
    <Container onClick={ControlPage}  style={page === newPage ? {background: '#502927', borderRadius: 6} : {}}>
        <h1 style={page === newPage ? { color: '#FF5D47', fontWeight: 600 } : {}}>{title}</h1>
    </Container>
 );
}