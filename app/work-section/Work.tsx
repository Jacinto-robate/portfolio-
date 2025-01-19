"use client";
import React from "react";
import Image from "next/image";
import { Carousel, Card } from "components/ui/apple-cards-carousel";
import AnimatedTitle from "@/animations/AnimatedTitle";

const Work = () => {
  const DummyContent = ({ description }: { description: string }) => {
    return (
      <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-4 dark:bg-neutral-800 md:p-8">
        <p className="mx-auto max-w-3xl font-sans text-sm text-neutral-600 dark:text-neutral-400 md:text-xl">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {description}
          </span>
        </p>
        <div className="mx-auto mt-4 w-full md:w-1/2">
          <img
            src="/nexus.png"
            alt="Project preview"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    );
  };

  const products = [
    {
      category: "Development",
      title: "Nexus",
      src: "/projects/",
      content: (
        <DummyContent description="Em breve...! projetos mais recentes estarão disponíveis." />
      ),
    },
    {
      category: "Development",
      title: "Nexus",
      src: "/projects/",
      content: (
        <DummyContent description="Em breve...! projetos mais recentes estarão disponíveis." />
      ),
    },
    {
      category: "Development",
      title: "Nexus",
      src: "/projects/",
      content: (
        <DummyContent description="Em breve...! projetos mais recentes estarão disponíveis." />
      ),
    },
  ];

  const cards = products.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section
      className="relative z-10 w-full bg-[#0E1016] py-8 md:py-16"
      id="work"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header with reduced bottom margin */}
        <div className="mb-6 text-center sm:mb-8 lg:mb-6">
          <AnimatedTitle
            text="PROJETOS EM DESTAQUE"
            className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            wordSpace="mr-2 sm:mr-3"
            charSpace="mr-[0.01em] sm:mr-[0.02em]"
          />
          {/* Gradient Container with reduced height */}
          <div className="relative mx-auto h-8 w-full max-w-4xl">
            <div className="absolute left-[10%] right-[10%] top-0 h-[2px] w-[80%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute left-[10%] right-[10%] top-0 h-px w-[80%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute left-[25%] right-[25%] top-0 h-[5px] w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute left-[25%] right-[25%] top-0 h-px w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Work;
