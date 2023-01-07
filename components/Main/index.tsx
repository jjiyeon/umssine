import Image from 'next/image'
import styled from 'styled-components'

const MockImages = [
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
            {MockImages.map((item, _) => (
              <StyledImageItem key={item.id}>
                <Image
                  src={item.url}
                  width={300}
                  height={300}
                  alt="my photo"
                  style={{
                    maxWidth: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
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
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  overflow: hidden;
`
const StyledImageItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledText = styled.p``
