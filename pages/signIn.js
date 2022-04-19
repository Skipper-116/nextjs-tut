import { useGoogleAuth } from "react-gapi-auth2";
import Layout from '../components/layout'
import { useRouter } from "next/router";
import { setAccessToken } from "../state/google/googleSlice";
import { useDispatch } from "react-redux";

function SignIn(){
    const googleAuth = useGoogleAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    //const currentUser = useGoogleUser();
    
    return (
        <Layout>
            <p>Click here to sign in:</p>
            <button onClick={async () => {
                await googleAuth.googleAuth.signIn();
                if(googleAuth.googleAuth.isSignedIn){
                    //const res = fetch()
                    dispatch(setAccessToken(googleAuth.googleAuth.currentUser.get().getAuthResponse().access_token));
                    router.push('/event');
                }else{
                    console.log("Failed to login bwana");
                }
            }
            }>Sign In</button>
        </Layout>
    )
}

export default SignIn;