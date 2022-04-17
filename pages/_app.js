import '../styles/global.css'
import store from '../state/store';
import { Provider } from 'react-redux';

function App({Component, pageProps}) {
    return (
        <Provider>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App;