const curYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='bg-theme-background-dark p-8 text-sm'>
      <div className='text-center text-base text-gray-600'>
        &copy; {curYear} Title
      </div>
    </footer>
  )
}
