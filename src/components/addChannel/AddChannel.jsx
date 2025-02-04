import MembersModal from './MembersModal'
import styled from 'styled-components'
import NameModal from './NameModal'
import {useState} from 'react'

export default({show, setShow})=> {
  const [openNext, isOpenNext] = useState(false)

  const onClose = () => {
    setShow(false)
    isOpenNext(false)
  }

  return (<>
    {show &&
      <Overlay onClick={onClose}>
        <NameModal openNext={openNext} isOpenNext={isOpenNext} onClose={onClose}/>
        <MembersModal onClose={onClose} openNext={openNext}/>
      </Overlay>
    }
  </>)
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`
