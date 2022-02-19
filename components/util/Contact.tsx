import { HiMail } from 'react-icons/hi'
import { RiShoppingBag2Fill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'

import { trackContactMethodClicked } from '../../lib/analytics'

const Contact = () => {
  return (
    <main className="mb-32 mt-4 gap-4 lg:grid lg:grid-cols-3">
      <a
        href="mailto:psanecreations@gmail.com"
        target={'_blank'}
        rel="noreferrer"
        onClick={() => {
          trackContactMethodClicked('Email')
        }}
        className="hover-bounce flex w-full flex-row items-center justify-center gap-2 rounded-xl bg-white py-4 text-xl font-semibold shadow-lg"
      >
        <HiMail className="text-green-500" />
        <span>Email</span>
      </a>
      <a
        href="https://www.etsy.com/shop/PsaneCreations"
        target={'_blank'}
        rel="noreferrer"
        onClick={() => {
          trackContactMethodClicked('Etsy Shop')
        }}
        className="hover-bounce flex w-full flex-row items-center justify-center gap-2 rounded-xl bg-white py-4 text-xl font-semibold shadow-lg"
      >
        <RiShoppingBag2Fill className="text-orange-500" />
        <span>Etsy</span>
      </a>
      <a
        href="https://www.instagram.com/pratibhasane/?hl=en"
        target={'_blank'}
        rel="noreferrer"
        onClick={() => {
          trackContactMethodClicked('Instagram')
        }}
        className="hover-bounce flex w-full flex-row items-center justify-center gap-2 rounded-xl bg-white py-4 text-xl font-semibold shadow-lg"
      >
        <AiFillInstagram className="text-blue-500" />
        <span>Instagram</span>
      </a>
    </main>
  )
}

export default Contact
