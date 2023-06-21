import ListItems from '../ListItems'
import {
  SolutionDetailsContainer,
  SolutionListItem1Container,
  SolutionListItem2Container,
  SolutionListItem3Container,
} from './styledComponent'

const SolutionListItem1 = [
  {
    id: 1,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b61121cf3275af01df_Group%2018644.svg',
    title: 'Healthcare',
    description: 'Ambulatory services & hospitals.',
  },
  {
    id: 2,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b6029cc241f72dca5e_Group%2018645.svg',
    title: 'Dental',
    description: 'Dental clinics & chains.',
  },
  {
    id: 3,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae35b1121cf3b05af2027_Group%2018653.svg',
    title: 'Home Services',
    description: 'HVAC Plumbing, electronic & more.',
  },
  {
    id: 4,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd170086cb58508000d35d_Group%2018667.svg',
    title: 'Care services',
    description: 'Nursing home & child care services.',
  },
]

const SolutionListItem2 = [
  {
    id: 1,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b6b8a064d43ba08a82_Group%2018648.svg',
    title: 'Automotive',
    description: 'dealership, auto service & paint shops.',
  },
  {
    id: 2,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b6a0a692537d5baf2b_Group%2018646.svg',
    title: 'Retail',
    description: 'All types of stores & chains.',
  },
  {
    id: 3,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b6029cc2ed182dca5d_Group%2018647.svg',
    title: 'Hospitality',
    description: 'Hotels, resorts & tourism services.',
  },
  {
    id: 4,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd16ff9e21736b4d096f6c_Group%2018668.svg',
    title: 'Financial Services',
    description: 'Investment, insurance & credit.',
  },
]

const SolutionListItem3 = [
  {
    id: 1,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b64141c114f8faff80_Group%2018649.svg',
    title: 'Restaurants',
    description: 'Restaurants, cafes & drinking places.',
  },
  {
    id: 2,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b663845dcf43ebab76_Group%2018650.svg',
    title: 'Wellness',
    description: 'Salons, spas & fitness centres.',
  },
  {
    id: 3,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dae1b643c276ac58ff0160_Group%2018651.svg',
    title: 'Professional Services',
    description: 'Accounting, advertising, real estate.',
  },
  {
    id: 4,
    icon:
      'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd16ffe724d7939651a067_Group%2018669.svg',
    title: 'Recreational Services',
    description: 'Entertainment, sports & recreational.',
  },
]

const Solution = () => (
  <SolutionDetailsContainer>
    <SolutionListItem1Container>
      {SolutionListItem1.map(eachItem => (
        <ListItems eachItem={eachItem} key={eachItem.id} />
      ))}
    </SolutionListItem1Container>
    <SolutionListItem2Container>
      {SolutionListItem2.map(eachItem => (
        <ListItems eachItem={eachItem} key={eachItem.id} />
      ))}
    </SolutionListItem2Container>
    <SolutionListItem3Container>
      {SolutionListItem3.map(eachItem => (
        <ListItems eachItem={eachItem} key={eachItem.id} />
      ))}
    </SolutionListItem3Container>
  </SolutionDetailsContainer>
)
export default Solution
