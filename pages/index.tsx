import type { NextPage } from 'next'
import styled from 'styled-components'
import Datebar from '../components/Datebar'
import Main from '../components/Main'
import MyInfo from '../components/MyInfo'
import Navbar from '../components/Nav'

const Test = styled.div`
  background-color: tomato;
`
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <MyInfo />
      <Datebar />
      <Main />
    </div>
  )
}

export default Home
