import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const FAQs = () => {
  // FAQ data structured for both display and schema markup
  const faqData = [
    {
      question: "What services does Radiant Dental Clinic offer?",
      answer: "Radiant Dental Clinic offers a wide range of dental services, including preventative care, virtual consultations, cleanings, fillings, root canals, extractions, and more. Our experienced team is dedicated to providing exceptional oral health care to our patients.",
      isOpen: true
    },
    {
      question: "Do I really need a doctor to extract my own teeth?",
      answer: "It's important to note that extracting a tooth without professional guidance can have serious consequences. Tooth buds are immature teeth developing beneath the gums, and removing them improperly can cause long-term oral health issues. Some potential risks include: misalignment of teeth, impacted teeth, bite problems, and psychological impact. Always consult a dental professional for safe and evidence-based care.",
      isOpen: false
    },
    {
      question: "How do I schedule an appointment at Radiant?",
      answer: "You can schedule an appointment at Radiant Dental Clinic by filling out the online booking form below. In addition to our online system, you can also call us. We offer flexible scheduling options to accommodate your needs.",
      isOpen: false
    }
  ];

  // Structured data for FAQ page
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="bg-white pb-7 text-slate-900" id="faqs">
      <Helmet>
        <title>Radiant Dental & Orthodontic Centre | Creating Brighter Smiles</title>
        <meta name="description" content="Find answers to common questions about dental services, procedures, and appointments at Radiant Dental & Orthodontic Centre in Nairobi, Kenya." />
        <meta name="keywords" content="dental FAQs, dental questions, tooth extraction, dental appointments, Nairobi dentist" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>
      
      <div className="container flex flex-col justify-center p-3 mx-auto md:p-8">
        <motion.h2
          className="mb-10 mt-10 text-3xl font-bold leading-none text-center sm:mx-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col divide-y divide-gray-300 sm:mx-12 lg:px-12 xl:px-32 mb-10">
          {faqData.map((faq, index) => (
            <motion.details
              key={index}
              open={faq.isOpen}
              className="group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                {faq.question}
              </summary>
              <div className="px-4 pb-4">
                {faq.answer.includes("potential risks") ? (
                  <>
                    <p className="px-4 pb-4">
                      It's important to note that extracting a tooth without professional guidance
                      can have serious consequences. Tooth buds are immature teeth developing beneath
                      the gums, and removing them improperly can cause long-term oral health issues.
                    </p>
                    <p className="px-4 pb-4">
                      Some potential risks include:
                      <ul className="list-disc pl-6">
                        <li>Misalignment of teeth</li>
                        <li>Impacted teeth</li>
                        <li>Bite problems</li>
                        <li>Psychological impact</li>
                      </ul>
                      Always consult a dental professional for safe and evidence-based care.
                    </p>
                  </>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;