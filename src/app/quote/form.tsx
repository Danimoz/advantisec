'use client'

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import * as countryCodes from 'country-codes-list';
import { useRef, useState } from "react";
import { quoteFormSubmission } from "../actions";
import { Textarea } from "@/components/ui/textarea";

const myCountryCodesObject = countryCodes.customList(
  "countryCode",
  "{countryNameEn} +{countryCallingCode}"
);

export default function QuoteForm(){
  const formRef = useRef<HTMLFormElement>(null);
  const resultSectionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget); 

    // Call the contactFormSubmission function
    const res = await quoteFormSubmission(formData);
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
            <label className='text-2xl' htmlFor="companyName">Company Name * </label>
            <Input id="companyName" placeholder="Company Name" name='companyName' className="h-16 p-6 bg-white text-secondary rounded-xl" required/>
          </div>
          <div className="space-y-2.5">
            <label className='text-2xl' htmlFor="companyEmail">Company Email Address * </label>
            <Input id="companyEmail" type='email' placeholder="Company Email" name='companyEmail' className="h-16 p-6 bg-white text-secondary rounded-xl" required/>
          </div>
        </div>
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
            <label className='text-2xl' htmlFor="position">Position in Company * </label>
            <Input id="position" placeholder="Eg. CEO" name='position' className="h-16 p-6 bg-white text-secondary rounded-xl" required />
          </div>
          <div className="space-y-2.5">
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
              <Input id="phone" name='phone' placeholder="Mobile Number" className="h-full max-h-16 p-6 bg-white text-secondary rounded-xl" required />
            </div>
          </div>
        </div>
        <div className="space-y-2.5">
          <label className='text-2xl' htmlFor="lastName">How can we help? * </label>
          <Textarea id="message" name='message' placeholder="Message" className="h-32 p-6 bg-white text-secondary rounded-xl" required />
        </div>
        
        <div className="border-t-2 border-white flex gap-x-10 md:gap-x-14 pt-4">
          <Input
            type='checkbox'
            id="acceptPrivacy"
            name='acceptPrivacy'
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