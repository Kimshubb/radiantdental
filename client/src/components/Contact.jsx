import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Clear error message after 8 seconds
  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const userTemplateId = "template_ilfy2wt";
    const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;

    console.log("Sending email with:", { serviceId, userTemplateId, adminTemplateId, publicKey });
  
    // Prevent sending if any key is missing
    if (!serviceId || !userTemplateId || !adminTemplateId || !publicKey) {
      console.error("Missing EmailJS credentials!");
      setError("Email service is temporarily unavailable. Please try again later.");
      setIsLoading(false);
      return;
    }
  
    //console.log("Sending email with:", { serviceId, userTemplateId, adminTemplateId, publicKey });
  
    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData.entries());
    const adminEmail = "radiantdental7@gmail.com";
  
    Promise.all([
      emailjs.send(serviceId, userTemplateId, { ...formValues, recipient_email: formValues.user_email }, publicKey),
      emailjs.send(serviceId, adminTemplateId, { ...formValues, recipient_email: adminEmail }, publicKey),
    ])
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error.text);
        setError("An error occurred. Please try again later.");
        setIsLoading(false);
      });
  };
  
  
  return (
    <div className="max-w-screen-lg mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-12 border rounded-md">
        <div className="bg-slate-100 md:col-span-4 p-7 text-gray-900">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-[#3b82f6]">Touch</span>
          </h3>
          <p className="mt-4 leading-6 text-gray-950">
            Book an appointment with our doctors, Our team is ready and waiting
            to serve you.
          </p>

          <p className="my-4 uppercase font-semibold border-b border-b-black pb-2">
            Clinic Hours
          </p>
          <p className="font-normal">
            Monday - Friday:{" "}
            <span className="font-semibold">8:00 AM - 6:00 PM</span>
          </p>
          <p className="font-normal">
            Saturday: <span className="font-semibold">8:00 AM- 4:00 PM</span>
          </p>
          <p className="mb-8">
            {" "}
            Sunday :<span className="font-semibold"> 8:00 AM - 1:00 PM</span>
          </p>

          <p className="mt-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+254718917240</span>
            <a
              href="https://wa.me/254718917240"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#25D366"
                className="w-5 h-5"
              >
                <path d="M12.003 2C6.477 2 2 6.477 2 12c0 1.79.472 3.45 1.292 4.897L2 22l5.18-1.275A9.94 9.94 0 0012.003 22c5.523 0 10-4.477 10-10S17.526 2 12.003 2zm0 18a7.943 7.943 0 01-4.058-1.116l-.29-.174-3.07.76.755-2.987-.19-.303A7.95 7.95 0 014.003 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.48-5.57c-.243-.124-1.44-.711-1.664-.79-.224-.083-.388-.125-.552.124-.165.248-.632.79-.776.954-.143.165-.287.186-.53.062-.242-.124-1.022-.375-1.946-1.196-.72-.64-1.206-1.428-1.347-1.67-.143-.248-.016-.381.108-.505.11-.11.243-.287.365-.43.124-.143.165-.248.248-.413.082-.165.041-.31-.021-.434-.062-.124-.552-1.33-.758-1.824-.2-.476-.403-.412-.552-.42-.142-.006-.31-.007-.476-.007a.91.91 0 00-.66.31c-.226.248-.865.846-.865 2.062s.886 2.391 1.009 2.556c.124.165 1.743 2.66 4.226 3.731.59.254 1.05.406 1.41.52.592.187 1.13.16 1.556.097.474-.07 1.44-.588 1.642-1.155.203-.567.203-1.052.142-1.155-.062-.103-.226-.165-.47-.287z" />
              </svg>
            </a>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>info@radiantdental.co.ke</span>
          </p>

          <p className="flex items-center gap-2 sm:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Room 246, Jubilee Exchange House, Mama Ngina Street</span>
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:col-span-8 px-10 pt-4 pb-3"
        >
          <div className="mb-3" name="contact" id="contact">
            <label
              htmlFor="user_name"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_phone"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_email"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
          </div>

          <div className="-mx-0 mb-3">
            <label
              htmlFor="chosen_service"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Dental Services
            </label>
            <select
              name="chosen_service"
              id="chosen_service"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="checkup_Consultation">
                Dental Check-ups and Consultation
              </option>
              <option value="x-rays">X-rays</option>
              <option value="fillings">Fillings</option>
              <option value="crowns_Bridges">Crowns and Bridges</option>
              <option value="RCT">Root Canal Treatment</option>
              <option value="teethWhitening">
                Cleaning and Teeth Whitening
              </option>
              <option value="orthodontic">Orthodontic Treatment</option>
              <option value="periodontal">Periodontal Treatment</option>
              <option value="dentalImplants">Dental Implants</option>
            </select>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_date"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="user_date"
                  id="user_date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_time"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="user_time"
                  id="user_time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
          </div>

          <div className="w-full mb-3">
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              htmlFor="user_message"
            >
              Doctor Note
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows="2"
              className="resize-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div className="mt-4">
            <Fade>
              <button
                type="submit"
                value="Send"
                className="hover:shadow-form hover:opacity-90 w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                disabled={isLoading}
              >
                {isLoading ? "Booking..." : "Book Appointment"}
              </button>
            </Fade>
            {isSent && (
              <p className="text-green-500 mt-1 text-center">
                Appointment received successfully, Thank you!
              </p>
            )}
            {error && <p className="text-red-500 mt-1 text-center">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;