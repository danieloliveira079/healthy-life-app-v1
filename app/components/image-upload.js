import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';


export default class ImageUpload extends Component {
  static propTypes = {
    images: PropTypes.array,
    isUploading: PropTypes.bool.isRequired,
    onDropImage: PropTypes.func.isRequired,
    onRemoveImage: PropTypes.func.isRequired,
    errors: PropTypes.object,
  }

  renderImages (images) {
    if (!images || images.length === 0) {
      return null;
    }

    return (
      <div className="preview">
        {
          images.map((image, index) => {
            return (
              <div key={index} className="image-preview">
                <div>
                  <img src="http://lorempixel.com/1000/600/nature/2/" />
                </div>
                <div
                  onClick={() => this.props.onRemoveImage(image.path_display)}
                  className="delete"
                >
                  <i className="fa fa-trash"></i>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  render () {
    const { isUploading, images } = this.props;

    return (
      <div className="image-upload-component">
        <Dropzone className="dropzone upload-img placeholder" onDrop={::this.props.onDropImage} accept="image/jpeg">
          { isUploading ?
              <div><i className="fa fa-refresh fa-spin loading"></i></div> :
              (<div>
                  <i className="fa fa-upload"></i>
                  <span className="message">
                    Arraste ou clique para escolher os arquivos do seu computador.
                  </span>
              </div>)
          }
        </Dropzone>
        {this.renderImages(images)}
      </div>
    );
  }
}
