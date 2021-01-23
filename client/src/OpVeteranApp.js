import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from './providers/CurrentUser'
import { Login } from './components/UserView/Login'
import { AdminView } from './components/UserView/AdminView'
import { VendorView } from './components/UserView/VendorView'
import  Playground  from './components/UserView/Playground'



const AppContainer = styled.div`
    /* border: 1px solid lightcoral; */
`

export default function OpVeteranApp() {
    // const [currentUser] = useContext(CurrentUserContext)
    // const newObj = {...currentUser}
    // const { isAdmin } = newObj

    // if (currentUser && isAdmin === false) {
    //     return (
    //         <AppContainer>
    //             <VendorView />
    //         </AppContainer>
    //     )
    // } else if (currentUser && isAdmin === true) {
    //     return (
    //         <AppContainer>
    //             <AdminView />
    //         </AppContainer>
    //     )
    // }

    return (
        <AppContainer>
            {/* <Login /> */}
            <Playground />
        </AppContainer>
    )
}