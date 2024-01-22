import { Container } from "./styles";
import Logo from '../../assets/tino_logo_simbolo_positivo (1).svg';

export default function Header() {
 return (
    <Container>
        <div className="identity">
            <img src={Logo}/>
            <h1>Tino</h1>
        </div>
    </Container>
 );
}