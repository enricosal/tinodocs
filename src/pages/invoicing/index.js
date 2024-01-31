import React, { useState } from "react";

import { Container, CodeBlock } from "./styles";
import SideBar from "../../Components/SideBar";

import warn from '../../assets/newwarn.png'

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Invoicing() {
    const [status, setStatus] = useState(false);
    const [parameterStatus, setParameterStatus] = useState(false);
    const [type, setType] = useState('POST');

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
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
    | 5 | limit-reservation-not-found | Reserva de 
    limite não foi encontrada // Limit reservation 
    not found |
    `;

 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Faturamento</h1>

            <h2 className="subTitle">Necessário para confirmar a compra feita via Tino.</h2>

            <p style={{ marginTop: '.5rem' }}>O fornecedor tem a obrigação de emitir e enviar ao Tino a(s) Nota(s) Fiscai(s) referente à Reserva de Limite. Nesse momento, criamos automaticamente os boletos referentes à cada parcela ou o boleto agregado do pedido e enviamos para o lojista.</p>

            <div className="warn">
                <img src={warn}/>
            </div>

            <div className="divider">
                .
            </div>

            <p className="titlep">Para desenvolvedores:</p>

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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v2/limit-reservations/{`{limitReservationId}`}/bill</span></h1>
                </div>

                <h1 className="description">Faturamento de uma reserva de limite // Billing a limit provision</h1>

                {status == true && (
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

                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>     

                        <div className="parameters-area">
                            <h1 className="body-title">Path</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">limitReservationId*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            ID identificador da reserva de limite criada anteriormente.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Previously created limit provision ID
                                        </h1>
                                    </div>
                            </div>

                            <h1 className="body-title">Body</h1>

                            <div className="parameter-section">
                                <h1 className="parameter-title">nfes*</h1>

                                <h1 className="parameter-type" style={{ marginLeft: '7.65rem' }}>Object</h1>

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
                                            <h1 className="parameter-title">data*</h1>
                                    
                                            <h1 style={{ marginLeft: '7.5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Dados da nota fiscal no formato base64. *Aceitamos apenas o formato 4.00 (atualizado em 2017)
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Invoice data encoded in base64. *We only accept the 4.00 format (updated in 2017)
                                                </h1>
                                            </div>
                                    </div>

                                    <div className="divider" style={{width: '95%'}}>
                                        .
                                    </div>

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

                                    <div className="divider" style={{width: '95%'}}>
                                        .
                                    </div>

                                    <div className="parameter-section">
                                            <h1 className="parameter-title">externalId*</h1>
                                    
                                            <h1 style={{ marginLeft: '5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Identificador da invoice (Nota Fiscal) criado no sistema (ERP) do fornecedor. Utilizado para referência de edição e cancelamento futura. Note que não é a chave da Nota Fiscal.
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Identifier of the invoice (Nota Fiscal) created in the supplier's (ERP) system. Used for future edit and cancel references. Note that it's not the Nota Fiscal key.
                                                </h1>
                                            </div>
                                    </div>

                                    <div className="divider" style={{width: '95%'}}>
                                        .
                                    </div>

                                    <div className="parameter-section">
                                            <h1 className="parameter-title">notes*</h1>
                                    
                                            <h1 style={{ marginLeft: '5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Identificador da invoice (Nota Fiscal) criado no sistema (ERP) do fornecedor. Utilizado para referência de edição e cancelamento futura. Note que não é a chave da Nota Fiscal.
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Identifier of the invoice (Nota Fiscal) created in the supplier's (ERP) system. Used for future edit and cancel references. Note that it's not the Nota Fiscal key.
                                                </h1>
                                            </div>
                                    </div>
                                </>
                            )}

                            <h1 className="body-title">Body</h1>

                            <div className="code-example">
                                <pre>
                                    {exemploJSON}
                                </pre>
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
                                            Lista de pedidos criados no Tino.
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

            <p style={{ marginTop: '.5rem' }}>Mas também sabemos que dependendo do processo e do modelo de negócios do fornecedor, o faturamento de cada Nota Fiscal de um mesmo pedido pode ocorrer em momentos diferentes (ou seja, não é no mesmo momento que se fatura a totalidade do pedido). Para isso temos um end-point de faturamento parcial que o fornecedor pode usar para enviar Notas Fiscais em requisições distintas, tendo que avisar o Tino o momento em que completar o faturamento.</p>

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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v2/limit-reservations/{`{limitReservationId}`}/partial-bill</span></h1>
                </div>

                <h1 className="description">Faturamento parcial de uma reserva de limite // Partial billing of a limit provision</h1>

                {status == true && (
                    <div className="code-area">
                        <h1 className="request-description">
                        Faturamento parcial de reserva de limite é a consolidação parcial da compra do Lojista.
                        Fazemos a captura das Notas Fiscais e criamos os pedidos no Tino conforme as informações enviadas. Só criaremos o pedido nesse momento.
                        É importante ressaltar que o pedido será criado apenas quando a data de emissão da nota fiscal for a mesma da data de envio. Essa regra se aplica também nos casos de mais de uma Nota Fiscal.
                        A reserva de limite somente é finalizada (faturada totalmente) quando o atributo de último batch for sinalizado como positivo. Caso contrário, poderá utilizá-la para o envio de outras Notas Fiscais relacionadas à reserva.
                        </h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">
                        Partial Billing the limit provision is the partial consolidation of the Merchant's purchase.
                        We capture invoices and create orders in Tino according to the information sent. We will only create the order in this moment.
                        It is important to notice that the order will only be created when the issuing date of the invoice is the same as the date sent to Tino. This rule also applies in cases of more than one Invoice.
                        The limit reservation is only finalized when the last batch attribute is marked as true, otherwise it can be used to send other Invoices related to the reservation.
                        </h1>         

                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>     

                        <div className="parameters-area">
                            <h1 className="body-title">Path</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">limitReservationId*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            ID identificador da reserva de limite criada anteriormente.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Previously created limit provision ID
                                        </h1>
                                    </div>
                            </div>

                            <h1 className="body-title">Body</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">lastBatch*</h1>
                            
                                    <h1 style={{ marginLeft: '9.5rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            ID identificador da reserva de limite criada anteriormente.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Previously created limit provision ID
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <div className="parameter-section">
                                <h1 className="parameter-title">nfes*</h1>

                                <h1 className="parameter-type" style={{ marginLeft: '11.4rem' }}>Object</h1>

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
                                            <h1 className="parameter-title">data*</h1>
                                    
                                            <h1 style={{ marginLeft: '7.5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Dados da nota fiscal no formato base64. *Aceitamos apenas o formato 4.00 (atualizado em 2017)
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Invoice data encoded in base64. *We only accept the 4.00 format (updated in 2017)
                                                </h1>
                                            </div>
                                    </div>

                                    <div className="divider" style={{width: '95%'}}>
                                        .
                                    </div>

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

                                    <div className="divider" style={{width: '95%'}}>
                                        .
                                    </div>

                                    <div className="parameter-section">
                                            <h1 className="parameter-title">externalId*</h1>
                                    
                                            <h1 style={{ marginLeft: '5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Identificador da invoice (Nota Fiscal) criado no sistema (ERP) do fornecedor. Utilizado para referência de edição e cancelamento futura. Note que não é a chave da Nota Fiscal.
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Identifier of the invoice (Nota Fiscal) created in the supplier's (ERP) system. Used for future edit and cancel references. Note that it's not the Nota Fiscal key.
                                                </h1>
                                            </div>
                                    </div>

                                    <div className="divider" style={{width: '95%'}}>
                                        .
                                    </div>

                                    <div className="parameter-section">
                                            <h1 className="parameter-title">notes*</h1>
                                    
                                            <h1 style={{ marginLeft: '5rem' }} className="parameter-type">String</h1>
                                    
                                            <div className="description-parameter">
                                                <h1>
                                                    Identificador da invoice (Nota Fiscal) criado no sistema (ERP) do fornecedor. Utilizado para referência de edição e cancelamento futura. Note que não é a chave da Nota Fiscal.
                                                </h1>

                                                <h1>
                                                    --
                                                </h1>

                                                <h1>
                                                    Identifier of the invoice (Nota Fiscal) created in the supplier's (ERP) system. Used for future edit and cancel references. Note that it's not the Nota Fiscal key.
                                                </h1>
                                            </div>
                                    </div>
                                </>
                            )}

                            <h1 className="body-title">Body</h1>

                            <div className="code-example">
                                <pre>
                                    {exemploJSON}
                                </pre>
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
                                            Lista de pedidos criados no Tino.
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