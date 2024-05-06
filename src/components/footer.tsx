import React from 'react';
import telegram from './img/telegram (1).png';
import instagram from './img/social.png';
import whatsapp from './img/whatsapp.png';
import facebook from './img/communication.png';
import phone from './img/phone-call.png';

const openTelegram = () => {
  window.location.href = 'https://t.me/developerdiyor';
};

const openInstagram = () => {
  window.location.href = 'https://www.instagram.com/diyorbek.11.01/';
};

const openWhatsapp = () => {
  window.location.href = 'https://https://web.whatsapp.com/';
};

const openFacebook = () => {
  window.location.href = 'https://www.facebook.com/profile.php?id=100069534647196';
};

const Phone = () => {
  const Phone = '+998940566236';
  window.location.href = `tel:${Phone}`;
};

const PhoneComponent = () => {
  return (
    <div className=" relative top-[750px] flex w-full flex-col items-center gap-[30px]">
      <h1 className="text-8xl">Kontaktlar</h1>
      <div className="flex justify-center gap-[20px]">
        <img className="h-[60px] w-[60px] cursor-pointer" src={phone} alt="" onClick={Phone} />
        <img className="h-[60px] w-[60px] cursor-pointer" src={telegram} alt="" onClick={openTelegram} />
        <img className="h-[60px] w-[60px] cursor-pointer" src={instagram} alt="" onClick={openInstagram} />
        <img className="h-[60px] w-[60px] cursor-pointer" src={whatsapp} alt="" onClick={openWhatsapp} />
        <img className="h-[60px] w-[60px] cursor-pointer" src={facebook} alt="" onClick={openFacebook} />
      </div>
      <div className="flex flex-col font-serif">
        <p>©2024 EPIS - www.epis.uz@gmail.com</p>
        <p className="ml-[15px] text-slate-600">©Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  );
};

export default PhoneComponent;
