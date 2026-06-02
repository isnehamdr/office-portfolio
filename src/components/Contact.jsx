// import React, { useState } from 'react';
// import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     service: 'Digital Transformation',
//     message: ''
//   });
//   const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const services = [
//     'Digital Transformation & IT Consulting',
//     'IT Infrastructure & Cloud Services',
//     'Cybersecurity & Data Protection',
//     'Software Development & Integration'
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus('error');
//       return;
//     }
//     setStatus('sending');
//     // Simulate API delivery
//     setTimeout(() => {
//       setStatus('success');
//       setFormData({ name: '', email: '', service: 'Digital Transformation', message: '' });
//     }, 1200);
//   };

//   return (
//     <section className="relative bg-[#0c0c0e] px-6 py-24 md:px-12 lg:px-20 border-t border-zinc-900" id="contact">
//       {/* Background radial highlight */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

//       <div className="mx-auto max-w-7xl relative z-10" id="contact-container">
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="contact-grid">
          
//           {/* Left panel: Large Call to Action */}
//           <div className="lg:col-span-5 flex flex-col justify-between space-y-12" id="contact-text-panel">
//             <div className="space-y-6">
//               <span className="text-[#6a7c64] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#6a7c64]" />
//                 CONSULTATION INQUIRY
//               </span>
//               <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight">
//                 Let's Build <br />
//                 The Future <br />
//                 <span className="text-brand-orange">Of IT Together</span>
//               </h2>
//               <p className="font-sans text-sm text-zinc-500 leading-relaxed font-light max-w-md">
//                 Ready to align your business operations with secure cloud solutions? Drop a message for IT consulting, infrastructure support, or custom software integration requests.
//               </p>
//             </div>

//             {/* Quick Contact Info cards */}
//             <div className="space-y-4 pt-6 border-t border-zinc-900" id="contact-details-list">
//               <div className="flex items-center gap-3">
//                 <div className="h-9 w-9 rounded-full bg-[#0e0e11] border border-zinc-900 flex items-center justify-center text-zinc-400">
//                   <Mail className="h-4 w-4 text-brand-orange" />
//                 </div>
//                 <div>
//                   <span className="text-[10px] text-zinc-650 font-bold block">DIRECT EMAIL</span>
//                   <a href="mailto:fullstackcoder1234@gmail.com" className="text-sm text-zinc-300 hover:text-white transition-colors">
//                     fullstackcoder1234@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="h-9 w-9 rounded-full bg-[#0e0e11] border border-zinc-900 flex items-center justify-center text-zinc-400">
//                   <Phone className="h-4 w-4 text-brand-orange" />
//                 </div>
//                 <div>
//                   <span className="text-[10px] text-zinc-650 font-bold block">HEAD OFFICE TELEPHONE</span>
//                   <a href="tel:+9779801067391" className="text-sm text-zinc-300 hover:text-white transition-colors font-mono">
//                     +977 9801067391
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right panel: Elegant Zinle form styling */}
//           <div className="lg:col-span-7 bg-[#0f0f12] border border-zinc-900 p-8 sm:p-10 rounded-3xl" id="contact-form-panel">
//             <h3 className="font-display text-xl font-bold text-white uppercase mb-8 flex items-center gap-2">
//               <ArrowUpRight className="h-5 w-5 text-brand-orange" />
//               Send a secured message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
              
//               {/* Name */}
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400 tracking-wider uppercase">Full Name</label>
//                 <input 
//                   type="text" 
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   placeholder="e.g. David Gurung" 
//                   className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none focus:border-brand-orange transition-all duration-300"
//                   id="form-name-input"
//                 />
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400 tracking-wider uppercase">Email Address</label>
//                 <input 
//                   type="email" 
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   placeholder="e.g. david@enterprise.com" 
//                   className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none focus:border-brand-orange transition-all duration-300"
//                   id="form-email-input"
//                 />
//               </div>

//               {/* Service interest Dropdown */}
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400 tracking-wider uppercase">Core Service Needed</label>
//                 <select 
//                   value={formData.service}
//                   onChange={(e) => setFormData({...formData, service: e.target.value})}
//                   className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-zinc-300 outline-none focus:border-brand-orange transition-all duration-300 cursor-pointer"
//                   id="form-service-input"
//                 >
//                   {services.map((srv, idx) => (
//                     <option key={idx} value={srv} className="bg-[#0e0e11] text-zinc-300">
//                       {srv}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Message */}
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400 tracking-wider uppercase">Project Details / Message</label>
//                 <textarea 
//                   rows={4}
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                   placeholder="Describe your server network, current challenges, business operations..." 
//                   className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-700 outline-none focus:border-brand-orange transition-all duration-300 resize-none"
//                   id="form-message-input"
//                 />
//               </div>

//               {/* Actions & Alerts */}
//               <div className="pt-2">
//                 {status === 'success' && (
//                   <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-sm mb-4" id="form-success-alert">
//                     <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
//                     <span>Inquiry logged successfully! Sandip or SA IT Solution coordinators will reach out shortly.</span>
//                   </div>
//                 )}

//                 {status === 'error' && (
//                   <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-sm mb-4" id="form-error-alert">
//                     <AlertCircle className="h-5 w-5 flex-shrink-0" />
//                     <span>Please enter your name, email, and description inquiry first.</span>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={status === 'sending'}
//                   className="w-full group bg-white text-black font-extrabold text-sm uppercase py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-brand-orange hover:text-white hover:scale-[1.02] shadow-xl duration-350 cursor-pointer transition-all border border-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
//                   id="form-submit-btn"
//                 >
//                   {status === 'sending' ? (
//                     <span>Sending Proposal Data...</span>
//                   ) : (
//                     <>
//                       <span>Transmit Consultation Request</span>
//                       <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                     </>
//                   )}
//                 </button>
//               </div>

//             </form>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
