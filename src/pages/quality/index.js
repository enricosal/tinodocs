import React, { useState } from "react";

import SideBar from "../../Components/SideBar";
import { Container } from "./styles";

import warnQuality from '../../assets/warnquality.png'

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

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

                {status === true && 
                <div className="list-area"> 
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Integrar com API de Novos Cadastros</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Integrar com SDK do CompraTino</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de Cancelamento de Reserva</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de busca de Reserva de Limite (opcional)</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de envio da Nota Fiscal / Faturamento</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de Edição de Invoice</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de Cancelamento de Invoice</h1>
                    </div>
                </div>}
            </div>

            <div className="list">
                <div className="header">
                {status2 === true ? 
                    (<FiChevronDown size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                    ) : (
                    <FiChevronUp size={24} color="#fff" onClick={() => setStatus2(!status2)}/>
                )}

                <h1>Integração via Link de Pagamento</h1>
                </div>

                {status2 === true && 
                <div className="list-area"> 
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Integrar com API de Novos Cadastros</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de validação do link</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de solicitação de envio do Link de Pagamento</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de Cancelamento de Reserva</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de busca de Reserva de Limite (opcional)</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de envio da Nota Fiscal / Faturamento</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de Edição de Invoice</h1>
                    </div>
                    <div className="item">
                        <MdCheckBoxOutlineBlank size={20} color="grey"/>
                        <h1>Endpoint de Cancelamento de Invoice</h1>
                    </div>
                </div>}
            </div>

        </div>
   </Container>
 );
}