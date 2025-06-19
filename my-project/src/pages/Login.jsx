
// File: src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

const Login = () => {
  const { setUserData, appliedCompany, decreaseRequirement, addSubmittedForm } = useAppContext();
  const [form, setForm] = useState({ name: '', age: '', skill: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = parseInt(form.age);
    const [minAge, maxAge] = appliedCompany.ageLimit.split('-').map(Number);
    if (isNaN(age) || age < minAge || age > maxAge) {
      alert(`You are not eligible for jobs. Age must be between ${minAge} and ${maxAge}.`);
      return;
    }

    setUserData(form);
    addSubmittedForm({ ...form, company: appliedCompany.name });
    if (appliedCompany && appliedCompany.requirement > 0) {
      decreaseRequirement(appliedCompany.id);
    }
    navigate('/dashboard');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Apply Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" className="w-full border p-2" onChange={handleChange} required />
        <input name="age" placeholder="Age" className="w-full border p-2" onChange={handleChange} required />
        <input name="skill" placeholder="Skill" className="w-full border p-2" onChange={handleChange} required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Login;

