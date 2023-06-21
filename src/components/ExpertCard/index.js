import {
  ExpertCardListItem,
  ExpertCardImage,
  ExpertCardHeading,
  ExpertCardDes,
} from './styledComponent'

const ExpertCard = props => {
  const {eachItem} = props
  const {imgUrl, title, description} = eachItem

  return (
    <ExpertCardListItem>
      <ExpertCardImage src={imgUrl} />
      <ExpertCardHeading>{title}</ExpertCardHeading>
      <ExpertCardDes>{description}</ExpertCardDes>
    </ExpertCardListItem>
  )
}
export default ExpertCard
