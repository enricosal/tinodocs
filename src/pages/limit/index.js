import React from "react";
import { Container } from "./styles";

import Iframe from 'react-iframe'

import SideBar from "../../Components/SideBar";
import CodeBlock from "../../Components/CodeBlock";

export default function Limit() {
 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Reserva de Limite</h1>

            <h2 className="subTitle">Viabiliza o lojista a comprar utilizando o Tino como forma de pagamento.</h2>

            <p>O lojista poderá comprar com Tino através do SDK integrado ao e-commerce ou recebendo um Link de Pagamento. Independentemente da forma como o lojista acessa a experiência de compra e pagamento do Tino, ele seguirá um fluxo único.</p>

            <p>O primeiro passo é escolher o prazo e a quantidade de parcelas. A depender das condições comerciais acordadas com o fornecedor, o cliente poderá escolher entre planos de pagamentos semanais, quinzenais ou mensais. Após selecionar o plano de pagamento, se for necessário, o lojista irá precisar aprovar os Termos de Uso e a Política de Privacidade do Tino para confirmar a compra.</p>

            <div className="video-area">
                <Iframe
                url="https://drive.google.com/file/d/14mE7L-WJojFGdS2ZWbVgDmxIwDHi8LKz/preview"
                width="650px"
                height="350px"
                display="flex"
                position="relative"
                />
            </div>

            <p>Após a confirmação da compra, o lojista terá acesso a uma tela de feedback da compra, especificando se a solicitação foi concluída com êxito ou se ocorreu alguma falha ao longo do processo. Caso haja falha e o cliente clique em “Tentar novamente”, ele irá voltar para a página onde poderá selecionar novamente os planos de pagamento. Caso haja falha e o cliente opte por não seguir o pagamento com o Tino, iremos redirecioná-lo de volta aos planos de pagamento para escolher uma outra opção.</p>

            <p>A compra confirmada é então transformada em uma Reserva de Limite. A Reserva de Limite existe como uma pré-validação da compra e o Tino só fatura (cria) o pedido quando a Nota Fiscal é enviada. Isso acontece, pois o que rege a relação mercantil entre o Fornecedor e o Lojista é a Nota Fiscal.</p>
            
            <p>O fornecedor não tem nenhuma ação na criação da reserva de limite. A própria conclusão da compra gera a reserva no Tino. Retornarmos com um Webhook confirmando a reserva.</p>

            <CodeBlock 
            type={'GET'} 
            url={'v2/limit-reservations/{externalId}'}
            description={'Busca de reservas de limite // Limit reservations search'}/>
        </div>
    </Container>
 );
}