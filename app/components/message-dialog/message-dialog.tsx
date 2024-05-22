import { Button, Modal } from "react-bootstrap";

export default function MessageDialog({
  show,
  title,
  subtitle,
  text,
  onHide,
}: IMessageDialog) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export interface IMessageDialog {
  show: boolean;
  title: string;
  subtitle: string;
  text: string;
  onHide: () => any;
}
