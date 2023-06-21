import {
  BusinessCardContainer,
  BusinessCardDetailsContainer,
  BusinessCardHeading,
  BusinessCardDes,
  BusinessCardGetStartedButton,
  BusinessCardImage,
} from './styledComponent'

import './index.css'

const BusinessCard = props => {
  const {eachItem} = props
  const {id, title, description, imgUrl} = eachItem

  const eleOrder = id % 2 === 0 ? 'changeOrder' : ''

  console.log(id / 2)

  return (
    <BusinessCardContainer>
      <BusinessCardDetailsContainer>
        <BusinessCardHeading>{title}</BusinessCardHeading>
        <BusinessCardDes>{description}</BusinessCardDes>
        <BusinessCardGetStartedButton>Get Started</BusinessCardGetStartedButton>
      </BusinessCardDetailsContainer>
      <BusinessCardImage src={imgUrl} className={eleOrder} />
    </BusinessCardContainer>
  )
}
export default BusinessCard
