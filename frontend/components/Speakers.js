import styled from "styled-components";
import NeedHelp from "./NeedHelp";
import Speaker from "./Speaker";
import ThreeLink from "./ThreeLink";
import TopicListStyles from "./styles/TopicListStyles";
import React, { useState, useEffect } from 'react'


const SpeakersPageStyle = styled.section`
    padding: 100px 0 0;
    max-width: 1250px;
    margin: 0 auto;
    h1 {
      font-weight: 400;
      font-size: 60px;
      line-height: 89px;
      letter-spacing: 0.03em;
      color: #F8A151;
      text-transform: uppercase;
      margin: 0;
    }
    .filter-description {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin: 40px 0 20px;
    }
    h4 {
      font-family: 'Oswald';
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.05em;
      color: #2A2A2A;
      margin: 0;
    }
    p {
      color: #2A2A2A;
      margin: 0;
    }
`;

const SpeakersListStyles = styled.section`
  padding: 40px 0 100px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default function Speakers(speakers, topics, error) {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const [topicsList, setTopicsList] = useState([]);
  const [speakersList, setSpeakersList] = useState([]);


  useEffect(() => {
    if (speakers.topics.data) {
      const topicsList = speakers?.topics?.data.map(item => ({
        id: item.id,
        name: item.attributes.name,
        selected: false,
      }))
      setTopicsList(topicsList);

      setSpeakersList(speakers?.speakers)
    }
  }, [speakers])

  // filter function
  const handleSelectedCategory = (id) => {

    const updateSpeakersList = [];
    const updateTopicList = [...topicsList]
    let selectedTopicsList = [];

    // update topic list 
    const index = topicsList.findIndex(item => item.id == id);
    updateTopicList[index].selected = !updateTopicList[index].selected;


    // filter speakers
    for (const speaker of speakers?.speakers) {

      const speakerTopicList = speaker?.attributes?.topics?.data?.map(item => (item?.id));
      selectedTopicsList = updateTopicList.filter(item => item.selected == true).map(item => (item.id));

      const contains = speakerTopicList.some(element => { return selectedTopicsList.indexOf(element) !== -1; });

      if (contains == true)
        updateSpeakersList.push(speaker)


    }

    // set updated values
    setTopicsList(updateTopicList);

    if (selectedTopicsList.length == 0) {
      setSpeakersList(speakers?.speakers)
    }
    else {
      setSpeakersList(updateSpeakersList)
    }

  }

  return (
    <>
      <SpeakersPageStyle>
        <h1>Speakers</h1>
        <p>Browse through the profiles of our diverse network of speakers and artists who offer a range of learning opportunities, including lectures, workshops, films. and performances. Our speakers have a wealth of knowledge and experience in a variety of fields and are able to customize their presentations to meet your specific needs and goals. Use the filter options to narrow down your search or contact us for personalized recommendations. We look forward to connecting you to find the perfect speaker for your event.</p>
        <div className="filter-description">
          <h4>Filter Speakers by Topic</h4>
          <p>Our extensive roster covers a range of topics, budgets, and needs. Filter below or if you need help or recommendations, reach out here.</p>
        </div>
        <TopicListStyles>
          {
            topicsList.map((topic) => (
              <div style={{ backgroundColor: topic.selected == true ? "#F8A151" : "#F2F2F2" }} key={topic.id} onClick={() => handleSelectedCategory(topic.id)}>{topic.name}</div>
            ))
          }
        </TopicListStyles>
        <div>
          <SpeakersListStyles>
            {
              speakersList?.map(speaker => (
                <Speaker key={speaker.id} speaker={speaker} />
              ))
            }
          </SpeakersListStyles>
        </div>
      </SpeakersPageStyle>
      <NeedHelp />
      <ThreeLink />
    </>
  )
};