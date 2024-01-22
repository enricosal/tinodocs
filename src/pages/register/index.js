import React from "react";

import { Container } from "./styles";
import SideBar from "../../Components/SideBar";
import CodeBlock from "../../Components/CodeBlock";

export default function Register() {
 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Cadastro</h1>

            <h2 className="subTitle">Realiza o cadastro de novos lojistas.</h2>

            <p style={{ marginTop: '.5rem' }}>A primeira etapa do fluxo é o cadastro de novos lojistas e se dá através do end-point de Novos Cadastros. Nesse momento, o Tino recebe os dados de cadastro da loja e verifica se esse cliente está apto à transacionar, realizando todas validações necessárias, sejam elas de natureza jurídica, fiscal ou trabalhista.</p>

            <p>Caso o cliente seja aprovado nessa etapa, ele é direcionado para o fluxo de análise de crédito, que irá verificar o seu histórico de crédito, dívidas assumidas e realizar uma avaliação de risco completa.</p>

            <p>Nossa sugestão é que estejamos integrados no seu processo de cadastro e que a utilização do Tino esteja prevista nos Termos de Uso da plataforma do Fornecedor, pois, devido à regulamentação vigente, somos obrigados a coletar o termo de consentimento para realizar a análise de crédito.</p>

            <div className="divider">
                .
            </div>

            <p className="titlep">Para desenvolvedores:</p>

            <CodeBlock 
            type={'POST'} 
            url={'v1/merchant'}
            description={'Cria um novo lojista no Tino // New merchant registry at Tino'}/>

            <p style={{ margin: 0 }}>Caso exista o interesse do fornecedor saber se o lojista está apto à transacionar com o Tino, muitas vezes uma informação que para a venda assistida é fundamental, temos um end-point que retorna o status desse lojista. Mais detalhes a respeito do fluxo de venda assistida com o Tino será detalhado em Link de Pagamento.</p>

            <CodeBlock 
            type={'GET'} 
            url={'v2/merchants/{documentNumber}'}
            description={'Verifica se o lojista está apto para usar o Tino // Verify if the merchant is able to use Tino'}/>
        </div>
    </Container>
 );
}