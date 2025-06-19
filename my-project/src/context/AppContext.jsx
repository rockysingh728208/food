import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const initialCompanies = [
  {
    id: 1,
    name: 'ABC Constructions',
    city: 'Delhi',
    image: '/company-images/delhi.jpg',
    ageLimit: '18-60',
    salary: 12000,
    requirement: 5,
  },
  {
    id: 2,
    name: 'XYZ Builders',
    city: 'Mumbai',
    image: '/company-images/mumbai.jpg',
    ageLimit: '18-60',
    salary: 15000,
    requirement: 3,
  },
];

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [appliedCompany, setAppliedCompany] = useState(null);
  const [companies, setCompanies] = useState(initialCompanies);
  const [submittedForms, setSubmittedForms] = useState([]);

  const decreaseRequirement = (companyId) => {
    setCompanies(prev =>
      prev.map(comp =>
        comp.id === companyId && comp.requirement > 0
          ? { ...comp, requirement: comp.requirement - 1 }
          : comp
      )
    );
  };

  const addSubmittedForm = (form) => {
    setSubmittedForms(prev => [...prev, form]);
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        appliedCompany,
        setAppliedCompany,
        companies,
        decreaseRequirement,
        submittedForms,
        addSubmittedForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
