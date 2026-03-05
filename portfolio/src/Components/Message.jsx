import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://portfolio-backend-xyz.onrender.com/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent to Balaji C", { theme: "dark" });
        setFormData({ fullName: '', email: '', message: '' }); // Clear form
        setTimeout(() => onClose(), 2000);
      } else {
        throw new Error("Failed to save message");
      }
    } catch (error) {
      toast.error("Server Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto bg-black/20 backdrop-blur-sm">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative bg-gray-900 border border-green-500/30 w-full max-w-2xl rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-green-500">
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Get in <span className="text-green-500">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            required
            type="text"
            placeholder="Full Name"
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-green-500 outline-none"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-green-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea
            required
            rows="6"
            placeholder="Your Message"
            className="bg-black/40 border border-gray-700 text-white p-4 rounded-xl focus:border-green-500 outline-none resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 hover:bg-green-500 text-black font-black py-4 rounded-xl uppercase tracking-widest transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Message;
