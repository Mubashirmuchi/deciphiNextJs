import Link from "next/link";
import { StrapiImage } from "@/components/Common/strapi-image";
import { Card, CardContent } from "@/components/ui/card";
import { PaginationComponent } from "@/components/Common/pagination";
import { formatDate } from "@/lib/utils";
import { getBlogPosts } from "@/data/loaders";
import { Button } from "@/components/ui/button";
import { CategorySelect } from "@/components/Common/category-select";
import { Search } from "@/components/Common/search";
import { PageWrapper } from "@/components/Common/PageWrapper";
import { Suspense } from "react";
import { LoaderFour } from "@/components/ui/loader";

interface PageProps {
  searchParams: Promise<{ page?: string; query?: string; category?: string }>;
}

export interface PostProps {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  image: {
    id: number;
    documentId: string;
    url: string;
    alternativeText: null | string;
    name: string;
  };
  category: {
    id: number;
    documentId: string;
    name: string;
  };
}

export default async function BlogRoute({ searchParams }: PageProps) {
  const resolveParams = await searchParams;
  const currentPage = Number(resolveParams?.page) || 1;
  const query = resolveParams?.query ?? "";
  const category = resolveParams?.category ?? "";

  const { data, meta } = await getBlogPosts(currentPage, query, category);

  const total = Number(meta?.pagination?.pageCount);
  const totalData = Number(meta?.pagination?.total);

  const posts = data as PostProps[];

  return (
    <section>
      <PageWrapper>
        <div className="bg-(--color-neutral-1)">
          <div className="flex  flex-col gap-8 w-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-5 md:pt-40 pt-40">
            {/* Top content */}
            <Button
              variant={"outline"}
              className="border border-black/10 relative bg-white"
            >
              <div className="bg-green-600 w-2 h-2 rounded-full mr-2"></div>
              BLOGS
            </Button>

            <h1 className=" text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-rethink font-medium leading-relaxed md:leading-relaxed xl:leading-snug text-gray-900 ">
              The latest Trends , Events and
              <br />
               Articles 
              <span className="bg-[#E85744] text-white p-2 rounded">
                on Cyber Securityty.
              </span>
            </h1>

            <p className=" text-center text-base sm:text-lg font-arial leading-relaxed text-gray-600 max-w-2xl">
              Get strategic, expert-driven guidance to build and scale a
              resilient security program that fits your goals.
            </p>
            <CategorySelect />
            <Search />
            <Suspense fallback={<LoaderFour />}>
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {posts &&
                  posts.map((item: PostProps) => {
                    return (
                      <Link href={"/blog/" + item.slug} key={item.documentId}>
                        <Card className="h-full shadow-lg border-none group cursor-pointer transition-all duration-300 hover:shadow-xl">
                          <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                            {item.image && (
                              <div className="relative h-52 w-full">
                                <StrapiImage
                                  alt={item.image.alternativeText || ""}
                                  src={item.image.url}
                                  fill
                                  className="object-cover rounded-t-lg"
                                />
                              </div>
                            )}
                            <div className="flex flex-1 flex-col gap-4 px-5">
                              <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600 group-hover:underline">
                                {item.title}title
                              </h4>
                              <p className="mb-auto text-muted-foreground ">
                                {item.description}
                              </p>
                              <div className="flex items-center gap-3">
                                <span className="rounded-full  outline-1 outline-primary text-primary px-3 py-0.5 text-sm">
                                  {item?.category?.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {formatDate(item.publishedAt)}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
              </div>
            </Suspense>

            {totalData > 8 && <PaginationComponent pageCount={total} />}
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}
