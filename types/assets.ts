
// export const infoList = [
//     { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }

import { StaticImageData } from "next/image";

// ];
export interface InfoItem {
    icon: StaticImageData;      // Represents an image element for the icon
    iconDark: StaticImageData;  // Represents an image element for the dark mode icon
    title: string;               // Title of the info item
    description: string;         // Description providing additional details
}

// export const toolsData = [
//     assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
// ];

