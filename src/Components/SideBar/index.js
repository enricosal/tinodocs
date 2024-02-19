import React, { useState } from 'react';
import { Container } from "./styles";

import { useHistory } from 'react-router-dom'

import Option from './Option';

export default function SideBar() {
    const history = useHistory();

    var arrayResultante = window.location.pathname.split("/");
    var stringResultante = arrayResultante[arrayResultante.length - 1];

    const [pageSelected, setPageSelected] = useState(stringResultante === '' ? 'home' : stringResultante);

    console.log(pageSelected)

 return (
    <Container>
        <div className="Title">
            <div className="option" onClick={() => {
                setPageSelected('home');
                history.push('/');
                window.location.reload();
            }} style={pageSelected === 'home' ? {background: '#502927', width: 204, height: 30, borderRadius: 6} : {}}>
                <h1 style={pageSelected === 'home' ? { color: '#FF5D47', fontWeight: 600} : {}}>🏠 Página inicial</h1>
            </div>
        </div>

        <div className="group-theme">
            <h1 className='group-title'>COMECE POR AQUI</h1>
            <Option changePage={setPageSelected} newPage={'solutions'} page={pageSelected} title={'Nossas soluções'}/>
            <Option changePage={setPageSelected} newPage={'product'} page={pageSelected} title={'Fluxo do produto'}/>
            <Option changePage={setPageSelected} newPage={'auth'} page={pageSelected} title={'Autenticação'}/>
        </div>

        <div className="group-theme">
            <h1 className='group-title'>FLUXO DO PRODUTO</h1>
            <Option changePage={setPageSelected} newPage={'register'} page={pageSelected} title={'Cadastro'}/>
            <Option changePage={setPageSelected} newPage={'Limit'} page={pageSelected} title={'Reserva de limite'} arrow={true}/>
            {pageSelected == 'Limit' || pageSelected == 'payment-link' || pageSelected == 'checkout-tino' || pageSelected == 'finish' ? (
                <div style={{ marginLeft: '1rem'}}>
                    <Option changePage={setPageSelected} newPage={'checkout-tino'} page={pageSelected} title={'Checkout tino'}/>
                    <Option changePage={setPageSelected} newPage={'payment-link'} page={pageSelected} title={'Link de Pagamento'}/>
                    <Option changePage={setPageSelected} newPage={'finish'} page={pageSelected} title={'Finalização da compra'}/>
                </div>
            ) : (<></>)}
            <Option changePage={setPageSelected} newPage={'Billing'} page={pageSelected} title={'Faturamento'}/>
            <Option changePage={setPageSelected} newPage={'Edit'} page={pageSelected} title={'Edição e Cancelamento'}/>
        </div>

        <div className="group-theme">
        <h1 className='group-title'>REFERÊNCIAS E LINKS ÚTEIS</h1>
            <Option changePage={setPageSelected} newPage={'FAQ'} page={pageSelected} title={'FAQ'}/>
            <Option changePage={setPageSelected} newPage={'QUALITY'} page={pageSelected} title={'Controle de Qualidade'}/>
            <Option changePage={setPageSelected} newPage={''} page={pageSelected} title={'Sobre o Tino'}/>
        </div>
    </Container>
 );
}