import './AboutMe.css'

export default function AboutMe() {
  return (
      <div className='aboutme-color' id='about'>
        <div className='about-me'>
          <div className='profile-picture-container'>
              <img src='https://i.imgur.com/u42w5Xj.png?1'
              alt='my-profile'
              id='profile'
            />
          </div>
          <div className='am-text' >
            <h2>About Me</h2>
            <p>
                I am a Full-stack Web Developer who gained a passion for problem solving and working in teams/with clients from my time in veterinary care and Air Force ROTC.
                <br />
                For medical reasons, I am transitioning out of a military career and using that time spent developing leadership, public speaking, and attention to detail to better myself as an engineer.
                <br />
                I love using the skills I’ve learned to solve problems and contribute to a team.
            </p>
          </div>
        </div>
      </div>
  )
}