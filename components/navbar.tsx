/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const router = useRouter()

  const homeLink = {
    name: 'Home',
    route: '/',
    current: '/' === router.asPath,
  }

  const mobileLinks = [homeLink]

  return (
    <Disclosure
      as="nav"
      className="w-full bg-white border-b-2 border-gray-700 md:mt-4 md:border-t-2"
    >
      {({ open }) => (
        <>
          <div className="px-4 w-full h-20 sm:px-6 md:px-8 md:h-16">
            <div className="relative flex justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="hover:bg-theme-background-dark items-center justify-center p-2 w-10 h-10 text-black hover:text-white focus:text-white focus:bg-gray-700 rounded-md focus:outline-none stroke-current"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="hover:bg-theme-background-dark items-center justify-center p-2 w-10 h-10 text-black hover:text-white focus:text-white focus:bg-gray-700 rounded-md focus:outline-none stroke-current"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
                <Link href="/">
                  <a
                    aria-label="Home"
                    className="inline-flex items-center w-64 hover:text-blue-600 duration-300 ease-linear"
                  >
                    Home
                  </a>
                </Link>
              </div>

              <div className="px-4 w-full h-20 sm:px-6 md:px-0 md:h-16">
                <div className="hidden items-center justify-between h-16 md:flex">
                  <Link aria-label="Home" href="/">
                    <a className="hidden items-center w-64 hover:text-blue-600 duration-300 ease-linear md:inline-flex">
                      <span className="pt-1 text-center font-serif font-bold">
                        Brand Title
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="pt-4 border-t-2 border-black md:hidden">
            <div className="flex flex-col pb-4 pt-2 px-4 space-y-1">
              {mobileLinks.map((item) => (
                <Link key={item.route} passHref href={item.route}>
                  <Disclosure.Button
                    as="a"
                    className={classNames(
                      item.current
                        ? ' cursor-default'
                        : 'hover:bg-theme-background-medium',
                      'pt-3 h-full border-b-2 border-black transition-colors duration-300'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
