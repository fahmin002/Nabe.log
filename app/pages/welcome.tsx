import { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { Navbar } from "~/layout/navbar";
import { countryNumbers } from "~/lib/countryNumber";
export default function Welcome(props: any) {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleCountryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setCountryCode(event.target.value);
  }
// error
  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    let inputNumber = event.target.value;
    setPhoneNumber(inputNumber);
    // Pastikan input tidak mengandung kode negara dua kali
    // if (inputNumber.startsWith(countryCode)) {
    //   setPhoneNumber(inputNumber);
    // } else {
    //   setPhoneNumber(countryCode + inputNumber.replace(/^\+\d+/, ""));
    // }
  }
  const hobbies = [
    { title: 'Programming', desc: "I've learn programming for about 4 Years, my first language is Visual Basic 6, but now i just focus on web programming and little bit about game development.", icon: FaCode},
    { title: 'Gaming', desc: "I like old games and consoles, Sony's PSP, PS2, and PS1 is one of my favourite. My favourite genre is Action, RPG, but games like monster hunting is special for me.", icon: IoGameControllerOutline},
    { title: 'Content Creation', desc: "Being a digital content creator is a lifetime goals for me, because its challenging me to become the best version of myself", icon: PiFilmSlate },
    { title: 'Education', desc: "I have a passion about teaching and learning, it's wonderful to know that my effort to teach can bring changes to the others, and it will lasting forever.", icon: FaChalkboardTeacher}
  ]
  const [navOpen, setNavOpen] = useState(false);
  const [quotes, setQuotes] = useState('');
  function navOpenHandler() {
    setNavOpen(!navOpen)
  }
  function navOpenHandlerByOutside() {
    if(navOpen === true) {
      setNavOpen(false);
    }
  }

  async function getQuotes() {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': '7chMl74VvDj7OYrkwmel/w==zCWTDQtur93H6mmK'
        }
      });
      const data = await response.json();
      setQuotes(data[0].quote);
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    getQuotes()
  }, [])
  return (
    <>
      <Navbar onToggleNav={navOpenHandler} navOpen={navOpen} />
      <div className="bg-[url('public/bg-hero3.jpg')] bg-cover " tabIndex={0} onClick={navOpenHandlerByOutside}>
        {/* <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=sky&shade=600" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
          <span className="sr-only">Open main menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm/6 font-semibold text-slate-900">Product</a>
        <a href="#" className="text-sm/6 font-semibold text-slate-900">Features</a>
        <a href="#" className="text-sm/6 font-semibold text-slate-900">Marketplace</a>
        <a href="#" className="text-sm/6 font-semibold text-slate-900">Company</a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-slate-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=sky&shade=600" alt="" />
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-slate-700">
            <span className="sr-only">Close menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-slate-500/10">
            <div className="space-y-2 py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">Product</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">Features</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">Marketplace</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">Company</a>
            </div>
            <div className="py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header> */}
        <div className="relative px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center container">
              <h1 className="text-5xl font-semibold tracking-tight text-balance bg-gradient-to-tl from-slate-800 via-white to-zinc-400 bg-clip-text text-transparent sm:text-7xl pb-2">
                A Place to logging my thoughts
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-slate-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-xl/8">
              {quotes}
              </p>
              {/* <p className="mt-8 text-lg font-medium text-pretty bg-gradient-to-tl from-slate-800 via-white to-slate-700 bg-clip-text text-transparent sm:text-xl/8">
              Menulis itu buat aku seperti menekan tombol <span className="bg-slate-700 text-white p-1 rounded-md">Enter</span> di hidupku. Di sini kamu bisa baca apa yang aku pikirin, siapa tahu ada yang bermanfaat!
              </p> */}
              {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-slate-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div> */}
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* a corner radius */}
      <div className="w-full h-20 md:rounded-t-full bg-slate-950 rounded-t-4xl relative bottom-20">
      </div>
      {/* About Me */}
      <div className="bg-slate-950 relative bottom-24 rounded-y sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      {/* <h2 className="text-base/7 font-semibold text-slate-100">About Me</h2> */}
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-100 sm:text-5xl lg:text-balance">Hello I'm Fahmi. <br /> Just an ordinary person</p>
      <p className="mt-6 text-lg/8 text-slate-100">Here are the things I'm excited about</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {hobbies.map(hobby => (
          <div className="relative pl-16">
          <dt className="text-base/7 font-semibold text-slate-100">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-slate-600">
              <hobby.icon size={25} className="text-slate-100" />
            </div>
            {hobby.title}
          </dt>
          <dd className="mt-2 text-base/7 text-slate-100">{hobby.desc}</dd>
        </div>
        ))}
      </dl>
    </div>
  </div>
</div>

{/* Contact Section */}
<div className="isolate bg-slate-950 relative bottom-24 px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{clipPath: "clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-semibold tracking-tight text-balance text-slate-200 sm:text-5xl">Want to hire me?</h2>
    <p className="mt-2 text-lg/8 text-slate-100">Wanna make a website like this?<br /> Or you wanna learn something? <br />Just letter me below</p>
  </div>
  <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-slate-200">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-slate-200 px-3.5 py-2 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-slate-200">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-slate-200 px-3.5 py-2 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm/6 font-semibold text-slate-200">Company</label>
        <div className="mt-2.5">
          <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md bg-slate-200 px-3.5 py-2 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm/6 font-semibold text-slate-200">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md bg-slate-200 px-3.5 py-2 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-slate-200">Phone number</label>
        <div className="mt-2.5">
          <div className="flex rounded-md bg-slate-200 outline-1 -outline-offset-1 outline-slate-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-sky-600">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select id="country" name="country" value={countryCode} onChange={handleCountryChange} autoComplete="country" aria-label="Country" className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6">
                {countryNumbers.map(countryNumber => (
                  <option key={countryNumber.dial_code} value={countryNumber.dial_code}>{countryNumber.code} {countryNumber.dial_code}</option>
                ))}
              </select>
              <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </div>
            <input type="text" name="phone-number" id="phone-number" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-slate-800 placeholder:text-slate-400 focus:outline-none sm:text-sm/6" placeholder="895-12345" value={phoneNumber} onChange={handlePhoneChange} />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm/6 font-semibold text-slate-200">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows={4} className="block w-full rounded-md bg-slate-200 px-3.5 py-2 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"></textarea>
        </div>
      </div>
      
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-slate-100 shadow-xs hover:bg-slate-600 transition-colors focus:bg-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Let's talk</button>
    </div>
  </form>
</div>
    </>
  );
}
