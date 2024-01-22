import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    border: 2px solid #2C2E39;

    border-radius: 6px;

    padding: 1rem;

    margin: 1.5rem 0;

    flex-direction: column;

    .header{
        display: flex;

        align-items: center;

        .request{
            display: flex;

            justify-content: center;
            align-items: center;

            border-radius: 36px;

            margin-left: 1rem;

            h1{
                font-size: 12px;

                font-weight: 600;

                padding: .25rem .5rem;
            }
        }

        .url{
            font-size: 14px;

            margin-left: 1rem;

            font-weight: 200;

            color: #E6E6E6;
        }
    }

    .description{
        font-size: 15px;

        font-weight: 500;

        margin-top: 1rem;
        margin-left: 2.6rem;
    }

    .code-area{
        display: flex;

        margin-left: 2.6rem;
        margin-top: 1rem;

        flex-direction: column;

        .titlep{
            font-weight: 400;

            font-size: 15px;

            margin-bottom: 0rem;
        }
    }
`;