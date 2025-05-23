
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

// FAQ data
const faqs = [
  {
    question: "How long will it take?",
    answer: "Our typical projects take 4-6 weeks from start to finish, depending on project scope and complexity."
  },
  {
    question: "Do you use templates?",
    answer: "No, we custom design and develop all our websites to perfectly match your brand and requirements."
  },
  {
    question: "How many revisions do I get?",
    answer: "Our packages include up to 3 rounds of revisions to ensure your complete satisfaction."
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer: "Absolutely! We adapt to your existing brand guidelines to ensure consistency across all touchpoints."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, we provide SEO optimization as part of our web development packages or as a standalone service."
  },
  {
    question: "What can you build?",
    answer: "We build websites, web applications, ecommerce stores, and custom digital solutions tailored to your needs."
  },
  {
    question: "Do you offer maintenance?",
    answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated and running smoothly."
  }
];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // Create email content
      const emailContent = `
        New Contact Form Submission:
        
        Full Name: ${data.fullName}
        Email: ${data.email}
        Company: ${data.company || 'N/A'}
        Phone: ${data.phone || 'N/A'}
        
        Project Details:
        ${data.projectDetails}
      `;
      
      // Send email using mailto URL
      // This opens the user's email client with pre-filled information
      const mailtoLink = `mailto:meetowaisahmed@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailContent)}`;
      window.open(mailtoLink, '_blank');
      
      // Show success message
      toast({
        title: "Form submitted successfully",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Error submitting form",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-space">
      <Navbar />
      
      {/* Contact Section with Background */}
      <section className="w-full py-16 sm:py-24 px-4 md:px-10 lg:px-20 relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 w-full h-full z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g opacity="0.5">
              <path d="M1442.33 1025.5H-3.5V-1.5H1442.33V1025.5Z" fill="url(#paint0_linear_344_8640)"/>
              <path d="M1442.33 1025.5H-3.5V-1.5H1442.33V1025.5Z" fill="url(#paint1_radial_344_8640)"/>
              <path d="M1442.33 1025.5H-3.5V-1.5H1442.33V1025.5Z" fill="url(#paint2_radial_344_8640)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_344_8640" x1="719.415" y1="-1.5" x2="719.415" y2="1025.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D1C4E9"/>
                <stop offset="1" stopColor="#D1C4E9" stopOpacity="0"/>
              </linearGradient>
              <radialGradient id="paint1_radial_344_8640" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(821.665 823.5) rotate(-90) scale(674.333 945.178)">
                <stop stopColor="#7C4DFF"/>
                <stop offset="1" stopColor="#7C4DFF" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint2_radial_344_8640" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(417.665 533.5) rotate(-90) scale(400 560.672)">
                <stop stopColor="#B388FF"/>
                <stop offset="1" stopColor="#B388FF" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-0 w-full h-full bg-white/30 z-0"></div>
        
        {/* Content Container */}
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-space text-4xl md:text-5xl font-medium text-center mb-16">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Form */}
            <div className="bg-white rounded-3xl border-2 border-black p-8 sm:p-10 border-b-[5.5px] shadow-lg">
              <h3 className="text-xl mb-6">Tell us what you need. We'll answer within 24 hours.</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium">
                    Full Name<span className="text-primary-border">*</span>
                  </label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    {...register("fullName", { required: "Full name is required" })}
                    className="w-full"
                  />
                  {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message?.toString()}</span>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email<span className="text-primary-border">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@doe.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: "Invalid email address" 
                      }
                    })}
                    className="w-full"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message?.toString()}</span>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    placeholder="ACME Pty Ltd"
                    {...register("company")}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="projectDetails" className="block text-sm font-medium">
                    Project Details<span className="text-primary-border">*</span>
                  </label>
                  <Textarea
                    id="projectDetails"
                    {...register("projectDetails", { required: "Project details are required" })}
                    className="w-full min-h-32"
                  />
                  {errors.projectDetails && <span className="text-red-500 text-xs">{errors.projectDetails.message?.toString()}</span>}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#A981FF] hover:bg-[#8A63FF] py-6 rounded-full text-white text-base"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </div>
            
            {/* Right Column - FAQs */}
            <div>
              <h3 className="text-xl mb-8">Things you want to know. We already answered them.</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-black rounded-xl overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline bg-white">
                      <span>{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      {/* Updated Footer with rounded corners and padding - same as in Index.tsx */}
      <div className="w-full px-6 py-10 md:px-10 md:py-14 lg:px-20 lg:py-16">
        <footer className="w-full bg-black text-white rounded-3xl overflow-hidden">
          <div className="max-w-screen-xl mx-auto grid gap-8 px-8 py-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo and Company Info */}
            <div className="space-y-4">
              <div className="font-space text-2xl font-medium">
                C&B.
              </div>
              <p className="text-sm text-gray-400">
                © 2025 C&B Marketing Pty. Ltd.<br />
                ABN 31 635 268 352
              </p>
            </div>
            
            {/* Column 2: Pages */}
            <div className="space-y-4">
              <h3 className="font-space text-lg font-medium">Pages</h3>
              <div className="flex flex-col space-y-3">
                <a href="/pricing" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Pricing Calculator</a>
                <a href="/work" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Our work</a>
              </div>
            </div>
            
            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h3 className="font-space text-lg font-medium">Resources</h3>
              <div className="flex flex-col space-y-3">
                <a href="/blog/wordpress" className="font-space text-sm text-gray-400 hover:text-white transition-colors">Why we don't code on Wordpress</a>
                <a href="/blog/cms" className="font-space text-sm text-gray-400 hover:text-white transition-colors">CMS integration with our website</a>
                <a href="/blog/headless" className="font-space text-sm text-gray-400 hover:text-white transition-colors">What is headless ecommerce?</a>
              </div>
            </div>
            
            {/* Column 4: Contact */}
            <div className="space-y-4">
              <h3 className="font-space text-lg font-medium">Contact</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:meetowaisahmed@gmail.com" className="font-space text-sm text-gray-400 hover:text-white transition-colors">meetowaisahmed@gmail.com</a>
                <a href="tel:+61412345678" className="font-space text-sm text-gray-400 hover:text-white transition-colors">+61 4 1234 5678</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
