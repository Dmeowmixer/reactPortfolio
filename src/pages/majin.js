import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout'

export default class Example extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Meet my cat Majin!</h1>
        <img src='https://lh3.googleusercontent.com/JANEOvqozv6nLQ_EcyPVdYgVW_jXUAQZ6fmizB4wQvYsfBKafS6_Vn7gMHZvvYNbMiIp2xKuwu2-icuY-7IT7Kx88-PMapO6rh9rbIS7_mRZwdi1H6crIPlnReCQOYoAUvcjiU2Lkqyo496-u60GS1CM7oLPecJCAdiK-obC4DsDpRfeXdebftropYTk5cX0IkAD8IMX-7ZZfnsutUSfZJlWlHo5InfG4LdGBex0XDhMBZdaDEutXJ61EuxY5rfb0baRZVlnAQbIz4CStIxV0X-ANOmP7y5-pNSaGh0dxuJCaF4nPppRPNXVVBAjMA0R0lPVYYRpZ5CpoHMe8i8oPnyzBDl5C0O_5QRZuehPyS1xPhkGyal21seNgmVl2e6yefN6ZHz8f-ZZqVTR2denzyAb49YsOLdS7gbf-4q9vDj_bNKsP0WgwLu0oDdxlJfHV4Z_Ntqg_nkPdjmpX1evTlmnd10GKlqSaugtI07MzhcjinhIR_7Zh2HMjYRKF_BfSFrCOp0feIhlgNrYQ4ajqZFzwrMEyzGARH40fGN0VDmJ_0_VOIHi-Z16yHmX4teeY-H-12VBDbUUPygPpv4-dDmIilxmoAzILZNUgCU=w798-h1063-no'/>
        <p>He knows 9 tricks!</p>
      </Layout>
    );
  }
}