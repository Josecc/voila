import React, { Component } from 'react';
import styles from './SearchBox.css';
import withStyles from '../../decorators/withStyles';
import Dropzone from 'react-dropzone';
import SearchResults from '../SearchResults';
import CropControls from '../CropControls';

@withStyles(styles)
class SearchBox extends Component {

  constructor() {
  	super();
    this.handleFileChange = this.handleFileChange.bind(this);
    this.cropped = this.cropped.bind(this);
    this.rotate = this.rotate.bind(this);
    this.dataURLtoBlob = this.dataURLtoBlob.bind(this);
    this.uploadOnTouch = this.uploadOnTouch.bind(this);
    this.state = {
      uploadedImage: ""
    };
    this.imageStyle = {
      maxWidth: '80px'
    };
  }

  handleFileChange(dataURI) {
    this.setState({
      uploadedImage: dataURI[0].preview
    });
    this.props.setCropped(); //it just says cropping is ready so tutorial for cropping appears
  }

  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  uploadOnTouch() {
    this.refs.dropzone.open();
  }

  componentDidUpdate() {
    var image = document.querySelector('.SearchBox > img');
    global.cropper = new Cropper(image, {
      checkImageOrigin: false,
      toggleDragModeOnDblclick: false,
      dragMode: 'move',
      ViewMode: 1,
      crop: function(data) {
        // console.log(data.x);
        // console.log(data.y);
        // console.log(data.width);
        // console.log(data.height);
        // console.log(data.rotate);
        // console.log(data.scaleX);
        // console.log(data.scaleY);
      }
    });
  }

  componentDidMount() {
    global.Cropper = require('cropperjs');
  }

  cropped() {
    new Promise((resolve, reject) => {
      this.props.setImageBlob(this.dataURLtoBlob(cropper.getCroppedCanvas().toDataURL('image/jpeg')));
      resolve("image blob updated.");
    })
    .then( () => this.props.fetchProducts() );
  }

  rotate() {
    cropper.rotate(90);
  }

  rotateRightIncrement(){
    cropper.rotate(4);
  }

  rotateLeftIncrement() {
    cropper.rotate(-4);
  }

  render() {
    if(this.state.uploadedImage == ""){
      return (
        <div className="SearchBox" onTouchStart={this.uploadOnTouch} onClick={this.uploadOnTouch} >
          <Dropzone ref="dropzone" onDrop={this.handleFileChange} className="drop-zone" disableClick={true} >
            <div>Touch or drag and drop to upload image.</div>
          </Dropzone>
        </div>
      );
    }
    return (
      <div className="SearchBox" >
        <img src={this.state.uploadedImage} style={{maxHeight: "300px", maxWidth: "500px"}} ></img>
        <CropControls crop={this.cropped} rotate={this.rotate} rotateRightIncrement={this.rotateRightIncrement} rotateLeftIncrement={this.rotateLeftIncrement}/>
      </div>
		);
  }
}

export default SearchBox;