import { ParagraphLarge, SubtitleSmall } from "../text/Heading";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { ProductDetails } from "@/products/types";

export interface IFAQAccordion {
    Item: string;
    Trigger: string;
    Content?: ProductDetails;
}

export default function ProductDetailsAccordion({ Item, Content, Trigger }: IFAQAccordion) {
    return (
      <AccordionItem value={Item}>
          <AccordionTrigger className="border-b border-black hover:no-underline">
              <SubtitleSmall>
                  {Trigger}
              </SubtitleSmall>
          </AccordionTrigger>
          {
              Content && (
                  <AccordionContent className="flex flex-col my-6 gap-6">
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Species:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.species}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Application:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.application}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Collection:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.application}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Use:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.use}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Finish:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.finish}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Durability class:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.durabilityClass}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Warranty:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.warranty}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Available in:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.availableIn}
                          </ParagraphLarge>
                      </div>
                      <div className="flex items-center gap-2">
                          <ParagraphLarge className="font-semibold">
                              Board lengths:
                          </ParagraphLarge>
                          <ParagraphLarge>
                              {Content.boardLengths}
                          </ParagraphLarge>
                      </div>
                  </AccordionContent>
              )
          }
      </AccordionItem>
    )
}
