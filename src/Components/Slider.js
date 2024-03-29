import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/Image1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Your Rental Home.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/Image2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Your Rental Home.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/Image3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <p>
            Best Cars for low cost Rental.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;