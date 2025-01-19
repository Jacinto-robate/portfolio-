"use client";
import React from "react";
import { Terminal, Code, ChartNoAxesCombined } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "components/ui/text-generate-effect";
import { GlareCard } from "components/ui/glare-card";

export const AnimatedTitle = ({
  text,
  className = "",
  wordSpace = "",
  charSpace = "",
}: {
  text: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
}) => {
  return (
    <div className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className={`inline-block ${wordSpace}`}>
          {word.split("").map((char, j) => (
            <span
              key={j}
              className={`inline-block ${charSpace} animate-fade-in`}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const words = `Sou Jacinto Sérgio Robate um desenvolvedor full-stack especializado em tecnologias modernas como Node.js, React, Next.js, TypeScript e GraphQL. Tenho experiência no desenvolvimento de aplicações web, móveis e desktop, e integrações com inteligência artificial.
  
  Além disso, sou especialista em hacking ético e segurança da informação, focando em testes de intrusão e análise de vulnerabilidades.`;

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-8 lg:mb-6">
          <AnimatedTitle
            text="SOBRE MIM"
            className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            wordSpace="mr-2 sm:mr-3"
            charSpace="mr-[0.01em] sm:mr-[0.02em]"
          />
          <div className="relative mx-auto h-8 w-full max-w-4xl">
            <div className="absolute left-[10%] right-[10%] top-0 h-[2px] w-[80%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute left-[10%] right-[10%] top-0 h-px w-[80%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute left-[25%] right-[25%] top-0 h-[5px] w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute left-[25%] right-[25%] top-0 h-px w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
        </div>

        <div
          ref={ref}
          className={`mx-auto mb-16 max-w-4xl px-4 text-xl transition-opacity duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {inView && <TextGenerateEffect words={words} />}
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:gap-12 md:gap-16 lg:gap-20">
            <GlareCard className="rounded-xl p-6 shadow-lg">
              <div className="flex h-full flex-col justify-end space-y-4">
                <div className="flex items-center gap-3">
                  <Terminal className="h-8 w-8 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Expertise Técnica
                  </h3>
                </div>
                <p className="text-sm text-gray-300">
                  Domínio avançado das tecnologias mais modernas, garantindo
                  código limpo, manutenível e otimizado para performance.
                  Experiência com React, TypeScript e as melhores práticas de
                  desenvolvimento.
                </p>
              </div>
            </GlareCard>

            <GlareCard className="rounded-xl p-6 shadow-lg">
              <div className="flex h-full flex-col justify-end space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="h-8 w-8 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Comprometimento
                  </h3>
                </div>
                <p className="text-sm text-gray-300">
                  Dedicação total aos projetos, com comunicação clara e
                  transparente. Cumprimento rigoroso de prazos e disponibilidade
                  para ajustes e melhorias contínuas no produto.
                </p>
              </div>
            </GlareCard>

            <GlareCard className="rounded-xl p-6 shadow-lg">
              <div className="flex h-full flex-col justify-end space-y-4">
                <div className="flex items-center gap-3">
                  <ChartNoAxesCombined className="h-8 w-8 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Inovação</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Foco em soluções criativas e inovadoras, aliando design
                  atraente com usabilidade. Experiência em criar interfaces
                  modernas e responsivas que encantam os usuários.
                </p>
              </div>
            </GlareCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
