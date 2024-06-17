import React from 'react';
import Floating from "./../../img/FloatingSurv.png";
import Economy from "./../../img/EconomySurv.png";
import Parkour from "./../../img/Parkour.png";
import PvP from "./../../img/PvP.png";
import Surv1_21 from "./../../img/Surv1-21.png";

export default function MiniGames() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' mt-5 text-4xl text-white font-bold'>Minihry</h1>
        <div className='w-[75px] h-[3px] bg-white mt-2'></div>
      </div>

      <div className='flex flex-col justify-center items-center mt-6'>


      <div className='w-[1050px] h-[380px] bg-white rounded-2xl flex'>
          <div className='w-[580px] h-[380px] rounded-2xl'>
            <img src={Surv1_21} alt="" className='w-[580px] h-[380px] rounded-2xl'/>
          </div>
          <div className='flex justify-center items-center w-[470px] h-[380px] rounded-2xl flex-col'>
            <h1 className="text-3xl font-bold">Survival 1.21</h1>
            <div className='w-[150px] h-[2px] bg-black mt-2'></div>
            <p className='mt-2 text-center'> - Survival server na verzi 1.21, <br /> který čeká na tvé objevování nových věcí v této verzi!

              </p>

          </div>
        </div>

      <div className='w-[1050px] h-[380px] bg-white rounded-2xl flex mt-3'>
          <div className='w-[580px] h-[380px] rounded-2xl'>
            <img src={Floating} alt="" className='w-[580px] h-[380px] rounded-2xl'/>
          </div>
          <div className='flex justify-center items-center w-[470px] h-[380px] rounded-2xl flex-col'>
            <h1 className="text-3xl font-bold">Floating Survival</h1>
            <div className='w-[190px] h-[2px] bg-black mt-2'></div>
            <p className='mt-2 text-center'> - Svět Minecraftu od vyžaduje odvahu. 
               Je plný nástrah a nebezpečí, které musíte podstoupit, abyste přežili.
               My jsme tuto příčku ještě zvedli.
               A to doslova! Připoj se na nový "Floating Survival", svět tvořený z obrovských vznášejících se ostrovů, kde každý špatný krok může znamenat jistou smrt.
               Jsi ochoten přijmout tuto výzvu a přežít v tomto neobvyklém světě?
              </p>

          </div>
        </div>

        <div className='w-[1050px] h-[380px] bg-white rounded-2xl flex mt-3'>
          <div className='w-[580px] h-[380px] rounded-2xl'>
            <img src={Economy} alt="" className='w-[580px] h-[380px] rounded-2xl'/>
          </div>
          <div className='flex justify-center items-center w-[470px] h-[380px] rounded-2xl flex-col'>
          <h1 className="text-3xl font-bold">Economy Survival</h1>
            <div className='w-[190px] h-[2px] bg-black mt-2'></div>
            <p className='mt-2 text-center'> - Stále aktualizovaný survival s ekonomikou najdeš i u nás! 
              Vybuduj si svoji vlastní residenci, obchoduj s ostatními hráči a staň se nejbohatším z nich. 
              Nově zde máme SlimeFun, ChatGames a spoustu dalších zábavných funkcí, které jinde jen tak nenajdete. 
              Pro vracející se hráče zde máme i starý Survival Economy, který je nově optimalizovaný a je zde vše tak, jak jste odešli
              </p>

          </div>
        </div>

        <div className='w-[1050px] h-[380px] bg-white rounded-2xl flex mt-3'>
          <div className='w-[580px] h-[380px] rounded-2xl'>
            <img src={Parkour} alt="" className='w-[580px] h-[380px] rounded-2xl'/>
          </div>
          <div className='flex justify-center items-center w-[470px] h-[380px] rounded-2xl flex-col'>
          <h1 className="text-3xl font-bold">Parkour</h1>
            <div className='w-[85px] h-[2px] bg-black mt-2'></div>
            <p className='mt-2 text-center'> - Fanoušci parkouru se u nás nudit nebudou. 
              Na serveru máme k dispozici speciální parkour, který se generuje do nekonečna každému hráči, který dostane chuť si zaskákat. 
              Žádný parkour nikdy není stejný, vždy vznikne něco úplně nového! Stačí vejít do portálu a budeš přenesen na svůj parkour. 
              Dokážeš překonat rekord serveru?
              </p>

          </div>
        </div>

        <div className='w-[1050px] h-[380px] bg-white rounded-2xl flex mt-3'>
          <div className='w-[580px] h-[380px] rounded-2xl'>
            <img src={PvP} alt="" className='w-[580px] h-[380px] rounded-2xl'/>
          </div>
          <div className='flex justify-center items-center w-[470px] h-[380px] rounded-2xl flex-col'>
          <h1 className="text-3xl font-bold">PVP Server</h1>
            <div className='w-[85px] h-[2px] bg-black mt-2'></div>
            <p className='mt-2 text-center'> - Jsi soutěživý typ, který rád soupeří se svými přáteli? 
              I u nás najdeš své místo! Zajdi si na náš PVP server, kde můžete porovnat své síly v KitPVP, TheBridge, 1V1 a dalších!
              </p>

          </div>
        </div>




      </div>
    </div>
  );
}
