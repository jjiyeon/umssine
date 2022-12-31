import styled from 'styled-components'

const Datebar = () => {
  return (
    <>
      <StyledDateContainer>
        <StyledDateList>
          <StyledDateText>31</StyledDateText>
        </StyledDateList>
      </StyledDateContainer>
    </>
  )
}

export default Datebar

const StyledDateContainer = styled.div`
  background-color: tomato;
  height: 40px;
`
const StyledDateList = styled.ul``
const StyledDateText = styled.li``
