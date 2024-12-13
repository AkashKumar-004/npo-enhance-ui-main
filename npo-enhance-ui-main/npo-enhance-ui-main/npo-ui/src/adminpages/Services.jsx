import React, { useEffect, useRef, useState } from "react";
import {
  addservice,
  deleteservice,
  getservice,
  updateservice,
} from "../api/Api";

const ServiceForm = ({
  onSubmit,
  onClose,
  initialData = {},
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    location: initialData.location || "",
    contact: initialData.contact || "",
    description: initialData.description || "",
    image: initialData.image || "",
    duration: initialData.duration || "",
    impact: initialData.impact || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
        <h2 className="text-xl font-bold mb-4">
          {initialData._id ? "Edit Service" : "Add Service"}
        </h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label
                className="block text-sm font-semibold mb-2 capitalize"
              >
                {key}
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const fetchServices = async () => {
    try {
      const { data } = await getservice();
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async (newService) => {
    try {
      await addservice(newService);
      fetchServices();
      setFormVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditService = async (updatedService) => {
    try {
      await updateservice(editingService._id, updatedService);
      fetchServices();
      setEditingService(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteService = async (id) => {
    try {
      await deleteservice(id);
      fetchServices();
    } catch (error) {
      console.error(error);
    }
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
        <ServiceForm
          onSubmit={handleAddService}
          onClose={() => setFormVisible(false)}
        />
      )}

      {editingService && (
        <ServiceForm
          initialData={editingService}
          onSubmit={handleEditService}
          onClose={() => setEditingService(null)}
        />
      )}

      {/* Main Content */}
      <div className="flex-grow p-4 flex flex-wrap gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3 flex-shrink-0"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{service.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> {service.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Contact:</strong> {service.contact}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Duration:</strong> {service.duration}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Impact:</strong> {service.impact}
              </p>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Fund
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingService(service)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteService(service._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
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
