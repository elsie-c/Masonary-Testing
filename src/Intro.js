import React, { Component } from "react";
import ImageMasonry from "react-image-masonry";

class Intro extends Component {
  render() {
    // Get an array of images
    let images = [];
    for (let i = 0; i < 1000; i++) {
      //! creating random height of an image
      const y = 150 + Math.floor(Math.random() * 100) * 12;
      //! creating random width of an image
      const x = 1000 + Math.floor(Math.random() * 100) * 5;
      //! selecting random color
      const color = Math.floor(Math.random() * 3817483392).toString(25);
      //!dynamic dummy image generator
      images.push(
        "https://dummyimage.com/" +
          y +
          "x" +
          x +
          "/" +
          color +
          "/fff&text=" +
          (i + 1)
      );
    }

    return (
      <div>
        <div className="content">
          <p>
            Masonry is a{" "}
            <a
              className="linkEffect"
              href="https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/"
            >
              {" "}
              JS cascading grid layout
            </a>
            . It places elements in optimal position based on space
            availability. Colors are populated top down in a masonry order, with
            colors loading faster getting priority. This effect leaves users
            with <a className="emphasis">less loading time</a> and{" "}
            <a className="emphasis">more efficient user experience</a>.
          </p>
          <div className="resourceCredit">
            <p className="singleLine">
              credit to{" "}
              <a className="linkEffect" href="https://github.com/christikaes">
                @christikaes
              </a>
            </p>
            <p className="singleLine">
              follow me{" "}
              <a className="linkEffect" href="https://github.com/elsie-c">
                @elsie-c
              </a>
            </p>
          </div>
        </div>

        <ImageMasonry imageUrls={images} numCols={5}></ImageMasonry>
      </div>
    );
  }
}

export default Intro;
