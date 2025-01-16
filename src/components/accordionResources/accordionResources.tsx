import { SubtitleSmall } from "../text/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export interface IAccordionResources {
    Item: string;
    Trigger: string;
    Content: JSX.Element;
}

export default function AccordionResources({ Item, Content, Trigger }: IAccordionResources) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={Item}>
                <AccordionTrigger className="border-b border-black hover:no-underline">
                    <SubtitleSmall className="max-lg:text-start">
                        {Trigger}
                    </SubtitleSmall>
                </AccordionTrigger>
                <AccordionContent>
                    {Content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
