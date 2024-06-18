import React from 'react'

const Footer = () => {
  return (
    

<footer className="rounded-lg shadow m-4 dark:bg-gray-800 max-w-[95.5vw]">
    <div className="h-100 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/DebjitPal9" className="hover:underline">PassMan™</a>. No Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://steamcommunity.com/profiles/76561198868669770/" className="hover:underline me-4 md:me-6">Steam</a>
        </li>
        <li>
            <a href="https://github.com/DebjitPal9" className="hover:underline me-4 md:me-6">GitHub</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
