import Link from 'next/link'
/* This example requires Tailwind CSS v2.0+ */

const curYear = new Date().getFullYear()

const navigation = {
  main: [{ name: 'Content Example', href: '/content-example' }],
}

export default function Example() {
  return (
    <footer className="bg-theme-background-dark p-8 text-sm">
      <div className="mx-auto px-4 max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="flex flex-col justify-center pt-4 md:flex-row"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2 text-center">
              <Link href={item.href}>
                <a className="hover:text-blue-400 text-gray-400 underline text-base">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-gray-400 text-base">
          &copy; {curYear} Brand Title
        </p>
      </div>
    </footer>
  )
}
