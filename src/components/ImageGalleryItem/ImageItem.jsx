import { PropTypes } from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
import { ImageGalleryItem, ImageGalleryItemImage } from './ImageItem.styled';

export class ImageItem extends Component {
  state = {
    isModalVisible: false,
  };

  handleCloseModal = () => {
    this.setState({ isModalVisible: false });
  };

  handleOpenModal = () => {
    this.setState({ isModalVisible: true });
  };
  render() {
    return (
      <ImageGalleryItem>
        {this.state.isModalVisible && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
            handleClose={this.handleCloseModal}
          />
        )}
        <ImageGalleryItemImage
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={this.handleOpenModal}
        />
      </ImageGalleryItem>
    );
  }
}

ImageItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};
