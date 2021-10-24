import './Footer.css'

const Footer = () =>
  <footer>
    <div className='github-linkedIn'>
      <a
            className="github"
        href='https://github.com/runcatha/personal-website'>
        <img
          id='github'
          src='https://i.imgur.com/RshgsOc.png'
          alt='Github'/>
      </a>
      <a  className="linkedIn"
          href='https://www.linkedin.com/in/cathleen-runde-10692b204/'>
        <img
          id='linkedIn'
          src='https://i.imgur.com/9yybFiy.png'
          alt='LinkedIn'/>
      </a>
    </div>
    </footer>

export default Footer