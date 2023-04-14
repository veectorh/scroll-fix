import styled from "styled-components";
import NeedHelp from "./NeedHelp";
import Speaker from "./Speaker";
import ThreeLink from "./ThreeLink";
import TopicListStylesFilters from "./styles/TopicListStylesFilters";
import TopicListStyles from "./styles/TopicListStyles";
import React, { useState, useEffect } from 'react'
import ContainerBox from "./styles/ContainerBox";
import { device } from "./device";
import SecondButtonStyles from "./styles/SecondButtonStyles";
import Link from 'next/link';

const SpeakersPageStyle = styled.section`
    padding: 100px 0 0;
    max-width: 1250px;
    margin: 0 auto;
    position: relative;
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
    .icon {
      color: black;
      font-size: 55px;
      line-height: 0;
      font-weight: 320;
    }
    p {
      color: #2A2A2A;
      margin: 0;
    }

    .mobile {
        display: none;
    }

    @media ${device.tablet} {
    padding: 50px 0 0;
      h1 {
        font-size: 30px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 0.05em;
        text-align: left;  
        margin-bottom : 8px;    
      }

      p {
      //styleName: Body Mobile;
      font-family: Fira Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0.05em;
      text-align: left;
    }

    
      .filter-description {
        flex-direction: column;
        background-color: #F8A151;
        width: 100%;
      }
     
      .filter-description-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 62px;
        /* padding: 10px 0px 0px 0px; */
      }
  
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
        h4 {
          //styleName: H3 Mobile;
          font-family: Oswald;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.05em;
          text-align: left;
        }

        p {
          font-family: Fira Sans;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0.05em;
          text-align: left;
        }

        .icon {
          font-size: 42px;
        }
      }
      .showFilters {
        position: fixed;
        top: 100px;
        background: white;
        z-index: 99;
        height: 100vh;
        overflow: scroll;
        padding-bottom: 250px;
      }
      .showFilters .filter-description {
        border-radius: 20px 20px 0px 0px;
        margin: 20px 0 20px;
      }
      .showFilters .filter-description-title {
        height: 100%;
        padding: 16px 0px 0px 0px;
      }
      .showFilters .filter-description-description {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 0px 20px 0px;
      }
      .showFilters .icon {
        margin-bottom: 20px;
      }
      .showFilters .filter-btn {
        width: 100%;
        padding: 16px 0px;
        position: fixed;
        bottom: 44px;
        background-color: white;
        border-top: 1px solid #000000
      }
    }

    @media ${device.mobileL} {
      padding: 36px 0 0;
    }
`;

const SpeakersListStyles = styled.section`
  padding: 40px 0 100px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media ${device.tablet} {
    padding: 40px 0 60px;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }
`

export default function Speakers(speakers, topics, error) {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const [topicsList, setTopicsList] = useState([]);
  const [speakersList, setSpeakersList] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

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
        {/* {expandedIndex == -1 && ( */}
          <>
            <ContainerBox>
              <h1>Speakers</h1>
              <p>Browse through the profiles of our diverse network of speakers and artists who offer a range of learning opportunities, including lectures, workshops, films. and performances. Our speakers have a wealth of knowledge and experience in a variety of fields and are able to customize their presentations to meet your specific needs and goals. Use the filter options to narrow down your search or contact us for personalized recommendations. We look forward to connecting you to find the perfect speaker for your event.</p>
            </ContainerBox>
            {/* desktop filter */}
            <div className="desktop">
              <ContainerBox>
                <div className="filter-description">
                  <div className="filter-description-title">
                    <h4 style={{ width: '210px' }}>Filter Speakers by Topic</h4>
                  </div>
                  <p>Our extensive roster covers a range of topics, budgets, and needs. Filter below or if you need help or recommendations, reach out here.</p>
                </div>
                <TopicListStyles>
                  {
                    topicsList.map((topic) => (
                      <div style={{ backgroundColor: topic.selected == true ? "#F8A151" : "#F2F2F2" }} key={topic.id} onClick={() => handleSelectedCategory(topic.id)}>{topic.name}</div>
                    ))
                  }
                </TopicListStyles>
              </ContainerBox>
            </div>
            {/* mobile filter btn */}
            <div className={`mobile`}>
              <div className="filter-description" onClick={() => setExpandedIndex(1)}>
                <div className="filter-description-title">
                  <ContainerBox className="filter-description-title">
                    <h4>Filter Speakers by Topic</h4>
                    <div className="icon">+</div>
                  </ContainerBox>
                </div>
              </div>
            </div>
            {/* speaker detail  */}
            <ContainerBox>
              <SpeakersListStyles>
                {
                  speakersList?.map(speaker => (
                    <Speaker key={speaker.id} speaker={speaker} />
                  ))
                }
              </SpeakersListStyles>
            </ContainerBox>
          </>
        {/* )} */}

        {/* mobile filter detail */}
        {expandedIndex == 1 && (
          <div className={`mobile showFilters`}>
            <div className="filter-description">
              <div className="filter-description-title" onClick={() => setExpandedIndex(-1)}>
                <ContainerBox className="filter-description-title">
                  <h4>Filter Speakers by Topic</h4>
                  <div className="icon">-</div>
                </ContainerBox>
              </div>
              <div className="filter-description-description">
                <ContainerBox>
                  <p>Our extensive roster covers a range of topics, budgets, and needs. Filter below or if you need help or recommendations, reach out here.</p>
                </ContainerBox>
              </div>
            </div>
            <div className="filter-btn">
              <ContainerBox>
                <SecondButtonStyles theme={{ main: "#00AFB5" }} className="test">
                  <Link href={'/'} onClick={e => e.preventDefault()}>
                    show 30 results
                  </Link>
                </SecondButtonStyles>
              </ContainerBox>
            </div>
            <TopicListStylesFilters>
              {
                topicsList.map((topic) => (
                  <div style={{ backgroundColor: topic.selected == true ? "#F8A151" : "#F2F2F2" }} key={topic.id} onClick={() => handleSelectedCategory(topic.id)}>{topic.name}</div>
                ))
              }
            </TopicListStylesFilters>
          </div>
        )}

      </SpeakersPageStyle >
      <NeedHelp />
      <ThreeLink />
    </>
  )
};