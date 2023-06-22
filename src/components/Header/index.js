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
  ProductTitleContainer,
  SolutionContainer,
} from './styledComponent'
import './index.css'

let productCssProperty = 'product-invisible'
let solutionCssProperty = 'solution-invisible'

class Header extends Component {
  state = {productIsHovered: false, solutionIsHover: false}

  onHoverProduct = () => {
    this.setState(prevState => ({
      productIsHovered: !prevState.productIsHovered,
    }))
  }

  onLeaveProduct = () => {
    this.setState(prevState => ({
      productIsHovered: !prevState.productIsHovered,
    }))
  }

  onHoverSolution = () => {
    this.setState(prevState => ({solutionIsHover: !prevState.solutionIsHover}))
  }

  onLeaveSolution = () => {
    this.setState(prevState => ({
      solutionIsHover: !prevState.solutionIsHover,
    }))
  }

  render() {
    const {productIsHovered, solutionIsHover} = this.state
    productCssProperty =
      productIsHovered === true ? 'product-visible' : 'product-invisible'
    solutionCssProperty =
      solutionIsHover === true ? 'solution-visible' : 'solution-invisible'

    return (
      <HeaderMainContainer>
        <HeaderContainer>
          <AppLogo
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo.webp"
            alt="App Logo"
          />
          <HeaderSubContainer>
            <MenuContainer>
              <ProductTitleContainer>
                <ProductTitle
                  onMouseOver={this.onHoverProduct}
                  onMouseLeave={this.onLeaveProduct}
                >
                  Products
                </ProductTitle>
                <ProductMainContainer className={productCssProperty}>
                  <Product />
                </ProductMainContainer>
              </ProductTitleContainer>
              <SolutionContainer>
                <SolutionTitle
                  onMouseOver={this.onHoverSolution}
                  onMouseLeave={this.onLeaveSolution}
                >
                  Solution
                </SolutionTitle>
                <SolutionMainContainer className={solutionCssProperty}>
                  <Solution />
                </SolutionMainContainer>
              </SolutionContainer>

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
      </HeaderMainContainer>
    )
  }
}

export default Header
