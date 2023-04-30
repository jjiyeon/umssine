import styled from 'styled-components'

const Datebar = () => {
  const today = new Date()
  const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()

  return (
    <>
      <StyledDateContainer>
        <StyledDateList>
          {[...Array(lastDate)].map((date, idx) => (
            <StyledDateText>{idx + 1}</StyledDateText>
          ))}
        </StyledDateList>
      </StyledDateContainer>
    </>
  )
}

export default Datebar

const StyledDateContainer = styled.div`
  height: 40px;
  border-color: #dfdfdf;
  border-top: 1px;
  border-bottom: 1px;
`
const StyledDateList = styled.ul`
  display: flex;
  height: 52px;
`
const StyledDateText = styled.li`
  width: calc(100% / 30);
  aspect-ratio: auto 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 8px;
`
