import { BadgeCheck } from "lucide-react";
import { ParagraphLarge, SubtitleSmall } from "../text/Heading";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface IFAQAccordion {
    Item: string;
    Trigger: string;
    Content: string[];
}

export default function ProductFeatureAccordion({ Item, Content, Trigger }: IFAQAccordion) {
    return (
      <AccordionItem value={Item}>
          <AccordionTrigger className="border-b border-black hover:no-underline">
              <SubtitleSmall>
                  {Trigger}
              </SubtitleSmall>
          </AccordionTrigger>
          <AccordionContent>
              {
                  Content.map((item, index) => (
                      <ParagraphLarge key={index} className="flex my-6 items-center gap-2">
                          <BadgeCheck /> {item}
                      </ParagraphLarge>
                  ))
              }
          </AccordionContent>
      </AccordionItem>
    )
}
