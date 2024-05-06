interface WebxizmatProps {}

const Webxizmat = (props: WebxizmatProps) => (
  <>
    <div className="  flex flex-col items-center">
      <h2 className="mb-5 text-center text-[55px] text-white">Ta'riflar</h2>
      <div className="btn-group relative top-[-20px] w-[300px]">
        <button type="button" className="btn btn-danger">
          Kichik Loyihalar
        </button>
        <button type="button" className="btn btn-primary">
          Katta Loyihalar
        </button>
      </div>
    </div>
    <div className=" flex justify-center gap-[40px] text-center">
      <div className=" h-[400px] w-[320px] rounded-2xl bg-slate-700">
        <div className=" relative top-[40px]">
          <h5 className="">"Ochilish sahifasi" sayti</h5>
          <div className=" flex flex-col p-4">
            <ul className="mb-3 mt-2 inline-block w-full text-start">
              <li>Domen nomi (UZ)</li>
              <li>Hosting - 1GB</li>
              <li>SSL SERTIFIKATI</li>
              <li>Sahifalar - 1</li>
              <li>Muddati - 5 kun</li>
              <li>Dizayn darajasi - Yuqori</li>
              <li>Narxi - $199</li>
            </ul>
            <div className="absolute bottom-0 end-0 start-0 top-[300px] flex w-full items-center justify-between px-4 pb-5">
              <a className="bg-primary rounded px-3 py-2 text-sm text-black" href="">
                Batafsil
              </a>
              <span>5 kun/$199</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[400px] w-[320px] rounded-2xl bg-slate-700">
        <div className=" relative top-[40px]">
          <h5 className="">"Ochilish sahifasi" sayti</h5>
          <div className=" flex flex-col">
            <ul className="mb-3 mt-2 p-4 inline-block w-full text-start">
              <li>Domen nomi (UZ)</li>
              <li>Hosting - 1GB</li>
              <li>SSL SERTIFIKATI</li>
              <li>Sahifalar - 1</li>
              <li>Muddati - 5 kun</li>
              <li>Dizayn darajasi - Yuqori</li>
              <li>Narxi - $199</li>
            </ul>
            <div className="absolute bottom-0 end-0 start-0 top-[300px] flex w-full items-center justify-between px-4 pb-5">
              <a className="bg-primary rounded px-3 py-2 text-sm text-black" href="">
                Batafsil
              </a>
              <span>7 kun/$299</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[400px] w-[320px] rounded-2xl bg-slate-700">
        <div className=" relative top-[40px]">
          <h5 className="">"Ochilish sahifasi" sayti</h5>
          <div className=" flex p-4 flex-col">
            <ul className="mb-3 mt-2 inline-block w-full text-start">
              <li>Domen nomi (UZ)</li>
              <li>Hosting - 1GB</li>
              <li>SSL SERTIFIKATI</li>
              <li>Sahifalar - 1</li>
              <li>Muddati - 5 kun</li>
              <li>Dizayn darajasi - Yuqori</li>
              Administrator paneli
              <li>Tillar - En/Ru/Uz</li>
              <li>Narxi - $199</li>
            </ul>
            <div className="absolute bottom-0 end-0 start-0 top-[300px] flex w-full items-center justify-between px-4 pb-5">
              <a className="bg-primary rounded px-3 py-2 text-sm text-black" href="">
                Batafsil
              </a>
              <span>5 kun/$199</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Webxizmat;
