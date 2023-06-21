// Style your elements here
import styled from 'styled-components'

// export const GradientDirectionItemContainer = styled.li`
//   background-color: transparent;
//   margin: 10px;
// `
// export const DirectionItem = styled.button`
//   font-size: 17px;
//   padding: 10px;
//   font-weight: 500;
//   color: #1e293b;
//   background-color: #ffffff;
//   color: ${props => (props.isActive ? '#334155' : '#1e293b')};
//   opacity: ${props => (props.isActive ? 1 : 0.5)};
//   border-radius: 10px;
//   min-width: 120px;
//   border: none;
//   outline: none;
//   cursor: pointer;
// `

export const MainHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`

export const MainHeading = styled.h1`
  text-align: center;
  font-size: 70px;
  font-weight: 900;
  max-width: 700px;
`

export const MainDescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  color: gray;
  font-weight: 300;
  display: flex;
  justify-content: center;
`

export const MainDescription = styled.p`
  max-width: 850px;
  margin-top: 1rem;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0px 5rem;
`

export const InputElement = styled.input`
  padding: 1rem;
  font-size: 1rem;
  width: 25rem;
  margin-right: 1rem;
  border-radius: 10px;
  border: 1px solid gray;
`

export const GetDemoButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid gray;
  width: 10rem;
  color: white;
  background-color: #0b69ff;
  font-weight: 600;
  font-size: 1rem;
`

export const SiteBackgroundImage = styled.img`
  // background-image: cover;
  width: 100%;
`

export const TrustedCompaniesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`

export const TrustedCompaniesHeading = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 50px;
`

export const TrustedBrandList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`

export const BrandImage = styled.img`
  margin: 5px;
  width: 13rem;
  height: auto;
`

export const MemberCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  min-height: 700px;
`

export const MemberCardSubContainer = styled.div`
  box-shadow: rgb(190, 187, 187) 0px 0px 2px;
  border-radius: 1rem;
  width: 25rem;
  margin: 1rem;
  padding: 2rem 2rem 5rem 2rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MemberCardRowOne = styled.div`
  display: flex;
`

export const LeftContainer = styled.div`
  margin: 0px 1rem;
`

export const ProfileImage = styled.img`
  width: 4.5rem;
  height: auto;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-gap-override: 1rem;
  justify-content: center;
`

export const NameContainer = styled.div`
  font-weight: 700;
  font-size: 1.5rem; ;
`
export const PositionContainer = styled.div`
  color: gray;
`

export const MemberCardRowTwo = styled.div`
  font-size: 1.2rem;
  margin: 2rem 1rem;
  line-height: 2rem;
  text-align: center;
`

export const MemberCardRowThree = styled.div`
  font-size: 5rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0px;
  text-align: center;
`

export const MemberCardRowFour = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`

export const MemberCardRowFourChild = styled.div`
  width: 70%;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 5px;
`
export const MemberCardRowFive = styled.div`
  font-weight: 600;
  margin-top: 3rem;
`

export const MemberCardRowSix = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`

export const SmallCard = styled.h2`
  background-color: skyblue;
  opacity: 0.6;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  color: black;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
`
export const BusinessNxtLevelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BusinessNxtLevelCard = styled.div`
  box-shadow: rgb(190, 187, 187) 0px 0px 2px;
  border-radius: 1rem;
  width: 25rem;
  margin: 1rem;
  padding: 2rem 2rem 5rem 2rem;
`
export const BusinessNxtLevelHeading = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #3b82f6;
  margin-top: 0.7%;
  margin-bottom: 0px;
`

export const BusinessNxtLevelSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: gray;
  //   margin-left: 7%;
`

export const BusinessNxtLevelDescription = styled.p`
  color: gray;
  margin-top: 0px;
`

export const BusinessNxtLevelCardSubCon = styled.div`
  margin-top: 3rem;
`

export const BusinessNxtLevelCardSecCon = styled.div`
  display: flex;
  margin: 2rem 0px 1rem;
  border-top: 1px solid rgb(231, 222, 222);
  padding-top: 2rem;
`

export const BusinessCardSubCon = styled.div``

export const BusinessCardImage = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

export const BusinessCardSubHeading = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0px;
  color: #000000;
`

export const BusinessCardSubDes = styled.div`
  color: gray;
  font-size: 0.7rem;
`

export const MakeYourBusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: 7%;
`
export const MakeYourBusinessHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 600;
  //   margin-top: 0px;
  margin-bottom: 10px;
`
export const MakeYourBusinessSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 7%;
`
export const IndustryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
`

export const IndustryHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 10px;
`
export const IndustryDescription = styled.p`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 0px;
  color: gray;
  margin-bottom: 10px;
`
export const IndustryList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 7%;
`
export const ExpertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
`
export const ExpertHeading = styled.h1`
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 10px;
`
export const ExpertDescription = styled.p`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 0px;
  color: gray;
  margin-bottom: 10px;
`
export const ExpertSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 7%;
  margin-bottom: 7%;
  margin-left: 5%;
  margin-right: 5%;
`
export const ViewAllResourceButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 7%;
`
