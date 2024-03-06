import React from 'react'
import { Container } from './styles';
import SideBar from '../../Components/SideBar';

export default function Sdk() {
    var purple = <text style={{color: "BlueViolet"}}>init</text> 

 return (
    <Container>
        <SideBar/>

        <div className="content-area">
            <h1 className="title">Checkout Tino <h2 className="subTitle" style={{ margin: 0 }}>{`(~15 minutos)`}</h2></h1>

            <h2 className="subTitle">Tino integrado à experiência do seu e-commerce.</h2>


            <p style={{ marginTop: '.5rem' }}>A primeira forma do cliente ter acesso à experiência de compra do Tino é disponibilizando nosso meio de pagamento integrado à página de checkout. Para isso ser possível, o fornecedor/distribuidor deverá estar integrado ao nosso SDK.</p>

            <div className='divider'>
                .
            </div>

            <p className="titlep">Para desenvolvedores:</p>

            <p style={{ marginTop: '.5rem' }}>Para adicionar o meio de pagamento, inclua a tag a seguir no arquivo HTML da sua página, de preferência no fim da tag {`<body>`}.</p>

            <div className="code-area">
                <h2><text style={{ color: "Chartreuse" }}>{`<script`} </text> <text style={{ color: "#A5D6FF" }}>src="https://checkoutsdk.tino.com.br/dist/umd/sdk.min.js"</text><text style={{ color: "Chartreuse" }}>{`></script>`}</text></h2>
            </div>

            <p style={{ marginTop: '.5rem' }}>Após incluir o script, inicialize o SDK utilizando o método tino.init, como exemplificado abaixo:</p>

            <div className="code-area">
                <h2><text style={{ color: "Chartreuse" }}>{`<script`}</text></h2>
                    <h2 style={{ marginLeft: '1.5rem' }}><text>window.tino.<text style={{ color: 'Plum' }}>init</text>{`({`}</text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>"x-api-key": </text> <text style={{ color: "#A5D6FF" }}> "sua_api_key", </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>urlCallback: </text> <text style={{ color: "#A5D6FF" }}> 'https://sua-loja.com.br/compra/sucesso', </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>externalId: </text> <text style={{ color: "#A5D6FF" }}> 'order-19544', </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>amountCents: </text> <text style={{ color: "#A5D6FF" }}> 20500, </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>cart: </text> <text> {` { `} </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>address: </text> <text style={{ color: "#A5D6FF" }}> ‘Rua Tino, 123, São Paulo’, </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>zipCode: </text> <text style={{ color: "#A5D6FF" }}> ‘00000-00’, </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>shippingCents: </text> <text style={{ color: "#A5D6FF" }}> 1500, </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>discountCents: </text> <text style={{ color: "#A5D6FF" }}> 1000, </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>items: </text> <text> {` [ `} </text></h2>
                                <h2><text style={{ marginLeft: '4.5rem' }}> {` { `} </text></h2>
                                    <h2><text style={{ marginLeft: '5.5rem', color: "#79C0FF" }}>name: </text> <text style={{ color: "#A5D6FF" }}>'Algum produto 01', </text></h2>
                                    <h2><text style={{ marginLeft: '5.5rem', color: "#79C0FF" }}>quantity: </text> <text style={{ color: "#A5D6FF" }}>2, </text></h2>
                                    <h2><text style={{ marginLeft: '5.5rem', color: "#79C0FF" }}>amountCents: </text> <text style={{ color: "#A5D6FF" }}>10000 </text></h2>
                                <h2><text style={{ marginLeft: '4.5rem' }}> {` } `} </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem' }}> {` [ `} </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem' }}> {` }, `} </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>customer: </text> <text> {` { `} </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>documentNumber: </text> <text style={{ color: "#A5D6FF" }}> '12543987000199', </text></h2>
                            <h2><text style={{ marginLeft: '3.5rem', color: "#79C0FF" }}>email: </text> <text style={{ color: "#A5D6FF" }}> 'seu.cliente@gmail.com' </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem' }}> {` }, `} </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>containerElement: </text> <text style={{ color: "#A5D6FF" }}> 'TinoCheckoutContainer', </text></h2>
                        <h2><text style={{ marginLeft: '2.5rem', color: "#79C0FF" }}>openingMode: </text> <text style={{ color: "#A5D6FF" }}> 'self', </text></h2>
                    <h2><text style={{ marginLeft: '1.5rem' }}> {` }), `} </text></h2>
                <h2 style={{ marginTop: '.5rem' }}><text style={{ color: "Chartreuse" }}>{`</\script`}</text></h2> 
            </div>
        </div>
    </Container>
 );
}