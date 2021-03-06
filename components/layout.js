/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import foosballIcon from '../public/icons/table-football.png';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-4 ">
          <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full h-full">
            <ul className="flex sm:flex-col overflow-hidden content-center justify-center">
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link href="/">
                  <a className="truncate">
                    <img
                      alt="home"
                      src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg"
                      className="w-7 sm:mx-2 mx-4 inline"
                    />
                    <span className="hidden sm:inline">Home</span>
                  </a>
                </Link>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link href="/players">
                  <a className="truncate">
                    <img
                      src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/user-group.svg"
                      className="w-7 sm:mx-2 mx-4 inline"
                    />
                    <span className="hidden sm:inline">Players</span>
                  </a>
                </Link>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <Link href="/teams">
                  <a className="">
                    <img
                      src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/collection.svg"
                      className="w-7 sm:mx-2 mx-4 inline"
                    />
                    <span className="hidden sm:inline">Teams</span>
                  </a>
                </Link>
              </li>
              <li className="py-2 hover:bg-indigo-300 rounded">
                <a className="" href="#">
                  <img
                    src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/chart-bar.svg"
                    className="w-7 sm:mx-2 mx-4 inline"
                  />
                  <span className="hidden sm:inline">Standings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <main role="main" className="w-full flex-grow pt-1 px-3">
          <h1 className="text-3xl md:text-5xl mb-4 font-extrabold" id="home">
            Itera Foosball {/* <div> */}
            <Image src={foosballIcon} width={70} height={70} />
            {/* </div> */}
          </h1>
          {children}
          {/* <p className="py-2">
            Are you in search of this? In terms of Web design,
            <a
              className="text-indigo-600"
              href="https://en.wikipedia.org/wiki/Holy_grail_(web_design)"
            >
              the holy grail is a page layout
            </a>
            that has 3 columns. It is commonly desired and implemented, but for
            many years, the various ways in which it could be implemented with
            available technologies all had drawbacks. Because of this, finding
            an optimal implementation was likened to searching for the elusive
            Holy Grail.
          </p>
          <p className="py-2">
            As of 2021, the Holy Grail layout is implemented using CSS Flexbox
            or CSS Grid display. For this example, we&apos;re using the
            <a className="text-indigo-600" href="https://tailwindcss.com/">
              Tailwind CSS
            </a>
            utility framework. As part of it&apos;s default classes, Tailwind
            includes
            <a
              className="text-indigo-600"
              href="https://tailwindcss.com/docs/flex-direction"
            >
              Flexbox classes
            </a>
            which make this implementation possible. The holy grail example is
            also responsive so that the layout stacks vertically on smaller
            mobile screens.
          </p>
          <p className="py-2">
            Many web pages require a layout with multiple (often three) columns,
            with the main page content in one column (often the center), and
            supplementary content such as menus and advertisements in the other
            columns (sidebars). These columns commonly require separate
            backgrounds, with borders between them, and should appear to be the
            same height no matter which column has the tallest content. A common
            requirement is that the sidebars have a fixed width, with the center
            column adjusting in size to fill the window (fluid or liquid
            layout). Another requirement is that, when a page does not contain
            enough content to fill the screen, the footer should drop to the
            bottom of the browser window instead of leaving blank space
            underneath.
          </p> */}
          {/* <div className="flex p-3 bg-indigo-600 rounded text-white hidden md:flex">
            <span className="flex-shrink overflow-hidden whitespace-nowrap">
              &lt;--------
            </span>
            <div className="flex-grow flex-shrink-0 overflow-ellipsis text-center">
              This center column is fluid so it grows in width as needed!
            </div>
            <span className="flex-shrink overflow-hidden whitespace-nowrap">
              --------&gt;
            </span>
          </div> */}
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
          <div className="flex sm:flex-col px-2">
            <div className="bg-gray-50 rounded-xl border mb-3 w-full">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block text-indigo-600">
                    Think of stuff to put here!
                  </span>
                </h2>
              </div>
            </div>
            <div className="p-2"></div>
            <div className="bg-gray-100 rounded-xl mb-3 w-full">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block">Will you win?</span>
                </h2>
              </div>
            </div>
            <div className="p-2"></div>
            <div className="bg-gray-50 rounded-xl border mb-3 w-full">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block text-indigo-600">hello :)</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black mt-auto">
        <div className="p-5 text-white mx-auto">
          <h1 className="text-2xl">Footer</h1>
          <div className="flex">
            <div className="flex-grow flex flex-col">
              <Link href="#">
                <a>Footerlink</a>
              </Link>
            </div>
            <div className="flex-grow flex flex-col">
              <Link href="#">
                <a>Footerlink</a>
              </Link>
            </div>
            <div className="flex-grow flex flex-col">
              <Link href="#">
                <a>Footerlink</a>
              </Link>
            </div>
            <div className="flex-grow flex flex-col">
              <Link href="#">
                <a>Footerlink</a>
              </Link>
            </div>
          </div>
          <div className="text-right text-xs py-4 flex-col flex">
            <Link href="https://www.codeply.com/p/GjhokDqdk6">
              <a>Layout source</a>
            </Link>
            <Link href="https://www.flaticon.com/free-icons/table-football">
              <a title="table football icons">
                Table football icons created by Freepik - Flaticon
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
