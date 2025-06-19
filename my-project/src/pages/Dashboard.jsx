
// File: src/pages/Dashboard.jsx
import { useAppContext } from "../context/AppContext";

const Dashboard = () => {
  const { submittedForms } = useAppContext();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {submittedForms.length === 0 ? (
        <p>No labour has applied yet.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Skill</th>
              <th className="border px-4 py-2">Company</th>
            </tr>
          </thead>
          <tbody>
            {submittedForms.map((form, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{form.name}</td>
                <td className="border px-4 py-2">{form.age}</td>
                <td className="border px-4 py-2">{form.skill}</td>
                <td className="border px-4 py-2">{form.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
