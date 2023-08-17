import Image from "next/image";

type ImageField = {
  fields: {
    file: {
      url: string;
    };
  };
};

type SectionFields = {
  heading?: string;
  title: string;
  paragraph?: string;
  image?: ImageField;
};

type BodySectionProps = {
  section: {
    fields: SectionFields;
  };
  variant: "text-image" | "image-text" | "text-text" | "text-center" | "image";
};

const BodySection: React.FC<BodySectionProps> = ({ section, variant }) => {
  if (!section || !section.fields) return null;

  const { heading, title, paragraph, image } = section.fields;

  switch (variant) {
    case "text-image":
      return (
        <div className="flex flex-col lg:flex-row justify-between my-8 gap-4">
          <div className="sm:w-full lg:w-1/2">
            <h2 className="mb-2 text-sm tracking-widest font-semibold uppercase text-slate-400">
              {heading}
            </h2>
            <h2 className="text-xl tracking-wider font-semibold mb-2">
              {title}
            </h2>
            <p className="text-lg leading-8 font-light">{paragraph}</p>
          </div>
          <div className="sm:w-full lg:w-1/2 flex justify-center">
            <Image
              width={350}
              height={350}
              src={`https:${image?.fields.file.url}`}
              alt={`${title} case study image.`}
              className="rounded-xl"
            />
          </div>
        </div>
      );

    case "image-text":
      return <div></div>;

    case "text-text":
      return <div></div>;

    case "text-center":
      return <div></div>;

    case "image":
      return <div></div>;

    default:
      return null;
  }
};

export default BodySection;
