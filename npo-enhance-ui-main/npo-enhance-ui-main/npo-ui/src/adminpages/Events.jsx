import React, { useState, useEffect } from "react";
import { addevent, deleteevent, getevent, updateevent } from "../api/Api";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // For editing
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  // Fetch events from the API
  const provider = async () => {
    try {
      const { data } = await getevent();
      console.log("Fetched Events:", data);
      setEvents(data.map(event => ({ ...event, id: event._id }))); // Map _id to id
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    provider();
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      const { data } = await addevent(newEvent);
      setEvents((prevEvents) => [...prevEvents, { ...data, id: data._id }]);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleEditEvent = async (updatedEvent) => {
    try {
      await updateevent(updatedEvent.id, updatedEvent);
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
      setSelectedEvent(null);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteevent(eventId)
      provider()
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedEvent) {
      handleEditEvent({ ...selectedEvent, ...formData });
    } else {
      handleAddEvent({ ...formData });
    }
    setFormData({ name: "", date: "", location: "", description: "" });
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Add/Edit Event Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {selectedEvent ? "Edit Event" : "Add New Event"}
        </h2>
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
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Event Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
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
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-500">{event.location}</p>
            <p className="mt-4 text-gray-700">{event.description}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => {
                  setSelectedEvent(event);
                  setFormData(event);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteEvent(event.id)}
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
