import React, { Component } from 'react';
import ImageMasonry from 'react-image-masonry';


class Elsiemade extends Component {
    state = {
        numCols: 3,
        width: "100%"
    }

    render() {
        //! Get an array of photo retrived from local file; 
        let images = [];
        for(let i = 0; i< 250; i++) {
            const iphoto = i + Math.floor(Math.random()*0.5)*15;
            images.push(
                `.../image/image${iphoto}.jpg`);
        }
        return(
            <div>
                <div className="content">
                    <h2 className="quote">Capturing favorite moments through my lens - <a className="linkEffect" href="https://www.instagram.com/elsiemade">@elsiemade</a></h2>
                        <div className="customize">
                       # of columns :  
                        <input 
                            className="input"
                            type="number" 
                            value={this.state.numCols} 
                            onChange={(event) => {this.setState({numCols: event.target.value})}} />
                        <div className="spacer"></div>
                        width :  
                        <input 
                            className="input"
                            type="text" 
                            value={this.state.width} 
                            onChange={(event) => {this.setState({width: event.target.value})}} />
                        </div>
                </div>
          
                <ImageMasonry
                    imageUrls={images}
                    numCols={this.state.numCols}
                    containerWidth={this.state.width}
                >
                </ImageMasonry>
            </div>
        )
    }
}

export default Elsiemade;