import type { MDXComponents } from "mdx/types";
import { CodeWindow } from "@/components/CodeWindow";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CodeWindow,
    ...components,
  };
}
