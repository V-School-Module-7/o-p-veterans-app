import React from "react";
import styled from "styled-components";
import { AdminSearchBar } from "../AdminSearchBar";
// import { VendorListItem } from "../VendorListItem";
import { SponsorshipCard } from "../SponsorshipCard";
import { Payment } from "../Payment";
import { EditModal } from '../EditModal'
import { VendorList } from '../VendorList'
import { Button } from '../Button'
import { Header } from '../Header'
import { OpenInput } from '../OpenInput'
import { Form } from '../Form'
import { Diagram } from '../Diagram'
import { StripePayment } from '../StripePayment'

const PlaygroundContainer = styled.div`
  padding: 24px 24px 24px 24px;

  h1 {
    margin: 0px;
  }

  h3 {
    margin: 40px 0px 20px 0px;
  }
`

export default function Playground() {
  return (
    <PlaygroundContainer>
      <h1>Playground</h1>

      <h3>Form</h3>
      <Form />
      <h3>Open Input</h3>
      <OpenInput label={'Label'} placeholder={'placeholder'} />

      <h3>Header</h3>
      <Header />

      <h3>Button</h3>
      <Button buttonStyle={'primary'} buttonText={'Button'} />
      <br />
      <Button buttonStyle={'secondary'} buttonText={'Button'} />
      <br />
      <Button buttonStyle={'google'} buttonText={'Button'} />


      <h3>Vendor List</h3>
      <VendorList />

      {/* <h3>Vendor List Item</h3>
      <VendorListItem /> */}

      <h3>Edit Modal</h3>
      <EditModal />

      <h3>Payment</h3>
      <Payment />

      <h3>Sponsorship Card</h3>
      <SponsorshipCard />

      <h3>Admin Search Bar</h3>
      <AdminSearchBar />

      <h3>Map Diagram</h3>
      <Diagram />

      <h3>Stripe Payment</h3>
      <StripePayment />

    </PlaygroundContainer>
  );
}
