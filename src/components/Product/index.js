import ListItems from '../ListItems'
import {
  ProductDetailsContainer,
  AttractContainer,
  AttractHeading,
  EngageContainer,
  EngageHeading,
  ElevateContainer,
  ElevateHeading,
} from './styledComponent'

const AttractItemList = [
  {
    id: 1,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg',
    title: 'Reviews',
    description: 'Improve ratings & get chosen more.',
  },
  {
    id: 2,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg',
    title: 'Listing',
    description: 'Improve listings & get seen more.',
  },
  {
    id: 3,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg',
    title: 'Marketing',
    description: 'Reach out to customers on text & email.',
  },
  {
    id: 4,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg',
    title: 'SmartPages',
    description: 'Engage more with our AI SEO.',
  },
]

const EngageItemList = [
  {
    id: 1,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg',
    title: 'WebChat',
    description: 'Convert leads on website chat with ou Ai.',
  },
  {
    id: 2,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg',
    title: 'Messaging',
    description: 'Engage with customers across all channels.',
  },
  {
    id: 3,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg',
    title: 'Referrals',
    description: 'Let your customers refer you.',
  },
  {
    id: 4,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg',
    title: 'Payments',
    description: 'Modernize your payment tools.',
  },
]

const ElevateItemList = [
  {
    id: 1,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg',
    title: 'Caption Al',
    description: 'Your AI assistant to drive growth.',
  },
  {
    id: 2,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg',
    title: 'Feedback & Survey',
    description: 'Listen to your customers & delight them.',
  },
  {
    id: 3,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg',
    title: 'Competition & Insights',
    description: 'Learn about your competitors & insights.',
  },
  {
    id: 4,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg',
    title: 'Customer Manager',
    description: 'Manage all your customer data & activity.',
  },
]

const Product = () => (
  <ProductDetailsContainer>
    <AttractContainer>
      <AttractHeading>ATTRACT</AttractHeading>
      {AttractItemList.map(eachItem => (
        <ListItems eachItem={eachItem} key={eachItem.id} />
      ))}
    </AttractContainer>
    <EngageContainer>
      <EngageHeading>ENGAGE</EngageHeading>
      {EngageItemList.map(eachItem => (
        <ListItems eachItem={eachItem} key={eachItem.id} />
      ))}
    </EngageContainer>
    <ElevateContainer>
      <ElevateHeading>ELEVATE</ElevateHeading>
      {ElevateItemList.map(eachItem => (
        <ListItems eachItem={eachItem} key={eachItem.id} />
      ))}
    </ElevateContainer>
  </ProductDetailsContainer>
)
export default Product
