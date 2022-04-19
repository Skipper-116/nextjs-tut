import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Event(){
    const googleAuth = useSelector((state) => state.google.googleAuth);
    const currentUser = useSelector((state) => state.google.currentUser);
    const router = useRouter();

    console.log(googleAuth);
    if(googleAuth && googleAuth.isSignedIn.get()){
        console.log(currentUser.getAuthResponse().access_token);
        return (
            <Layout>
                <p>Welcome user {currentUser.getBasicProfile().getName()}</p>
                <button onClick={() => {console.log('log out clicked'); googleAuth.signOut(); router.push('/signIn')}}>Sign Out</button>
            </Layout>
        )
    }
    else{
        router.push('/signIn');
    }
}

export default Event;