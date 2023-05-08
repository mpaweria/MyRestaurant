import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img height={'400px'}
          className="d-block w-100"
          src="https://c1.wallpaperflare.com/preview/591/997/186/platter-food-delicious-food-restaurant.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img height={'400px'}
          className="d-block w-100"
          src="https://qul.imgix.net/709b2786-aae1-4cb1-a2e2-63bec539423a/384118_sld.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img height={'400px'}
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/bif3U7XKUqWpOUv91_fXLfzsIx8=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/71262429/Le_Fantome.0.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;