import { useState, useEffect } from "react";

const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    appointments: [
      {
        id: "a1",
        date: "2024-07-21",
        time: "10:00 AM",
        details: "Initial consultation",
      },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    appointments: [
      {
        id: "a2",
        date: "2024-07-22",
        time: "11:00 AM",
        details: "Follow-up checkup",
      },
    ],
  },
];

const mockStats = {
  bookedCount: 5,
  casesheetsFilledCount: 3,
};

const mockCaseSheets = [
  {
    id: "sheet1",
    title: "Case Sheet 1",
    details: "Detailed info about case sheet 1",
  },
  {
    id: "sheet2",
    title: "Case Sheet 2",
    details: "Detailed info about case sheet 2",
  },
];

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    bookedCount: 0,
    casesheetsFilledCount: 0,
  });
  const [caseSheets, setCaseSheets] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCaseSheet, setSelectedCaseSheet] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setUsers(mockUsers);
    setStats(mockStats);
    setCaseSheets(mockCaseSheets);
  }, []);

  const downloadCaseSheet = (id) => {
    // Simulate downloading a case sheet
    alert(`Download link for case sheet ID ${id}`);
  };

  const handleViewAppointments = (user) => {
    setSelectedUser(user);
  };

  const handleViewCaseSheet = (caseSheet) => {
    setSelectedCaseSheet(caseSheet);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setSelectedCaseSheet(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <h2 className="text-xl font-semibold mb-2">User Details</h2>
      <ul className="mb-6">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> - {user.email}
            <button
              onClick={() => handleViewAppointments(user)}
              className="ml-4 bg-blue-500 text-white p-1 rounded"
            >
              View Appointments
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Statistics</h2>
      <p>Appointments Booked: {stats.bookedCount}</p>
      <p>Case Sheets Filled: {stats.casesheetsFilledCount}</p>

      <h2 className="text-xl font-semibold mb-2">Case Sheets</h2>
      <ul>
        {caseSheets.map((sheet) => (
          <li key={sheet.id} className="mb-2">
            <button
              onClick={() => handleViewCaseSheet(sheet)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              View {sheet.title}
            </button>
            <button
              onClick={() => downloadCaseSheet(sheet.id)}
              className="ml-4 bg-green-500 text-white p-2 rounded"
            >
              Download
            </button>
          </li>
        ))}
      </ul>

      {/* Modal for viewing appointments */}
      {selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              Appointments for {selectedUser.name}
            </h2>
            <ul>
              {selectedUser.appointments.map((appointment) => (
                <li key={appointment.id} className="mb-4">
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                  <p>
                    <strong>Details:</strong> {appointment.details}
                  </p>
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for viewing case sheet details */}
      {selectedCaseSheet && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              {selectedCaseSheet.title}
            </h2>
            <p>{selectedCaseSheet.details}</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
