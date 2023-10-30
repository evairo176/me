import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SocialLink = ({
  platform,
  link,
  isShareURL = false,
}: {
  platform: string;
  link: string;
  isShareURL?: boolean;
}) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={12} />;
      case "github":
        return <Github size={12} />;
      case "linkedin":
        return <Linkedin size={12} />;
      case "twitter":
        return <Twitter size={12} />;
      case "instagram":
        return <Instagram size={12} />;
      default:
        return;
    }
  };

  return (
    <Link href={link}>
      <div
        className={
          isShareURL
            ? "rounded-md bg-muted px-3 py-2 transition-colors duration-100 hover:bg-primary-foreground"
            : ""
        }
      >
        {getIcon(platform)}
      </div>
    </Link>
  );
};

export default SocialLink;
