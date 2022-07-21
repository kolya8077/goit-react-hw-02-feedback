import styled from '@emotion/styled';

export const ItemButton = styled.ul`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 5px 10px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  transition: box-shadow 0.2s;
  background-color: #fff;

  :focus-visible {
    border: 1px solid #4c51f9;
    outline: none;
  }

  :hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    background-color: #ccc;
  }

  :active {
    background-color: #00379c;
    color: #fff;
  }

  :not(:last-child) {
    margin-right: 5px;
  }
`;
