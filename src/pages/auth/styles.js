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

            width: 50vw;

            font-weight: 300;
        }

        .titlep{
                font-weight: 600;

                font-size: 21px;

                margin-bottom: 0rem;
        }

        span{
            background-color: #22272E;

            border-radius: 2%;

            padding: .15rem .4rem .10rem .4rem;
        }

        .code-area{
            display: flex;

            flex-direction: column;

            background-color: #22272E;

            padding: .25rem 1rem;

            max-width: 46vw;

            margin-top: .75rem;

            border-radius: 3px;


            h1{
                font-weight: 200;

                font-size: 16.5px;

                margin-bottom: .5rem;
            }

            h2{
                font-weight: 300;

                font-size: 13.5px;

                margin-bottom: .2rem;
            }
        }

        .warn{
            display: flex;

            margin-top: 2.5rem;

            margin-bottom: 1rem;

            img{
                width: 48.2vw;
            }
        }
    }

    .content-area::-webkit-scrollbar {
        display: none;
    }
`;