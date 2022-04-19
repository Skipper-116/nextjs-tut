import { useGoogleAuth } from "react-gapi-auth2";
import Layout from '../components/layout'
import { useRouter } from "next/router";
import { setGoogleAuth, setCurrentUser } from "../state/google/googleSlice";
import { useDispatch } from "react-redux";

function SignIn(){
    const googleAuth = useGoogleAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    //const currentUser = useGoogleUser();
    
    if(googleAuth.googleAuth && googleAuth.googleAuth.isSignedIn.get()){
        //const res = fetch()
        dispatch(setGoogleAuth(googleAuth.googleAuth));
        dispatch(setCurrentUser(googleAuth.googleAuth.currentUser.get()))
        router.push('/event');
    }

    return (
        <Layout>
            <p>Click here to sign in:</p>
            <button onClick={() => googleAuth.googleAuth?.signIn()}>Sign In</button>
        </Layout>
    )
}

export default SignIn;