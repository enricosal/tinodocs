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

            font-weight: 200;
        }

        .divider{
            width: 55vw;
            height: 2px;

            background-color: #2C2E39;

            margin: 1.25rem 0;
        }

        .titlep{
            font-weight: 500;

            font-size: 18px;

            margin-bottom: 0rem;
        }

        .code-area{
            display: flex;

            flex-direction: column;

            background-color: #22272E;

            padding: 1rem 1rem;

            max-width: 46vw;

            margin-top: .75rem;

            margin-bottom: .5rem;

            border-radius: 3px;


            h1{
                font-weight: 200;

                font-size: 16.5px;
            }

            h2{
                font-weight: 300;

                font-size: 13.5px;

                letter-spacing: .05rem;
            }
        }
    }
`;