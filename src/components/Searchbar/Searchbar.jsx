import { Formik } from 'formik';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchbarForm.styled';
export const SearchbarForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.searchQuery);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <SearchbarHeader>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        {({ isSubmiting }) => (
          <SearchForm>
            <SearchFormButton type="submit" disabled={isSubmiting}>
              <SearchIcon />
            </SearchFormButton>

            <SearchFormInput
              name="searchQuery"
              type="text"
              placeholder="Search images and photos"
              autoComplete="off"
            />
          </SearchForm>
        )}
      </Formik>
    </SearchbarHeader>
  );
};
