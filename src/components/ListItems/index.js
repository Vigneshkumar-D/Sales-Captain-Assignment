import {
  IconListItem,
  ListItemIcon,
  SubListItem,
  ListHeating,
  ListDes,
} from './styledComponent'
import './index.css'

const ListItem = props => {
  const {eachItem} = props
  const {icon, title, description} = eachItem

  return (
    <IconListItem className="list-item">
      <ListItemIcon src={icon} />
      <SubListItem>
        <ListHeating>{title}</ListHeating>
        <ListDes>{description}</ListDes>
      </SubListItem>
    </IconListItem>
  )
}
export default ListItem
