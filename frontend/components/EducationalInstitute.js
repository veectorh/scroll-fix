import Link from "next/link";
import Image from "next/image";
import EducationalInstituteStyles from "../components/styles/EducationalInstituteStyles";
import Scroll from "./Scroll";
import ButtonStyles from "../components/styles/ButtonStyles";
import ContainerBox from "./styles/ContainerBox";
import { motion } from "framer-motion";


export default function EducationalInstitute(events) {


  return (
    <EducationalInstituteStyles>
      <motion.div transition={{staggerChildren: 3}}>
        <Scroll>
          <div className="copy">
            <ContainerBox>
              <div className="copy-container">
                <h2>E-Courses</h2>
                <p>
                  Learn from leading speakers and experts in our educational,
                  social justice e-courses. Designed for self-paced or group
                  learning, these courses will empower you to make a positive
                  impact on yourself, in your institutions, and in society as a
                  whole.
                </p>
                <ButtonStyles theme={{ main: "#00AFB5" }}>
                  <a
                    href="https://speakoutinstitute.thinkific.com/collections"
                    target="_blank"
                  >
                    Learn More and Sign Up
                  </a>
                </ButtonStyles>
              </div>
            </ContainerBox>
          </div>

          <div className="image">
            <Image
              src="/images/ecourse.png"
              alt="e-course"
              fill
              sizes="50vw"
              priority
            />
          </div>
        </Scroll>

        <Scroll>
          <div className="copy">
            <ContainerBox>
              <div className="copy-container">
                <h2>Virtual Events</h2>
                <p>
                  Join us for live virtual events featuring renowned and
                  emerging speakers presenting new, cutting-edge material on
                  race, culture, and politics. Engage with others in accessible
                  and affordable events.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <ButtonStyles theme={{ main: "#00AFB5" }} style={{ display: events.events?.data[0]?.attributes.enroll_url === undefined ? "none" : "flex"}}>
                    <a href={events.events?.data[0]?.attributes.enroll_url} target="_blank">
                      Upcoming Event
                    </a>
                  </ButtonStyles>
                  <ButtonStyles theme={{ main: "#00AFB5" }}>
                    <Link href="/events">See All Events</Link>
                  </ButtonStyles>
                </div>
              </div>
            </ContainerBox>
          </div>

          <div className="image">
            <Image
              src="/images/virtual-events.png"
              alt="virtual events"
              fill
              sizes="50vw"
              priority
              id="virtual-event"
            />
          </div>
        </Scroll>

        <Scroll>
          <div className="copy">
            <ContainerBox>
              <div className="copy-container">
                <h2>Summer Institute</h2>
                <p>
                  Join our multi-day Summer Institute for activists, educators,
                  scholars, and professionals to learn from leading experts,
                  engage in interactive workshops, and connect with a diverse
                  network of change-makers. Make a positive impact in your
                  institutions and communities.
                </p>
                <ButtonStyles theme={{ main: "#00AFB5" }}>
                  <Link href="/summer-institute">Learn More and Register</Link>
                </ButtonStyles>
              </div>
            </ContainerBox>
          </div>

          <div className="image">
            <Image
              src="/images/summer-institute.png"
              alt="summer institute"
              fill
              sizes="50vw"
              priority
              id="summer-institute"
            />
          </div>
        </Scroll>

        <Scroll>
          <div className="copy">
            <ContainerBox>
              <div className="copy-container">
                <h2>SpeakOut Original Films</h2>
                <p>
                  Explore our selection of SpeakOut-produced films and learn
                  about the talented speakers and artists involved. Support the
                  next generation of artists and filmmakers by watching and
                  contributing to our films.
                </p>
                <ButtonStyles theme={{ main: "#00AFB5" }}>
                  <Link href="/original-films">Explore Our Films</Link>
                </ButtonStyles>
              </div>
            </ContainerBox>
          </div>

          <div className="image">
            <Image
              src="/images/so-original-films.png"
              alt="original films"
              fill
              sizes="50vw"
              priority
              id="original-film"
            />
          </div>
        </Scroll>
      </motion.div>
    </EducationalInstituteStyles>
  );
}
