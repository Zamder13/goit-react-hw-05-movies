import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 10px;
  justify-content: center;
  list-style: none;
  padding: 0 10px;

  h2 {
    text-decoration: none;
  }

  li {
    background-color: #ecf0f3;
    border-radius: 8px;
    transform: scale(0.98);
    transition: transform 250ms linear;
    /* box-shadow: 14px 14px 20px #cbced1; */

    &:hover {
      box-shadow: 14px 14px 20px #cbced1;
      transform: scale(1);
    }
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  div {
    padding: 16px;

    h2 {
      margin-bottom: 4px;
    }

    p {
      text-align: right;
    }
  }
`;
