import React from "react";
import { Container } from "./styles";
import SideBar from "../../Components/SideBar";

export default function Solutions() {
 return (
    <Container>
        <SideBar/>

        <div className="content-area">
            <h1 className="title">Nossas soluções</h1>

            <h2 className="subTitle">Quais são as opções de integração disponíveis?</h2>

            <p>O meio de pagamento Tino foi pensado de forma a atender todo e qualquer tipo de fornecedor.</p>

            <p>Independentemente da solução escolhida, a experiência do lojista dentro do ambiente de Compra do Tino é exatamente a mesma, mudando apenas a forma como ele "acessa" essa experiência (dentro do e-commerce ou recebendo um link).</p>

            <p className="titlep">Checkout Tino integrado ao seu e-commerce</p>

            <p>Possui site ou e-commerce proprietário e recurso técnico disponível para realizar a integração? Está buscando uma solução de boleto a prazo para seus clientes para complementar a oferta de meios de pagamento do seu checkout? Esta é a nossa integração mais comum e a mais rica de todas.</p>

            <p className="titlep">Link de Pagamento para vendas assistidas</p>

            <p>Seu fluxo de vendas ainda é bastante assistido? A venda ocorre através de canais pessoais, ou de telefone e e-mail em vez do cliente ter uma jornada autosserviço via e-commerce? Se sim, essa pode ser a solução ideal para você!</p>
        </div>
    </Container>
 );
}