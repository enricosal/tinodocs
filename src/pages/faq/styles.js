import styled from 'styled-components';

export const Container = styled.div`   
    display: flex;

    flex-direction: row;

    .divider{
            width: 55vw;
            height: 2px;

            background-color: #2C2E39;

            margin: 1rem 0;
        }

    .content-area{
        display: flex;

        padding: 1rem 7%;

        padding-top: 2.5rem;

        flex-direction: column;

        overflow-x: scroll;

        max-height: 84vh;

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

        .video-area{
            display: flex;

            justify-content: center;
            align-items: center;

            margin: 1rem 0;
        }

        .titlep{
                font-weight: 600;

                font-size: 21px;

                margin-bottom: 0rem;
        }

        .warn{
            display: flex;

            margin-top: 1.5rem;

            margin-bottom: 1rem;

            img{
                width: 48.2vw;
            }
        }

        .answer-area{
            display: flex;

            border: 2px solid #2C2E39;

            flex-direction: column;

            padding: 1rem;

            margin: 1rem 0;

            max-width: 42vw;

            .header{
                display: flex;

                align-items: center;

                h1{
                    font-size: 15px;

                    font-weight: 600;

                    padding: .25rem .5rem;

                    margin-left: 0;
                }
            }

            h1{
                font-size: 15px;

                font-weight: 200;

                padding: .25rem .5rem;

                margin-left: 1.5rem;

                max-width: 90%;
            }
        }
    }

    .content-area::-webkit-scrollbar {
        display: none;
    }
`;