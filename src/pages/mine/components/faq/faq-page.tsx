import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const FaqPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="flex items-center mb-4 gap-2">
        <button onClick={() => navigate("/pro")}>
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-semibold">FAQ</h1>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full block "
          defaultValue="item-1"
        >
          <AccordionItem
            value="item-1"
            className="w-full bg-gray-200 rounded-lg p-3"
          >
            <AccordionTrigger>
              <h2 className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                est adipisicing id ex adipisci.
              </h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1 text-balance">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis cupiditate impedit fugiat placeat modi odio vero facere
                quas laudantium aliquid!
              </p>
              <p>
                1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur, aliquam.
              </p>
              <p>2. Lorem, ipsum dolor.</p>
              <p>3. Lorem ipsum dolor sit amet.</p>
              <p>4. Lorem ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                recusandae nihil libero est eos cumque ad esse veritatis
                consequuntur facilis!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="w-full bg-gray-200 rounded-lg p-3 mt-2"
          >
            <AccordionTrigger>
              <h2 className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                est adipisicing id ex adipisci.
              </h2>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis cupiditate impedit fugiat placeat modi odio vero facere
                quas laudantium aliquid!
              </p>
              <p>
                1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur, aliquam.
              </p>
              <p>2. Lorem, ipsum dolor.</p>
              <p>3. Lorem ipsum dolor sit amet.</p>
              <p>4. Lorem ipsum dolor.</p>
              <p>
                5. Lorem ipsum dolor sit, amet adipisicing elit. Quas fugiat vel
                doloribus praesentium harum soluta.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                recusandae nihil libero est eos cumque ad esse veritatis
                consequuntur facilis!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <p className="p-5 flex justify-center items-center mb-[100px]">
        If you have any problems, please
        <span className="underline text-blue-400 hover:text-blue-300 ml-1">
          contact us
        </span>
      </p>
    </div>
  );
};
