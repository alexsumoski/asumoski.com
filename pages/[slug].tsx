import { GetStaticPaths, GetStaticProps } from "next";
import { getProjectBySlug, getProjects } from "@/app/lib/contentful";
import Layout from "@/app/layout/Layout";
import Container from "@/app/layout/Container";
import { FiCode, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import Button from "@/app/common/Button";
import Status from "@/app/common/Status";

interface ProjectDetailProps {
  project: {
    fields: {
      logo: string;
      title: string;
      subtitle: string;
      description: string;
      codeLink: string;
      externalLink: string;
      desktopImage: any;
      mobileImage: any;
      caseImage: any;
      technology: string[];
      slug: string;
      body: any;
    };
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const {
    logo,
    title,
    subtitle,
    description,
    codeLink,
    externalLink,
    desktopImage,
    mobileImage,
    caseImage,
    technology,
    slug,
    body,
  } = project.fields;

  const bodyContent = documentToReactComponents(body, {
    renderNode: {
      "heading-2": (node, children) => (
        <h2 className="text-4xl font-bold">{children}</h2>
      ),
      "heading-3": (node, children) => (
        <h3 className="text-2xl font-semibold">{children}</h3>
      ),
      paragraph: (node, children) => (
        <p className="text-lg leading-8 mb-4">{children}</p>
      ),
    },
  });

  return (
    <Container>
      <Layout title={`${title} Project`} description={description}>
        <div className="relative mt-20 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h1 className="text-6xl mb-2">{title} Case Study</h1>
              <h3 className="text-2xl">{subtitle}</h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between my-8 gap-4">
            <div className="sm:w-full lg:w-1/2">
              <Image
                width={2000}
                height={2000}
                src={`https:${caseImage.fields.file.url}`}
                alt={`${title} case study image.`}
                className="rounded-xl"
              />
            </div>

            <div className="relative flex flex-col gap-6 p-6 rounded-xl sm:w-full lg:w-1/2 overflow-visible border-[1px] border-gray-800 bg-gradient-to-r justify-between">
              <div className="absolute right-6">
                <Status status="continuousImprovement" />
              </div>
              <div>
                <span className="text-gray-500">Project Goals</span>
                <ul className="flex flex-col gap-1 mt-2 list-disc pl-4">
                  <li className="list-item">
                    Front-end practice, learning Tailwind CSS.
                  </li>
                  <li className="list-item">
                    Implementing a Google provider sign-in.
                  </li>
                  <li className="list-item">
                    Enhancing my knowledge of Next.js.
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-gray-500">
                  Technologies & Libraries Used
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {technology.map((technology: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
                      }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full border cursor-default text-sm border-gray-800 bg-transparent px-4 pt-1 pb-2"
                    >
                      <span className="flex translate-y-[1px]">
                        {technology}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Button
                  label="View Live App"
                  size="large"
                  disabled={!externalLink}
                  fullWidth
                  link={externalLink}
                />
                <Button
                  label="View Source Code"
                  size="large"
                  variant="black"
                  disabled={!codeLink}
                  fullWidth
                  link={codeLink}
                />
              </div>
            </div>
          </div>
          <div className="mt-32 max-w-3xl">{bodyContent}</div>
        </div>
      </Layout>
    </Container>
  );
};

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects();
  const paths = projects.map((project: any) => ({
    params: { slug: project.fields.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const projectData = await getProjectBySlug(slug);
  const project = projectData.items[0];
  return { props: { project } };
};
