import { Card, CardContent } from "@/components/ui/Card";
import GradientBorderCard from "@/components/ui/gradient-border-card";
import Hero from "@/components/ui/hero";

import HeroImg from '@assets/policyHero.png';
import { policies } from "./page.constants";

export default function Policies() {
  return (
    <main className="min-h-screen font-raleway">
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="Privacy Policy"
        heroTextAfterSplit=""
      />

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white">
        <GradientBorderCard className='md:container md:mx-auto mx-4' cardClassName='bg-[#f5feff] p-5 md:p-10' gradientDirection='down'>
          <CardContent className="p-2 md:p-5">
            <Card className="bg-[#ecfeff] p-3 md:p-10 border-transparent">
              <CardContent className="text-[#28425a] space-y-5">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Introduction
                </h1>
                <p className="text-base md:text-xl">
                  At Advantisec, we prioritize your privacy and are committed to safeguarding the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you visit our website or use our cybersecurity services. By accessing our website, you consent to the practices described here.
                </p>
              </CardContent>
            </Card>

            <div className="mt-5 space-y-5">
              {policies.map((policy) => (
                <Card key={policy.id} className="bg-[#ecfeff] p-5 md:p-10 border-transparent">
                  <CardContent className="text-[#28425a] space-y-5">
                    <h2 className="text-[32px] font-bold">
                      {policy.id}. {policy.title}
                    </h2>
                    {policy.subTitle && (
                      <p className="text-lg md:text-xl">
                        {policy.subTitle}
                      </p>
                    )}
                    <ul className={`${policy.content.length > 1 ? 'list-disc list-inside pl-5': ''} text-lg md:text-xl`}>
                      {policy.content.map((point, index) => (
                        <li key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </GradientBorderCard>
      </section>
    </main>
  );
}
