import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="Practical questions" title="Ask the unglamorous things.">
        <p>
          Heat, money, fitness, totality, insurance. If the answer would change
          whether you belong on the boat, it lives here.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl border-t border-stone"
        >
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="py-6 text-left font-display text-xl font-normal tracking-[-0.03em] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 font-body text-base leading-[1.8] text-graphite">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-16">
          <TextLink href="/apply">Request an invitation</TextLink>
        </div>
      </div>
    </article>
  );
}
