import Image from 'next/image'
import styled from 'styled-components'

const Images = [
  { id: 1, url: '/mock/1.JPG' },
  { id: 2, url: '/mock/2.JPG' },
  { id: 3, url: '/mock/3.JPG' },
  { id: 4, url: '/mock/4.jpeg' },
]
const Main = () => {
  return (
    <StyledMainContainer>
      <StyledMainWrapper>
        <StyledImageSlider>
          <StyledImageList>
            {Images.map((item, index) => (
              <StyledImageItem>
                <Image src={item.url} alt="my photo" fill={true} />
              </StyledImageItem>
            ))}
          </StyledImageList>
        </StyledImageSlider>
      </StyledMainWrapper>
    </StyledMainContainer>
  )
}

export default Main

const StyledMainContainer = styled.div``
const StyledMainWrapper = styled.div``
const StyledImageSlider = styled.div``
const StyledImageList = styled.ul`
  display: flex;
  overflow: hidden;
  width: 300px;
  height: 600px;
`
const StyledImageItem = styled.li`
  object-fit: contain;
`
const StyledText = styled.p``
