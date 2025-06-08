import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Handle form submission here
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="contact" id="contact">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-description">
                Ready to build something incredible together? Let's talk!
            </p>
            <div className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
          <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
          />
                </div>
                <button onClick={handleSubmit} className="submit-button">
                    Send Message
                </button>
            </div>
        </section>
    );
};