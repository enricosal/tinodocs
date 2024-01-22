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