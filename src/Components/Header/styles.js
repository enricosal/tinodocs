import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    flex-direction: row;

    width: 100vw;

    border-bottom: 2px solid #2C2E39;

    align-items: center;

    .identity{
        display: flex;
        flex-direction: row;

        align-items: center;

        padding: 1.2rem;

        img{
            max-width: 40px;
        }

        h1{
            color: #FFF;
            font-size: 24px;
            font-weight: 600;

            padding-left: 1rem;
        }
    }
`;