import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import ImageOne from "images/gallery/rehearsal/1.jpg"
import ImageOneMobile from "images/gallery/rehearsal/thumbs/1.jpg"
import ImageTwo from "images/gallery/rehearsal/2.jpg"
import ImageTwoMobile from "images/gallery/rehearsal/thumbs/2.jpg"
import ImageThree from "images/gallery/rehearsal/3.jpg"
import ImageThreeMobile from "images/gallery/rehearsal/thumbs/3.jpg"
import ImageFour from "images/gallery/rehearsal/4.jpg"
import ImageFourMobile from "images/gallery/rehearsal/thumbs/4.jpg"
import ImageFive from "images/gallery/rehearsal/5.jpg"
import ImageFiveMobile from "images/gallery/rehearsal/thumbs/5.jpg"
import ImageSix from "images/gallery/rehearsal/6.jpg"
import ImageSixMobile from "images/gallery/rehearsal/thumbs/6.jpg"
import ImageSeven from "images/gallery/rehearsal/7.jpg"
import ImageSevenMobile from "images/gallery/rehearsal/thumbs/7.jpg"
import ImageEight from "images/gallery/rehearsal/8.jpg"
import ImageEightMobile from "images/gallery/rehearsal/thumbs/8.jpg"
import ImageNine from "images/gallery/rehearsal/9.jpg"
import ImageNineMobile from "images/gallery/rehearsal/thumbs/9.jpg"
import ImageTen from "images/gallery/rehearsal/10.jpg"
import ImageTenMobile from "images/gallery/rehearsal/thumbs/10.jpg"
import ImageEleven from "images/gallery/rehearsal/11.jpg"
import ImageElevenMobile from "images/gallery/rehearsal/thumbs/11.jpg"




const images = [
  {
    original: `${ImageOne}`,
    thumbnail: `${ImageOneMobile}`,
    description: 'Dino Fetscher (Ed) and Daisy Boulton (Laurel) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageTwo}`,
    thumbnail: `${ImageTwoMobile}`,
    description: 'Dino Fetscher (Ed) and Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageThree}`,
    thumbnail: `${ImageThreeMobile}`,
    description: 'Dino Fetscher (Ed) and Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageFour}`,
    thumbnail: `${ImageFourMobile}`,
    description: 'Dino Fetscher (Ed) and Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageFive}`,
    thumbnail: `${ImageFiveMobile}`,
    description: 'Drew McOnie (Director) - Torch Song Rehearsal - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageSix}`,
    thumbnail: `${ImageSixMobile}`,
    description: 'Matthew Needham (Arnold) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageSeven}`,
    thumbnail: `${ImageSevenMobile}`,
    description: 'Matthew Needham (Arnold) and Bernice Stegers (Ma) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageEight}`,
    thumbnail: `${ImageEightMobile}`,
    description: 'Matthew Needham (Arnold) and Dino Fetscher (Ed) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageNine}`,
    thumbnail: `${ImageNineMobile}`,
    description: 'Matthew Needham (Arnold) and Jay Lycurgo (David) - Torch Song Rehearsals - The Turbine Theatre -  Photo Mark Senior '
  },
  {
    original: `${ImageTen}`,
    thumbnail: `${ImageTenMobile}`,
    description: 'Matthew Needham (Arnold) and Rish Shah (Alan) - Torch Song - The Turbine Theatre - Photo Mark Senior'
  },
  {
    original: `${ImageEleven}`,
    thumbnail: `${ImageElevenMobile}`,
    description: 'Matthew Needham (Arnold), Bernice Stegers (Ma), Dino Fetscher (Ed), Jay Lycurgo (David) - Torch Song Rehearsals - The Turbine Theatre - Photo Mark Senior'
  }
]


class ImageGallery extends Component {

  constructor(props) {
      super(props);

      this.state = {
          photoIndex: 0,
          isOpen: false,
          modalOpen: false,
          slideIndex: 0,
          maxIndex: 1
      }
  }


  render() {

    const { photoIndex, isOpen } = this.state;
    
    return (
      <div>
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={''}
                onCloseRequest={() => this.setState({isOpen: false})}
                onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                }
            />
        )}
      </div>
     
    );
  }

}

export default ImageGallery;