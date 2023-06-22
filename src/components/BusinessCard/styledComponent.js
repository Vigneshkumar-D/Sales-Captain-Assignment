import styled from 'styled-components'

export const BusinessCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
`
export const BusinessCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;
  padding: 10px;
`
export const BusinessCardHeading = styled.h1`
  font-size: 35px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-bottom: 10px;
`

export const BusinessCardDes = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  color: gray;
  font-weight: 300;
  }
`

export const BusinessCardGetStartedButton = styled.button`
  font-size: 18px;
  font-family: 'Roboto';
  color: #3b82f6;
  border: none;
  font-weight: 500;
  cursor: pointer;

  padding-left: 0px;
  background-color: transparent;
`
export const BusinessCardImage = styled.img`
  height: 420px;
  width: 480px;
  border-radius: 10px;
  padding: 10px;
`
