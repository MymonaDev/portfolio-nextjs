"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { DrawUnderlineText } from "./shared/DrawUnderlineText";

const contactInfo = {
  email: "mahbubdev24@gmail.com",
  phone: "+88 01881605088",
  location: "Cumilla, Bangladesh",
  social: {
    linkedin: "https://linkedin.com/in/your-linkedin",
    github: "https://github.com/KaziMahbuburRahman",
    portfolio: "https://mahbub.techhelpbd.com",
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    mail_subject: "Contact Form Submission",
    message: "",
  });
  const [pending, setPending] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isSuccess: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        // Reset form data
        setFormData({
          from_name: "",
          user_email: "",
          mail_subject: "Contact Form Submission",
          message: "",
        });

        // Show success notification
        setNotification({
          show: true,
          message: "Email sent successfully!",
          isSuccess: true,
        });
      } else {
        // Show error notification
        setNotification({
          show: true,
          message: "Error sending email. Please try again.",
          isSuccess: false,
        });
      }
    } catch {
      // Show error notification for exception
      setNotification({
        show: true,
        message: "Something went wrong. Please try again later.",
        isSuccess: false,
      });
    } finally {
      setPending(false);

      // Hide notification after 3 seconds
      setTimeout(
        () => setNotification({ show: false, message: "", isSuccess: true }),
        3000,
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 mb-28 sm:mb-40 py-16">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="text-3xl font-medium capitalize mb-8 text-center"
      >
        <DrawUnderlineText text="Get in Touch" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {/* Contact Information Column */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="shadow-[0_0.5rem_1.875rem_rgb(0,0,0,0.12)] dark:bg-gray-800 p-6 rounded-lg backdrop-blur-sm bg-white/60"
        >
          <h3 className="text-xl font-medium mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#0fabca]" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-[#0fabca] transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#0fabca]" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-[#0fabca] transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0fabca]" />
              <span>{contactInfo.location}</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={contactInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0fabca] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0fabca] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="shadow-[0_0.5rem_1.875rem_rgb(0,0,0,0.12)] dark:bg-gray-800 p-6 rounded-lg relative backdrop-blur-sm bg-white/60"
        >
          {/* Simple notification */}
          {notification.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-2 right-2 left-2 p-3 rounded-md ${
                notification.isSuccess
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {notification.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.from_name}
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#0fabca] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.user_email}
                onChange={(e) =>
                  setFormData({ ...formData, user_email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#0fabca] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={pending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-2 px-4 rounded-md text-white font-medium transition-all duration-200 ${
                pending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0fabca] hover:bg-[#0d9bb8]"
              }`}
            >
              {pending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
