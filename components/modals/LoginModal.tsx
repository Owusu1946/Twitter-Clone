import { useState } from "react";
import Button from "../Button";

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

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} label="Sign in" />
      <Modal
        isOpen={showModal}
        title="Login"
        actionLabel="Sign in"
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
        body={<ModalBody />}
      />
    </>
  );
}

export default LoginModal;
