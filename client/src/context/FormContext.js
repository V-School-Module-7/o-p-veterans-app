import React, { useState } from 'react'
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCYOX6Hlc8xNiCbhBbmcIrxmVsIJphSXfI",
    authDomain: "op-vet.firebaseapp.com",
    databaseURL: "https://op-vet.firebaseio.com",
    projectId: "op-vet",
    storageBucket: "op-vet.appspot.com",
    messagingSenderId: "105398634220",
    appId: "1:105398634220:web:d67b056df7efed322a87c9",
    measurementId: "G-KMQZ5R6T66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const auth = firebase.auth()

const FBprovider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const initState = { 
    token: "" || localStorage.getItem("token"), 
    email: "", 
    displayName: "", 
    phoneNumber: "", 
    id:"", 
    companyName: "",
    address:"", 
    city: "", 
    businessPhone: "", 
    aptNumber: "", 
    state: "", 
    zipCode: "", 
    businessWebsite:"", 
    veteranOwned: false, 
    nonProfit: false, 
    qty: "", 
    value: "",
    needPower: false, 
    vendorSpace: "", 
    firstName: "", 
    lastName: ""
}

export const FormContext = React.createContext()


function FormProvider(props){ 
    
    const [userState, setUserState] = useState(initState)
    
    function handleChange(e){ 
        const {name, value} = e.target
        setUserState(prev => ({ 
            ...prev, 
            [name]: value
        }))
    }

    function handleSubmit(value){ 
        setUserState((prev => ({ 
            ...prev, 
            value: value
        })))
    }
   
        function handleSignup(email, password){ 
            auth.createUserWithEmailAndPassword(email, password)
                .catch(e => console.log(e.message))
            const user = firebase.auth().currentUser;
            user.sendEmailVerification()
            .then(() => {
            // Email sent.
            }).catch(function(error) {
            console.log(error)
            });

              firebase.auth().onAuthStateChanged(firebaseUser => { 
                if(firebaseUser){ 
                    console.log(firebaseUser)
                } else { 
                  console.log("failed to signup")
                }
              })
          }
          
          function handleLogin(email, password){ 
            auth.signInWithEmailAndPassword(email, password)
                .catch(e => { 
                    console.log(e.message)
                })
          }
          function signInWithFacebook(){ 
              firebase.auth().signInWithPopup(FBprovider)
                .then(res => { 
                    const {accessToken} = res.credential
                    localStorage.setItem("token", accessToken)
                    localStorage.setItem("displayName", res.user.displayName)
                    setUserState(prev => ({ 
                        ...prev,
                        displayName: res.user.displayName, 
                        email: res.user.email,
                        token: res.credential.accessToken

                    }))
                })
                .catch((error) => { 
                    let errorCode = error.code
                    let errorMessage = error.message
                    
                    console.log(errorCode, errorMessage)
                })
                
                
                
          }

          function signInWithGoogle(){ 
              firebase.auth().signInWithPopup(googleProvider)
              .then(res => { 
                const {accessToken} = res.credential
                localStorage.setItem("token", accessToken)
                setUserState(prev => ({ 
                    ...prev,
                    displayName: res.user.displayName, 
                    email: res.user.email,
                    token: res.credential.accessToken

                }))
            })
                .catch(e => { 
                    let error = e.message
                    let errorCode = e.code
                    console.log(error, errorCode)
                })
          }
        function logout(){ 
            localStorage.removeItem("token")
            auth.signOut()
            setUserState(() => ({ 
                token: ""
            }))
        }

        console.log(userState)

    return( 
        <FormContext.Provider value = {{
            ...userState,
            handleChange, 
            handleSignup, 
            signInWithFacebook, 
            signInWithGoogle, 
            handleLogin,
            logout,
            handleSubmit

        }}>
            {props.children}
        </FormContext.Provider>
    
    )
}

export default FormProvider