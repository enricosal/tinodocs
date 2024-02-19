import React from "react";
import { Container } from "./styles";
import SideBar from "../../Components/SideBar";

import warnreser from '../../assets/warnreser.png'

export default function Finish() {
 return (
    <Container>
        <SideBar/>

        <div className="content-area">
            <h1 className="title">Finalização da compra</h1>

            <h2 className="subTitle">O que acontece após o lojista finalizar a compra?</h2>

            <p style={{ marginTop: '.5rem' }}>Quando a compra é finalizada com sucesso no widget, notificamos via webhook os dados da reserva de limite criada no Tino e direcionamos o lojista para a sua página de sucesso.</p>

            <p className="titlep">Webhook</p>

            <p style={{ marginTop: '.5rem' }}>Um webhook é uma forma do seu servidor receber notificações quando certos eventos acontecem. Assim, você pode atualizar seu banco de dados, enviar e-mails de confirmação ou realizar qualquer outra ação com base no evento.</p>

            <p style={{ marginTop: '.5rem' }}>Para usar essa solução, você precisa configurar uma URL no seu servidor que possa aceitar requisições HTTP POST. Assim que o lojista completar a compra e a reserva for criada no nosso servidor, nós faremos uma request para sua URL (via servidor) cujo corpo conterá o ID do pedido (externalId) e o da reserva criada (paymentReservationId), como exemplificado abaixo:</p>

            <div className="code-area">
                <h2><text>{`{`}</text></h2>
                <h2><text style={{ marginLeft: '1.5rem', color: "#79C0FF" }}>"type": </text> <text style={{ color: "#A5D6FF" }}> "payment_reservation_created", </text></h2>
                <h2><text style={{ marginLeft: '1.5rem', color: "#79C0FF" }}>"data": </text> <text> {` { `} </text></h2>
                    <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>"externalId": </text> <text style={{ color: "#A5D6FF" }}> "order-19544", </text></h2>
                    <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>"paymentReservationId": </text> <text style={{ color: "#A5D6FF" }}> "3b161f91-391d-4278-b7e9-5cca609f1522" </text></h2>
                <h2><text style={{ marginLeft: '1.5rem' }}> {` } `} </text></h2>
                <h2><text>{`}`}</text></h2>
            </div>

            <img src={warnreser}/>

            <p className="titlep">Callback</p>

            <p style={{ marginTop: '.5rem' }}>Quando a compra for finalizada no widget, vamos redirecionar o lojista para a sua página de sucesso. Essa página será passada via configuração no campo urlCallback.</p>

            <p style={{ marginTop: '.5rem' }}>Além disso, vamos também adicionar 2 parâmetros na sua URL:</p>

            <p style={{ marginTop: '.5rem' }}>- reservationId: ID da reserva criada</p>

            <p style={{ marginTop: '.5rem' }}>- externalId: ID do pedido que foi nos passado via configuração</p>

            <div className="code-area">
                <h2><text>https://sua-loja.com.br/compra/sucesso?reservationId=53ec5a08-c30e-41b8-949e-fa39dca1572b&externalId=order-19544</text></h2>
            </div>
        </div>
    </Container>
 );
}