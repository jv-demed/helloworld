import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/Theme';
import GlobalStyles from '../src/styles/GlobalStyles';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>Hello World</title>
            </Head>
            <ThemeProvider theme={Theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}