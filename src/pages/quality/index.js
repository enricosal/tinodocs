import React, { useState } from "react";

import SideBar from "../../Components/SideBar";
import { Container } from "./styles";

import warnQuality from '../../assets/warnquality.png'

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Quality() {
    const [status, setStatus] = useState(false);
    const [status2, setStatus2] = useState(false);

 return (
   <Container>
        <SideBar/>

        <div className="content-area">
            <h1 className="title">Controle de Qualidade</h1>

            <h2 className="subTitle">Um guia prático de como devem ser conduzidos os processos de teste.</h2>

            <p style={{ marginTop: '.5rem' }}>Após a finalização da integração, sugerimos que o fornecedor (i) realize um teste interno em Staging; e (ii) uma bateria de testes em produção junto ao time do Tino. Os testes deverão ser acompanhados pelo nosso time de Produto, Engenharia e Suporte de forma a garantir a melhor experiência possível para nossos clientes.</p>  

            <img src={warnQuality}/>

            <p style={{ marginTop: '.5rem' }}>Abaixo, uma sugestão de checklist para cada tipo de integração:</p>

            <div className="list">
                <div className="header">
                {status === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus(!status)}/>
                    ) : (
                    <FiChevronUp size={24} color="#fff" onClick={() => setStatus(!status)}/>
                    )}


                    <h1 className="url">Integração via SDK</h1>
                </div>
            </div>

            <div className="list">
                <div className="header">
                {status2 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    ) : (
                    <FiChevronUp size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    )}


                    <h1 className="url">Integração via Link de Pagamento</h1>
                </div>
            </div>

        </div>
   </Container>
 );
}