import { useState, useEffect } from 'react';
import * as API from './NewApiService/NewApiService';

import { SearchbarForm } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { AppBox } from './App.styled';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      API.fetchImage(query, page).then(response => {
        setPictures(prevState => [...prevState, ...response.hits]);
        setIsLoading(false);
        setTotal(response.total);
      });
    }
  }, [page, query]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setPictures([]);
  };

  return (
    <AppBox>
      <SearchbarForm onSubmit={handleSubmit} />
      <ImageGallery items={pictures} />
      {isLoading && <Loader />}
      {pictures.length < total && <Button onLoadMore={handleLoadMore} />}
      {pictures.length === 0 && <div>Sorry, nothing found...</div>}
    </AppBox>
  );
};
