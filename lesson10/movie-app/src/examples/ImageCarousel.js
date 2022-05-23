import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../components/CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://iaftm.tmgrup.com.tr/ca9a0b/0/0/0/0/1600/896?u=https://iftm.tmgrup.com.tr/2022/04/05/esaretin-bedeli-filmi-esaretin-bedeli-the-shawshank-redemption-filminin-konusu-ne-oyunculari-kimler-yonetmeni-1649157976793.jpg&mw=700" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://tr.web.img4.acsta.net/pictures/bzp/01/28201.jpg" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://postercim.net/wp-content/uploads/2019/02/on-iki-kizgin-adam-film-poster.jpg" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;