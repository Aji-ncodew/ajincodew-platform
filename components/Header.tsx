'use client'

import { useTheme } from 'next-themes' // Import next-themes to handle theme switching
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoDark from '@/data/logo-dark.svg' // Light logo for dark mode
import LogoLight from '@/data/logo-light.svg' // Dark logo for light mode
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useEffect, useState } from 'react'

const Header = () => {
  const [mounted, setMounted] = useState(false) // Add mounted state to track client-side rendering
  const { theme, resolvedTheme } = useTheme()

  // Delay rendering until after the component is mounted (client-side only)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch until mounted
  if (!mounted) return null // Optionally, you could return a loading state here

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            {/* Conditionally render the correct logo based on the resolved theme */}
            {resolvedTheme === 'dark' ? <LogoDark /> : <LogoLight />}
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
