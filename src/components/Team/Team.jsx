import React from "react";
import Kazbunda from "../../img/Team-Images/Kazbunda.png"
import Gamemaster from "../../img/Team-Images/Gamemaster.png"
import ITdreamer from "../../img/Team-Images/ITdreamer.png"
import Killer from "../../img/Team-Images/Killer2022.png"
import MalickyDee from "../../img/Team-Images/MalickyDee.png"
import Dzixeron from "../../img/Team-Images/dzixeron.png"
import Eroziel from "../../img/Team-Images/Eroziel6935.png"
import Delta from "../../img/Team-Images/deltaplana.png"
import Pican from "../../img/Team-Images/Pican_sedmicka.png"
import Loltor from "../../img/Team-Images/LOLtorSK.png"
import Leniviess from "../../img/Team-Images/leniviess.png"
import Tisicofka from "../../img/Team-Images/TisicoFka.png"



export default function Team() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <div className="w-[1500px] h-[1850px] rounded-2xl flex flex-col">
          
          <div className="flex flex-col justify-center items-center">
            <h1 className=" mt-5 text-4xl text-white font-bold">
              Vedení serveru
            </h1>
            <div className="w-[175px] h-[3px] bg-white mt-2"></div>
          </div>

          {/* Vedeni-1 START   */}
          <div className="w-full h-[380px] flex flex-row  justify-center items-center">
            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Gamemaster} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-red-500 px-4 py-2"><h1 className=" text-xl font-bold">Majitel</h1> </div> 
              <h1 className=" text-2xl font-bold">Gamemaster2022</h1>
            </div>

            <div className="w-[450px] h-[350px] bg-white  rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Kazbunda} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-red-500 px-4 py-2"><h1 className=" text-xl font-bold">Spolumajitel</h1> </div> 
              <h1 className=" text-2xl font-bold">Kazbunda</h1>
            </div>

            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Killer} alt="" className="w-[165px]"/>
              <div className=" flex flex-row gap-2">
              <div className="rounded-full bg-red-500 px-4 py-2"><h1 className=" text-xl font-bold">Zástupce majitele</h1> </div> 
              </div>
              <h1 className=" text-2xl font-bold">KILLER2022</h1>
              
            </div>


          </div>
            {/* Vedeni-1 END */}

            {/* Vedeni-2 START   */}
          <div className="w-full h-[380px] flex flex-row  justify-center items-center">
            
            <div className="w-[450px] h-[350px] bg-white  rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={ITdreamer} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-yellow-400 px-4 py-2"><h1 className=" text-xl font-bold">Hlavní investor</h1> </div> 
              <h1 className=" text-2xl font-bold">ITdreamer</h1>
            </div>

            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Dzixeron} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-orange-500 px-4 py-2"><h1 className=" text-xl font-bold">Vedení </h1> </div> 
              <h1 className=" text-2xl font-bold">dzixeron</h1>
            </div>

            <div className="w-[450px] h-[350px] bg-white  rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={MalickyDee} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-fuchsia-500 px-4 py-2"><h1 className=" text-xl font-bold">Developer</h1> </div> 
              <h1 className=" text-2xl font-bold">MalickyDee</h1>
            </div>

          </div>
            {/* Vedeni-2 END */}

            {/* HelperTeam-1 START   */}
            <div className="flex flex-col justify-center items-center">
            <h1 className=" mt-16 text-4xl text-white font-bold">
              Helper team
            </h1>
            <div className="w-[175px] h-[3px] bg-white mt-2"></div>
          </div>

          
          <div className="w-full h-[380px] flex flex-row  justify-center items-center">
            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Loltor} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-green-600 px-4 py-2"><h1 className=" text-xl font-bold">Hl.Helper</h1> </div> 
              <h1 className=" text-2xl font-bold">LOLtorSK</h1>
            </div>
            
            <div className="w-[450px] h-[350px] bg-white  rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Leniviess} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-green-600 px-4 py-2"><h1 className=" text-xl font-bold">Helper+</h1> </div> 
              <h1 className=" text-2xl font-bold">leniviess</h1>
            </div>

            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Killer} alt="" className="w-[165px]"/>
              <div className=" flex flex-row gap-2">
              <div className="rounded-full bg-green-600 px-4 py-2"><h1 className=" text-xl font-bold">Helper</h1> </div> 
              </div>
              <h1 className=" text-2xl font-bold">KILLER2022</h1>
              
            </div>

            <div className="w-[450px] h-[350px] bg-white  rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Tisicofka} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-green-600 px-4 py-2"><h1 className=" text-xl font-bold">Zk.Helper</h1> </div> 
              <h1 className=" text-2xl font-bold">TisicoFka</h1>
            </div>





          </div>
            {/* HelperTeam-1 END */}


            {/* BuilderTeam-1 START   */}
            <div className="flex flex-col justify-center items-center">
            <h1 className=" mt-16 text-4xl text-white font-bold">
              Builder team
            </h1>
            <div className="w-[175px] h-[3px] bg-white mt-2"></div>
          </div>

          
          <div className="w-full h-[380px] flex flex-row  justify-center items-center">
            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Eroziel} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-blue-600 px-4 py-2"><h1 className=" text-xl font-bold">Hlavní builder</h1> </div> 
              <h1 className=" text-2xl font-bold">Eroziel6935</h1>
            </div>
            
            <div className="w-[450px] h-[350px] bg-white  rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Delta} alt="" className="w-[165px]"/>
              
              <div className="rounded-full bg-blue-600 px-4 py-2"><h1 className=" text-xl font-bold">Builder+</h1> </div> 
              <h1 className=" text-2xl font-bold">leniviess</h1>
            </div>

            <div className="w-[450px] h-[350px] bg-white rounded-2xl mr-2 flex flex-col justify-center items-center">
              <img src={Pican} alt="" className="w-[165px]"/>
              <div className=" flex flex-row gap-2">
              <div className="rounded-full bg-blue-600 px-4 py-2"><h1 className=" text-xl font-bold">Builder</h1> </div> 
              </div>
              <h1 className=" text-2xl font-bold">Pican_sedmicka</h1>
              
            </div>






          </div>
            {/* BuilderTeam-1 END */}
        </div>
      </div>
    </div>
  );
}
