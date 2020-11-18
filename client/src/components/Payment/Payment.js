import React from "react";
import styled from "styled-components";
import { Summary } from './Summary'
import { DiscountInput } from './DiscountInput'
import { TotalsDisplay } from './TotalsDisplay'

const PaymentContainer = styled.div`
  box-sizing: border-box;
  max-width: 375px;
`

export default function Payment() {
  return (
    <PaymentContainer>
      <Summary />
      <DiscountInput />
      <TotalsDisplay />
    </PaymentContainer>
  )
}
