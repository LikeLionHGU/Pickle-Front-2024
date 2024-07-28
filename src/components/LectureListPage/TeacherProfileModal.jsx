import React from "react";
import styled from "styled-components";

function TeacherProfileModal({ toggleModal }) {
  return (
    <Modal>
      <Overlay onClick={toggleModal} />
      <ModalContent>
        <ModalWrapper></ModalWrapper>
      </ModalContent>
    </Modal>
  );
}

export default TeacherProfileModal;

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
  background: rgba(158, 158, 158, 0.9);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 35px;
  width: 1110px;
  height: 643px;
`;

const ModalWrapper = styled.div`
  width: 938px;
  height: 522px;
  margin-top: 52px;
  margin-left: 94px;
`;
