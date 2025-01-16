import { ParagraphLarge, SubtitleSmall } from "@/components/text/Heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTriggerChevron } from "@/components/ui/accordion";

export interface IListItensMenuMobile {
    Item: string;
    Trigger: string;
    Content: string | React.JSX.Element;
}

export default function ListItensMenuMobile({ Item, Content, Trigger }: IListItensMenuMobile) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={Item} className="border-b-0">
                <AccordionTriggerChevron className="hover:no-underline">
                    <SubtitleSmall>
                        {Trigger}
                    </SubtitleSmall>
                </AccordionTriggerChevron>
                <AccordionContent>
                    <ParagraphLarge>
                        {Content}
                    </ParagraphLarge>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
