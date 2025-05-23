import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 8px rgb(34 197 94)" },
  tap: { scale: 0.95 },
};

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setError("");
    setSuccess("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");
    setIsSending(true);

    try {
      const result = await emailjs.send(
        "service_kfc0rea",
        "template_vkrjlmj",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        "Q7PkEp8vlPXsFnhkX"
      );

      if (result.status === 200) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setError("Failed to send your message. Please try again later.");
        setSuccess("");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send your message. Please try again later.");
      setSuccess("");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-[5vw] mt-[6vw] md:mt-[8vw]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        className="text-[8vw] text-left text-white font-Poppins mb-3 md:text-[2.5vw] md:text-center"
        variants={itemVariants}
      >
        Feel free to reach out for collaborations or inquiries!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-[90vw] mt-[5vw] md:mt-[1vw] md:w-[40vw]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Full Name */}
        <motion.div className="mb-6" variants={itemVariants}>
          <label
            htmlFor="fullName"
            className="block text-[4.5vw] font-Poppins font-semibold text-white mb-2 md:text-[1.2vw]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            className="w-full p-[2.5vw] text-[4vw] border border-gray-400 bg-transparent text-white font-Poppins rounded-md text-sm focus:border-green-300 hover:border-green-300 outline-none md:p-[1vw] md:text-[1vw]"
          />
        </motion.div>

        {/* Email */}
        <motion.div className="mb-6" variants={itemVariants}>
          <label
            htmlFor="email"
            className="block text-[4.5vw] font-Poppins font-semibold text-white mb-2 md:text-[1.2vw]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
            className="w-full p-[2.5vw] text-[4vw] border border-gray-400 bg-transparent text-white font-Poppins rounded-md text-sm focus:border-green-300 hover:border-green-300 outline-none md:p-[1vw] md:text-[1vw]"
          />
        </motion.div>

        {/* Message */}
        <motion.div className="mb-6" variants={itemVariants}>
          <label
            htmlFor="message"
            className="block text-[4.5vw] font-Poppins font-semibold text-white mb-2 md:text-[1.2vw]"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            className="w-full p-[2.5vw] text-[4vw] border border-gray-400 bg-transparent text-white font-Poppins rounded-md text-sm focus:border-green-300 hover:border-green-300 outline-none md:p-[1vw] md:text-[1vw]"
            rows="5"
          />
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.p
              key="error"
              className="text-red-500 text-[3.8vw] font-Poppins mb-4 md:text-[1vw]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {error}
            </motion.p>
          )}
          {success && (
            <motion.p
              key="success"
              className="text-green-500 text-[3.8vw] font-Poppins mb-4 md:text-[1vw]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          aria-busy={isSending}
          aria-disabled={
            !formData.fullName || !formData.email || !formData.message || isSending
          }
          className={`w-full bg-green-700 text-white font-Poppins h-[13vw] rounded-lg text-[4.5vw] border border-gray-700 flex justify-center items-center space-x-[0.5vw] font-semibold
            md:text-[1vw] md:w-[12vw] md:h-[3vw] md:rounded-md
            ${!formData.fullName || !formData.email || !formData.message || isSending
              ? "opacity-50 cursor-not-allowed"
              : ""
            }`}
          variants={itemVariants}
          whileHover={!isSending ? "hover" : ""}
          whileTap={!isSending ? "tap" : ""}
          disabled={!formData.fullName || !formData.email || !formData.message || isSending}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          {...buttonVariants}
        >
          {isSending ? (
            <>
              <p>Sending...</p>
              <svg
                className="animate-spin w-[7vw] h-[7vw] md:w-[1.5vw] md:h-[1.5vw]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                />
              </svg>
            </>
          ) : (
            <>
              <p>Send Message</p>
              <FiSend className="w-[7vw] h-[7vw] rotate-45 md:w-[1.5vw] md:h-[1.5vw]" />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactMe;
