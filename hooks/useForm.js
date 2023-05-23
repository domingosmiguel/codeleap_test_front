import { useState } from 'react';

export default function useForm(initialValue) {
  const [form, setForm] = useState(initialValue);

  const updateForm = (event) => {
    const target = event.target;
    if (typeof target.name === 'string') {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const clearForm = () => {
    setForm(initialValue);
  };

  return [form, updateForm, clearForm];
}
