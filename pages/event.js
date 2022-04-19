import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "../state/google/googleSlice";
import { useGoogleAuth } from "react-gapi-auth2";
import Events from '../components/events';

function Event(){
    const access_token = useSelector((state) => state.google.access_token);
    const dispatch = useDispatch();
    const router = useRouter();
    const googleAuth = useGoogleAuth();

    if(access_token){
        return (
            <Layout>
                <p>Below is a list of your google events</p>
                <button onClick={() => {
                    console.log('log out clicked');
                    if(googleAuth.isSignedIn){
                        googleAuth.googleAuth.signOut();
                    }
                     dispatch(setAccessToken(null));
                     router.push('/signIn');
                }}>Sign Out</button>
                <p></p>
                <Events />
            </Layout>
        )
    }
    else{
        return(
            <>
                <p>Oh Oh seems like you jumped a step. To access this page you need to have signed in</p>
                <button onClick={() => {
                    router.push('/signIn');
                }}>
                    Sigin Page
                </button>
            </>
        )
    }
}

export default Event;