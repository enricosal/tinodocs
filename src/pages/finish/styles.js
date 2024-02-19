import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    flex-direction: row;

    .content-area{
        display: flex;

        padding: 1rem 7%;

        padding-top: 2.5rem;

        flex-direction: column;

        overflow-x: scroll;

        max-height: 81vh;
    }
`;