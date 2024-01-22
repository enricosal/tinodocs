import styled from 'styled-components';

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

        .title{
            font-weight: 500;
        }

        .subTitle{
            margin: 1rem 0;

            font-size: 15px;

            font-weight: 200;
        }

        p{
            color: #fff;

            margin: .75rem 0;

            width: 55vw;

            font-weight: 300;
        }

        .titlep{
            font-weight: 500;

            font-size: 18px;

            margin-bottom: 0rem;
        }

        .divider{
            width: 55vw;
            height: 2px;

            background-color: #2C2E39;

            margin: 1rem 0;
        }
    }

    .content-area::-webkit-scrollbar {
        display: none;
    }
`;