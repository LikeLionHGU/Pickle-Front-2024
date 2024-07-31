import React from "react";
import styled from "styled-components";

function LoginModal({ toggleModal }) {
  return (
    <Modal>
      <Overlay onClick={toggleModal} />
      <ModalContent>
        <ModalWrapper></ModalWrapper>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;

const modalStyles = `
  width: 100vw; 
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
  z-index: 3;
`;

const Overlay = styled.div`
  ${modalStyles}
  background:rgba(57, 57, 57, 0.5);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 2px;
  width: 325px;
  height: 646px;
`;

const ModalWrapper = styled.div`
  border: 1px solid red;
  width: 285px;
  height: 620px;
  margin: auto;
  margin-top: 20px;
`;
