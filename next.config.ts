import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for static export
  // Pin the workspace root to this worktree (a parent lockfile would otherwise be inferred).
  outputFileTracingRoot: __dirname,
}

export default nextConfig
