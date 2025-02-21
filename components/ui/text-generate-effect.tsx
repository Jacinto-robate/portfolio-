"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { LinkPreview } from "components/ui/link-preview";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.8,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  // Lista de palavras importantes para destacar
  const importantName = "Jacinto Sérgio Robate";
  const portfolioUrl =
    "https://private-user-images.githubusercontent.com/195300426/404854805-1a902361-a59f-4162-8267-94d9142c18fb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzczNzIyNTIsIm5iZiI6MTczNzM3MTk1MiwicGF0aCI6Ii8xOTUzMDA0MjYvNDA0ODU0ODA1LTFhOTAyMzYxLWE1OWYtNDE2Mi04MjY3LTk0ZDkxNDJjMThmYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyMFQxMTE5MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZDg0NTUxMjJlYzcxNjdiNGJmZDJiMjRlMGYwNzc4MDliNTMxYjNhYjk0NGUyYjQzYjZkOWIxYjUzZjhmYzBmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bivCuAu-x1cNjAulurJnqrS59CGXJ1EHQGffhTAJQxs"; // Replace with actual portfolio URL

  // Função para formatar o texto em parágrafos
  const formatText = (text: string) => {
    return text.split("\n\n").filter((paragraph) => paragraph.trim() !== "");
  };

  // Quebra o texto em parágrafos
  const paragraphs = formatText(words);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderParagraph = (paragraph: string, paragraphIndex: number) => {
    const wordsArray = paragraph.trim().split(" ");
    let skipWords = 0;

    return (
      <motion.div key={paragraphIndex} ref={scope} className="mb-6">
        {wordsArray.map((word, idx) => {
          if (skipWords > 0) {
            skipWords--;
            return null;
          }

          // Check if current word starts the important name
          const nextWords = wordsArray.slice(idx, idx + 3).join(" ");
          if (nextWords.includes(importantName)) {
            skipWords = 2; // Skip next 2 words as they're part of the name
            return (
              <motion.span
                key={word + idx}
                className="opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                <LinkPreview
                  url={portfolioUrl}
                  className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text font-medium text-transparent"
                >
                  {importantName}
                </LinkPreview>{" "}
              </motion.span>
            );
          }

          return (
            <motion.span
              key={word + idx}
              className={cn(
                "text-lg font-light opacity-0 md:text-xl lg:text-2xl",
                "text-white"
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-8 space-y-6">
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="leading-relaxed tracking-wide">
            {renderParagraph(paragraph, index)}
          </div>
        ))}
      </div>
    </div>
  );
};
