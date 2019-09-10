import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageOne from "images/gallery/1.jpg"
import ImageOneMobile from "images/gallery/thumb/thumb-1.jpg"
import ImageTwo from "images/gallery/2.jpg"
import ImageTwoMobile from "images/gallery/thumb/thumb-2.jpg"
import ImageThree from "images/gallery/3.jpg"
import ImageThreeMobile from "images/gallery/thumb/thumb-3.jpg"
import ImageFour from "images/gallery/4.jpg"
import ImageFourMobile from "images/gallery/thumb/thumb-4.jpg"


class VideoSlider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showNav: false,
      autoPlay: true,
      slideDuration: 1000,
      slideInterval: 5000,
      thumbnailPosition: 'bottom',
    };
}


  render() {

    const images = [
      {
        original: `${ImageOne}`,
        thumbnail: `${ImageOneMobile}`,
        description: 'Dino Fletcher (Ed) and Daisy Boulton (Laurel) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
      },
      {
        original: `${ImageTwo}`,
        thumbnail: `${ImageTwoMobile}`,
        description: 'Dino Fletcher (Ed) and Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
      },
      {
        original: `${ImageThree}`,
        thumbnail: `${ImageThreeMobile}`,
        description: 'Dino Fletcher (Ed) and Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
      },
      {
        original: `${ImageFour}`,
        thumbnail: `${ImageFourMobile}`,
        description: 'Dino Fletcher (Ed) and Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
      }
    ]

    return (
      <ImageGallery 
      items={images} 
      lazyLoad={true}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={false}   
      />
    );
  }

}

export default VideoSlider;