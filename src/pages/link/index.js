import React, { useState } from "react";

import { Container, CodeBlock } from "./styles";

import SideBar from "../../Components/SideBar";

import linkflux from '../../assets/linkflux.png'

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Link() {
    const [status, setStatus] = useState(false);
    const [type, setType] = useState('POST');
    const [type2, setType2] = useState('GET');
    const [parameterStatus, setParameterStatus] = useState(false);
    const [parameterStatus2, setParameterStatus2] = useState(false);
    const [status2, setStatus2] = useState(false);
    const [status3, setStatus3] = useState(false);

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
    }

    if(type2 === 'POST'){
        var color2 = '#006623'
    }else if(type2 === 'GET'){
        var color2 = '#2F7F98'
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
          "address": "Rua Tino, 123, São Paulo",
          "zipCode": "00000-000",
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

    const exemploJSON3 = `
    {
        "amountCents": 43500,
        "merchantDocumentNumber": "4644905000155",
        "email": "representante@lojista.com.br"
    }
    `

 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Link de Pagamento</h1>

            <h2 className="subTitle">Tino para compras assistidas.</h2>

            <p style={{ marginTop: '.5rem' }}>A segunda alternativa para que o cliente tenha acesso à experiência de compra do Tino consiste na geração de um Link de Pagamento, o qual será enviado ao lojista por meio do WhatsApp.</p>

            <p style={{ marginTop: '.5rem' }}>A integração do fluxo de envio do Link de Pagamento deve ser realizada no âmbito do processo de vendas do fornecedor. Seja por intermédio de telemarketing, agentes ou representantes comerciais, o fornecedor tem a possibilidade de oferecer o Tino como uma modalidade de pagamento.</p>

            <p style={{ marginTop: '.5rem' }}>Assim que o lojista optar por utilizar a solução de compra e pagamento do Tino, o fornecedor enviará uma solicitação para a emissão do Link de Pagamento. Após o recebimento dessa solicitação, o Tino encaminhará o link ao lojista por meio do WhatsApp previamente fornecido.</p>

            <p style={{ marginTop: '.5rem' }}>Ao acessar o Link de Pagamento, o lojista será direcionado a uma página na qual poderá selecionar seu plano de pagamento e concluir a transação. O Tino confirma a transação via webhook para o fornecedor.</p>

            <p style={{ marginTop: '.5rem' }}>Importante ressaltar que, independentemente da forma como o cliente acessa (seja por meio do SDK ou do Link de Pagamento), a experiência de compra permanece inalterada.</p>

            <p style={{ marginTop: '.5rem' }}>A seguir, apresentamos um exemplo de como esse processo se desenrolaria concretiza numa venda assistida:</p>

            <img src={linkflux}/>

            <p className="titlep">Para desenvolvedores:</p>

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

            <CodeBlock>
                <div className="header">
                    {status3 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus3(!status3)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus3(!status3)}/>
                    )}

                    <div className="request" style={{ backgroundColor: `${color2}` }}>
                        <h1>{type2}</h1>
                    </div>

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/payment-links</span></h1>
                </div>

                <h1 className="description">Status do Link de pagamento gerado // Status of the generated payment link</h1>

                {status3 === true && (
                    <div className="code-area">    

                        <p className="titlep">Parameters</p>

                        <div className="parameters-area">
                            
                            <div className="parameter-section">
                                    <h1 className="parameter-title">external_id*</h1>
                            
                                    <h1 style={{ marginLeft: '8rem' }} className="parameter-type">string</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Id externo do pedido, escolhido no momento da criação do pedido.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            External id of the order, chosen when the order was created.
                                        </h1>
                                    </div>
                            </div>
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
                                            Status sobre o link de pagamento gerado.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            status about the generated payment link.
                                        </h1>
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
