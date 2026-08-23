import { ProjectData } from '@/util/types';
import { projects_data } from './data';

export function getProjectSlugs() {
  return projects_data.projects.map((p) => ({
    projectSlug: p.slug,
  }));
}

export async function getProject(slug: string): Promise<ProjectData | undefined> {
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    const project = projects_data.projects.find((project) =>
        project.slug === slug
    );

    return project ? project : undefined;
}