import React from 'react';

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.FC<AuthProps> = props => (
  <>
    <div className="mt-[100px] flex justify-center">
      <form className="border-primary w-[400px] rounded border-b border-t bg-[#16161610] bg-opacity-5 p-10 text-white shadow backdrop-blur-[8px] max-[425px]:w-full max-[425px]:rounded-none max-[425px]:px-7 max-[325px]:px-3">
        <h3 className="text-primary mb-3 text-center text-[30px]">Ariza qoldiring</h3>
        <label>
          "F.I.SH"
          <input className="border-primary mb-3 w-full border-b border-s bg-transparent px-2 py-1 text-white" type="text" name="name" />
        </label>
        <label>
          Telefon raqam
          <input type="text" className="border-primary mb-3 w-full border-b border-r bg-transparent px-2 py-1 text-white" name="phone" />
        </label>
        <label>
          Servis
          <input type="text" className="border-primary mb-3 w-full border-b border-s bg-transparent px-2 py-1 text-white" placeholder="Telegram bot, mobile app, ...etc" name="service" />
        </label>
        <label>
          Izoh
          <textarea name="comment" required className="border-primary mb-3 h-[70px] w-full border-b border-r bg-transparent" ></textarea>
        </label>
        <button className="border-primary hover:bg-primary false mt-8 w-full rounded-lg border px-5 py-2 transition-all hover:text-black" tabIndex={0}>Submit</button>
      </form>
    </div>
  </>
);

export default Auth;
