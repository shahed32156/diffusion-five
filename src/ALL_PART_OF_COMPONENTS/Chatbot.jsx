import React, { useState, useEffect } from "react";
import { IoChatboxEllipses, IoHandRight } from "react-icons/io5";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// Theme for the chatbot
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#443eb5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#443eb5",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Keyframes for wave animation
const waveAnimation = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(10deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(10deg); }
    80% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); }
  }
; `

// Add the styles globally
const style = document.createElement("style");
style.innerHTML = waveAnimation;
document.head.appendChild(style);

// Chatbot steps
// Chatbot steps
const steps = [
  {
    id: "1",
    message: "Hello, welcome to DiffusionFive. What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message:
      "Hi {previousValue}, nice to meet you! How can we assist you today?",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: "Thank you for sharing! We offer a variety of services. Do you need help with web development, digital marketing, or something else?",
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    trigger: "7",
  },
  {
    id: "7",
    message:
      "Great choice! Our team specializes in that area. Are you looking for consultation, or would you like to get started right away?",
    trigger: "8",
  },
  {
    id: "8",
    user: true,
    trigger: "9",
  },
  {
    id: "9",
    message:
      "Got it! Just a few more questions to ensure we provide the best service for you.",
    trigger: "10",
  },
  {
    id: "10",
    message: "Please select which service you are interested in:",
    trigger: "11",
  },
  {
    id: "11",
    options: [
      {
        value: "Web Design & Development",
        label: "Web Design & Development",
        trigger: "Web Design & Development",
      },
      {
        value: "Graphix Design",
        label: "Graphix Design",
        trigger: "Graphix Design",
      },
      {
        value: "Software Quality Assurance",
        label: "Software Quality Assurance",
        trigger: "Software Quality Assurance",
      },
      {
        value: "Digital Marketing",
        label: "Digital Marketing",
        trigger: "Digital Marketing",
      },
      {
        value: "Video Editing",
        label: "Video Editing",
        trigger: "Video Editing",
      },
    ],
  },
  {
    id: "Web Design & Development",
    message:
      "Thanks for selecting Web Design & Development. Our team will contact with you very soon",
    end: true,
  },
  {
    id: "Graphix Design",
    message:
      "Thanks for selecting Graphix Design. Our team will contact with you very soon",
    end: true,
  },
  {
    id: "Software Quality Assurance",
    message:
      "Thanks for selecting Software Quality Assurance. Our team will contact with you very soon",
    end: true,
  },
  {
    id: "Digital Marketing",
    message:
      "Thanks for selecting Digital Marketing. Our team will contact with you very soon.",
    end: true,
  },
  {
    id: "Video Editing",
    message:
      "Thanks for selecting Video Editing. Our team will contact with you very soon.",
    end: true,
  },
];


// Custom avatar image URL
const botAvatar = "./Images/chatbot.png"; // Replace this with your bot avatar image URL

// Notification sound URL
const notificationSound = "./Images/notify.mp3";

// Chatbot component
const Chatbot = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(true); // New state for welcome text

  useEffect(() => {
    // Show notification after 2 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
      // Play notification sound
      const audio = new Audio(notificationSound);
      audio.play();
    }, 2000);

    // Add click event listener to document to hide welcome text only
    const handleClick = () => setShowWelcomeText(false);
    document.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      clearTimeout(timer); // Clean up timer
      document.removeEventListener("click", handleClick); // Remove event listener
    };
  }, []);

  const handleChatbotOpen = () => {
    setIsOpened(true);
    setShowNotification(false); // Hide notification badge once opened
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="chatbot-container">
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle={
            <div className="flex items-center gap-1">
              DiffusionFive Chatbot
              <IoHandRight
                className="text-xl  text-[#f8d52a] hand" />
            </div>
          }
          recognitionEnable={true}
          speechSynthesis={{ enable: true, lang: "en" }}
          floatingIcon={
            <div onClick={handleChatbotOpen} className="relative">
              <IoChatboxEllipses className="text-white text-[28px] flex justify-center items-center" />
              {showNotification && (
                <span className="notification-badge absolute -top-6 left-6 text-[red] text-2xl font-extrabold font-mono animate-bounce">
                  1
                </span>
              )}
              {showNotification && showWelcomeText && (
                <span className="notification-badge absolute -top-16 sm:-top-12 right-5 text-[white] text-[13px] w-[150px] sm:w-[200px] bg-black px-2 rounded-t-2xl rounded-n-none py-2 animate-fade-in">
                  Hello, welcome to DiffusionFive. What is your name?
                </span>
              )}
            </div>
          }
          botAvatar={botAvatar}
          opened={isOpened}
          handleEnd={() => setIsOpened(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default Chatbot;