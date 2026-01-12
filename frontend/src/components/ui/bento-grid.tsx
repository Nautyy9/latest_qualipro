import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "../../lib/utils";
import { Button } from "./button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid md:w-2/3 lg:w-full  auto-rows-[22rem] lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  img,
  img2
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  img?: string;
  img2?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl px-6 pb-6 pt-12",
      "shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2",
      className,
    )}
  >
    <div>{background}</div>

    {/* Image Background - Only shown if img exists */}
    {img && (
      <div className=" hidden lg:block z-10  group-hover:opacity-20 transition-opacity duration-300">
        <img src={img} alt={name} className="w-full h-72 m-auto object-fill" />
      </div>
    )}
    {img2 && (
      <div className="z-10 hidden lg:block group-hover:opacity-20 transition-opacity duration-300">
        <img src={img2} alt={name} className="w-full h-72 m-auto object-fill" />
      </div>
    )
    }

    <div className="pointer-events-none mb-2 z-10 flex transform-gpu flex-col gap-3    transition-all duration-300 group-hover:-translate-y-8">
      <div className="w-12 h-12 bg-blue-200/50 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="h-6 w-6 text-blue-600 transition-all duration-300 ease-in-out" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-semibold" style={{ color: '#202020' }}>
        {name}
      </h3>
      <p className="max-w-lg leading-relaxed" style={{ color: '#202020' }}>{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center pl-0 py-4 pr-4  opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-blue-600 hover:bg-blue-100 transition-all duration-300 group/btn hover:scale-110">
        <a href={href}>
          {cta}
          <ArrowRightIcon className=" h-4 w-4 group-hover/btn:translate-x-2 group-hover/btn:scale-125 group-hover/btn:-rotate-45 transition-all duration-500" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-blue-50/30" />
  </div>
);

export { BentoCard, BentoGrid };
