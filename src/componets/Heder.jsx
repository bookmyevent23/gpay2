import React from "react";

function Heder() {
  return (
    <div>
      {/* RESPONSIVE NAVIGATION BAR STARTS*/}

      <span
        dangerouslySetInnerHTML={{
          __html: `
      <div class="py-4 px-6 bg-white flex items-center justify-between border-b border-slate-100 mb-0"><div class="flex items-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-blue-500 mr-3" height="19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg><a href="/"><img src="https://boffaraxel.vercel.app/static/media/gpaylogo.a859e7ad6e3a2b75843f.png" alt="" class="h-10 mx-4"></a></div><div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-blue-500" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path></svg></div></div>
      `,
        }}
      />
      {/* RESPONSIVE NAVBAR ENDS */}
    </div>
  );
}

export default Heder;
