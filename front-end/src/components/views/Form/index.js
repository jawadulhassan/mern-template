import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Col,
  Form,
  Alert,
  Modal,
  Button,
  FormGroup,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import TextInput from "../../widgets/TextInput";

function AddForm(props) {
  const { displayModal, toggleModal, getListData } = props;
  const { handleSubmit, register, errors } = useForm();

  const [isError, setIsError] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values) {
    setIsSubmitting(true);
    const response = await axios.post("/api/seasons", values);
    if (response.status === 200 || response.status === 201) {
      setIsPosted(true);
      setIsError(false);
      setIsSubmitting(false);
      getListData();
    } else {
      setIsError(true);
      setIsSubmitting(false);
    }
  }

  return (
    <Modal isOpen={displayModal}>
      <ModalHeader>Add Item</ModalHeader>
      <ModalBody>
        <Form>
          <Col xs="12" sm="12">
            {!!isError && (
              <Alert color="danger">Could not add the information.</Alert>
            )}
            {!!isPosted && (
              <Alert color="success">Information added successfully</Alert>
            )}
            <FormGroup row className="my-0">
              <Col xs="6">
                <TextInput
                  label="Title"
                  name="title"
                  placeholder="Enter Title"
                  invalid={errors.title}
                  {...{ register }}
                />
              </Col>
              <Col xs="6">
                <TextInput
                  label="Progress"
                  name="progress"
                  maxLength={12}
                  placeholder="Enter progress"
                  invalid={errors.progress}
                  {...{ register }}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="my-0">
              <Col xs="12">
                <TextInput
                  label="URL"
                  name="url"
                  placeholder="Enter url"
                  invalid={errors.url}
                  {...{ register }}
                />
              </Col>
            </FormGroup>
          </Col>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          type="submit"
          color="info"
          disabled={!!isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {!isSubmitting ? "Save changes" : "Saving..."}
        </Button>

        <Button
          color="secondary"
          onClick={toggleModal}
          disabled={!!isSubmitting}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddForm;
