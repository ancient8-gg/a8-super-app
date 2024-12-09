import React, { MouseEvent, TouchEvent, PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { UrlObject } from 'node:url'

type LinkExternalProps = Omit<
  LinkProps,
  'rel' | 'target' | 'prefetch' | 'href' | 'legacyBehavior'
> &
  PropsWithChildren & {
    href?: string | UrlObject
    className?: string
    onClick?: (event: MouseEvent | TouchEvent) => void
  }

function LinkExternal({ href, onClick, ...props }: LinkExternalProps) {
  const handleClick = (e: MouseEvent | TouchEvent) => {
    if (!href) e.preventDefault()
    if (onClick) onClick(e)
  }

  return (
    <Link
      href={href ? href : ''}
      rel="nofollow"
      target={href ? '_blank' : '_self'}
      prefetch={false}
      onClick={handleClick}
      {...props}
    />
  )
}

export default LinkExternal
