import  NProgress from 'nprogress';
import Router from 'next/router';
import Page from '@/components/Page';
import Script from 'next/script';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Page>
      <Script 
        strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-HDHEN3CV9T" 
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HDHEN3CV9T');
        `}
      </Script>
      
      <Component {...pageProps} />
    </Page>    
  )
}
