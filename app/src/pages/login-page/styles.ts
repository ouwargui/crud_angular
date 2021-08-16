import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fbfbfb;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: 5px;
    padding: 50px;
    margin-bottom: 40px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    text-align: center;
`;

export const LoginForm = styled.form`
    text-align: center;
    align-items: center;
`;

export const LoginTitle = styled.h2`
    font-weight: 500;
    margin-bottom: 50px;
`;

export const PageHeader = styled.a`
    font-size: 2rem;
    font-weight: 600;
    margin: 40px 0;
    color: inherit;
`;