import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 10px;
  list-style: none;
  padding: 20px;
  padding-top: 0;

  p {
    font-size: 18px;
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
