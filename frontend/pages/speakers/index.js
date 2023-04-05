import Speakers from '../../components/Speakers';
import { loadSpeakers } from '@/lib/load-speakers';
import { loadTopics } from '@/lib/load-topics';
import Head from 'next/head'

function SpeakersPage({ speakers, topics }) {
    // console.log("speakers", speakers.data)
    return (
        <div>
            <Head>
                <title>SpeakOut | Our Speakers</title>
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