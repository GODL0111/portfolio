// Import placeholders instead of actual images that don't exist yet
import { 
  microcreditPlaceholder,
  creditAnalysisPlaceholder,
  webScrapePlaceholder,
  portfolioPlaceholder
} from '../assets/projects/placeholders';

// Project interface
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
}

// Project data
export const projects: Project[] = [
  {
    title: "Micro-Credit",
    description: "Instant Micro Credit solution for vendors. Built with Python, HTML, and JavaScript. The system tracks real-time transactions and updates credit limits dynamically, providing instant credit without civil score checks.",
    tags: ["Python", "HTML", "JavaScript", "Real-time Tracking"],
    image: microcreditPlaceholder,
    links: {
      github: "https://github.com/GODL0111",
      live: "https://example.com",
    },
  },
  {
    title: "Credit Analysis",
    description: "A credit card transaction analysis tool built with Power BI. The system analyzes monthly credit card transactions and provides targeted offers to users who perform the most transactions.",
    tags: ["Power BI", "Data Analysis", "Visualization", "Financial Analytics"],
    image: creditAnalysisPlaceholder,
    links: {
      github: "https://github.com/GODL0111",
      live: "https://example.com",
    },
  },
  {
    title: "WebScrape",
    description: "A data scraping tool developed using Python and BeautifulSoup. This tool efficiently tracks and extracts table data from user-provided links, automating the data collection process.",
    tags: ["Python", "BeautifulSoup", "Web Scraping", "Data Collection"],
    image: webScrapePlaceholder,
    links: {
      github: "https://github.com/GODL0111",
    },
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with dark/light theme, smooth animations, and interactive elements. Built with React, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: portfolioPlaceholder,
    links: {
      github: "https://github.com/GODL0111",
      live: "https://example.com",
    },
  },
];