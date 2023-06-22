import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //   align-items: center;
  background-image: url('https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;
  width: 100%;
`
export const LoginPageSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #ffffff;
`

export const LoginPageFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 5px;
  box-shadow: '0px 3px 7px 3px #e2e8f0';
  padding: 10px;
`
export const LoginPageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 300px;
  text-align: center;
`

export const AppLogoContainer = styled.div``

export const AppLogo = styled.img`
  width: 180px;
  margin: 30px;
  height: 90px;
  align-self: center;
  margin-bottom: 20px;
`
export const CustomInputPassword = styled.input`
  height: 35px;
  width: 300px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: ${props => props.color};
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #94a3b8;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;

  outline: none;
  border-right: none;
  background-color: transparent;
`
export const CustomInputEmail = styled.input`
  height: 35px;
  width: 300px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500px;
  color: ${props => props.color};
  padding-left: 15px;
  margin-bottom: 10px;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
`

export const LoginButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  height: 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #3b82f6;
  cursor: pointer;
  margin-top: 30px;
  width: 300px;
`

export const AppointmentContainer = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const BookingInfoContainer = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: center;
  width: 430px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
`
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  font-style: 'Roboto';
  margin: 0px;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: 'Roboto';
  text-align: left;
  margin: 0px;
  color: gray;
  margin-top: 20px;
`
export const BookingButton = styled.button`
  font-size: 11px;
  font-weight: 600;
  background-color: orange;
  padding: 10px;
  width: 140px;
  border-radius: 5px;
  cursor: pointer;
  border-style: none;
  font-style: 'Roboto';
  color: #ffffff;
  align-self: center;
  margin-top: 16px;
`
export const ForgerPasswordButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  border-style: none;
  padding: 10px;
  margin-top: 20px;
  color: #3b82f6;
  border-style: none;
  font-style: 'Roboto';
  cursor: pointer;
  text-align: center;
`
export const LoginHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-style: 'Roboto';
  text-align: center;
  margin-top: 0px;
  margin-bottom: 40px;
`
// export const Icon = styled.i``
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
