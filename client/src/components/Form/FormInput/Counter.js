import React from 'react'
import styled from 'styled-components'

const CoutnerContainer = styled.div`
    margin: 0px 0px 0px 8px;

    & > p {
        margin: 0px;
        min-width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 24px;
        text-align: right;
        color: #545454;
    }
`

export default function Counter() {
    
    return (
        <CoutnerContainer>
            <p>{'1/4'}</p>
        </CoutnerContainer>
    )
}