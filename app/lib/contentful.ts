import { createClient } from 'contentful';

export async function getProjects() {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
        space: process.env.CONTENTFUL_SPACE_ID as string,
    });

    const entries = await client.getEntries({ content_type: 'project' });
    return entries.items;
}

export async function getProjectBySlug(slug: string) {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
        space: process.env.CONTENTFUL_SPACE_ID as string,
    });

    return await client.getEntries({
      content_type: 'project',
      'fields.slug': slug,
    });
}

export async function getCourses() {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
        space: process.env.CONTENTFUL_SPACE_ID as string,
    });

    const entries = await client.getEntries({ content_type: 'course' });
    return entries.items;
}
