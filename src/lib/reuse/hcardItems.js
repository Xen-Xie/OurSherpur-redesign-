// src/lib/reuse/hcardItems.js

import { faBusSimple, faCartShopping, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'

export const hCard = [
  {
    title: 'বাস টিকিট',
    buttonText: 'বুকিং দিন',
    icon: faBusSimple,
    path: '/tickets',
  },
  {
    title: 'পণ্য অর্ডার',
    buttonText: 'অর্ডার করুন',
    icon: faCartShopping,
    path: '/products',
  },
  {
    title: 'ব্লগ পড়ুন',
    buttonText: 'এখনই পড়ুন',
    icon: faBlogger,
    path: '/blog',
  },
  {
    title: 'কাস্টমার সার্ভিস',
    buttonText: 'যোগাযোগ করুন',
    icon: faUsers,
    path: '/contact',
  },
]
