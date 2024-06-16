import React from 'react';
import Floating from "./../../img/FloatingSurv.png";
import Economy from "./../../img/EconomySurv.png";
import Parkour from "./../../img/Parkour.png";
import PvP from "./../../img/PvP.png";

export default function MiniGames() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
      </div>

      <div className='flex flex-col justify-center items-center mt-6'>

        <div className='w-[1050px] h-[1180px] bg-white rounded-2xl flex flex-col justify-around items-center'>

          <div className='flex justify-center items-center rounded-2xl flex-col'>
            <h1 className="text-3xl font-bold">"Dostal jsem ban, je možné zažádat o unban?"</h1>
            <div className='w-[190px] h-[2px] bg-black mt-2'></div>
            <div className='flex flex-col items-start'>
              <p className='mt-2 font-bold'>- Pokud byl ban udělen neprávem, doporučujeme se odkázat na náš ticket systém na discordu,</p>
              <p className='mt-2 font-bold translate-x-3'>kde se o vás postará příslušný administrátor.</p>
              <p className='mt-2 font-bold'>- Pokud však byl ban udělen právem a je permanentní, nedá se s ním už nic dělat.</p>
            </div>
          </div>

          <div className='flex justify-center items-center rounded-2xl flex-col mt-4'>
            <h1 className="text-3xl font-bold">"Chci být YouTuber. Jak získám tento rank?"</h1>
            <div className='w-[190px] h-[2px] bg-black mt-2'></div>
            <div className='flex flex-col items-start'>
              <p className='mt-2 text-center font-bold'>- Pokud má hráč zájem získat rank „YouTuber“, musí splnit určité požadavky.</p>
              <p className='mt-2 text-center font-bold'>- Hráč musí mít alespoň 600+ odběratelů, aktivně nahrávat ze serveru</p>
              <p className='mt-2 text-center font-bold translate-x-5'>- nejlépe dvakrát týdně a alespoň jednou měsíčně pořádat event pro hráče.</p>
              <p className='text-center mt-6 font-bold'>- Při porušení těchto podmínek bude hodnost hráči odebrána s vysvětlením.</p>
              <p className='mt-2 text-center font-bold'>- Hodnost může být také odebrána v případě nevhodného chování</p>
              <p className='mt-2 text-center font-bold translate-x-3'>a častého porušování pravidel na serveru.</p>
            </div>
          </div>

          <div className='flex justify-center items-center rounded-2xl flex-col mt-4'>
            <h1 className="text-3xl font-bold">"Můžu nějak finančně podpořit server?"</h1>
            <div className='w-[190px] h-[2px] bg-black mt-2'></div>
            <div className='flex flex-col items-start translate-x-20'>
              <p className='mt-2 text-center font-bold'>- Jistě. Vážíme si jakékoliv finanční podpory.</p>
              <p className='mt-2 text-center font-bold'>- Pokud chcete přispět a podpořit server, vytvořte si na našem serveru ticket.</p>
              <p className='text-center mt-2 font-bold'>- Přijímáme platby přes PayPal nebo 16místný kód PaySafeCard.</p>
              <p className='mt-2 text-center font-bold'>- Brzy bude také možnost zakoupit si rank prostřednictvím našeho internetového obchodu.</p>
              <p className='mt-2 text-center font-bold'>- O jeho otevření vás budeme informovat.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
