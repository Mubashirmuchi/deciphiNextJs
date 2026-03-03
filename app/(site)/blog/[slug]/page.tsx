import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "@/data/loaders";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MarkdownText } from "@/components/Common/markdown-text";
import { StrapiImage } from "@/components/Common/strapi-image";
import { PageWrapper } from "@/components/Common/PageWrapper";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ReatedPost = {
  slug: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  publishedAt: string;
};

const ArticlePage = async ({ params }: PageProps) => {
  const resolveParams = await params;

  const slug = await resolveParams?.slug;



  const post = await getBlogPostBySlug(slug);

  const categoryName = post?.category?.name || "";

  const relatedPosts = await getBlogPosts(1, "", categoryName, slug);

  if (!post) {
    notFound();
  }

  return (
  
  
      <PageWrapper>
      <div className="relative h-[60vh] w-full">
        {
       
          post.image && (
            <StrapiImage
              alt={post.image.alternativeText || ""}
              src={post.image.url}
              fill
              className="object-cover rounded-t-lg"
            />
          )
        }

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-4 pb-12 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm">
              <span>Mubashir M</span>
              <span>•</span>
              <time>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>

            {/* Article Content */}
            {post.content && (
              // <div className="container mx-auto max-w-4xl text-base leading-7">
              <MarkdownText content={post.content} />
              // </div>
            )}
            {post.category && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    #{post.category.name}
                  </span>
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title,
                  )}&url=${encodeURIComponent(
                    `https://deciphi.com/blog/${post.slug}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   className="p-2 rounded-full border border-gray-700"
                >
                  <TwitterIcon />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://deciphi.com/blog/${post.slug}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  //   className="p-2 rounded-full border border-gray-700"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                About the Author
              </h3>
              <p className="text-sm text-gray-700">
                Mubashir M is a cybersecurity expert specializing in
                enterprise security and digital transformation.
              </p>
            </div> */}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>

                <div className="space-y-4">


                  {relatedPosts.map((relatedPost:ReatedPost) => (
                    <Link
                      key={relatedPost?.slug}
                      href={`/blog/${relatedPost?.slug}`}
                      className="flex gap-3"
                    >
                      <div className="relative w-20 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={relatedPost?.image?.url || ""}
                          alt={relatedPost?.image?.alt ||""}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="text-sm font-medium">
                          {relatedPost?.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {new Date(
                            relatedPost?.publishedAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Link
                href="/blog"
                className="block w-full text-center px-4 py-3 bg-gray-900 text-white rounded-lg"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ArticlePage;


// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const resolveParams = await params;
//   const slug = await resolveParams?.slug;
//   const { isEnabled: isDraftMode } = await draftMode();
//   const status = isDraftMode ? "draft" : "published";

//   const data = await getBlogPostBySlug(slug, status);

//   if (!data?.data?.[0]) {
//     return {
//       title: "Next.js Strapi Preview",
//       description: "Next.js Strapi Preview",
//     };
//   }

//   const post = data.data[0];

//   return {
//     title: post.title,
//     description: post.description,
//   };
// }
