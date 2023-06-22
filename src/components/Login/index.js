import {Component} from 'react'
// import {Redirect} from 'react-router-dom'
// import Cookies from 'js-cookie'

import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'

import {
  LoginPageContainer,
  LoginPageFormContainer,
  LoginPageForm,
  AppLogo,
  CustomInputEmail,
  CustomInputPassword,
  BookingInfoContainer,
  AppointmentContainer,
  LoginPageSubContainer,
  Title,
  Description,
  BookingButton,
  LoginHeading,
  LoginButton,
  PasswordContainer,
  ForgerPasswordButton,
  AppLogoContainer,
} from './styledComponent'
import './index.css'

class Login extends Component {
  state = {
    isShowPassword: false,
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  render() {
    const {isShowPassword} = this.state
    console.log(isShowPassword)

    return (
      <LoginPageContainer>
        <LoginPageSubContainer>
          <LoginPageFormContainer>
            <LoginPageForm>
              <AppLogoContainer>
                <AppLogo
                  src="https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png"
                  alt="App Logo"
                />
              </AppLogoContainer>
              <LoginHeading>Login</LoginHeading>
              <CustomInputEmail type="text" placeholder="Email" />
              <PasswordContainer>
                {isShowPassword ? (
                  <>
                    <CustomInputPassword type="text" placeholder="Password" />
                    <BsEyeFill
                      icon="fa-sharp fa-solid fa-eye"
                      class="eye-icon"
                      onClick={this.toggleShowPassword}
                    />
                  </>
                ) : (
                  <>
                    <CustomInputPassword
                      type="password"
                      placeholder="Password"
                    />
                    <BsEyeSlashFill
                      icon="fa-sharp fa-solid fa-eye"
                      class="eye-icon"
                      onClick={this.toggleShowPassword}
                    />
                  </>
                )}
              </PasswordContainer>

              <LoginButton type="submit">Sign In</LoginButton>
              <ForgerPasswordButton type="button">
                Forget Password
              </ForgerPasswordButton>
            </LoginPageForm>
          </LoginPageFormContainer>
        </LoginPageSubContainer>
        <AppointmentContainer>
          <BookingInfoContainer>
            <Title>Give your business a SalesCaptain Upgrade</Title>
            <Description>
              Our AI-powered tools help local businesses modernize how they
              communicate with their customers by facilitating online reviews,
              personalized marketing campaigns, web chats, payments, and more.
            </Description>
            <Description>To learn more, talk to an expert today.</Description>
            <BookingButton type="button">Book an Appointment</BookingButton>
          </BookingInfoContainer>
        </AppointmentContainer>
      </LoginPageContainer>
    )
  }
}
export default Login
