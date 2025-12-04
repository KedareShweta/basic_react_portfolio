import React, { useState } from 'react';
// import emailjs from 'emailjs-com';//old
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.send(
        // 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'service_fx8o70k',

        // 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        'template_vj6ypwa',
        {
          to_email: 'kedareshweta9696@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          contact: formData.contact,
          message: formData.message
        },
        //'YOUR_USER_ID' // Replace with your EmailJS user ID(public key)
        'Ggrxm8YUnrfBf2Jrj'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', contact: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you want to work together!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-4">📧</span>
                <span>kedareshweta9696@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  document.documentElement.classList.contains('dark')
                    ? 'bg-gray-800 border-gray-700 focus:ring-dark-primary' 
                    : 'bg-white border-gray-300 focus:ring-light-primary'
                }`}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  document.documentElement.classList.contains('dark')
                    ? 'bg-gray-800 border-gray-700 focus:ring-dark-primary' 
                    : 'bg-white border-gray-300 focus:ring-light-primary'
                }`}
              />
            </div>

            <div>
              <label htmlFor="contact" className="block mb-2 font-medium">Contact Details</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  document.documentElement.classList.contains('dark')
                    ? 'bg-gray-800 border-gray-700 focus:ring-dark-primary' 
                    : 'bg-white border-gray-300 focus:ring-light-primary'
                }`}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  document.documentElement.classList.contains('dark')
                    ? 'bg-gray-800 border-gray-700 focus:ring-dark-primary' 
                    : 'bg-white border-gray-300 focus:ring-light-primary'
                }`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:scale-105'
              } ${
                document.documentElement.classList.contains('dark')
                  ? 'bg-dark-primary text-black' 
                  : 'bg-light-primary text-white'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;