import React from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

const ToggleContainer = styled.div`
    /* background: lightblue; */
    border: 1px solid black;
`

export default function InfoToggle(props) {
    const { setToggleState } = props

    function handleVendorButton() {
        setToggleState(() => {
            return 'vendor'
        })
    }

    function handleEventButton() {
        setToggleState(() => {
            return 'event'
        })
    }

    return (
        <ToggleContainer>
            <ToggleButton buttonText={'Vendor details'} onClick={() => handleVendorButton()} />
            <ToggleButton buttonText={'Event info'} onClick={() => handleEventButton()} />
        </ToggleContainer>
    )
}