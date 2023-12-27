import React from 'react'
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="font-cuy flex w-full bg-emerald-600  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center text-slate-50 md:justify-between">
      <Typography color="blue-gray" className="font-medium mx-10">
        &copy; 2023 Muhamad Iqbal Fauzi
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mx-10">
        <li>
          <Typography
            as="a"
            href="/about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="/about"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>

  )
}

export default Footer