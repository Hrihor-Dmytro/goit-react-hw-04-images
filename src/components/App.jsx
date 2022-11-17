import { Component } from 'react';
import * as API from './NewApiService/NewApiService';

import { SearchbarForm } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppBox } from './App.styled';
export class App extends Component {
  state = {
    pictures: [],
    page: 1,
    total: 0,
    isLoading: false,
    error: null,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page &&
      prevState.query === this.state.query
    ) {
      this.setState({
        isLoading: true,
      });
      API.fetchImage(this.state.query, this.state.page).then(response => {
        const updatedPictures = [...this.state.pictures, ...response.hits];
        this.setState({
          pictures: updatedPictures,
          isLoading: false,
        });
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = searchQuery => {
    this.setState({
      isLoading: true,
    });

    API.fetchImage(searchQuery, 1).then(response => {
      this.setState({
        pictures: response.hits,
        query: searchQuery,
        page: 1,
        isLoading: false,
        total: response.total,
      });
    });
  };

  render() {
    return (
      <AppBox>
        <SearchbarForm onSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.pictures} />
        {this.state.isLoading && <Loader />}
        {this.state.pictures.length === 0 && <div>Sorry, nothing found...</div>}
        <Button onLoadMore={this.handleLoadMore} />
      </AppBox>
    );
  }
}
