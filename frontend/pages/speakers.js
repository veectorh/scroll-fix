import Speakers from '../components/Speakers';
import { loadSpeakers } from '@/lib/load-speakers';
import { loadTopics } from '@/lib/load-topics';

function SpeakersPage({ speakers, topics }) {
  return (
    <div>
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