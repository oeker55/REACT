import React from 'react'
import { Card, Icon, Image , Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"

const MovieCard = (props) => (
  
  <Card>
    {/* {  console.log(props.movie)} */}
        {/* {console.log(props.movie.title)} */}
        
    <Image src={props.movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.movie.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
   
      <div className='ui two buttons'>
      <Button animated size='mini' color='green' as={Link} to={`new/${props.movie.id}`}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name='edit' />
      </Button.Content>
     
      </Button >
      <Button onClick={()=>props.deleteMovie(props.movie.id)} animated size='mini' color='red' >
      <Button.Content visible>Del</Button.Content>
      <Button.Content hidden >
        <Icon name='trash' />
      </Button.Content>
      </Button>






          {/* <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button> */}
        </div>
     
    </Card.Content>
  </Card>
  
)

export default MovieCard