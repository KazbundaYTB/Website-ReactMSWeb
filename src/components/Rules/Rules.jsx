import React from 'react';

export default function Rules() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' mt-5 text-4xl text-white font-bold'>Pravidla serveru</h1>
        <div className='w-[175px] h-[3px] bg-white mt-2'></div>
      </div>

      <div className='flex flex-col justify-center items-center mt-6'>

      <div className='w-[1500px] h-[1850px] bg-white rounded-2xl flex flex-col'>
          <div className='flex justify-center items-center w-full h-[120px] rounded-2xl flex-col'>
            <p className="text-xl mt-12">Na této stránce najdete seznam všech důležitých pravidel, která musíte na serveru dodržovat včetně trestů, které vás čekají za jejich porušování. </p>
            <div className='w-[175px] h-[3px] bg-black mt-4'></div>
            <p className="text-xl">Pokud hráč opakovaně porušuje pravidla, doba trvání banu/mute se dvojnásobí. </p>
            <p className="text-xl mt-4 font-bold">Pokud hráč několikrát úmyslně poruší jakékoli pravidlo, bude PERMANENTNĚ ZABANOVÁN BEZ MOŽNOSTI UNBANU! </p>
          </div>

          <div className=' flex flex-col justify-center items-center mt-12'>
          <div className='w-[1450px] h-[3px] bg-black '></div>


        {/* Pravidla serveru */}
        <div className='w-[1450px] h-[1370px] bg-white flex flex-col justify-start   rounded-2xl mt-6'>
          <h1 className='font-bold text-lg mt-3'>Je zakázáno používat modifikace, nebo cheat klienty, které vám ulehčují hru, např. Impact, Wurst, Autoclicker, CPS booster, X-Ray apod. (Minimapa je povolena)</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - V případě, že bude odhalen hráč porušující toto pravidlo, bude potrestán banem na 30 dní.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno mít nevhodný skin.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení tohoto pravidla se trestá banem na 1 den. Pokud si hráč ani po uplynulé době zabanování skin nezmění, bude potrestán permanentním banem.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno mít nevhodný nick.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení tohoto pravidla se trestá permanentním banem na nick. Hráč je povinen si jméno změnit, jinak mu vstup na server nebude povolen.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno úmyslně ničit přírodu. (Survival servery)</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Pokud se prokáže porušení tohoto pravidla, hráč bude potrestán banem na 3 dny</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno krást či ničit cizí majetek.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení tohoto pravidla je trestáno banem na 14 dní. Platí i na oblasti bez residence (v tomto ohledu ale server nebere odpovědnost za věci, které si zde hráč uložil a nevytvořil residenci. Věci se tedy nemusí navrátit)</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno zneužívat chyby. Každý bug se musí ohlásit! (bug = chyba)</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Pokud hráč chybu nenahlásí a později to bude zjištěno, hráč bude potrestán banem na 3 dny.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno TPAkillovat a dělat pasti.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení tohoto pravidla je trestáno banem na 3 dny.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno obestavovat cizí residence.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení tohoto pravidla se trestá banem na 2 dny</h1>

          <div className='bg-white flex flex-col justify-center  items-center rounded-2xl mt-6'>
            <h1 className=' mt-5 text-4xl text-black font-bold'>Pravidla chatu na serverech</h1>
            <div className='w-[400px] h-[3px] bg-black mt-2'></div>
          </div>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno spamovat.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Opakované porušení se trestá mute na 2 hodiny (mute = umlčení, deaktivace možnosti psát do chatu)</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno floodovat = zahlcovat chat. (Příklad floodu: "neeeeeee". Více než čtyři stejné znaky za sebou nejsou tolerovány).</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Opakované porušení se trestá mute na 1 hodinu.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno používat nevhodné a vulgární výrazy.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Opakované porušení se trestá mute na 5 hodin.</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno jakýmkoli podporovat nacismus, komunismus, nebo jiné, lidská práva porušující organizace</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení se trestá banem na 1 den</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno lhát a podvádět.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení se trestá banem na 1 den</h1>    


          <h1 className='font-bold text-lg mt-3'>Je zakázáno propagovat ostatní projekty. (Mohou být výjimky, které dává pouze majitel.)</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Propagace jiných serverů, nebo jiných projektů je zakázána a bude potrestána mute na 7 dní</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno provokovat AT.</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Porušení se trestá mute na 3 hodiny</h1>

          <h1 className='font-bold text-lg mt-3'>Je zakázáno jakýmkoliv způsobem urážet, nebo pomlouvat majitele serveru</h1>
          <h1 className='font-bold text-lg mt-3 text-red-600 translate-x-2 '> - Urážení majitele je naprostý vrchol a je trestán mute na 7 dní</h1>

          <div className='bg-white flex flex-col justify-center  items-center rounded-2xl mt-6'>
          <div className='w-[1450px] h-[3px] bg-black '></div>
          </div>
          <div className='flex justify-center items-center w-full h-[120px] rounded-2xl flex-col mt-6'>
            <p className="text-3xl mt-12 font-bold">Připojením na server souhlasíte se všemi pravidly a pravidly ochrany soukromí (GDPR) </p>
            <div className='w-[175px] h-[3px] bg-black mt-4'></div>
            <p className="text-xl font-bold">Pravidla se mohou průběžně měnit.</p>
            <p className="text-3xl mt-12 font-bold text-red-800">Admin Team je povinen dodržovat tato pravidla stejně jako každý jiný hráč</p>
          </div>





          </div>




          
        </div>

        {/* Pravidla chatu na serverech */}

        </div>



        </div>



      </div>
  );
}
