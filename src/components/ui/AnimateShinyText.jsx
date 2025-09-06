import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "../../lib/utils";
import { AnimatedShinyText } from "../../components/magicui/animated-shiny-text";

export function AnimatedShinyTextUse() {
  return (
    <div className="z-10 flex items-center justify-center py-2">
      <div
        className={cn(
          "group rounded-full border border-gray-200 bg-gray-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-gray-200",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-gray-600 hover:duration-300">
          <span>💎 Introducing WorkPing</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
