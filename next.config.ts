import type { Options } from '@mdx-js/loader'
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: {
      mdxType: 'gfm',
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'file.notion.so', pathname: '/**' },
      { protocol: 'https', hostname: 'd8n3.c1.e2-8.dev', pathname: '/**' },
      { protocol: 'https', hostname: 'developer.mozilla.org', pathname: '/**' },
    ],
  },
  pageExtensions: ['mdx', 'tsx'],
}

const withMDX = createMDX({
  options: {
    rehypePlugins: [['rehype-slug', {}]] as Options['rehypePlugins'],
  },
})

export default withMDX(nextConfig)
