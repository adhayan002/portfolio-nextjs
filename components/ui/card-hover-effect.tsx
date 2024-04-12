import { Meteors } from "../ui/meteors";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon:IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    > 
      {items.map((item, idx) => {
        const Icons=item.Icon
        return <div
          key={item?.text}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
         
         <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
              
            )}
            
          </AnimatePresence>
          <div className="rounded-2xl w-full p-4 cursor-pointer overflow-hidden bg-black group-hover:ring-2 ring-sky-300 relative z-20 transition-all duration-500">
                <div className="py-10 z-50 space-y-5">
                    <Icons className="w-8 h-8 mx-auto"/>
                    <p className="text-2xl font-bold text-center text-gray-300">{item.text}</p>
                    <Meteors number={20} className="absolute"/>
                </div>
                
          </div>
          
        </div>
      })}
    </div>
  );
};

