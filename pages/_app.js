import '../styles/global.css'
import store from '../state/store';
import { Provider } from 'react-redux';
import { ClientConfig } from '../config/google';
import { GApiProvider } from 'react-gapi-auth2';

function App({Component, pageProps}) {
    return (
        <GApiProvider clientConfig={ClientConfig}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </GApiProvider>
    )
}

export default App;