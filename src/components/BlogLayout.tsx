import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { BlogMeta } from "@/constants/blogs";

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: BlogMeta;
}) {
  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Link
            href="/blog"
            aria-label="Back to all posts"
            className="inline-flex items-center gap-2 mb-6 text-sm text-secondary hover:text-primary transition font-heading"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-current" />
            All posts
          </Link>

          <Heading className="py-4">{meta.title}</Heading>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time dateTime={meta.date} className="text-sm text-secondary font-heading">
              {formatDate(meta.date)}
            </time>
            {meta.tags && meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-heading bg-mono-grey-100 text-night px-2 py-1 rounded-sm shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="w-full mt-2 rounded-2xl overflow-hidden shadow-md">
            <Image
              src={meta.image}
              alt={meta.title}
              height={600}
              width={1200}
              className="object-cover w-full max-h-96"
              priority
            />
          </div>
        </header>
        <Prose className="mt-8">{children}</Prose>
      </article>
    </Container>
  );
}
