import React, {useState} from "react";
import { Container, CodeBlock } from "./styles";
import SideBar from "../../Components/SideBar";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Intention() {
    const [status, setStatus] = useState(false);
    const [type, setType] = useState('POST');

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
    }

 return (
    <Container>
         <SideBar/>
         <div className="content-area">
            <h1 className="title">Intenção de compra</h1>

            <h2 className="subTitle">Metrificamos o interesse do lojista no tino em seu checkout.</h2>

            <p>O fornecedor ao integrar esse end-point ao botão de opção do tino no checkout, conseguimos metrificar toda jornada de conversão do seu cliente, desde demonstrar interesse no tino até finalizar uma compra.</p>

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

                    <h1 className="url">https://tino-data-hooks-k4fblwkf7a-ue.a.run.app/supwh/navdata</h1>
                </div>

                <h1 className="description">intenção de compra // purchase intention</h1>

                {status == true && (
                    <div className="code-area">
                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Header</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">Authorization (Bearer)</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            Chave de autorização que disponibilizamos no começo do processo de implantação.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Authorization key that we provide at the beginning of the deployment process.
                                        </h1>
                                    </div>
                            </div>

                            <div className="divider" style={{width: '95%'}}>
                                .
                            </div>

                            <h1 className="body-title">Body</h1>

                    <div className="parameter-section">
                            <h1 className="parameter-title">documentNumber</h1>

                            <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>

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

                    <div className="parameter-section">
                            <h1 className="parameter-title">TestSupplier</h1>

                            <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>

                            <div className="description-parameter">
                                <h1>
                                    Nome do fornecedor que fez a integração em seu checkout.
                                </h1>

                                <h1>
                                    --
                                </h1>

                                <h1>
                                    Name of the supplier who integrated your checkout.
                                </h1>
                            </div>
                    </div>

                    <div className="parameter-section">
                            <h1 className="parameter-title">Timestamp</h1>

                            <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>

                            <div className="description-parameter">
                                <h1>
                                    Horário e data em que ocorreu o clique na opção tino em formato TimeStamp.
                                </h1>

                                <h1>
                                    --
                                </h1>

                                <h1>
                                    Time and date when the tino option was clicked in TimeStamp format.
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
                                                Status de sucesso no envio da intenção.
                                            </h1>

                                            <h1>
                                                --
                                            </h1>

                                            <h1>
                                                Status of success in sending the intention.
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