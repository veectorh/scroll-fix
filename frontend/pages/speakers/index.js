import Speakers from '../../components/Speakers';
import { loadSpeakers } from '@/lib/load-speakers';
import { loadTopics } from '@/lib/load-topics';
import Head from 'next/head'

function SpeakersPage({ speakers, topics }) {
    return (
        <div>
            <Head>
                <title>SpeakOut | Our Speakers</title>
                <meta property="og:title" content="SpeakOut | Our Speakers"/>
                <meta property="og:description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.speakoutnow.org/speakers"
                 />
                <meta property="og:image" content="/images/speakout-logo-dark.png" />
            </Head>
            <Speakers speakers={speakers.data} topics={topics} error />
        </div>
    )
}

export async function getStaticProps() {
    const speakers = await loadSpeakers();
    const topics = await loadTopics();
    return { props: { speakers, topics } }
}

export default SpeakersPage;