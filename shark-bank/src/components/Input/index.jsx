import { Container } from "./styles";

export function Input(props) {
    return (
        <Container type="text" onChange={props.onChange} />
    );
}