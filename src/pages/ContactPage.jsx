import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [verificationCode, setVerificationCode] = useState("");
  const [userEnteredCode, setUserEnteredCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate random 6-digit verification code on page load/reload
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Generate new code on page load
  useEffect(() => {
    const newCode = generateVerificationCode();
    setVerificationCode(newCode);
    
    return () => {
      setVerificationCode("");
    };
  }, []);

  // Generate a new code manually
  const handleGenerateNewCode = () => {
    const newCode = generateVerificationCode();
    setVerificationCode(newCode);
    setUserEnteredCode("");
    setIsVerified(false);
    setError("");
    setSuccessMessage("New verification code generated!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Auto-verify when user enters the code
  const handleCodeChange = (e) => {
    const code = e.target.value.replace(/\D/g, "").slice(0, 6);
    setUserEnteredCode(code);
    
    // Auto-verify if the entered code matches
    if (code === verificationCode && code.length === 6) {
      setIsVerified(true);
      setError("");
      setSuccessMessage("Verification successful! You can now submit the form.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } else if (isVerified) {
      setIsVerified(false);
    } else if (code.length > 0 && code !== verificationCode) {
      setError("");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isVerified) {
      setError("Please enter the correct verification code");
      return;
    }
    
    if (!formData.firstName || !formData.email || !formData.message) {
      setError("Please fill in all required fields (*)");
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would send the form data to your backend
    console.log("Form submitted:", { ...formData, verified: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSuccessMessage("Thank you! Your message has been sent successfully.");
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
    setIsVerified(false);
    setUserEnteredCode("");
    
    // Generate new code for next use
    const newCode = generateVerificationCode();
    setVerificationCode(newCode);
    
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Reset verification if email changes
    if (name === "email") {
      setIsVerified(false);
      setUserEnteredCode("");
      setError("");
    }
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-[#f5f4f0] py-16 px-4 md:py-20 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-normal text-gray-900 mb-8 md:mb-12 pt-8 md:pt-12">
              Let's Connect
            </h1>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
              {/* Left: Contact Cards */}
              <div className="flex flex-col gap-5 w-full lg:w-80 xl:w-96 shrink-0">
                {/* Orange - Address */}
                <div className="bg-[#f37a20] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="w-10 h-10 text-white" />
                  <p className="text-white font-semibold text-xl mb-2 mt-4">Office Address</p>
                  <p className="text-white/90 text-base leading-relaxed">
                    Parsyang, Ward 5,<br />Pokhara 33700, Nepal
                  </p>
                </div>

                {/* Dark - Email */}
                <div className="bg-[#1e1e1e] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <Mail className="w-10 h-10 text-white" />
                  <p className="text-white font-semibold text-xl mb-2 mt-4">Write an email</p>
                  <p className="text-white/80 text-base">sandip@sait.com.np</p>
                </div>

                {/* Olive - Phone */}
                <div className="bg-[#a09060] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <Phone className="w-10 h-10 text-white" />
                  <p className="text-white font-semibold text-xl mb-2 mt-4">Give us call</p>
                  <p className="text-white/90 text-base">+977  985-1172368</p>
                </div>
              </div>

              {/* Right: Contact Form */}
              <form onSubmit={handleSubmit} className="bg-[#eeebe4] rounded-2xl p-6 md:p-8 lg:p-10 w-full shadow-sm">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  Have an idea or need help with a project? Drop us a message — we're here to
                  collaborate, strategize, and bring your vision to life.
                </p>

                {/* Success/Error Messages */}
                {successMessage && (
                  <div className="mb-5 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {successMessage}
                    </div>
                  </div>
                )}
                
                {error && (
                  <div className="mb-5 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {error}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">First name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Email address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-700">Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-700">Write your message here *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all resize-y"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Verification Code Section */}
                <div className="mb-4 space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Verification Code *
                    </label>
                    <div className="space-y-3">
                      {/* Display generated code */}
                      <div className="relative">
                        <input
                          type="text"
                          value={verificationCode}
                          readOnly
                          className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-center text-2xl md:text-3xl font-mono font-bold tracking-wider text-gray-800 outline-none cursor-pointer"
                          onClick={(e) => e.target.select()}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            type="button"
                            onClick={handleGenerateNewCode}
                            className="text-xs bg-[#f37a20] text-white px-2 py-1 rounded hover:bg-[#e06a10] transition-colors"
                          >
                            New
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500 text-center">
                        Copy the code above and paste it below to verify
                      </p>
                      
                      {/* Input field for user to enter the code - auto-verifies */}
                      <div className="mt-3">
                        <input
                          type="text"
                          value={userEnteredCode}
                          onChange={handleCodeChange}
                          placeholder="Paste or enter the 6-digit code here"
                          maxLength={6}
                          className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-1 transition-all font-mono text-center text-lg tracking-wider ${
                            isVerified
                              ? "border-green-500 bg-green-50 text-green-700"
                              : userEnteredCode.length > 0 && userEnteredCode !== verificationCode
                              ? "border-red-500 bg-red-50"
                              : "border-gray-300 focus:border-gray-400 focus:ring-gray-400"
                          }`}
                        />
                        {isVerified && (
                          <p className="text-xs text-green-600 mt-1 text-center">
                            ✓ Code verified! You can now submit the form.
                          </p>
                        )}
                        {!isVerified && userEnteredCode.length === 6 && userEnteredCode !== verificationCode && (
                          <p className="text-xs text-red-600 mt-1 text-center">
                            Invalid code. Please check and try again.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isVerified}
                    className="bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Now
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}