import { BadgeCheck } from "lucide-react";
import { ParagraphLarge, SubtitleSmall } from "../text/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface IFAQAccordion {
    Item: string;
    Trigger: string;
    Content: string[];
}

export default function ProductFeatureAccordion({ Item, Content, Trigger }: IFAQAccordion) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={Item}>
                <AccordionTrigger>
                    <SubtitleSmall>
                        {Trigger}
                    </SubtitleSmall>
                </AccordionTrigger>
                <AccordionContent>
                    {
                        Content.map((item, index) => (
                            <ParagraphLarge key={index} className="flex items-center gap-2">
                                <BadgeCheck /> {item}
                            </ParagraphLarge>
                        ))
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
