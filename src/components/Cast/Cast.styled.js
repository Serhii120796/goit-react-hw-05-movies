import styled from "styled-components";

export const CastItem = styled.ul`
display: flex;

& + & {
    margin-top: 20px;
}
`;