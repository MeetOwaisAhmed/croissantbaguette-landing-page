import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import Background from '@/assets/background-contact-us.svg';
import Gradient from '@/assets/Gradient+Blur.svg';

// FAQ data
const faqs = [
  {
    question: "How long will it take?",
    answer: "As long as necessary. No longer."
  },
  {
    question: "Do you use templates?",
    answer: "No. Templates are for people who can't code. We can code."
  },
  {
    question: "How many revisions do I get?",
    answer: "We build it right the first time. Small adjustments included. Complete redesigns cost money."
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer: "Yes. Send them. We'll follow them. Don't worry."
  },
  {
    question: "Do you offer SEO services?",
    answer: "We build sites that load fast and work properly. That's half of SEO. The rest is your content. Make it good."
  },
  {
    question: "What can you build?",
    answer: "If it's digital, we build it. If it's wood, we build that too."
  },
  {
    question: "Do you offer maintenance?",
    answer: "12 months guarantee. 24-hour fixes. After that, hourly rate. Simple."
  }
];

const ContactSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const emailContent = `
        New Contact Form Submission:

        Full Name: ${data.fullName}
        Email: ${data.email}
        Company: ${data.company || 'N/A'}
        Phone: ${data.phone || 'N/A'}

        Project Details:
        ${data.projectDetails}
      `;
      const mailtoLink = `mailto:meetowaisahmed@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailContent)}`;
      window.open(mailtoLink, '_blank');

      toast({
        title: "Form submitted successfully",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error(error);
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
    <section id="contact" className="w-full py-16 sm:py-24 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Full-section background image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img
          src={Background}
          alt="Contact section background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered gradient-blur beneath the background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <img
          src={Gradient}
          alt="Gradient background"
          className="w-[90%] max-w-3xl h-auto opacity-90"
        />
      </div>

      {/* White translucent overlay */}
      <div className="absolute inset-0 w-full h-full bg-white/30 z-0"></div>

      {/* Content (form + FAQs) */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-space text-4xl md:text-5xl font-medium mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: form */}
          <div>
            <p className="text-xl mb-8">Tell us what you need. We'll answer within 24 hours.</p>
            <div className="bg-white rounded-3xl border-2 border-black p-8 sm:p-10 border-b-[5.5px] shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium">
                    Full Name <span className="text-primary-border">*</span>
                  </label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    {...register("fullName", { required: "Full name is required" })}
                    className="w-full rounded-full border border-gray-250 px-4 py-2 focus:border-2 focus:border-[#5200FF] focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email <span className="text-primary-border">*</span>
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
                    className="w-full rounded-full border border-gray-250 px-4 py-2 focus:border-2 focus:border-[#5200FF] focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    placeholder="ACME Pty Ltd"
                    {...register("company")}
                    className="w-full rounded-full border border-gray-250 px-4 py-2 focus:border-2 focus:border-[#5200FF] focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full rounded-full border border-gray-250 px-4 py-2 focus:border-2 focus:border-[#5200FF] focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <label htmlFor="projectDetails" className="block text-sm font-medium">
                    Project Details <span className="text-primary-border">*</span>
                  </label>
                  <Textarea
                    id="projectDetails"
                    {...register("projectDetails", { required: "Project details are required" })}
                    className="w-full min-h-32 border border-gray-250 focus:border-2 focus:border-[#5200FF] focus:outline-none focus:ring-0 focus-visible:ring-0"
                  />
                  {errors.projectDetails && <p className="text-red-500 text-xs">{errors.projectDetails.message}</p>}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#A981FF] border-2 border-[#5200FF] shadow-[0_5.5px_0_0_#5200FF] hover:translate-y-[5.5px] hover:shadow-none hover:bg-[#A981FF] transition-all duration-200 ease-in-out cursor-default"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </div>
          </div>

          {/* Right: FAQs */}
          <div>
            <h3 className="text-xl mb-8">Things you want to know. We already answered them.</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-xl bg-white border-2 border-black border-b-[2px] shadow-[0_3px_0_0_#000] overflow-hidden transform transition-transform duration-200 ease-in-out hover:translate-y-[3px] hover:shadow-none cursor-default"
                >
                  <AccordionTrigger className="px-6 py-4 bg-white cursor-default hover:no-underline focus:no-underline">
                    {faq.question}
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
  );
};

export default ContactSection;
