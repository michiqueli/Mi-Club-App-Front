'use client';
import { Carousel } from 'flowbite-react';

export default function NovedadesSlider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[500px] mt-12">
      <Carousel>
        <img src="/escuelita_info.jpg" alt="..." className='h-full w-full'/>
        <img src="/redes_qr.jpg" alt="..." className='h-full w-full' />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}