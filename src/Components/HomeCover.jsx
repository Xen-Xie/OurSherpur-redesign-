import React from 'react';

function HomeCover() {
  return (
    <div className='relative w-full h-[450px] bg-cover bg-center' style={{ backgroundImage: `url('/cover.png')` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 text-white max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-2 font-robotoslab">
          ’আওয়ার শেরপুর’
          <span className="text-4xl md:text-5xl font-medium font-roboto"><span>এ</span><br /> স্বাগত</span>
        </h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed font-light font-roboto">
          আওয়ার শেরপুর একটি জেলা ওয়েবসাইট। এটি শেরপুর জেলার প্রযোজ্যীয় তথ্য উপাত্ত
          ইন্টারনেটে সরবরাহ করে, শেরপুরের পণ্যগুলো অনলাইনে প্রচার ও বিক্রি করা সহ
          অনলাইনে বাসের টিকিট বুকিং সুবিধা দেয়।
        </p>
      </div>
    </div>
  );
}

export default HomeCover;
