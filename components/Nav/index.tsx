import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledNavWrapper>
          <StyledMainLogo>DALKKUL</StyledMainLogo>
          <StyledAboutLink>About</StyledAboutLink>
        </StyledNavWrapper>
      </StyledNavContainer>
    </>
  )
}

export default Navbar

const StyledNavContainer = styled.nav`
  width: 100%;
  height: 60px;
`
const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledMainLogo = styled.h1`
  display: inline-block;
  font-size: 24px;
  padding: 20px;
`
const StyledAboutLink = styled.a`
  display: block;
  padding: 20px;
  height: 100%;
  cursor: pointer;
`
