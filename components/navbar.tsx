import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full bg-blue-50'>
      <header className='flex h-20 space-x-12 px-6'>
        <Link href='/' className='group inline-flex items-center'>
          <>
            <div className='relative h-10 w-10'>
              <Image
                alt='Logo'
                className='overflow-hidden rounded-full'
                src='/icon.png'
                fill={true}
              />
            </div>
            <h1 className='ml-2 font-medium group-hover:text-blue-600'>
              Title
            </h1>
          </>
        </Link>
      </header>
    </div>
  )
}
