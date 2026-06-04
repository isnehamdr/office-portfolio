import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
    <div className="overflow-x-hidden">
    <div className=" bg-[#f5f4f0] py-28 px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10 md:mb-12">Let's Connect</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Left: Contact Cards */}
          <div className="flex flex-col gap-5 w-full lg:w-92 shrink-0">
            {/* Orange - Address */}
            <div className="bg-[#f37a20] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
             
                <MapPin className="w-10 h-10 text-white" />
            
              <p className="text-white font-semibold text-xl mb-2 mt-4">Office Address</p>
              <p className="text-white/90 text-lg leading-relaxed">
                4517 Washington Ave, Manchester,<br />Kentucky 39495
              </p>
            </div>

            {/* Dark - Email */}
            <div className="bg-[#1e1e1e] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              
              <p className="text-white font-semibold text-xl mb-2 mt-4">Write an email</p>
              <p className="text-white/80 text-lg">info@example.com</p>
            </div>

            {/* Olive - Phone */}
            <div className="bg-[#a09060] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              
                <Phone className="w-10 h-10 text-white" />
         
              <p className="text-white font-semibold text-xl mb-2 mt-4">Give us call</p>
              <p className="text-white/90 text-lg">+(907) 555-0101</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#eeebe4] rounded-2xl p-8 md:p-10 w-full shadow-sm">
            <p className="text-gray-800 text-xl leading-relaxed mb-8">
              Have an idea or need help with a project? Drop us a message we're here to
              collaborate, strategize, and bring your vision to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">First name*</label>
                <input
                  type="text"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email address*</label>
                <input
                  type="email"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-sm font-medium text-gray-700">Write your message here*</label>
              <textarea
                rows={5}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-gray-400 transition-colors resize-y"
              />
            </div>

            <div className="flex justify-end">
              <button className="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg">
                Submit Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}