import { GetStaticPaths, GetStaticProps } from "next";
import { getProjectBySlug, getProjects } from "@/app/lib/contentful";
import Layout from "@/app/layout/Layout";

interface ProjectDetailProps {
  project: {
    fields: {
      logo: string;
      title: string;
      subtitle: string;
      description: string;
      codeLink: string;
      externalLink: string;
      desktopImage: string;
      mobileImage: string;
      technologies: string[];
      slug: string;
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
    technologies,
    slug,
  } = project.fields;

  return (
    <Layout title={`${title} Project`} description={description}>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* Render other project details */}
      </div>
    </Layout>
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
  console.log("slug", slug);

  const projectData = await getProjectBySlug(slug);
  const project = projectData.items[0];
  return { props: { project } };
};
