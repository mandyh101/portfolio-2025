"use client";
import { BlogMeta } from "@/constants/blogs";
import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import Link from "next/link";
import { formatDate } from "../../lib/formatDate";

export const Blogs = ({ blogs }: { blogs: BlogMeta[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 my-10">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.slug}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            href={`/blog/${blog.slug}`}
            className="block rounded-2xl bg-tropical-indigo-100 hover:bg-tropical-indigo-200 transition duration-200 shadow-md p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Image
                src={blog.image}
                alt={blog.title}
                height={200}
                width={200}
                className="rounded-lg object-cover h-40 w-full md:w-auto"
              />
              <div className="flex flex-col col-span-3">
                <Heading className="text-lg md:text-lg lg:text-lg">
                  {blog.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                  {blog.description}
                </Paragraph>
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-heading bg-mono-grey-100 text-night px-2 py-1 rounded-sm shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time
                  dateTime={blog.date}
                  className="mt-3 text-xs text-secondary font-heading"
                >
                  {formatDate(blog.date)}
                </time>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
