import React from 'react'
import styled from 'styled-components'
import { ProgressSection } from './ProgressSection'

const ProgressBarContainer = styled.div`
    display: flex;
    border: 1px solid lightcoral;
`

export default function ProgressBar() {

    return (
        <ProgressBarContainer>
            <ProgressSection title={'Vendor details'} status={'active'} />
            <ProgressSection title={'Event info'} status={'active'} />
        </ProgressBarContainer>
    )
}