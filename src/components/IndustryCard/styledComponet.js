import styled from 'styled-components'

export const IndustryCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid lightgray;
  box-shadow: 0px 5px 5px 2px #f1f1f1;
  width: 270px;
  height: 150px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    transition: 0.5s;
  }
`
export const IndustryCardImage = styled.img`
  height: 50px;
  width: 50px;
`
export const IndustryCardTitle = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
