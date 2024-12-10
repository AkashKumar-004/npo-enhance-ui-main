import React, { useState } from "react";

const ServicePage = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Education Program",
      location: "District A, State B, 123456",
      contact: "education@service.com",
      description: "Providing educational resources to underprivileged children.",
      image: "https://via.placeholder.com/150",
      duration: "6 months",
      impact: "100+ children educated",
    },
    {
      id: 2,
      name: "Health Camp",
      location: "District C, State D, 654321",
      contact: "health@service.com",
      description: "Organizing free health check-ups and awareness programs.",
      image: "https://via.placeholder.com/150",
      duration: "1 month",
      impact: "500+ people benefited",
    },
  ]);

  const [isFormVisible, setFormVisible] = useState(false);
  const [newService, setNewService] = useState({
    name: "",
    location: "",
    contact: "",
    description: "",
    image: "",
    duration: "",
    impact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !newService.name ||
      !newService.location ||
      !newService.contact ||
      !newService.description ||
      !newService.duration ||
      !newService.impact
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newServiceData = {
      ...newService,
      id: services.length + 1, // Auto-generate new ID
    };

    setServices([...services, newServiceData]);
    setFormVisible(false); // Close the form after submitting
    setNewService({
      name: "",
      location: "",
      contact: "",
      description: "",
      image: "",
      duration: "",
      impact: "",
    });
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Services Management</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => setFormVisible(true)}
        >
          + Add Service
        </button>
      </div>

      {/* Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
            <h2 className="text-xl font-bold mb-4">Add Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Service Name</label>
                <input
                  type="text"
                  name="name"
                  value={newService.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newService.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Contact</label>
                <input
                  type="email"
                  name="contact"
                  value={newService.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={newService.duration}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Impact</label>
                <input
                  type="text"
                  name="impact"
                  value={newService.impact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow p-4 flex flex-wrap gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover"
            />
            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{service.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> {service.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Contact:</strong> {service.contact}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>History:</strong> {service.duration}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Impact:</strong> {service.impact}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Fund
                </button>
                <div className="flex gap-2">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
