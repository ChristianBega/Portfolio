export interface ProjectPreviewProps {
  title: string;
  description: string;
  deployedLink: string;
  repoLink: string;
  imageUrl?: string;
  videoUrl: {
    mobile: string;
    desktop: string;
  };
}
