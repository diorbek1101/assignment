import React from 'react';
import img from './img/money.png';
import clock from './img/clock.png';
import person from './img/businessman.png';
import phones from './img/headphones (1).png';

interface AboutProps {}

const About = (props: AboutProps) => (
  <>
      <div className=" text-info relative left-[205px] top-[150px] flex w-[500px] flex-col gap-[20px]">
        <h1 className="text-5xl">
          Biz bilan hamkorlik <br /> qilish sabablari
        </h1>
        <p className="text-secondary">
          Raqobatchilar eng zo'r ekanliklarini aytishsa-da, biz buni <br /> amalda isbotlaymiz.
        </p>
        <p className="text-secondary">
          Siz biz haqimizda ma'lumotlarni o'qishingiz va portfoliomizni <br /> ko'rishingiz mumkin
        </p>
        <button className=" btn btn-primary w-[100px]" type="submit">
          Portfolio
        </button>
      </div>
      <div className=" relative left-[900px] top-[-170px] h-[400px] w-[400px] rounded-[10px] bg-blue-800">
        <h2 className=" m-0 p-[20px]">Qulay narxlar</h2>
        <p className=" relative left-[20px]">
          Narxlarni hamyonbop ushlab turish uchun <br /> ishimizni iloji boricha optimallashtiramiz
        </p>
        <img className=" relative left-[180px] top-[65px] h-[200px] w-[200px]" src={img} alt="" />
      </div>
      {/* 3talik */}
      <div className="relative top-[-100px] flex justify-center gap-[20px]">
        <div className="box1 h-[420px] w-[380px] rounded-[10px] bg-slate-800">
          <div className="  p-[30px] leading-6">
            <h3 className=" font-serif">
              Ishni o'z vaqtida <br /> bajaramiz!
            </h3>
            <span className=" font-serif">
              Biz har bir bosqichni belgilangan <br /> muddatlarga muvofiq rejalashtiramiz va <br /> belgilangan muddatlarga rioya qilamiz
            </span>
            <img className=" relative left-[200px] top-[95px] m-0 h-[150px] w-[150px] p-0" src={clock} alt="" />
          </div>
        </div>
        <div className="box1 h-[420px] w-[380px] rounded-[10px] bg-slate-800">
          <div className="  p-[30px] leading-6">
            <h3 className=" font-serif">
              Mutaxassislar <br /> jamoasi
            </h3>
            <span className=" font-serif">
              Bizning jamoamiz o'z ishini yaxshi <br /> biladigan tajribali dasturchilardan iborat.{' '}
            </span>
            <img className=" relative left-[200px] top-[115px] m-0 h-[140px] w-[150px] p-0" src={person} alt="" />
          </div>
        </div>
        <div className="box1 h-[420px] w-[380px] rounded-[10px] bg-slate-800">
          <div className="  p-[30px] leading-6">
            <h3 className=" font-serif">
              Buyurtma berishdan <br /> oldin maslahat
            </h3>
            <span className=" font-serif">
              Bizning menejerlarimiz 24/7 <br /> onlayn ishlaydi va sizga yordam berishga va <br /> savollaringizga javob berishga tayyor{' '}
            </span>
            <img className=" relative left-[200px] top-[95px] m-0 h-[140px] w-[140px] p-0" src={phones} alt="" />
          </div>
        </div>
      </div>


  </>
);

export default About;
