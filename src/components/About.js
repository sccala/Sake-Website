import { MemberCard } from './Cards/MemberCard'

export const About = () => {
  return (
    <>
      <div className='container'>
        <div className='row row-content'>
          <h2 className='col'>Meet our team</h2>
          <p>
            We thrive to deliver genuine curated sake for you. Our knowledged sake expert will guid
            you to enjoy premium sake.
          </p>
          <MemberCard />
        </div>
      </div>
      <div className='circle-about'></div>
    </>
  )
}
