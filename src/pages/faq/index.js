import React, { useState } from "react";

import { Container } from "./styles";

import SideBar from "../../Components/SideBar";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function Faq() {
   const [status, setStatus] = useState(false);
   const [status2, setStatus2] = useState(false);
   const [status3, setStatus3] = useState(false);
   const [status4, setStatus4] = useState(false);
 return (
    <Container>
      <SideBar/>
      <div className="content-area">
         <h1 className="title">FAQ</h1>
         <h2 className="subTitle">Perguntas frequentes que recebemos ao longo do processo de integração.</h2>

         <div className="answer-area">
            <div className="header">
                    {status === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus(!status)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus(!status)}/>
                    )}

                    <h1 className="message">
                     Preciso de algum certificado ou credencial para uso das aplicações?
                    </h1>
            </div>

            {status === true && (
               <h1>Você irá precisar das apiKeys disponibilizada durante o seu cadastro no Tino.</h1>
            )}
         </div>

         <div className="answer-area">
            <div className="header">
                    {status2 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    )}

                    <h1 className="message">
                    Como faço para solicitar as chaves de acesso?
                    </h1>
            </div>

            {status2 === true && (
               <h1>Você irá recebê-las logo após o seu onboarding com o Tino. Temos um time comercial que irá acompanhá-lo em todo esse processo. Se por algum motivo você não teve acesso às chaves, entre em contato com o representante comercial.</h1>
            )}
         </div>

         <div className="answer-area">
            <div className="header">
                    {status3 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus3(!status3)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus3(!status3)}/>
                    )}

                    <h1 className="message">
                    Como faço para acessar os ambientes de staging e production?
                    </h1>
            </div>

            {status3 === true && (
               <>
                 <h1>SDK: O que diferencia os ambientes no SDK é a apiKey. Você irá receber uma para cada ambiente, mas fazendo a chamada do mesmo javascript.</h1>
                 <h1>API: O host de staging é o https://stg.supplier-api.truepay.com.br e o de produção é o https://supplier-api.truepay.app, você receberá uma apiKey para cada um destes ambientes (serão keys diferentes das keys do SDK).</h1>
               </>
            )}
         </div>

         <div className="answer-area">
            <div className="header">
                    {status4 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus4(!status4)}/>
                    ) : (
                        <FiChevronRight size={24} color="#fff" onClick={() => setStatus4(!status4)}/>
                    )}

                    <h1 className="message">
                        Como meus lojistas podem ter acesso a sua fatura Tino?
                    </h1>
            </div>

            {status4 === true && (
               <h1>Você pode disponibilizar dentro do seu ambiente para o lojista um redirecionamento para a url app.tino.com.br ou envie através do seu melhor canal de contato..</h1>
            )}
         </div>
      </div>
    </Container>
 );
}