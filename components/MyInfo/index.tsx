import Image from 'next/image'
import styled from 'styled-components'

const MyInfo = () => {
  return (
    <StyledMyInfoContainer>
      <Image width={150} height={150} src="/dal2.png" alt="main image" />
      <StyledMainInfo>엄씨네 친구들</StyledMainInfo>
    </StyledMyInfoContainer>
  )
}

export default MyInfo

const StyledMyInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledMainInfo = styled.p``
