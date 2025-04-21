import React from 'react';
import { Link } from '@heroui/react';

function DoHome() {
  return (
    <div className="px-5 py-10 font-roboto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch">
        {/* Image */}
        <div className="w-full h-full">
          <img
            src="/img1.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between p-4 space-y-6 text-default">
          <h1 className="text-4xl font-extrabold font-robotoslab">কি করি ?</h1>
          <p className='text-xl'>
            ২০১৮ সাল থেকে <Link href='/tickets' className='text-xl'>জেলা ওয়েবসাইট</Link>  এর মাধ্যমে শেরপুর সংক্রান্ত তথ্য ও সেবা
            পেতে ইন্টারনেটের মাধ্যমে আপনাকে সাহায্য করছি। শেরপুরের ইতিহাস,
            ঐতিহ্য, দর্শনীয় স্থান, বাসের তথ্য যাবতীয় ইন্টারনেটে বিনামূল্যে
            সরবরাহ করছি।
          </p>
          <p className='text-xl'>
            শেরপুর জেলার পণ্যগুলো প্রচার করা সহ সারাদেশে ডেলিভারি করছি।
          </p>
          <p className='text-xl'>
            যাতায়াত ব্যবস্থাকে আধুনিকীকরণ করে ঝামেলাহীনভাবে অনলাইনে বাসের টিকিট
            বুকিং দেওয়ার সেবা দিচ্ছি।
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoHome;
