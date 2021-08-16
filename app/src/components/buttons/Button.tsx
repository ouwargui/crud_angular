import React from "react";
import {Container} from "./styles";

export interface ButtonParams {
    full: boolean;
    text: string;
    type?: string;
}

const Button: React.FC<ButtonParams> = ({full, text}) => {
    return (
        <Container full={full}>
            {text}
        </Container>
    )
}

export default Button;