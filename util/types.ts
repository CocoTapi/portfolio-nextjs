import { ReactNode } from "react";
import { colorSchemes } from "@/components/UI/color-schemes";
// import { StaticImage_Data } from "next/image";

// data
export interface Course_List {
    media_id: number,
    name: string,
    link: string
}

export interface MediaData {
    gitHub: string,
    linkedIn: string,
    email: string
}

// interface OnlineCourses {
//     [key: number]: string
// }

export interface ProfileData {
    my_email: string;
    top_page_description: string;
    short_self_introduction: string;
    long_self_introduction1: string;
    long_self_introduction2: string;
    long_self_introduction3: string;
    long_self_introduction4: string;
    hobbies: string;
    social_media: MediaData;
    skills: string[];
    professional_development: Course_List[];
}

interface Feature {
    id: number;
    title: string;
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3?: string;
    paragraph_4?: string;
    imgURL?: string;
}

interface Challenge {
    id: number;
    title: string;
    paragraph_1: string;
    paragraph_2?: string;
    paragraph_3?: string;
    paragraph_4?: string;
    paragraph_5?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;


}

interface CodeSample {
    frontend_url: string;
    backend_url?: string
}

interface ProjectDetails {
    project_description: string;
    frontend_tech: string[];
    backend_tech: string[];
    tools_tech: string[];
    deployment_tech: string[];
    my_roles: string;
    ui_img?: string;
    ui_description?: string,
    frontend_features: Feature[];
    backend_features?: Feature[];
    challenges?: Challenge[];
    frontend_deployment?: string;
    backend_deployment?: string;
    code_samples: CodeSample;
    outcomes_and_improvements: string;
}

export interface ProjectData {
    project_id: number;
    project_title: string;
    onGoing: boolean,
    slug: string;
    project_url: string;
    video: string;
    topImg: string;
    project_summary: string;
    tech_list: string[];
    tech_summary: string;
    project_details: ProjectDetails;
}

export interface ProjectsData {
    projects: ProjectData[];
}

//color scheme
export interface ColorScheme {
    textColor: string;
    backgroundColor: string;
    borderColor: string;
    backgroundImage?: string
}

// Define the valid keys for color schemes
type ColorSchemeKey = keyof typeof colorSchemes;



// props
export interface NavLinkProps {
    href: string;
    children: string;
}

export interface ButtonProps {
    className?: string;
    children: ReactNode;
    colorScheme?: ColorSchemeKey;
    [key: string]: any;
}

export interface ButtonStyle {
    color: string;
    backgroundColor: string;
    borderColor: string;
    backgroundImage?: string;
};

export interface ProjectProps {
    project: ProjectData
}

export interface ProfileProps {
    profile: ProfileData
}

export interface DetailCardProps {
    item: Challenge
}

export interface DemoVideoProps {
    path: string;
    className: string;
};

export interface TagFrameProps {
    title: string;
    tagList: string[];
};

export interface CordSampleProps {
    frontendUrl: string,
    backendUrl?: string;
}

export interface FullTechProps {
    frontend: string[],
    backend: string[],
    tools: string[],
    deployment: string[]
}

export interface FeaturesProps {
    featureList: Feature[] | Challenge[]
}

export interface DeploySectionProps {
    frontend: string | undefined,
    backend?: string | undefined
}

export interface DetailSectionProps {
    title: string;
    children: ReactNode;
}
