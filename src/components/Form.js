import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={formData.lastName}
      />
    </form>
  );
}

export default Form;
