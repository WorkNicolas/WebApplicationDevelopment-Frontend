/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/
import React, { useState } from 'react';

const announcements = [
    { 
        articleHeader: "New Feature: Dark Mode is Here!", 
        articleContent: "We’re excited to announce the launch of Dark Mode! Switch to a sleek, dark theme via your profile settings today.", 
        timestamp: "2024-11-20 10:00 AM" 
    },
    { 
        articleHeader: "Scheduled Maintenance Notification", 
        articleContent: "The system will be down for maintenance on Saturday, November 25th, from 1 AM to 5 AM EST. Please plan accordingly.", 
        timestamp: "2024-11-18 2:00 PM" 
    },
    { 
        articleHeader: "Introducing Priority Support for Premium Users", 
        articleContent: "Premium users can now enjoy faster response times with our new Priority Support feature. Upgrade your plan to take advantage!", 
        timestamp: "2024-11-15 9:00 AM" 
    },
    { 
        articleHeader: "Holiday Hours Update", 
        articleContent: "Our support team will be available with reduced hours during the holiday season, from December 24th to January 2nd.", 
        timestamp: "2024-11-12 4:00 PM" 
    },
    { 
        articleHeader: "Now Supporting Multiple Languages!", 
        articleContent: "You can now use the system in Spanish, French, and German. Update your language preference in your account settings.", 
        timestamp: "2024-11-10 8:30 AM" 
    },
    // Add more announcements as needed with timestamps
];

const Announcement = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnnouncement = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return (
        <>
            <div className="panel">
                <h1>Announcements</h1>
            </div>
            <div className="panel-body">
                {announcements.map((announcement, index) => (
                    <div key={index} style={{ marginBottom: "15px" }}>
                        <button
                            onClick={() => toggleAnnouncement(index)}
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
                            {`${index + 1}. ${announcement.articleHeader}`}
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
                                <p>{announcement.articleContent}</p>
                                <small style={{ color: "#555" }}>
                                    Published on: {announcement.timestamp}
                                </small>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Announcement;
