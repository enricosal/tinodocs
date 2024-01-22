import React, { useState } from "react";

import { FiChevronRight, FiChevronDown } from "react-icons/fi";

import { Container } from "./styles";

export default function CodeBlock({type, url, description}) {
    const [status, setStatus] = useState(false);

    if(type === 'POST'){
        var color = '#006623'
    }else if(type === 'GET'){
        var color = '#2F7F98'
    }

 return (
    <Container>
        <div className="header">
            {status === true ? 
            (<FiChevronDown size={24} color="#fff" onClick={() => setStatus(!status)}/>
            ) : (
                <FiChevronRight size={24} color="#fff" onClick={() => setStatus(!status)}/>
            )}

            <div className="request" style={{ backgroundColor: `${color}` }}>
                <h1>{type}</h1>
            </div>

            <h1 className="url">https://supplier-api.truepay.app/<span style={{ fontWeight: 600 }}>{url}</span></h1>
        </div>

        <h1 className="description">{description}</h1>

        {status === true && (
            <div className="code-area">
                <p className="titlep">Parameters</p>

                <p className="titlep">Body</p>
            </div>
        )}
    </Container>
 );
}