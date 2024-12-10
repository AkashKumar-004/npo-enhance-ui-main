import React, { useState, useEffect } from "react";

const EventPage = () => {
  // Static events data for now
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Health Camp",
      date: "2024-12-15",
      location: "New York",
      description: "Free health checkup and consultations",
    },
    {
      id: 2,
      name: "Food Distribution",
      date: "2024-12-20",
      location: "Los Angeles",
      description: "Distributing food to the needy",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null); // For editing
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  // If an event is selected for editing, prefill the form
  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        name: selectedEvent.name,
        date: selectedEvent.date,
        location: selectedEvent.location,
        description: selectedEvent.description,
      });
    }
  }, [selectedEvent]);

  // Function to handle adding a new event
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Function to handle deleting an event
  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  // Function to handle editing an event
  const handleEditEvent = (updatedEvent) => {
    setEvents(events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    ));
    setSelectedEvent(null); // Clear selected event after editing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedEvent) {
      // If editing, pass the updated event
      handleEditEvent({ ...selectedEvent, ...formData });
    } else {
      // If adding, generate a new ID and add the event
      const newEvent = { id: Date.now(), ...formData };
      handleAddEvent(newEvent);
    }

    // Reset form
    setFormData({
      name: "",
      date: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Add/Edit Event Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{selectedEvent ? "Edit Event" : "Add New Event"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Event Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {selectedEvent ? "Update Event" : "Add Event"}
          </button>
        </form>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-500">{event.location}</p>
            <p className="mt-4 text-gray-700">{event.description}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setSelectedEvent(event)} // Set event to edit
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteEvent(event.id)} // Delete event
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
