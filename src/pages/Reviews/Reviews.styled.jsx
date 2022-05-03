import styled from 'styled-components';

export const List = styled.div`
  padding: 20px;
  padding-top: 0;
  list-style: none;

  h4 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    font-style: oblique;
  }
`;

export const Wrapper = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 22px;
    background-color: rgb(216, 5, 5);
    color: #ffffffdc;
  }
`;

export const BadResult = styled.p`
  margin-top: 20px;
  margin-bottom: 100px;
  text-align: center;
  font-size: 24px;
`;
