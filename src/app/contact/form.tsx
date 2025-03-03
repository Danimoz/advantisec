'use client'

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as countryCodes from 'country-codes-list';
import { useRef, useState } from "react";
import { contactFormSubmission } from "../actions";

const myCountryCodesObject = countryCodes.customList(
  "countryCode",
  "{countryNameEn} +{countryCallingCode}"
);

export default function ContactForm(){
  const formRef = useRef<HTMLFormElement>(null);
  const resultSectionRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget); 

    // Call the contactFormSubmission function
    const res = await contactFormSubmission(formData);
    if (res.error) {
      setResult('error');
    } else {
      setResult('success');
      formRef.current?.reset();
      resultSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsLoading(false);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-5 md:gap-20">
      <div className="space-y-5 md:space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
          <div className="space-y-2.5">
            <label className='text-2xl' htmlFor="firstName">First Name * </label>
            <Input id="firstName" placeholder="First Name" name='firstName' className="h-16 p-6 bg-white text-secondary rounded-xl" required/>
          </div>
          <div className="space-y-2.5">
            <label className='text-2xl' htmlFor="lastName">Last Name * </label>
            <Input id="lastName" placeholder="Last Name" name='lastName' className="h-16 p-6 bg-white text-secondary rounded-xl" required/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
          <div className="space-y-2.5">
            <label className='text-2xl' htmlFor="email">Email Address * </label>
            <Input type='email' id="email" name='email' placeholder="Email Address" className="h-16 p-6 bg-white text-secondary rounded-xl" required/>
          </div>
          <div>
            <label className='text-2xl' htmlFor="lastName">Mobile Number * </label>
            <div className="grid grid-cols-[35%_65%] gap-x-2 items-center">
              <Select name="countryCode">
                <SelectTrigger className="h-16 p-3 bg-white text-secondary rounded-xl">
                  <SelectValue placeholder='Country Code' className="text-secondary" />
                </SelectTrigger>
                <SelectContent className="bg-white text-secondary rounded-xl">
                  {Object.keys(myCountryCodesObject).map((country) => (
                    <SelectItem key={country} value={myCountryCodesObject[country]}>
                      {myCountryCodesObject[country]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input id="phone" name='phone' placeholder="Mobile Number" className="h-full max-h-16 p-6 bg-white text-secondary rounded-xl" required/>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-2xl">Is this a business enquiry?</p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <Input 
              type='radio' 
              id="businessEnquiryYes" 
              name='businessEnquiry' 
              // checked={businessEnquiry === true} 
              // onChange={() => setBusinessEnquiry(true)}
              className="w-10 p-4 appearance-none rounded-[50%] border-2 bg-white border-secondary checked:bg-secondary checked:border-white"
              />
              <label htmlFor="businessEnquiryYes">Yes</label>
            </div>
            <div className="flex items-center gap-2">
              <Input 
                type='radio' 
                id="businessEnquiryNo" 
                name='businessEnquiry' 
                // checked={businessEnquiry === false}
                // onChange={() => setBusinessEnquiry(false)}
                className="w-10 p-4 appearance-none rounded-[50%] border-2 bg-white border-secondary checked:bg-secondary checked:border-white"
              />
              <label htmlFor="businessEnquiryNo">No</label>
            </div>
          </div>          
        </div>

        <div className="border-t-2 border-white flex gap-x-10 md:gap-x-14 pt-4">
          <Input
            type='checkbox'
            id="acceptPrivacy"
            name='acceptPrivacy'
            // checked={acceptPrivacy}
            // onChange={() => setAcceptPrivacy(!acceptPrivacy)}
            className="w-10 p-4 appearance-none border-2 bg-white border-secondary checked:bg-secondary checked:border-white"
            required
          />
          <p className="text-base md:text-2xl">
            By ticking this box I acknowledge that Advantisec will collect and process information relating to me in accordance with the company Privacy Policy and agree to be contacted in relation to my enquiry.
          </p>
        </div>

        <div>
          <p className="text-base text-center md:text-start">You must be 18+</p>
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>
      <div ref={resultSectionRef}>
        {result === 'success' && (
          <div className="p-5">
            Thank you for your enquiry. We will be in touch shortly.
          </div>
        )}
        {result === 'error' && (
          <div className="p-5">
            There was an error submitting the form. Please try again.
          </div>
        )}
      </div>
    </form>
  )
}