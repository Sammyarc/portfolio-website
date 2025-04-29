import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
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
        setIsSending(false);
      } else {
        setError("Failed to send your message. Please try again later.");
        setSuccess("");
        setIsSending(false);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send your message. Please try again later.");
      setSuccess("");
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-[5vw] mt-[6vw] md:mt-[8vw]">
      <p className="text-[8vw] text-left text-white font-Poppins mb-3 md:text-[2.5vw] md:text-center">
        Feel free to reach out for collaborations or inquiries!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-[90vw] mt-[5vw] md:mt-[1vw] md:w-[40vw]"
      >
        {/* Full Name */}
        <div className="mb-6">
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
        </div>

        {/* Email */}
        <div className="mb-6">
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
        </div>

        {/* Message */}
        <div className="mb-6">
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
          ></textarea>
        </div>

        {error && (
          <p className="text-red-500 text-[3.8vw] font-Poppins mb-4 md:text-[1vw]">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-[3.8vw] font-Poppins mb-4 md:text-[1vw]">
            {success}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={
            !formData.fullName ||
            !formData.email ||
            !formData.message ||
            isSending
          }
          className={`w-full bg-green-700 text-white font-Poppins h-[13vw] rounded-lg text-[4.5vw] border border-gray-700 flex justify-center items-center space-x-[0.5vw] font-semibold
    md:text-[1vw] md:w-[12vw] md:h-[3vw] md:rounded-md
    ${
      !formData.fullName || !formData.email || !formData.message || isSending
        ? "opacity-50 cursor-not-allowed"
        : ""
    }`}
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
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
