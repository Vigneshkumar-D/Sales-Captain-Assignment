import {Component} from 'react'
import Product from '../Product'
import Solution from '../Solution'
import {
  HeaderContainer,
  AppLogo,
  HeaderSubContainer,
  MenuContainer,
  ProductTitle,
  SolutionTitle,
  PricingTitle,
  ResourcesTitle,
  SupportTitle,
  ButtonsContainer,
  SignInButton,
  GetStartedButton,
  ProductMainContainer,
  SolutionMainContainer,
  HeaderMainContainer,
} from './styledComponent'
import './index.css'

let productCssProperty = 'product-invisible'
let solutionCssProperty = 'solution-invisible'

class Header extends Component {
  state = {isHovered: false}

  onHoverProduct = () => {
    productCssProperty = 'product-visible'
    this.setState(prevState => ({isHovered: !prevState.isHovered}))
  }

  onLeaveProduct = () => {
    productCssProperty = 'product-invisible'
    this.setState(prevState => ({isHovered: !prevState.isHovered}))
  }

  onHoverSolution = () => {
    solutionCssProperty = 'solution-visible'
    this.setState(prevState => ({isHovered: !prevState.isHovered}))
  }

  onLeaveSolution = () => {
    solutionCssProperty = 'solution-invisible'
    this.setState(prevState => ({isHovered: !prevState.isHovered}))
  }

  render() {
    return (
      <HeaderMainContainer>
        <HeaderContainer>
          <AppLogo
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo.webp"
            alt="App Logo"
          />
          <HeaderSubContainer>
            <MenuContainer>
              <ProductTitle
                onMouseOver={this.onHoverProduct}
                onMouseLeave={this.onLeaveProduct}
              >
                Products
              </ProductTitle>
              <SolutionTitle
                onMouseOver={this.onHoverSolution}
                onMouseLeave={this.onLeaveSolution}
              >
                Solution
              </SolutionTitle>
              <PricingTitle>Pricing</PricingTitle>
              <ResourcesTitle>Resources</ResourcesTitle>
              <SupportTitle>Support</SupportTitle>
            </MenuContainer>
            <ButtonsContainer>
              <SignInButton className="sign-in-button">Sign in</SignInButton>
              <GetStartedButton className="get-started-btn">
                Get Started
              </GetStartedButton>
            </ButtonsContainer>
          </HeaderSubContainer>
        </HeaderContainer>
        <ProductMainContainer className={productCssProperty}>
          <Product />
        </ProductMainContainer>
        <SolutionMainContainer className={solutionCssProperty}>
          <Solution />
        </SolutionMainContainer>
      </HeaderMainContainer>
    )
  }
}

export default Header
