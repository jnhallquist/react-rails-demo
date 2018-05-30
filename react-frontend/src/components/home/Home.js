import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Home = () => (
  <div>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a demo application whose front end has been built using
        the React.js front-end library.
      </p>
      <p>
        Using the navigation bar above, you may navigate to the Users page,
        from which you may view and edit a demo user{"'"}s profile.
      </p>
      <p>
        <Button bsStyle="primary" href="#">Source Code</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Home;
