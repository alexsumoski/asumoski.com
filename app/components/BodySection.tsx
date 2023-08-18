import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type BodySectionProps = {
  section: any;
  variant: "contentSection" | "contentImage" | "contentCenter";
};

const BodySection: React.FC<BodySectionProps> = ({ section, variant }) => {
  if (!section || !section.fields) return null;

  const { title, image, imagePosition, content } = section.fields;

  const bodyContent = documentToReactComponents(content, {
    renderNode: {
      "heading-2": (node, children) => (
        <h2 className="text-4xl mb-4 font-bold">{children}</h2>
      ),
      "heading-3": (node, children) => (
        <h3 className="text-xl font-semibold">{children}</h3>
      ),
      paragraph: (node, children) => (
        <p className="text-lg leading-8 mb-4 text-neutral-400">{children}</p>
      ),
      "unordered-list": (node, children) => (
        <ul className="list-decimal pl-5">{children}</ul>
      ),
      "list-item": (node, children) => (
        <li className="list-disc text-neutral-400">{children}</li>
      ),
    },
  });

  switch (variant) {
    case "contentSection":
      return (
        <div className="flex flex-col lg:flex-row justify-between my-8 gap-8">
          <div className="sm:w-full lg:w-1/2">{bodyContent}</div>
          <div className="sm:w-full lg:w-1/2 flex justify-center">
            {image && (
              <Image
                width={400}
                height={400}
                src={`https:${image.fields.file.url}`}
                alt={`${title} case study image.`}
                className="rounded-xl"
              />
            )}
          </div>
        </div>
      );

    case "contentImage":
      return (
        <div className="flex flex-col md:flex-row justify-center my-[12rem] gap-8">
          {imagePosition === "left" && (
            <div className="sm:w-full lg:w-1/2">
              <Image
                width={450}
                height={450}
                src={`https:${image.fields.file.url}`}
                alt={`${title} case study image.`}
                className="rounded-xl"
              />
            </div>
          )}
          <div className="sm:w-full lg:w-1/2">{bodyContent}</div>
          {imagePosition === "right" && (
            <div className="sm:w-full lg:w-1/2">
              <Image
                width={450}
                height={450}
                src={`https:${image.fields.file.url}`}
                alt={`${title} case study image.`}
                className="rounded-xl"
              />
            </div>
          )}
        </div>
      );
    case "contentCenter":
      return (
        <div className="flex m-auto flex-col max-w-[700px] items-center my-[6rem] p-6 border-gray-800 rounded-xl">
          {documentToReactComponents(content)}
        </div>
      );

    default:
      return <div>{JSON.stringify(section)}</div>;
  }
};

export default BodySection;
