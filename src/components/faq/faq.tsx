import { ParagraphLarge, SubtitleSmall } from "../text/Heading";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface IFAQAccordion {
    Item: string;
    Trigger: string;
    Content: string;
}

export default function FAQAccordion({ Item, Content, Trigger }: IFAQAccordion) {
    return (
      <AccordionItem value={Item}>
          <AccordionTrigger className="border-b border-black hover:no-underline">
              <SubtitleSmall className="max-lg:text-start">
                  {Trigger}
              </SubtitleSmall>
          </AccordionTrigger>
          <AccordionContent className="mt-6">
              <ParagraphLarge>
                  {Content}
              </ParagraphLarge>
          </AccordionContent>
      </AccordionItem>
    )
}
