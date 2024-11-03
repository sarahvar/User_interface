import React, { useState } from 'react';

// Define the Ticket interface
interface Ticket {
  date: string; // ISO date string
  title: string;
  amount: number;
}

// Main App component
const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Function to add or update a ticket
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for duplicate date
    if (tickets.some(ticket => ticket.date === date)) {
      alert('A ticket with this date already exists.');
      return;
    }

    const newTicket: Ticket = { date, title, amount: Number(amount) };

    if (editingIndex !== null) {
      // Update existing ticket
      const updatedTickets = [...tickets];
      updatedTickets[editingIndex] = newTicket;
      setTickets(updatedTickets);
    } else {
      // Add new ticket
      setTickets([...tickets, newTicket]);
    }

    // Reset form
    resetForm();
  };

  // Function to reset the form
  const resetForm = () => {
    setDate('');
    setTitle('');
    setAmount('');
    setEditingIndex(null);
  };

  // Function to start editing a ticket
  const handleEdit = (index: number) => {
    const ticket = tickets[index];
    setDate(ticket.date);
    setTitle(ticket.title);
    setAmount(ticket.amount);
    setEditingIndex(index);
  };

  // Function to delete a ticket
  const handleDelete = (index: number) => {
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
  };

  // Function to calculate total per month
  const calculateMonthlyTotal = () => {
    const monthlyTotals: { [key: string]: number } = {};

    tickets.forEach(ticket => {
      const month = ticket.date.slice(0, 7); // Extract YYYY-MM
      monthlyTotals[month] = (monthlyTotals[month] || 0) + ticket.amount;
    });

    return monthlyTotals;
  };

  // Calculate total amount of all tickets
  const totalAmount = tickets.reduce((sum, ticket) => sum + ticket.amount, 0);

  return (
    <div>
      <h1>Cash Register Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Add'} Ticket</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>

      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <strong>{ticket.date}</strong> - {ticket.title}: ${ticket.amount.toFixed(2)}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Monthly Totals</h2>
      <ul>
        {Object.entries(calculateMonthlyTotal()).map(([month, total]) => (
          <li key={month}>
            {month}: ${total.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Total Amount</h2>
      <p>${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default App;
