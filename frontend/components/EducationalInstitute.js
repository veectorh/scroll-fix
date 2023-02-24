import Link from 'next/link';
import Image from "next/image";
import EducationalInstituteStyles from '../components/styles/EducationalInstituteStyles';
import ButtonStyles from '../components/styles/ButtonStyles';

export default function EducationalInstitute() {
  return (
    <EducationalInstituteStyles>
      <h2>Educational Institute</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div className="copy-image">
        <div className="copy">
          <div className="copy-container">
            <h2>E-Course</h2>
            <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
            <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/ecourse">Learn More and Sign Up</Link></ButtonStyles>
          </div>
        </div>
        <div className="image">
          <Image
            src='/images/ecourse.png'
            alt="e-course"
            fill
            sizes="15vw"
            priority
          />
        </div>
      </div>

      <div className="copy-image">
        <div className="image">
            <Image
              src='/images/virtual-events.png'
              alt="e-course"
              fill
              sizes="15vw"
              priority
            />
        </div>
        <div className="copy">
          <div className="copy-container">
            <h2>Virtual Events</h2>
            <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
            <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/events">See All Events</Link></ButtonStyles>
          </div>
        </div>
      </div>

      <div className="copy-image">
        <div className="copy">
          <div className="copy-container">
            <h2>Summer Institute</h2>
            <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
            <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/summer-institute">Learn More and Register</Link></ButtonStyles>
          </div>
        </div>
        <div className="image">
          <Image
            src='/images/summer-institute.png'
            alt="e-course"
            fill
            sizes="15vw"
            priority
          />
        </div>
      </div>

      <div className="copy-image">
        <div className="image">
            <Image
              src='/images/so-original-films.png'
              alt="e-course"
              fill
              sizes="15vw"
              priority
            />
        </div>
        <div className="copy">
          <div className="copy-container">
            <h2>SpeakOut Original Films</h2>
            <p>SpeakOut&apos;s mission is to encourage critical and imaginative thinking to address the major inequities of our day and transform a fractured world.</p>
            <ButtonStyles theme={{ main: "#00AFB5" }}><Link href="/original-films">Explore Our Films</Link></ButtonStyles>
          </div>
        </div>
      </div>
    </EducationalInstituteStyles> 
  )
}