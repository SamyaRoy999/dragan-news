import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unScibed =onAuthStateChanged(auth, (user) => {
            console.log('user in StateChanged');
            setUser(user)
        });
        return ()=>{
            unScibed()
        }
    }, [])

    const logOut =()=> signOut(auth)

    
    const authinfo = {
        createUser,
        loginUser,
        user,
        logOut
    }


    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.any
};