import Image from 'next/image'
import styled from 'styled-components'

const MyInfo = () => {
  return (
    <div>
      <Image width={150} height={150} src="/dal2.png" alt="main image" />
      <p>엄씨네 친구들</p>
    </div>
  )
}

export default MyInfo

const StyledMyInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledMainInfo = styled.p``
