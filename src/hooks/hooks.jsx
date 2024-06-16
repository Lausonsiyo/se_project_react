import { useState, useRef } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const initialValuesRef = useRef(initialValues);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialValuesRef.current);
  };

  return { values, handleChange, setValues, resetForm };
}
