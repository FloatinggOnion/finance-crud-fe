import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Table from "./components/Table";

import api from "./api-client";
import { FieldValues } from "react-hook-form";


const App = () => {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await api.get("/transactions/");
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);


  const handleFormSubmit = async (formData: FieldValues) => {
    // event.preventDefault();
    await api.post("/transactions/", formData);
    fetchTransactions();
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/transactions/${id}`);
    fetchTransactions();
  }

  return (
    <div className="text-text">
      <NavBar />
      <Form
        onSubmit={(data) => {
          handleFormSubmit(data);
          console.log(data);
        }}
      />
      <Table transactions={transactions} onDelete={handleDelete} />
    </div>
  );
};

export default App;
