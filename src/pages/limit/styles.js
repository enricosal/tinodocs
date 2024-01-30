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

            font-weight: 400;
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
    }

    .content-area::-webkit-scrollbar {
        display: none;
    }
`;

export const CodeBlock = styled.div`
    display: flex;

    border: 2px solid #2C2E39;

    border-radius: 3px;

    padding: 1rem;

    margin: 1.5rem 0;

    flex-direction: column;

    width: 52vw;

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

        font-weight: 600;
    }

    .request-description{
        font-size: 12px;

        font-weight: 300;
    }

    .parameters-area{
        display: flex;

        flex-direction: column;


        .body-title{
            font-weight: 400;

            font-size: 12px;

            margin-top: 1rem;
            margin-bottom: .75rem;
        }

        .parameter-section{
            display: flex;

            max-width: 90%;

            .parameter-title{
                font-weight: 300;

                font-size: 14px;
            }

            .parameter-type{
                font-weight: 300;

                font-size: 15px;

                margin-left: 9rem;
            }

            svg{
                margin-left: 20vw;
            }

            .description-parameter{
                display: flex;

                width: 35%;
                flex-direction: column;

                h1{
                    font-size: 12px;

                    font-weight: 300;

                    padding: .5rem 0;
                }

                margin-left: 11vw;
            }
        }
    }

    .code-example{
        display: flex;

        background-color: #2C2E39;

        margin-top: .5rem;

        width: 94%;

        border-radius: .25rem;

        pre{
            color: #fff;

            line-height: 21px;
        }
    }

    .error-area{
        display: flex;

        flex-direction: column;

        margin-top: 1rem;

        .error-section{
            display: flex;

            align-items: flex-start;

            justify-content: space-between;

            max-width: 90%;

            .error-code{
                display: flex;

                align-items: center;

                margin-left: .25rem;

                h1{
                    margin-left: .5rem;

                    font-weight: 300;

                    font-size: 14px;
                }
            }

            .description-error{
                display: flex;

                margin-left: -20rem;

                flex-direction: column;

                width: 25vw;

                h1{
                font-weight: 300;

                font-size: 14px;

                }

                pre{
                    font-weight: 300;

                    font-size: 14px; 

                    color: #fff;

                    line-height: 24px;

                    margin-left: -2rem;
                }
            }
        }
    }
}
`;