import { PropTypes } from 'prop-types';
import { ButtonBox, ButtonPosition } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonPosition>
      <ButtonBox type="button" onClick={() => onLoadMore()}>
        Load more
      </ButtonBox>
    </ButtonPosition>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
