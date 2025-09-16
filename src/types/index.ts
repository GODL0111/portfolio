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

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormState = "idle" | "submitting" | "success" | "error";

export type Theme = "light" | "dark" | "system";