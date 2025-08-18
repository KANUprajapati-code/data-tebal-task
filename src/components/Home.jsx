import React from 'react'
import { Container,  Button, Card, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <>
     <Container style={{ padding: '20px' }}>
      <Row className="g-4"> 
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img 
              variant="top" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJeY4ztmQt54qrT28QqNoSD_y1k9Vq9J_t74SxGuHqXSyOJmogzyMZK63FJllCny5OAU&usqp=CAU"  
              height={400} 
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img 
              variant="top" 
              src="https://thumbs.dreamstime.com/b/cheerful-d-boy-backpack-his-back-leaves-school-jumps-across-water-to-avtar-schoolboy-329290630.jpg" 
              height={400} 
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img 
              variant="top" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzGFFeR6tRZYj2E7Cc6ZghoG8jLA5KBn2_lfnEbm7nrrXbvWgbIvEk0vHZHUnclurRSg&usqp=CAU"  
              height={400} 
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: '100%' }}>
            <Card.Img 
              variant="top" 
              src="https://cdn.dribbble.com/userupload/29736698/file/original-1ef955c551eede8401da24a210ad3a86.jpg?resize=752x&vertical=center"  
              height={400} 
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container>

    <p style={{border:"solid 2px black", width:"80%" , margin:"auto"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et vel voluptates quam porro suscipit. Nihil ea consequuntur ipsum voluptates reprehenderit nisi modi illo. Tempora minima quos dolores eligendi aliquam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident suscipit voluptatibus soluta maiores aut facilis officia voluptate tenetur sequi quidem vitae expedita porro debitis ex quam exercitationem blanditiis, magni impedit.
      Atque quis assumenda sunt porro architecto, corporis dolor sit sequi consequuntur eligendi dolorem aut adipisci error ipsa asperiores nesciunt explicabo accusantium. Corrupti deleniti omnis sequi eaque voluptates dicta molestias? Non.
      Rerum maiores nisi earum voluptatum blanditiis illo unde nobis iusto et eaque fugit laboriosam possimus voluptatem cumque nesciunt veniam natus, pariatur deleniti, fugiat accusantium, dolore adipisci facilis dolor? Enim, quo.
      Rerum molestias tempora neque, nesciunt cumque ad atque, aspernatur quas veniam nemo dolor eius quod excepturi numquam ut dolores modi quibusdam soluta vero in nobis sit quam illo tempore! Architecto.
      Voluptatem placeat illum molestiae repudiandae id recusandae dicta iusto deserunt dignissimos est ullam ad, esse animi rem optio. Quis voluptate commodi vitae nobis reiciendis explicabo tempore sapiente perspiciatis magni vero!
    </p>

    </Container>
    <br />

   
   <footer style={{position:"relative" , top:"50%"}} >
     <div style={{width:"100%" , backgroundColor:"black" , height:"50PX" , color:"white ", textAlign:"center" , lineHeight:"50px" }} > Hellow he is my footer </div>
   </footer>
    
    
    </>
  )
}

export default Home