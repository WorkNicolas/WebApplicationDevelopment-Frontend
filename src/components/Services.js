/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
 * @file Services.js
 * @date 2024-10-11
 * @description Contains common questions, services that the help desk website can offer, etc.
 * 
 * @returns {Services}
 */

//React
import React, { useState } from 'react';

const faqs = [
  { question: "How do I create a new ticket?", answer: "To create a new ticket, click on the 'Tickets' button on the dashboard and fill out the required details." },
  { question: "How can I check the status of my ticket?", answer: "Go to the 'Tickets' section, and you will see the current status of all your tickets." },
  { question: "What is the average response time for tickets?", answer: "The average response time is within 24 hours on business days." },
  { question: "Can I edit my ticket after submission?", answer: "Yes, you can edit your ticket before it is assigned to a technician." },
  { question: "How do I close a resolved ticket?", answer: "Once resolved, you can close the ticket by clicking the 'Close Ticket' button in the ticket details page." },
  { question: "What should I do if my issue is not resolved?", answer: "You can reopen the ticket or escalate it by selecting the 'Escalate' option." },
  { question: "Can I assign a ticket to a specific technician?", answer: "No, tickets are automatically assigned based on availability and expertise." },
  { question: "Why can't I log in to the system?", answer: "Ensure you are using the correct username and password. If the issue persists, reset your password or contact the administrator." },
  { question: "What are the priority levels for tickets?", answer: "Priority levels include Low, Medium, High, and Critical, which determine the urgency of your ticket." },
  { question: "What happens to tickets submitted outside business hours?", answer: "They are queued and will be addressed on the next business day." },
  { question: "Is there a limit to the number of tickets I can submit?", answer: "No, you can submit as many tickets as needed." },
  { question: "How do I request a new feature in the system?", answer: "Submit a ticket with subject 'Feature Request'." },
  { question: "Why was my ticket marked as 'Duplicate'?", answer: "Your ticket may have been identified as a duplicate of an existing ticket." },
  { question: "What happens if I accidentally delete a ticket?", answer: "No one can delete any ticket, however ticket status may changed to Cancelled. You may need to create a new ticket if necessary." },
];

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return (
        <><div className="panel">
                <h1>Frequently Asked Questions</h1>
            </div>
                <div className="panel-body">
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ marginBottom: "15px" }}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    background: "#f5f5f5",
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                }}
                            >
                                {`${index + 1}. ${faq.question}`}
                            </button>
                            {activeIndex === index && (
                                <div
                                    style={{
                                        padding: "10px",
                                        background: "#fff",
                                        border: "1px solid #ddd",
                                        borderTop: "none",
                                        borderRadius: "0 0 5px 5px",
                                        marginTop: "-1px",
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </>

    );
}

export default Services;
