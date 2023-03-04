import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback } from "react";

import Input from "../Input";
import Modal from "../Modal";

const ModalBody = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
    </div>
  )
}

const ModalFooter = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const onClick = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  return (
    <div className="text-neutral-400 text-center mt-4">
      <p>First time using Twitter?
        <span 
          onClick={onClick} 
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
          > Create an account</span>
      </p>
    </div>
  )
}

const LoginModal = () => {
  const loginModal = useLoginModal();

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={loginModal.onClose}
      body={<ModalBody />}
      footer={<ModalFooter />}
    />
  );
}

export default LoginModal;
