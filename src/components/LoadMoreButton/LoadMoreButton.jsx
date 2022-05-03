import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: block;
  margin: 20px auto;
  border-radius: 4px;
  padding: 8px 12px;
  background: transparent;
  transition: background 250ms linear, color 250ms linear;
  font-style: initial;
  cursor: pointer;

  &:hover {
    background: rgb(216, 5, 5);
    color: white;
  }
`;

const LoadMoreButton = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
