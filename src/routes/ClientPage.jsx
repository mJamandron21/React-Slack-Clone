import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar/Sidebar'
import Nav from '../components/Nav'

import DirectMessage from './client/DirectMessage'
import NewMessage from './client/NewMessage'
import Welcome from './client/Welcome'
import Channel from './client/Channel'
import Chat from './client/Chat/Chat'

export default({user}) => (
  <ClientPage>
    <Nav user={user}/>
    <Main>
      <Sidebar user={user}/>
      <Routes>
        <Route index element={<NewMessage user={user}/>}/>
        {/* <Route index element={<Chat user={user}/>} /> */}
      </Routes>
    </Main>
  </ClientPage>
)

const ClientPage = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  color: #FFF;
  display: grid;
  background: #222529;
  grid-template-columns: 240px auto;
`
