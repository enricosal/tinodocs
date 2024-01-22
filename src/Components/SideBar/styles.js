import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    flex-direction: column;

    width: 245px;
    height: 88.5vh;

    border-right: 2px solid #2C2E39;

    position: sticky;

    .Title{
        display: flex;

        padding-left: 1rem;

        margin-top: 2rem;

        align-items: center;

        cursor: pointer;

        .option{
            display: flex;

            align-items: center;

            bold{
                font-size: 15px;
            }

            h1{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;

                padding-left: .5rem;
            }
        }
    }

    .group-theme{
        display: flex;

        padding-left: 1rem;

        margin-top: 2rem;

        flex-direction: column;

        .group-title{
            font-size: 12px;
            font-weight: 600;

            padding-left: .5rem;
            padding-bottom: .5rem;
        }
    }
`;  