import React from 'react';
import img from './img/money.png';
import clock from './img/clock.png';
import person from './img/businessman.png';
import phones from './img/headphones (1).png';
import Footer from '../../components/footer';

const About = () => (
  <>
    <div className="text-info relative left-[205px] top-[180px] flex w-[500px] flex-col gap-[30px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-5xl">BIZNESINGIZ UCHUN</h2>
        <h1 className="text-6xl">SAYTLAR</h1>
        <h1 className="text-6xl">ISHLAB CHIQISH</h1>
        <h6 className="text-secondary ">
          Kompaniyamiz barcha turdagi IT xizmatlarini taqdim <br /> etadi! Qisqa vaqt ichida sifatli xizmatlar.
        </h6>
      </div>
      <div className="flex items-center gap-[40px]">
        <button type="button" className="btn btn-outline-info w-[100px] rounded-[25px]">
          Batafsil
        </button>
        <h6 className="text-secondary cursor-pointer ">Sovallaringiz bormi?</h6>
      </div>
    </div>
    {/* HEADER */}
    <div className=" relative bottom-[100px]">
      <div className=" text-info relative left-[205px] top-[420px] flex w-[500px] flex-col gap-[20px]">
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
      <div className=" relative left-[900px] top-[120px] h-[400px] w-[400px] rounded-[10px] bg-blue-800">
        <h2 className=" m-0 p-[20px]">Qulay narxlar</h2>
        <p className=" relative left-[20px]">
          Narxlarni hamyonbop ushlab turish uchun <br /> ishimizni iloji boricha optimallashtiramiz
        </p>
        <img className=" relative left-[180px] top-[65px] h-[200px] w-[200px]" src={img} alt="" />
      </div>
      <div className=" relative top-[200px] flex justify-center gap-[20px]">
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
    </div>

    {/* PORTFOLIO */}

    <div className=" gap-[50px ] relative top-[300px] flex justify-center gap-[100px]">
      <div className="flex flex-col leading-8">
        <h1 className="text-6xl text-cyan-600">Bizning portfolio</h1>
        <span className="text-zinc-400">
          Sizning saytingiz shu yerda bo'lishi br mumkin. Biz bilan <br /> bog'laning. Birinchi uchta mijoz uchun 15% chegirma e'lon <br /> qildik.
        </span>
        <button type="button" className=" btn btn-outline-info relative top-[20px] w-[120px] rounded-[25px]">
          Ko'proq
        </button>
      </div>
      <div className="border-primary flex h-[220px] w-[22%] flex-col items-center justify-center rounded-md border border-x-2 border-y-2 bg-[#222] px-6 text-center text-white">
        <span>
          Sizning saytingiz shu yerda bo'lishi <br /> mumkin. Biz bilan bo'g'laning. Birinchi <br />
          uchta mijoz uchun 15% chegirma e'lon <br /> qildik.
        </span>

        <a href="">Buyurtma qilish.</a>
      </div>
    </div>

    {/* TARIFLAR */}

    <div className="">
      <div className="relative top-[500px] flex justify-center text-cyan-600">
        <h1 className="text-6xl">Tariflar</h1>
      </div>
      <div className=" relative top-[600px] flex justify-center gap-5">
        <div className=" flex h-[450px] w-[22%] flex-col justify-center gap-[20px] rounded-md border border-x-2 border-y-2 bg-[#222] px-6 text-center  text-white">
          <div className="mt-[60px] flex flex-col gap-[20px]">
            <span className="text-3xl">"Katalog" veb-sayti</span>
            <p className=" relative top-[10px]">
              Katalog veb-sayti iste'molchilar kompaniyaning mahsulotlari yoki xizmatlari bilan tanishishlari mumkin bo'lgan to'liq huquqli veb-resursdir. Katalog veb-sayti qulay savdo vositasi
              bo'lib, biznes rentabelligini oshirishi va maqsadli auditoriyaga assortimentni taqdim etish vazifasini soddalashtirishi mumkin.
            </p>
          </div>
          <div className=" relative right-[50px] top-[20px]">
            <p className="  relative bottom-4 right-[20px] text-xl">$599 dan boshlab</p>
            <p className="relative bottom-[10px] right-[52px] text-slate-500">15 kun ichida</p>
            <button type="button" className=" btn btn-outline-info relative bottom-[50px] left-[140px] w-[100px] rounded-[25px]">
              <a href="https://www.epis.uz/" className="">
                Batafsil
              </a>
            </button>
          </div>
        </div>
        <div className=" flex h-[450px] w-[22%] flex-col justify-center gap-[20px] rounded-md border border-x-2 border-y-2 bg-[#222] px-6 text-center  text-white">
          <div className="mt-[60px] flex flex-col gap-[20px]">
            <span className="text-3xl">"Katalog" veb-sayti</span>
            <p className=" relative top-[10px]">
              Katalog veb-sayti iste'molchilar kompaniyaning mahsulotlari yoki xizmatlari bilan tanishishlari mumkin bo'lgan to'liq huquqli veb-resursdir. Katalog veb-sayti qulay savdo vositasi
              bo'lib, biznes rentabelligini oshirishi va maqsadli auditoriyaga assortimentni taqdim etish vazifasini soddalashtirishi mumkin.
            </p>
          </div>
          <div className=" relative right-[50px] top-[20px] m-0">
            <p className="  relative bottom-4 right-[20px] text-xl">$599 dan boshlab</p>
            <p className="relative bottom-[10px] right-[52px] text-slate-500">15 kun ichida</p>
            <button type="button" className=" btn btn-outline-info relative bottom-[50px] left-[140px] w-[100px] rounded-[25px]">
              <a href="https://www.epis.uz/" className="">
                Batafsil
              </a>
            </button>
          </div>
        </div>
        <div className=" flex h-[450px] w-[22%] flex-col justify-center gap-[20px] rounded-md border border-x-2 border-y-2 bg-[#222] px-6 text-center  text-white">
          <div className="mt-[60px] flex flex-col gap-[20px]">
            <span className="text-3xl">"Katalog" veb-sayti</span>
            <p className=" relative top-[10px]">
              Katalog veb-sayti iste'molchilar kompaniyaning mahsulotlari yoki xizmatlari bilan tanishishlari mumkin bo'lgan to'liq huquqli veb-resursdir. Katalog veb-sayti qulay savdo vositasi
              bo'lib, biznes rentabelligini oshirishi va maqsadli auditoriyaga assortimentni taqdim etish vazifasini soddalashtirishi mumkin.
            </p>
          </div>
          <div className=" relative right-[50px] top-[20px]">
            <p className=" relative bottom-4 right-[20px] text-xl">$599 dan boshlab</p>
            <p className="relative bottom-[10px] right-[52px] text-slate-500">15 kun ichida</p>
            <button type="button" className=" btn btn-outline-info relative bottom-[50px] left-[140px] w-[100px] rounded-[25px]">
              <a href="https://www.epis.uz/" className="">
                Batafsil
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default About;
