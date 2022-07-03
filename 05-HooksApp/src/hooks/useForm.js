import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const HandleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const HandleReset = ({ target }) => {
    setFormState(initialForm);
  };

  return { ...formState, formState, HandleInputChange, HandleReset };
};
