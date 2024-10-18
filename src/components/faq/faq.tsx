import { ParagraphLarge, SubtitleSmall } from "../text/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface IFAQAccordion {
    Item: string;
    Trigger: string;
    Content: string;
}

export default function FAQAccordion({ Item, Content, Trigger }: IFAQAccordion) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={Item}>
                <AccordionTrigger>
                    <SubtitleSmall>
                        {Trigger}
                    </SubtitleSmall>
                </AccordionTrigger>
                <AccordionContent>
                    <ParagraphLarge>
                        {Content}
                    </ParagraphLarge>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
