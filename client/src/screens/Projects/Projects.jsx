import './Projects.css'
import { Card } from 'react-bootstrap'
import { width } from 'dom-helpers'

export default function Projects() {
  return (
    <>
      <div className='projects-color'>
      <h2>Projects</h2>
      <div className='projects-outer-div'>
      <div className='projects-div'>
      <a className="link" href="https://all-i-want-for-christmas.netlify.app/">
            <Card className="card-container" style={{height: "32rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src='https://i.imgur.com/ZYtHBLw.png'
          style={{ height: "16rem" }}
        />
        <Card.Body style={{ height: "7rem" }}>
          <Card.Title className="card-name">All I Want for Christmas</Card.Title>
          <Card.Text className="card-description">An app that allows users to build out their own wishlist with items that they can view, add, edit, and delete gifts they would like to receive. Users are then able to join groups and view other member's wishlists to see what they would like. This app was coded using Ruby on Rails, SQL, React, Javascript, and Heroku.</Card.Text>
        </Card.Body>
      </Card>
        </a>
        <a className="link" href="https://tech-care.netlify.app/">
      <Card className="card-container" style={{height: "30rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src='https://i.imgur.com/6jFwN0p.png'
          style={{ height: "16rem" }}
        />
        <Card.Body style={{ height: "7rem" }}>
          <Card.Title className="card-name">Tech Care</Card.Title>
          <Card.Text className="card-description">An app that allows codes to look up, add, edit, and delete. Users are also able to leave reviews on specific laptops and click a link to buy button that will redirect them to the retailer's website. This was a group project coded in React, Javascript, Express, MongoDB, and Heroku.</Card.Text>
        </Card.Body>
      </Card>
        </a>
        <a className="link" href="https://wod-app.netlify.app/">
      <Card className="card-container" style={{height: "33rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src='https://i.imgur.com/JElB5BB.png'
          style={{ height: "16rem" }}
        />
        <Card.Body style={{ height: "7rem" }}>
          <Card.Title className="card-name">WOD React</Card.Title>
          <Card.Text className="card-description">An app that allows users to look up, add, edit, and delete Crossfit Workouts of the Day. Users are able to look up an equipment list to start building a home gym and click on 'sponsor adds' to be directed to popular Crossfit and Tech related companies. This app was coded with React, Javascript, and utilizes an Airtable API to organize data.</Card.Text>
        </Card.Body>
      </Card>
        </a>
        <a className="link" href="https://runcatha.github.io/Book_Search-project/">
      <Card className="card-container" style={{height: "30rem" }}>
        <Card.Img
          className="card-img"
          variant="top"
          src='https://i.imgur.com/cvp1BTQ.png'
          style={{ height: "16rem" }}
        />
        <Card.Body style={{ height: "7rem" }}>
          <Card.Title className="card-name">Book Search</Card.Title>
          <Card.Text className="card-description">An app that allows users to look up books by title, author, or publisher. Users can also access the New York Times Best Seller's list along with getting random book recommendations. This was done by using the Google books API and vanilla Javascript.</Card.Text>
        </Card.Body>
      </Card>
      </a>
        </div>
        </div>
        </div>
    </>
  )
}