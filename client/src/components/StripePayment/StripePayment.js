import React from 'react'
import styled from 'styled-components'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const StripePayment = ({ children, title }) => {
    return (
      <>
        <Elements stripe={stripePromise}>{children}</Elements>
      </>
    );
  };
  export default StripePayment;