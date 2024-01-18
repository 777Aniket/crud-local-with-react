import { useState } from "react";

const useForm = (initialState = {}) => {
  const [input, setInput] = useState(initialState);

  const resetForm = () => {
    setInput(initialState);
  };
  //  const handlerInputChange=({target})=>{
  //     setInput({
  //         ...input,[target.name] : target.value
  //     })
  //  }

  const handlerInputChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const setForm = (newValues) => {
    setInput(newValues);
  };
  return {
    input,
    handlerInputChange,
    resetForm,
    setForm,
  };
};

export default useForm;
