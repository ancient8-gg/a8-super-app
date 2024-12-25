import Head from 'next/head'
import { ReactNode } from 'react'

interface SeoProps {
  title: string
  description: string
  url?: string
  image?: string
  children?: ReactNode
}

const SEO = ({
  title,
  description,
  url = 'https://app.ancient8.gg',
  image = 'https://ancient8-cms.s3.ap-southeast-1.amazonaws.com/A8none_56c0cb19f1.jpg',
  children,
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Head>
  )
}

export default SEO
