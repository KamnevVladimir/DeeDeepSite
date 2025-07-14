import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Form submitted:', formData); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section, Contact Form, Contact Info, FAQ, CTA — полный код секций перенести из app/contact/page.tsx */}
    </div>
  );
} 