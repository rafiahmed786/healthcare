import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,updateProfile,onAuthStateChanged    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true)

    const auth = getAuth();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            setIsLoading(false)
        })
    }, [])

    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }
    const setUserName=(name)=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result =>{})
        
    }
    
    const registerUsingEmailAndPassword=(name,email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user= result.user;
            setUserName(name);
            setUser(user);
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
       
    }
    const signInUsingEmailAndPassword=(email,password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
            .then(result=>{
                const user= result.user;
                setUser(user)
            })
            .catch(error=>{
                setError(error.message)
            })
            .finally(()=>setIsLoading(false))
     }
     const logOut=()=>{
         setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
     }
    return{
        user,
        error,
        setError,
        signInUsingGoogle,
        registerUsingEmailAndPassword,
        signInUsingEmailAndPassword,
        logOut,
        isLoading
    }
}
export default useFirebase