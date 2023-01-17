import {Carousel} from "react-bootstrap";
import FirstSlide from "./First";
import SecondSlide from "./Second";
import ThirdSlide from "./Third";
import {useState} from "react"
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <FirstSlide />
      </Carousel.Item>
      <Carousel.Item>
       <SecondSlide />
      </Carousel.Item>
      <Carousel.Item>
        <ThirdSlide />

      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel