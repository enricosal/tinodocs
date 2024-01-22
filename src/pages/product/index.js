import React from "react";
import { Container } from "./styles";
import SideBar from "../../Components/SideBar";

export default function Product() {
 return (
    <Container>
        <SideBar/>

        <div className="content-area">
            <h1 className="title">Fluxo do Produto</h1>

            <h2 className="subTitle">Um breve resumo de como funciona nosso produto.</h2>

            <p className="titlep">Cadastro de Merchant</p>

            <p>O primeiro passo é o Cadastro do lojista pelo fornecedor. A partir desse cadastro, o Tino irá realizar uma análise de risco desse lojista baseado nos dados coletados no processo de checkout. Caso o mesmo tenha limite aprovado, ele poderá utilizar a nossa solução de crédito nas suas compras com o fornecedor.</p>

            <div className="image-area">
                <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FVXlQBGv9rFu3vaQ0s8dU%2Fuploads%2FSW2fJDCNHws27CMzYdAB%2FFrame%201.png?alt=media&token=44bb94c1-12b7-47fc-8730-0b0f988ace6d"/>
                <h1 className="description">Exemplo de checkout</h1>
            </div>

            <p className="titlep">Reserva de limite e Nota fiscal</p>

            <p>Ao realizar a compra com o Tino, é gerada uma Reserva de Limite, que, em linhas gerais, funciona como um fluxo de autorização. O pedido é confirmado pelo Tino após o seu Faturamento, ou seja, quando o fornecedor emite e nos envia a(s) Nota(s) Fiscal(is) relativa(s) ao pedido, instrumento que "formaliza" a relação mercantil previamente estabelecida.</p>

            <p className="titlep">Cancelamento e Edição de pedidos</p>
            
            <p>Mesmo assim, se após o faturamento houver a necessidade de realizar alguma alteração no valor do pedido, o fornecedor poderá fazer isso através dos nossos fluxos de Edição e Cancelamento.</p>
            
            <p>O resto a gente cuida. ☺️</p>

            <div className="image-area">
                <img style={{ width: '80%' }} src="https://1159186069-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FVXlQBGv9rFu3vaQ0s8dU%2Fuploads%2FaMybQXE308pZQ5tFFaYq%2FCaptura%20de%20Tela%202023-12-04%20a%CC%80s%2011.20.18.png?alt=media&token=413abe86-51a1-41b1-8289-f47e3afc866f"/>
                <h1 className="description">Fluxograma resumido da experiência de compra do Tino.</h1>
            </div>
        </div>
    </Container>
 );
}