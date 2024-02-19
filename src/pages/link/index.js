import React, { useState } from "react";

import { Container, CodeBlock } from "./styles";

import SideBar from "../../Components/SideBar";

import linkflux from '../../assets/linkflux.png'

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Link() {
    const [status, setStatus] = useState(false);
    const [type, setType] = useState('POST');
    const [parameterStatus, setParameterStatus] = useState(false);
    const [parameterStatus2, setParameterStatus2] = useState(false);
    const [status2, setStatus2] = useState(false);

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
    }

    const exemploJSON = `
    {​
        "urlCallback": "https://your-site.com.br/order/success",​
        "merchantDocumentNumber": "04644905000155",​
        "email": "representante@lojista.com.br",​
        "externalId": "order-19544",​
        "amountCents": 43500,​
        "contact": {​
          "phone": "5511930004000",​
          "channel": "whatsapp"​
        },​
        "cart": {​
          "shippingCents": 1500,​
          "discountCents": 1000​
        }​
    ​}
    `;

    const exemploJSON2 = `
    | Code | Message | Description |
    | - | - | - |
    | 400 | INVALID_ARGUMENT:API key not valid. 
    Please pass a valid API key. | Api-Token inválido 
    // Invalid Api-Token |
    | 5 | missing-supplier-id | ID do fornecedor 
    não encontrado no Tino 
    // Supplier not registered in Tino |
    | 9 | invalid-supplier-id | ID inválido do 
    fornecedor no Tino 
    // Supplier ID is invalid |
    | 9 | error-creating-merchant | Erro interno 
    ao tentar criar o lojista 
    no Tino // Internal error when was creating the 
    merchant || 9 | document number is not 
    a valid CNPJ | CNPJ inválido // Document 
    number (CNPJ) is invalid |
    | 9 | document number is not a valid CPF | CPF 
    inválido // Document number (CPF) is invalid |
    | 9 | email is not valid | E-mail inválido 
    // E-mail is invalid |
    | 9 | phone number is not valid | Telefone 
    inválido // Phone number is invalid |
    | 9 | ip is not in a valid format | IP em 
    um formato inválido // IP is not in 
    a valid format |
    `;

 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Link de Pagamento</h1>

            <h2 className="subTitle">Tino para compras assistidas.</h2>

            <p style={{ marginTop: '.5rem' }}>A segunda opção do cliente ter acesso à experiência de compra do Tino seria através da geração de um Link de Pagamento a ser enviado para o lojista no WhatsApp.</p>

            <p style={{ marginTop: '.5rem' }}>O fluxo de envio do Link de Pagamento deve ser integrado ao processo de vendas do fornecedor. Seja através de telemarketing, agentes ou representantes comerciais, o fornecedor poderá disponibilizar o Tino como uma opção de pagamento.</p>

            <p style={{ marginTop: '.5rem' }}>A partir do momento que o lojista escolher utilizar a solução de compra e pagamento do Tino, o fornecedor irá nos enviar uma solicitação de envio do Link de Pagamento. Após receber essa solicitação, o Tino irá enviar o link ao lojista através do WhatsApp informado.</p>

            <p style={{ marginTop: '.5rem' }}>Ao acessar o Link de Pagamento, o lojista terá acesso à página onde poderá escolher seu plano de pagamento e finalizar a sua compra. Vale destacar que, independentemente da forma como o cliente acessa (seja via SDK ou via Link de Pagamento), a experiência de compra é a mesma.</p>

            <p style={{ marginTop: '.5rem' }}>Abaixo, um exemplo de como esse fluxo funcionaria através de uma venda assistida:</p>

            <img src={linkflux}/>

            <p className="titlep">Para desenvolvedores:</p>

            <p style={{ marginTop: '.5rem' }}>Antes de realizar a venda da solução do Tino para seus clientes, sugerimos confirmar a elegibilidade do lojista. A finalidade desse endpoint é validar se o lojista tem permissão para realizar a transação em questão com o Tino e retornar essa informação ao fornecedor/distribuidor. Caso o cliente seja considerado inapto, o link de pagamento não poderá ser gerado. Portanto, é importante (mas não obrigatório) realizar essa validação antes de tentar gerar o link para garantir uma experiência de compra com o Tino mais fluída.</p>

            <CodeBlock>
                <div className="header">
                    {status === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus(!status)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus(!status)}/>
                    )}

                    <div className="request" style={{ backgroundColor: `${color}` }}>
                        <h1>{type}</h1>
                    </div>

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/payment-links/validate</span></h1>
                </div>

                <h1 className="description">Valida a possibilidade de geração de Link de Pagamento // Verifes the possibility of generating a Payment Link</h1>

                {status === true && (
                    <div className="code-area">
                        <h1 className="request-description">
                            Faturamento de reserva de limite é a consolidação da compra do Lojista.
                            Fazemos a captura das Notas Fiscais e criamos os pedidos no Tino conforme as informações enviadas. Só criaremos o pedido nesse momento.
                            É importante ressaltar que o pedido será criado apenas quando a data de emissão da nota fiscal for a mesma da data de envio. Essa regra se aplica também nos casos de mais de uma Nota Fiscal.
                            A reserva de limite é finalizada e não é mais possível utilizá-la para outro envio de Notas Fiscais.
                        </h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">
                        Billing the limit provision is the consolidation of the Merchant's purchase.
                        We capture invoices and create orders in Tino according to the information sent. We will only create the order in this moment.
                        It is important to notice that the order will only be created when the issuing date of the invoice is the same as the date sent to Tino. This rule also applies in cases of more than one Invoice.
                        The limit reservation is billed and it is no longer possible to use it for sending another Invoice.
                        </h1>       

                        <p className="titlep">Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Body</h1>
                            
                            <div className="parameter-section">
                                    <h1 className="parameter-title">amountCents*</h1>
                            
                                    <h1 style={{ marginLeft: '8rem' }} className="parameter-type">integer</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Valor do pedido em centavos (Ex. 12345 = R$ 123,45).
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Order amount in cents (Ex. 12345 = R$ 123,45).
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">merchantDocumentNumber*</h1>
                            
                                    <h1 style={{ marginLeft: '2rem' }} className="parameter-type">string</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            CNPJ do lojista. Deve conter apenas os números e, se o documento iniciar com 0 (zero), será necessário informá-los também.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's document number (CNPJ). It must only contain numbers and if there are 0s at the beginning, inform them as well.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">email*</h1>
                            
                                    <h1 style={{ marginLeft: '11.75rem' }} className="parameter-type">string</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            E-mail do lojista utilizado no cadastro junto ao Tino.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's document number (CNPJ). It must only contain numbers and if there are 0s at the beginning, inform them as well.
                                        </h1>
                                    </div>
                            </div>
                        </div>

                        <p className="titlep">Body</p>

                        <div className="code-example">
                            <pre>
                                {exemploJSON}
                            </pre>
                        </div>

                        <p className="titlep">Responses</p>

                        <div className="error-area">
                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="green"/>
                                    <h1>200: OK</h1>
                                </div>

                                <div className="description-error">
                                        <h1>
                                            Status de confirmação que o lojista foi criado.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Confirmation status that the merchant was created.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="orange"/>
                                    <h1>400: Bad Request</h1>
                                </div>

                                <div className="description-error">
                                    <pre>
                                        {exemploJSON2}
                                    </pre>
                                </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="orange"/>
                                    <h1>401: Unathorized</h1>
                                </div>

                                <div className="description-error">
                                        <h1>
                                            Api-Token válido, mas não reconhecido.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Api-Token is valid but not recognized.
                                        </h1>
                                </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="red"/>
                                    <h1>500: Internal Server Error</h1>
                                </div>

                                <div className="description-error">
                                        <h1>
                                            Erro interno.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Internal error.
                                        </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </CodeBlock>

            <CodeBlock>
                <div className="header">
                    {status2 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    )}

                    <div className="request" style={{ backgroundColor: `${color}` }}>
                        <h1>{type}</h1>
                    </div>

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/payment-links</span></h1>
                </div>

                <h1 className="description">Geração de Link de Pagamento // Generation of a Payment Link</h1>

                {status2 === true && (
                    <div className="code-area">
                        <h1 className="request-description">
                        Gera e envia um link de pagamento para um lojista.
                        </h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">
                        Generate and send a payment link to merchant.
                        </h1>       

                        <p className="titlep">Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Body</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">urlCallback</h1>
                            
                                    <h1 style={{ marginLeft: '8rem' }} className="parameter-type">string</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            URL (com protocolo HTTPS) que o SDK vai usar para redirecionar o lojista para a página de confirmação de compra do fornecedor após o pagamento ser confirmado no ambiente Tino.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            URL (with HTTPS protocol) that the SDK will use to redirect the merchant after the payment is confirmed.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">amountCents*</h1>
                            
                                    <h1 style={{ marginLeft: '8rem' }} className="parameter-type">integer</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Valor do pedido em centavos (Ex. 12345 = R$ 123,45).
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Order amount in cents (Ex. 12345 = R$ 123,45).
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">merchantDocumentNumber*</h1>
                            
                                    <h1 style={{ marginLeft: '2rem' }} className="parameter-type">string</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            CNPJ do lojista. Deve conter apenas os números e, se o documento iniciar com 0 (zero), será necessário informá-los também.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's document number (CNPJ). It must only contain numbers and if there are 0s at the beginning, inform them as well.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">email*</h1>
                            
                                    <h1 style={{ marginLeft: '11.75rem' }} className="parameter-type">string</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            E-mail do lojista utilizado no cadastro junto ao Tino.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's document number (CNPJ). It must only contain numbers and if there are 0s at the beginning, inform them as well.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                <h1 className="parameter-title">LegalPerson*</h1>

                                <h1 className="parameter-type">Object</h1>

                                {parameterStatus === true ? 
                                (<FiChevronDown size={21} color="#fff" onClick={() => setParameterStatus(!parameterStatus)}/>
                                ) : (
                                 <FiChevronRight size={21} color="#fff" onClick={() => setParameterStatus(!parameterStatus)}/>
                                )}
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            {parameterStatus === true && (
                                <>
                                <div className="parameter-section">
                                    <h1 className="parameter-title">documentNumber*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            CNPJ do lojista. Deve conter apenas os números e, se tiver 0s no início, informar eles também.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's document number (CNPJ). It must only contain numbers and if there are 0s at the beginning, inform them as well.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '51vw'}}>
                                    .
                                </div>
                                </>
                            )}

                            <div className="parameter-section">
                                <h1 className="parameter-title">NaturalPerson*</h1>

                                <h1 className="parameter-type" style={{ marginLeft: '8rem' }}>Object</h1>

                                {parameterStatus2 === true ? 
                                (<FiChevronDown size={21} color="#fff" onClick={() => setParameterStatus2(!parameterStatus2)}/>
                                ) : (
                                 <FiChevronRight size={21} color="#fff" onClick={() => setParameterStatus2(!parameterStatus2)}/>
                                )}
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            {parameterStatus2 === true && (
                                <>
                                <div className="parameter-section">
                                    <h1 className="parameter-title">name</h1>
                            
                                    <h1 style={{ marginLeft: '12rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Nome do representante do lojista.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's agent name.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '51vw'}}>
                                    .
                                </div>

                                <div className="parameter-section">
                                    <h1 className="parameter-title">documentNumber</h1>
                            
                                    <h1 style={{ marginLeft: '6.5rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            CPF do representante do lojista. Deve conter apenas os números e, se tiver 0s no início, informar eles também.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's agent document number (CPF). It must only contain numbers and if there are 0s at the beginning, inform them as well.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '51vw'}}>
                                    .
                                </div>

                                <div className="parameter-section">
                                    <h1 className="parameter-title">email*</h1>
                            
                                    <h1 style={{ marginLeft: '11.75rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            E-mail do lojista utilizado no cadastro junto ao Tino.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's e-mail used in the registration with Tino.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '51vw'}}>
                                    .
                                </div>

                                <div className="parameter-section">
                                    <h1 className="parameter-title">phoneNumber*</h1>
                            
                                    <h1 style={{ marginLeft: '7.75rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Telefone celular do representante do lojista.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Merchant's agent mobile phone number.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '51vw'}}>
                                    .
                                </div>
                                </>
                            )}
                            
                        </div>

                        <p className="titlep">Body</p>

                        <div className="code-example">
                            <pre>
                                {exemploJSON}
                            </pre>
                        </div>

                        <p className="titlep">Responses</p>

                        <div className="error-area">
                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="green"/>
                                    <h1>200: OK</h1>
                                </div>

                                <div className="description-error">
                                        <h1>
                                            Status de confirmação que o lojista foi criado.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Confirmation status that the merchant was created.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="orange"/>
                                    <h1>400: Bad Request</h1>
                                </div>

                                <div className="description-error">
                                    <pre>
                                        {exemploJSON2}
                                    </pre>
                                </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="orange"/>
                                    <h1>401: Unathorized</h1>
                                </div>

                                <div className="description-error">
                                        <h1>
                                            Api-Token válido, mas não reconhecido.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Api-Token is valid but not recognized.
                                        </h1>
                                </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="red"/>
                                    <h1>500: Internal Server Error</h1>
                                </div>

                                <div className="description-error">
                                        <h1>
                                            Erro interno.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Internal error.
                                        </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </CodeBlock>
        </div>
    </Container>
 );
}