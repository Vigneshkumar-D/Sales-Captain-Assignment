import {
  IndustryCardContainer,
  IndustryCardImage,
  IndustryCardTitle,
} from './styledComponet'

const IndustryCard = props => {
  const {eachItem} = props
  const {title, imgUrl} = eachItem

  return (
    <IndustryCardContainer>
      <IndustryCardImage src={imgUrl} />
      <IndustryCardTitle>{title}</IndustryCardTitle>
    </IndustryCardContainer>
  )
}
export default IndustryCard
