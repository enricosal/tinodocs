import React from "react";
import { Container } from "./styles";

import SideBar from "../../Components/SideBar";

export default function Methods() {
    const dados = [
        { parametro: 'apiKey', tipo: 'string', exemplo: 'f12eed62-3007-404d-984d-6bb14bc581a2', descricao: 'Chave identificadora provida pelo Tino. Caso não tenha uma, entre em contato com seu representante comercial.' },
        { parametro: 'urlCallback', tipo: 'string', exemplo: 'https://sua-loja.com.br/compra/sucesso', descricao: 'URL (com protocolo HTTPS) que o SDK vai usar para redirecionar o lojista após o pagamento ser confirmado no ambiente Tino.' },
        { parametro: 'externalId', tipo: 'string', exemplo: 'order-19544', descricao: 'ID do pedido cadastrado pelo fornecedor, normalmente gerado no ERP' },
        { parametro: 'amountCents', tipo: 'int', exemplo: '20500', descricao: 'Valor da compra (com descontos e taxas) em centavos (Ex. 12345 = R$ 123,45).' },
        { parametro: 'transitionType', tipo: 'string', exemplo: 'default ou automatic', descricao: '(opcional) Define como ocorre a transição para finalizar a compra. default o usuário precisa clicar no botão de "comprar com Tino" e no automatic o clique é feito automaticamente, resultando numa experiência mais direta. ' },
        { parametro: 'openingMode', tipo: 'string', exemplo: 'blank ou self', descricao: 'Se a página de pagamento do Tino deve abrir na mesma janela do ecommerce (self) ou em uma nova (blank).' },
        { parametro: 'cart', tipo: 'object', exemplo: 'objeto Cart', descricao: 'Objeto com dados do carrinho.' },
        { parametro: 'customer', tipo: 'object', exemplo: 'objeto Customer', descricao: 'Objeto com dados do lojista.' },
        { parametro: 'containerElement', tipo: 'string', exemplo: 'TinoCheckoutContainer', descricao: '(opcional) Atributo id de elemento HTML onde o botão de checkout será inserido. Caso não seja provido, o valor padrão é TinoCheckoutContainer.' },
    ];

    const dados2 = [
        { parametro: 'shippingCents', tipo: 'int', exemplo: '1500', descricao: 'Valor da taxa de entrega em centavos (Ex. 12345 = R$ 123,45).' },
        { parametro: 'discountCents', tipo: 'int', exemplo: '1000', descricao: 'Valor de desconto da compra em centavos (Ex. 12345 = R$ 123,45).' },
        { parametro: 'items', tipo: 'array', exemplo: 'array CartItem', descricao: 'Array com dados dos itens do carrinho.' },
    ];
    
 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Métodos</h1>

            <h2 className="subTitle">Métodos que podem ser usados pelo SDK</h2>

            <div className="divider">
                .
            </div>

            <p className="titlep">tino.init</p>

            <h2 className="subTitle">Métodos que podem ser usados pelo SDK</h2>

            <table className="tabela">
                <thead>
                    <tr>
                    <th>Parâmetro</th>
                    <th>Tipo</th>
                    <th>Exemplo</th>
                    <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                    <tr key={index}>
                        <td>{item.parametro}</td>
                        <td>{item.tipo}</td>
                        <td>{item.exemplo}</td>
                        <td>{item.descricao}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <p className="titlep" style={{ marginTop: '3rem' }}>Cart</p>

            <h2 className="subTitle" style={{ marginTop: '1rem' }}>Contém os dados do carrinho do cliente.</h2>

            <table className="tabela">
                <thead>
                    <tr>
                    <th>Parâmetro</th>
                    <th>Tipo</th>
                    <th>Exemplo</th>
                    <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {dados2.map((item, index) => (
                    <tr key={index}>
                        <td>{item.parametro}</td>
                        <td>{item.tipo}</td>
                        <td>{item.exemplo}</td>
                        <td>{item.descricao}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Container>
 );
}