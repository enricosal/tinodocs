import React, { useState } from "react";

import { Container, CodeBlock } from "./styles";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

import SideBar from "../../Components/SideBar";

import warn from '../../assets/warnedit.png'

export default function Edit() {
    const [status, setStatus] = useState(false);
    const [type, setType] = useState('PATCH');

    const [status2, setStatus2] = useState(false);
    const [type2, setType2] = useState('DELETE');

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
    }else if(type === 'PATCH'){
        var color = 'orange'
    }else if(type === 'DELETE'){
        var color = 'red'
    }

    if(type2 === 'DELETE'){
        var color2 = 'red'
    }

    const exemploJSON = `
    {
        "nfes": [
          {
            "data": "PD94bWwgdmVyc2l...== (base64)",
            "amountCents": 43500,
            "externalId": "20220825-2",
            "notes": "This is a note."
          }
        ]
    }
    `;

    const exemploJSON2 = `
    | Code | Message | Description |
    | - | -| - |
    | 400 | INVALID_ARGUMENT:API key not valid. 
    Please pass a valid API key. | Api-Token inválido 
    // Invalid Api-Token |
    | 3 | id is not valid (limitReservationId) | ID 
    inválido no endereço do endpoint // Invalid ID 
    in endpoint address |
    | 3 | NFe data is empty (at index ...) | Dados 
    da invoice (Nota Fiscal) está vazio // Invoice 
    (Nota Fiscal) data is empty |
    | 3 | NFe amount cents is not valid (at index ...) 
    | Valor da invoice (Nota Fiscal) está inválido 
    // Invalid invoice (Nota Fiscal) amount cents |
    | 3 | external id is empty (at index ...) | 
    Identificador da invoice (Nota Fiscal) está vazio 
    // Invoice (Nota Fiscal) external ID is empty |
    | 3 | external id is not unique (at index ...) | 
    ID externo da Nota Fiscal não é único // Invoice 
    (Nota Fiscal) external ID is not unique |
    | 3 | NFe notes is empty (at index ...) | ID 
    externo da invoice (Nota Fiscal) está vazio 
    // Invoice (Nota Fiscal) observations is empty |
    | 9 | domain-error: cannot-bill-limit-reservation 
    - details | Não é possível faturar a reserva de 
    limite // Cannot bill the limit reservation |
    `;

    const exemploJSON3 = `
    | Code | Message | Description |
    | - | -| - |
    | 5 | not-found-error: invoice not found | Pedido 
    não encontrado no Tino // Invoice not found in Tino |
    `;

 return (
    <Container>
        <SideBar/>
            <div className="content-area">
                <h1 className="title">Edição e Cancelamento</h1>

                <h2 className="subTitle">Caso seja necessário editar ou cancelar pedidos feitos com o Tino após seu faturamento.</h2>

                <p style={{ marginTop: '.5rem' }}>Nas últimas etapas do fluxo, existem devoluções e cancelamentos de pedidos que o lojista pode solicitar. Uma vez que o lojista entra em contato com algum canal de atendimento do fornecedor, este precisa indicar ao Tino qual é a Nota Fiscal a ser editada (e o valor) ou cancelada.</p>

                <div className="warn">
                    <img src={warn}/>
                </div>

                <div className="divider">
                    .
                </div>

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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/invoices/{`{externalInvoiceId}`}</span></h1>
                </div>

                <h1 className="description">Edita um pedido // Edit an invoice</h1>

                {status == true && (
                    <div className="code-area">
                        <h1 className="request-description">
                        Edita o valor de uma Nota Fiscal, que faz parte de um pedido - identificado pelo ID da Nota Fiscal (externalInvoiceId). *Não fazemos edições de valores maior que o original.
                        </h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">
                        Edit the value of an Invoice, which is part of an order - identified by the Invoice ID (externalInvoiceId). *We do not edit values ​​greater than the original.
                        </h1>         

                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>     

                        <div className="parameters-area">
                            <h1 className="body-title">Path</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">externalInvoiceId</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            ID que faz referência à Nota Fiscal, normalmente gerado no ERP. Deve ser o mesmo que foi enviado no momento de faturamento.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            ID that refers to the Invoice, normally generated in the ERP. It must be the same as the one sent at the time of Billing.
                                        </h1>
                                    </div>
                            </div>

                            <h1 className="body-title">Body</h1>

                            <div className="parameter-section">
                                            <h1 className="parameter-title">amountCents*</h1>
                                    
                                            <h1 style={{ marginLeft: '3.5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Valor da nota fiscal em centavos (Ex. 12345 = R$ 123,45). Se houver descontos ou acréscimos, enviar o valor final que deverá ser cobrado do lojista.
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Invoice amount in cents (Ex. 12345 = R$ 123,45). If there are discounts or add-ons, send the final amount to be charged of the merchant.
                                                </h1>
                                            </div>
                            </div>

                            <h1 className="titlep" style={{ marginTop: '1rem' }}>Responses</h1>

                            <div className="error-area">
                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="green"/>
                                    <h1>200: OK</h1>
                                </div>

                                <div className="description-error">
                                        <h1>                              	                    	
                                            Pedido editado com sucesso.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Invoices created in Tino.
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
                                    <MdCircle size={9} color="orange"/>
                                    <h1>404: Not found</h1>
                                </div>

                                <div className="description-error">
                                    <pre>
                                        {exemploJSON3}
                                    </pre>
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
                    </div>
                )}
            </CodeBlock>

            <CodeBlock>
                <div className="header">
                    {status2 === true ? 
                    (   <FiChevronDown size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    )}

                    <div className="request" style={{ backgroundColor: `${color2}` }}>
                        <h1>{type2}</h1>
                    </div>

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/invoices/{`{externalInvoiceId}`}</span></h1>
                </div>

                <h1 className="description">Cancela um pedido // Cancel an invoice</h1>

                {status2 == true && (
                    <div className="code-area">
                        <h1 className="request-description">
                        Cancela o valor de uma Nota Fiscal, que faz parte de um pedido - identificado pelo ID da Nota Fiscal (externalInvoiceId).
                        </h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">
                        Cancel an Invoice, which is part of an order - identified by the Invoice ID (externalInvoiceId).
                        </h1>         

                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>     

                        <div className="parameters-area">
                            <h1 className="body-title">Path</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">externalInvoiceId</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            ID que faz referência à Nota Fiscal, normalmente gerado no ERP. Deve ser o mesmo que foi enviado no momento de faturamento.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            ID that refers to the Invoice, normally generated in the ERP. It must be the same as the one sent at the time of Billing.
                                        </h1>
                                    </div>
                            </div>

                            <h1 className="titlep" style={{ marginTop: '1rem' }}>Responses</h1>

                            <div className="error-area">
                            <div className="error-section">
                                <div className="error-code">
                                    <MdCircle size={9} color="green"/>
                                    <h1>200: OK</h1>
                                </div>

                                <div className="description-error">
                                        <h1>                              	                    	
                                            Requisição de cancelamento de pedido criada com sucesso.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Invoice cancel request created successfully.
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
                                    <MdCircle size={9} color="orange"/>
                                    <h1>404: Not found</h1>
                                </div>

                                <div className="description-error">
                                    <pre>
                                        {exemploJSON3}
                                    </pre>
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
                    </div>
                )}
            </CodeBlock>
            </div>
    </Container>
 );
}