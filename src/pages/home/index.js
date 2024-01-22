import React from "react";

import SideBar from "../../Components/SideBar";
import { Container } from "./styles";

export default function Home() {
 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">🏠 Página Inicial</h1>

            <h2 className="subTitle">Bem-vindo(a) ao Tino!</h2>

            <p>Olá</p>

            <p>Seja muito bem-vindo(a) à documentação técnica do Tino.</p>

            <p>Aqui você poderá entender como funcionam os nossos produtos e quais APIs e SDKs podem ser utilizados de forma a integrar o Tino ao seu ciclo de vendas.</p>
        
            <p>O documento foi pensado de forma a facilitar o entendimento e a construção de fluxo seguindo os passos da jornada do cliente, desde o cadastro, passando pelo fluxo de compra e, por fim, de pagamento.</p>
        
            <p>Vamos lá! 🚀</p>
            
            <p style={{ background: "#FF5D47", width: "max-content"}}>Criando uma realidade onde empreender não é uma missão impossível.</p>
        </div>e
    </Container>
 );
}