import React, { useState, useEffect } from 'react';

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp click handler
  const openWhatsApp = () => {
    // Replace with your WhatsApp number (without '+' and spaces)
    const phoneNumber = "+9779851172368"; // Change this to your number
    const message = "Hello! I have a question.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top"
          title="Go to top"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L12 20M12 4L18 10M12 4L6 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="whatsapp-btn"
        aria-label="Contact on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <img src="/images/whatsapp.png" alt="" />
      </button>

      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 1000;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        .back-to-top-btn:hover {
          transform: translateY(-3px);
          
        }

        .back-to-top-btn:active {
          transform: translateY(0);
        }

        .whatsapp-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
         
          border: none;
          border-radius: 50%;
          width: 55px;
          height: 55px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
         
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .whatsapp-btn:hover {
          transform: scale(1.05);
      
        }

        .whatsapp-btn:active {
          transform: scale(0.98);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .back-to-top-btn {
            width: 45px;
            height: 45px;
            bottom: 75px;
            right: 15px;
          }
          
          .whatsapp-btn {
            width: 50px;
            height: 50px;
            right: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default BacktoTop;