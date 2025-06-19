
// File: src/pages/CompanyList.jsx
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CompanyList = () => {
  const navigate = useNavigate();
  const { companies, setAppliedCompany } = useAppContext();

  const handleApply = (company) => {
    setAppliedCompany(company);
    navigate('/login');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Companies Hiring</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((comp) => (
          <div key={comp.id} className="border p-4 rounded shadow">
            <img src={comp.image} alt={comp.name} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{comp.name}</h3>
            <p>City: {comp.city}</p>
            <p>Age Limit: {comp.ageLimit}</p>
            <p>Salary: ₹{comp.salary}</p>
            <p className="font-semibold">
              {comp.requirement === 0
                ? 'No Labour Required'
                : `Required: ${comp.requirement} people`}
            </p>
            <button
              onClick={() => handleApply(comp)}
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded disabled:bg-gray-400"
              disabled={comp.requirement === 0}
            >
              {comp.requirement === 0 ? 'Closed' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
