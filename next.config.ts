import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: {
      mdxType: 'gfm',
    },
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'file.notion.so', pathname: '/**' }],
  },
  pageExtensions: ['mdx', 'tsx'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
