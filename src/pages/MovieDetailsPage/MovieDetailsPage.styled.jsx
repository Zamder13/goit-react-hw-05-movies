import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 14px;
`;

export const ImageThumb = styled.div`
  margin-bottom: 30px;

  img {
    margin-top: 15px;
  }
`;

export const InfoThumb = styled.div`
  h2 {
    margin-bottom: 30px;
    margin-top: 50px;
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const Genres = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 50px;
  gap: 8px;
`;

export const Details = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    transition: color 250ms linear;
    &:hover {
      color: rgb(216, 5, 5);
    }
  }
  li {
    font-size: 24px;
  }
`;
