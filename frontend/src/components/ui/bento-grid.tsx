import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import AnimatedIcon from "./animated-icon";

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
  img2,
  stats,
  features
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
  stats?: Array<{ value: string; label: string }>;
  features?: Array<{ icon: any; title: string; description: string }>;
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

    {/* Top Image for tall cards */}


    <div className="pointer-events-none mb-2 z-10 flex transform-gpu flex-col gap-3 transition-all duration-300 group-hover:-translate-y-8">
      <AnimatedIcon
        icon={<Icon className="h-6 w-6 text-blue-600 transition-all duration-300 ease-in-out" strokeWidth={2} />}
        triggerOnScroll={true}
        size="md"
        centered={false}
        className="bg-blue-200/50 rounded-lg flex-shrink-0"
      />
      <h3 className="text-xl font-semibold" style={{ color: '#202020' }}>
        {name}
      </h3>
      <p className="max-w-lg leading-relaxed text-sm" style={{ color: '#202020' }}>{description}</p>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-2">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-blue-50/50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <div className="space-y-2 mt-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="mt-1 p-1.5 bg-blue-100/50 rounded">
                <feature.icon className="h-4 w-4 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-800">{feature.title}</div>
                <div className="text-xs text-gray-600">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
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
