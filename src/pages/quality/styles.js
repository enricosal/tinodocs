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

        img{
            width: 70%;

            margin: 1rem 0;
        }

        .list{
            display: flex;

            border: 2px solid #2C2E39;

            border-radius: 3px;

            padding: 1rem;

            margin: 1.5rem 0;

            flex-direction: column;

            width: 55vw;

            .header{
            display: flex;

            align-items: center;

                h1{
                    font-size: 15px;

                    font-weight: 600;

                    padding: .25rem .5rem;

                    letter-spacing: .05rem;
                }
            }

            .list-area{
                display: flex;

                flex-direction: column;

                .item{
                    display: flex;

                    flex-direction: row;

                    align-items: center;

                    margin-top: .5rem;

                    margin-left: 1.8rem;

                    h1{
                        font-size: 15px;

                        margin-left: .5rem;

                        font-weight: 300;
                    }
                }
            }
        }
    }
`;