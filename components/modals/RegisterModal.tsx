import { useCallback } from "react";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../Modal";

const ModalBody = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" />
      <Input placeholder="Name" />
      <Input placeholder="Username" />
      <Input placeholder="Password" type="password" />
    </div>
  )
}

const ModalFooter = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const onClick = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  return (
    <div className="text-neutral-400 text-center mt-4">
      <p>Already have an account?
        <span 
          onClick={onClick} 
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
          > Sign in</span>
      </p>
    </div>
  )
}

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={registerModal.onClose}
      body={<ModalBody />}
      footer={<ModalFooter />}
    />
  );
}

export default RegisterModal;
