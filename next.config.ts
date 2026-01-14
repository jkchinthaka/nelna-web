import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const projectRoot = __dirname;

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  reactCompiler: false,
};

export default withPayload(nextConfig);
