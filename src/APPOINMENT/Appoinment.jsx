import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [minDate, setMinDate] = useState('');

  // Set today's date as the minimum selectable date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format date to yyyy-mm-dd
    setMinDate(formattedDate);
  }, []);

  // Validation for name field
  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/; // Allows only alphabetic characters and spaces
    if (name.length < 4) {
      Swal.fire('Error', 'Name must be more than 3 characters', 'error');
      return false;
    }
    if (!namePattern.test(name)) {
      Swal.fire('Error', 'Invalid name', 'error');
      return false;
    }
    return true;
  };

  // Phone number validation
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  // Handle changes in input fields, with validation for the name field
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate name input on each change
    if (name === 'name') {
      const namePattern = /^[A-Za-z\s]+$/;
      if (!namePattern.test(value)) {
        Swal.fire('Error', 'Invalid name', 'error');
        return; // Prevent special characters from being added
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the name field
    if (!validateName(formData.name)) {
      return; // If validation fails, do not proceed with form submission
    }

    // Handle form submission (e.g., send data to backend or API)
    console.log('Form Data Submitted:', formData);
    Swal.fire('Success', 'Your appointment has been scheduled!', 'success');
  };

  return (
    <>
    
  <div className='mx-3'>
    <div className="h-[470px] border-blue-300 border rounded-md w-full lg:w-[600px] py-4 mx-auto text-white flex items-center justify-center my-10">
      <div className="p-8 rounded-lg w-full max-w-lg h-full overflow-y-auto">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Full Name <span className='text-[red] text-[18px]'>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address <span className='text-[red] text-[18px]'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone Number <span className='text-[red] text-[18px]'>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white">
              Select Service <span className='text-[red] text-[18px]'>*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Web Design & Development">Web Design & Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphix Design">Graphix Design</option>
              <option value="Software Quality Assurance">Software Quality Assurance</option>
              <option value="Search Engine Optimization">Search Engine Optimization</option>
              <option value="Video Editing">Video Editing</option>
            </select>
          </div>

          <div className="flex space-x-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-white">
                Appointment Date <span className='text-[red] text-[18px]'>*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={minDate} // Set the min date as today
                className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-white">
                Appointment Time <span className='text-[red] text-[18px]'>*</span>
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
                required
              >
                <option value="" disabled>Select a time</option>
                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                <option value="10:30 AM - 11:30 AM">10:30 AM - 11:30 AM</option>
                <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                <option value="03:30 PM - 04:30 PM">03:30 PM - 04:30 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full mt-1 p-2 focus:outline-none duration-500 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 text-black"
              placeholder="Any additional details or requests"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r hover:bg-gradient-to-l duration-500 to-blue-500 from-pink-500 text-white font-semibold rounded-lg"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  </div>
    
    </>
  );
};

export default Appointment;
