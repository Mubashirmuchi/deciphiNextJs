import Image from "next/image";
import { getStrapiURL } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string | null;
  className?: string;
  priority?: boolean;
  [key: string]: string | number | boolean | undefined | null;
}

export function StrapiImage({
  src,
  alt,
  className,
  priority = false,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image 
      src={imageUrl} 
      alt={alt || "No alt text provided."} 
      className={className} 
      priority={priority}
      loading={priority ? undefined : "lazy"}
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...rest} 
    />
  );
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL() + url;
}