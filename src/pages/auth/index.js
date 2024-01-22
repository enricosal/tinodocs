import React from "react";

import { Container } from "./styles";
import SideBar from "../../Components/SideBar";

import warn from '../../assets/warn.png'

import attention from '../../assets/Attention.png'

export default function Auth() {
 return (
    <Container>
        <SideBar/>

        <div className="content-area">
            <h1 className="title">Autenticação</h1>

            <h2 className="subTitle">De que forma o Tino identifica quem é você?</h2>

            <p>A autenticação é feita através do fornecimento da sua API Key. Ela deve ser transmitida em todas as requisições no header <span>x-api-key</span>. Caso a API Key seja inválida, não seja informada ou o header estiver incorreto, nossa API retornará <span>http 400</span>.</p>

            <p className="titlep">Headers</p>

            <div className="code-area">
                <h1>JSON</h1>
                <h2><text style={{ color: "#79C0FF" }}>"x-api-key": </text> <text style={{ color: "#A5D6FF" }}> "sua_api_key" </text></h2>
            </div>

            <div className="warn">
                <img src={warn}/>
            </div>

            <p className="titlep">Acesso às chaves</p>

            <p>As chaves são geradas pelo nosso time de atendimento e suporte no momento do onboarding. Se por algum motivo você não teve acesso às chaves, entre em contato com o representante comercial.</p>

            <div className="warn" style={{ marginTop: 18, marginBottom: 36 }}>
                <img src={attention}/>
            </div>
        </div>
    </Container>
 );
}