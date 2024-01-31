import React, {useState} from "react";
import { Container, CodeBlock } from "./styles";

import Iframe from 'react-iframe'

import SideBar from "../../Components/SideBar";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { MdCircle } from "react-icons/md";

export default function Limit() {
    const [status, setStatus] = useState(false);
    const [type, setType] = useState('GET');

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
    }

 return (
    <Container>
        <SideBar/>
        <div className="content-area">
            <h1 className="title">Reserva de Limite</h1>

            <h2 className="subTitle">Viabiliza o lojista a comprar utilizando o Tino como forma de pagamento.</h2>

            <p>O lojista poderá comprar com Tino através do SDK integrado ao e-commerce ou recebendo um Link de Pagamento. Independentemente da forma como o lojista acessa a experiência de compra e pagamento do Tino, ele seguirá um fluxo único.</p>

            <p>O primeiro passo é escolher o prazo e a quantidade de parcelas. A depender das condições comerciais acordadas com o fornecedor, o cliente poderá escolher entre planos de pagamentos semanais, quinzenais ou mensais. Após selecionar o plano de pagamento, se for necessário, o lojista irá precisar aprovar os Termos de Uso e a Política de Privacidade do Tino para confirmar a compra.</p>

            <div className="video-area">
                <Iframe
                url="https://drive.google.com/file/d/14mE7L-WJojFGdS2ZWbVgDmxIwDHi8LKz/preview"
                width="650px"
                height="350px"
                display="flex"
                position="relative"
                />
            </div>

            <p>Após a confirmação da compra, o lojista terá acesso a uma tela de feedback da compra, especificando se a solicitação foi concluída com êxito ou se ocorreu alguma falha ao longo do processo. Caso haja falha e o cliente clique em “Tentar novamente”, ele irá voltar para a página onde poderá selecionar novamente os planos de pagamento. Caso haja falha e o cliente opte por não seguir o pagamento com o Tino, iremos redirecioná-lo de volta aos planos de pagamento para escolher uma outra opção.</p>

            <p>A compra confirmada é então transformada em uma Reserva de Limite. A Reserva de Limite existe como uma pré-validação da compra e o Tino só fatura (cria) o pedido quando a Nota Fiscal é enviada. Isso acontece, pois o que rege a relação mercantil entre o Fornecedor e o Lojista é a Nota Fiscal.</p>
            
            <p>O fornecedor não tem nenhuma ação na criação da reserva de limite. A própria conclusão da compra gera a reserva no Tino. Retornarmos com um Webhook confirmando a reserva.</p>

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

                    <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>v2/limit-reservations/{`{externalId}`}</span></h1>
                </div>

                <h1 className="description">Busca de reservas de limite // Limit reservations search</h1>

                {status == true && (
                    <div className="code-area">
                        <h1 className="request-description">Busca de reserva de limite. Poderá ser usado pelo e-commerce logo após receber uma mensagem do webhook para o evento payment_reservation_created. É um passo necessário por segurança, assim a plataforma garante que, de fato, a reserva foi criada no Tino.</h1>
                        <h1 className="request-description">--</h1>
                        <h1 className="request-description">Get a list of limit reservations. It can be used by e-commerce after receiving a message from webhook for payment_reservation_created event. It's a necessary step for security reasons, that way the platform guarantees that, in fact, the provision was done in Tino.</h1>
                    
                        <p className="titlep" style={{ marginTop: '2rem' }}>Parameters</p>

                        <div className="parameters-area">
                            <h1 className="body-title">Body</h1>

                            <div className="parameter-section">
                                    <h1 className="parameter-title">externalId*</h1>
                            
                                    <h1 style={{ marginLeft: '6.25rem' }} className="parameter-type">String</h1>
                            
                                    <div className="description-parameter">
                                        <h1>
                                            ID do pedido cadastrado pelo fornecedor, normalmente gerado no ERP. Para reserva de limite é uma informação obrigatória.
                                        </h1>

                                        <h1>
                                            --
                                        </h1>

                                        <h1>
                                            Order ID (External ID) registered by the supplier (usually generated in the ERP). This is a required information for limit reservation.
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
                                                Lista de reservas de limite.
                                            </h1>

                                            <h1>
                                                --
                                            </h1>

                                            <h1>
                                                List of limit reservations.
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