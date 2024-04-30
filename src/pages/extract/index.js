import React, { useState } from "react";

import { Container, CodeBlock } from "./styles";
import SideBar from "../../Components/SideBar";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Extract() {
    const [status, setStatus] = useState(false);
    const [status2, setStatus2] = useState(false);
    const [parameterStatus, setParameterStatus] = useState(false);
    const [parameterStatus2, setParameterStatus2] = useState(false);
    const [parameterStatus3, setParameterStatus3] = useState(false);
    const [type, setType] = useState('GET');
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
    400	| INVALID_ARGUMENT:API key not valid. 
    Please pass a valid API key.
    | Api-Token inválido // Invalid Api-Token
    3 | invalid start_date	
    Data inicial em formato inválido ou vazia 
    // Invalid start date or empty
    3 |	invalid end_date	
    Data final em formato inválido ou vazia 
    // Invalid end date or empty
    3 | start_date must be before end_date	
    Data inicial precisa ser antes da data final 
    // Initial 
    date must be before end date
    3 | interval between start_date and end_date 
    must be less or equal to 90 days	
    Intervalo máximo de datas deve ser menor ou 
    igual a 90 dias 
    // Maximum interval between dates must be 
    less or equal to 90 days
    `;

 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Extrato da conta <h2 className="subTitle" style={{ margin: 0 }}>{`(~45 minutos)`}</h2></h1>

            <h2 className="subTitle">Consegue realizar o download do CSV contábil e financeiro.</h2>

            <p style={{ marginTop: '.5rem' }}>Retorna uma lista de movimentações financeiras no período informado nos parâmetros.</p>

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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/statements/accounting</span></h1>
                </div>

                <h1 className="description">Gera extrato contábil em formato CSV // Generate accounting statement in CSV format</h1>

                {status === true && (
                    <div className="code-area">
                        <h1 className="request-description">Gera um link para download do extrato contábil de um determinado período. O período máximo é de 90 dias.</h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">Generate a link to download the accounting statement of a given period. The maximum period is 90 days.</h1>

                        <p className="titlep">Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Path</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">start_date*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Inicio do período no formato AAAA-MM-DD.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Start date of the period in the format YYYY-MM-DD.
                                        </h1>
                                    </div>
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">end_date*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Fim do período no formato AAAA-MM-DD.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            End date of the period in the format YYYY-MM-DD.
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
                                            Resposta contendo o link para download do extrato.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Response containing the link to download the statement.
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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v1/statements/financial</span></h1>
                </div>

                <h1 className="description">Gera extrato financeiro em formato CSV // Generate financial statement in CSV format</h1>

                {status2 === true && (
                    <div className="code-area">
                        <h1 className="request-description">Gera um link para download do extrato financeiro de um determinado período. O período máximo é de 90 dias.</h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">Generate a link to download the financial statement of a given period. The maximum period is 90 days.</h1>

                        <p className="titlep">Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Path</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">start_date*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Inicio do período no formato AAAA-MM-DD.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Start date of the period in the format YYYY-MM-DD.
                                        </h1>
                                    </div>
                            </div>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">end_date*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Fim do período no formato AAAA-MM-DD.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            End date of the period in the format YYYY-MM-DD.
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
                                            Resposta contendo o link para download do extrato.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Response containing the link to download the statement.
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
