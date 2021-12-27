import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navLinks = [{ name: 'Articles', href: '/articles', current: false }]

export default function Navbar() {
  const router = useRouter()
  navLinks.forEach((n) => {
    n.current = n.href === router.route
  })

  return (
    <div className="w-full bg-blue-50">
      <header className="flex px-6 h-20 space-x-12">
        <Link href="/">
          <a className="group inline-flex items-center">
            <div className="relative w-10 h-10">
              <Image
                alt="Gluten Free"
                className="rounded-full"
                src="/icon.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="ml-2 group-hover:text-blue-600 font-medium">
              Title
            </h1>
          </a>
        </Link>

        <nav className="flex space-x-6">
          <div className="hidden items-center space-x-6 sm:flex">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={classNames(
                    item.current
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-blue-600',
                    'transform-colors inline-flex items-center pt-1 px-1 text-sm font-medium border-b-2 duration-200'
                  )}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  )
}
