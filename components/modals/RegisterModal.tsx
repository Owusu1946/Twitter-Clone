import { useState } from "react";
import Button from "../Button";

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

const RegisterModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} label="Register" secondary />
      <Modal
        isOpen={showModal}
        title="Create an account"
        actionLabel="Register"
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
        body={<ModalBody />}
      />
    </>
  );
}

export default RegisterModal;
