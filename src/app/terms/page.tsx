import { Card, CardContent } from "@/components/ui/Card";
import GradientBorderCard from "@/components/ui/gradient-border-card";
import Hero from "@/components/ui/hero";

import HeroImg from '@assets/policyHero.png';
import { terms } from "./page.constants";

export default function Terms() {
  return (
    <main className="min-h-screen font-raleway">
      <Hero
        image={HeroImg}
        heroTextBeforeSplit="Terms"
        heroTextAfterSplit="Of Service"
      />

      <section className="py-10 md:py-14 lg:py-20 xl:py-28 bg-white">
        <GradientBorderCard className='md:container md:mx-auto mx-4' cardClassName='bg-[#f5feff] p-5 md:p-10' gradientDirection='down'>
          <CardContent className="p-1.5 md:p-5">
            <div className="mt-5 space-y-5">
              {terms.map((policy) => (
                <Card key={policy.id} className="bg-[#ecfeff] p-5 md:p-10 border-transparent">
                  <CardContent className="text-[#28425a] space-y-5">
                    <h2 className="text-[32px] font-bold">
                      {policy.id}. {policy.title}
                    </h2>
                    {policy.subTitle && (
                      <p className="text-base md:text-xl">
                        {policy.subTitle}
                      </p>
                    )}
                    <ul className={`${policy.content.length > 1 ? 'list-disc': ''} list-inside text-base md:text-xl`}>
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
