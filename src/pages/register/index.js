import React, { useState } from "react";

import { Container, CodeBlock } from "./styles";
import SideBar from "../../Components/SideBar";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Register() {
    const [status, setStatus] = useState(false);
    const [status2, setStatus2] = useState(false);
    const [parameterStatus, setParameterStatus] = useState(false);
    const [parameterStatus2, setParameterStatus2] = useState(false);
    const [parameterStatus3, setParameterStatus3] = useState(false);
    const [type, setType] = useState('POST');
    const [type2, setType2] = useState('GET');

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
    {
      "legalPerson": {
        "documentNumber": "67570836000100"
      },
      "naturalPerson": {
        "name": "Josias Silva",
        "documentNumber": "01234567890",
        "email": "representante@lojista.com.br",
        "phoneNumber": "5511930004000"
      },
      "metadata": {
        "ipAddress": "168.13.232.19",
        "operationalSystem": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 
        Safari/537.36 Edg/91.0.864.59"
      }
    }
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
            <h1 className="title">Cadastro <h2 className="subTitle" style={{ margin: 0 }}>{`(~25 minutos)`}</h2></h1>

            <h2 className="subTitle">Realiza o cadastro de novos lojistas.</h2>

            <p style={{ marginTop: '.5rem' }}>A primeira etapa do fluxo é o cadastro de novos lojistas e se dá através do end-point de Novos Cadastros. Nesse momento, o Tino recebe os dados de cadastro da loja e verifica se esse cliente está apto à transacionar, realizando todas validações necessárias, sejam elas de natureza jurídica, fiscal ou trabalhista.</p>

            <p>Caso o cliente seja aprovado nessa etapa, ele é direcionado para o fluxo de análise de crédito, que irá verificar o seu histórico de crédito, dívidas assumidas e realizar uma avaliação de risco completa.</p>

            <p>Nossa sugestão é que estejamos integrados no seu processo de cadastro e que a utilização do Tino esteja prevista nos Termos de Uso da plataforma do Fornecedor, pois, devido à regulamentação vigente, somos obrigados a coletar o termo de consentimento para realizar a análise de crédito.</p>

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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/merchants</span></h1>
                </div>

                <h1 className="description">Cria um novo lojista no Tino // New merchant registry at Tino</h1>

                {status === true && (
                    <div className="code-area">
                        <p className="titlep">Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Body</h1>

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

                            <div className="parameter-section">
                                <h1 className="parameter-title">metadata*</h1>

                                <h1 className="parameter-type" style={{ marginLeft: '9.5rem' }}>Object</h1>

                                {parameterStatus3 === true ? 
                                (<FiChevronDown size={21} color="#fff" onClick={() => setParameterStatus3(!parameterStatus3)}/>
                                ) : (
                                 <FiChevronRight size={21} color="#fff" onClick={() => setParameterStatus3(!parameterStatus3)}/>
                                )}
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            {parameterStatus3 === true && (
                                <>
                                <div className="parameter-section">
                                    <h1 className="parameter-title">ipAddress*</h1>
                            
                                    <h1 style={{ marginLeft: '9.75rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            IP do lojista que deu o aceite nos Termos & Condições.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            IP address of the merchant who accepted the Terms & Conditions.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '45vw'}}>
                                    .
                                </div>

                                <div className="parameter-section">
                                    <h1 className="parameter-title">operationalSystem</h1>
                            
                                    <h1 style={{ marginLeft: '6.15rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            IP do lojista que deu o aceite nos Termos & Condições.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            IP address of the merchant who accepted the Terms & Conditions.
                                        </h1>
                                    </div>
                                </div>

                                <div className="divider" style={{width: '45vw'}}>
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

            <p style={{ margin: 0 }}>Caso exista o interesse do fornecedor saber se o lojista está apto à transacionar com o Tino, muitas vezes uma informação que para a venda assistida é fundamental, temos um end-point que retorna o status desse lojista. Mais detalhes a respeito do fluxo de venda assistida com o Tino será detalhado em Link de Pagamento.</p>

            <CodeBlock>
                <div className="header">
                    {status2 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    )}

                    <div className="request" style={{ backgroundColor: `${color2}` }}>
                        <h1>{type2}</h1>
                    </div>

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v2/merchants/{`{documentNumber}`}</span></h1>
                </div>

                <h1 className="description">Verifica se o lojista está apto para usar o Tino // Verify if the merchant is able to use Tino</h1>

                {status2 == true && (
                    <div className="code-area">
                        <h1 className="request-description">Verifica se o lojista está apto para usar o Tino. Não é utilizado para validação pré-compra ou geração de link de pagamento. Pode ser utilizado em algum outro ponto da jornada do lojista, como uma validação após análise de crédito.</h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">Checks whether the merchant is able to use Tino. It is not used for pre-purchase validation or payment link generation. It can be used at any other check-point in the retailer's journey, such as validation after credit analysis.</h1>
                    
                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Body</h1>

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

                            <div className="divider" style={{width: '95%'}}>
                                .
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
                                                Detalhes do lojista.
                                            </h1>

                                            <h1>
                                                --
                                            </h1>

                                            <h1>
                                                Merchant details.
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
                                        <h1>
                                            Api-Token inválido.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Invalid API-Token.
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
                    </div>
                )}
            </CodeBlock>
        </div>
    </Container>
 );
}