import React, { useState } from "react";

import Form from "../../views/Form";
import Card from "../../widgets/Card";
import AddNew from "../../widgets/Add";

function Body(props) {
  const { data = [], getListData } = props;
  const [displayModal, setDisplayModal] = useState(false);
  const toggleModal = () => setDisplayModal(!displayModal);

  return (
    <div className="body-wrapper row">
      {data.map((item, index) => (
        <div key={index}>
          <Card {...{ item }} />
        </div>
      ))}
      <Card />

      <div onClick={toggleModal}>
        <AddNew />
      </div>

      {!!displayModal && (
        <Form {...{ displayModal, toggleModal, getListData }} />
      )}
    </div>
  );
}

export default Body;
