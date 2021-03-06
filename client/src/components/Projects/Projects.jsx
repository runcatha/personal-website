import './Projects.css'
import { Card } from 'react-bootstrap'
// import { width } from 'dom-helpers'

export default function Projects() {
  return (
      <div className='projects-color'>
        <h2 id='projects' className='projects-title'>Projects</h2>
        <div className='projects-lists'>
          <div className='two-projects-pt-one'>
            <div className='project' id='all-i-want-for-christmas'>
              <img
                className="card-img"
                src='https://i.imgur.com/ZYtHBLw.png'/>
              <Card.Title className="card-name">All I Want for Christmas</Card.Title>
              <Card.Text
                className="card-description">An app that allows users to build out their own wishlist with items that they can view, add, edit, and delete gifts they would like to receive. Users are then able to join groups and view other member's wishlists to see what they would like. This app was coded using Ruby on Rails, SQL, React, Javascript, and Heroku
              </Card.Text>
              <div className='resource-links'>
                <a className="link" href="https://all-i-want-for-christmas.netlify.app/">
                  <img
                    id='christmas-netlify'
                    src='https://i.imgur.com/fZXYJs5.png'
                    alt='netlify'/>
                </a>
                <a className="link" href='https://github.com/runcatha/All-I-Want_For_Christmas'>
                  <img
                    id='christmas-github'
                    src='https://i.imgur.com/RshgsOc.png?1'
                    alt='Github'/>
                </a>
              </div>
            </div>
            <div className='project' id='tech-care'>
              <img
                className="card-img"
                src='https://i.imgur.com/6jFwN0p.png'/>
              <Card.Title className="card-name">Tech Care</Card.Title>
              <Card.Text
                className="card-description">An app that allows codes to look up, add, edit, and delete. Users are also able to leave reviews on specific laptops and click a link to buy button that will redirect them to the retailer's website. This was a group project coded in React, Javascript, Express, MongoDB, and Heroku.
              </Card.Text>
              <div className='resource-links'>
                <a className="link" href="https://tech-care.netlify.app/">
                  <img
                  id='tech-care-netlify'
                  src='https://i.imgur.com/fZXYJs5.png'
                  alt='netlify'/>
                </a>
                <a className="link" href='https://github.com/runcatha/Tech-Care-app'>
                  <img
                    id='tech-care-github'
                    src='https://i.imgur.com/RshgsOc.png?1'
                    alt='Github'/>
                </a>
              </div>
            </div>
          </div>
          <div className='two-projects-pt-two'>
            <div className='project' id='wod-app'>
              <img
                className="card-img"
                src='https://i.imgur.com/JElB5BB.png'/>
              <Card.Title className="card-name">WOD React</Card.Title>
              <Card.Text className="card-description">
                An app that allows users to look up, add, edit, and delete Crossfit Workouts of the Day. Users are able to look up an equipment list to start building a home gym and click on 'sponsor adds' to be directed to popular Crossfit and Tech related companies. This app was coded with React, Javascript, and utilizes an Airtable API to organize data.
              </Card.Text>
              <div className='resource-links'>
                <a className="link" href="https://wod-app.netlify.app/">
                  <img
                    id='wod-app-netlify'
                    src='https://i.imgur.com/fZXYJs5.png'
                    alt='netlify'/>
                </a>
                <a className="link" href='https://github.com/runcatha/wod_react-project'>
                  <img
                    id='wod-app-github'
                    src='https://i.imgur.com/RshgsOc.png?1'
                    alt='Github'/>
                </a>
              </div>
            </div>
            <div className='project' id='book-search'>
              <img
                className="card-img"
                src='https://i.imgur.com/cvp1BTQ.png'/>
              <Card.Title className="card-name">Book Search</Card.Title>
              <Card.Text className="card-description">
                An app that allows users to look up books by title, author, or publisher. Users can also access the New York Times Best Seller's list along with getting random book recommendations. This was done by using the Google books API and vanilla Javascript.
              </Card.Text>
              <div className='resource-links'>
                <a className="link" href="https://runcatha.github.io/Book_Search-project/">
                  <img
                    id='wod-app-netlify'
                    src='https://i.imgur.com/fZXYJs5.png'
                    alt='netlify'/>
                </a>
                <a className="link" href='https://github.com/runcatha/Book_Search-project'>
                  <img
                    id='wod-app-github'
                    src='https://i.imgur.com/RshgsOc.png?1'
                    alt='Github'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}