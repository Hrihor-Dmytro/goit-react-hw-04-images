import axios from 'axios';

export const fetchImage = async (query, page) => {
  const BASE_URL = `https://pixabay.com/api/`;
  const KEY = `30150755-c61622b73d763821aed9d9577`;
  const url = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return url.data;
};
