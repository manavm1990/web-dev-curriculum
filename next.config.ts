import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'tsx'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
