import React from 'react';
import styled from 'styled-components';


const ContainerStyle = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        width: 60%;
    `

const Container = ({ status, children }) => {
    return(
        <ContainerStyle>
            { children }
        </ContainerStyle>
    )
}

export default Container;
