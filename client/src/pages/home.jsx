import { Link } from 'react-router-dom';

import banner1 from "../assets/NebulaEsports2_0.jpg";
import esportlogo from "../assets/Untitled.jpeg";

export default function Home() {
    return(
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Nebula Esports 2025</h1>
          <h2 class = "font-bold text-2sm mb-4">By SLTMobitel Nebula Institute of Technology</h2>
          <p class="mb-8 leading-relaxed">Welcome to Nebula Esports 2025 – Sri Lanka’s Ultimate Competitive Gaming Arena, Uniting the Nation’s Top Gamers for an Unforgettable Showdown of Skill, Strategy, and Glory!</p>
          <div class="flex justify-center">
           <Link to ="/Register"> <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register Now</button></Link>
           <Link to ="/Rules"><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Rules</button></Link>
          </div>
        </div>
        <div class="lg:max-w-[450px] lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={esportlogo}/>
        </div>
      </div>
      <div class="w-full py-8 bg-gray-100">
        <h2 class="text-center text-xl font-semibold text-gray-700">Powerd BY</h2>
        <div className="flex justify-center mt-4">
          <img className="w-auto h-25 object-cover object-center" src="https://img.icons8.com/windows/512/dev.png" alt="Sponsor banner" />
        </div>
      </div>

    <div class="mb-30"></div>

    <div class="container px-5  mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">What is Nebula Esports?</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
      </div>
    </div>
    </div>
      

      <div class="container px-5 py-1 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={banner1}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-black text-gray-400">
            <img class="w-10 h-10" src={esportlogo} />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Nebula Esports</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Where Stars Become Legends</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Nebula Esports 2025 is more than just a tournament — it’s a movement that brings together the most passionate, skilled, and determined gamers from across Sri Lanka. Born out of a vision to uplift the local gaming scene, Nebula has grown into a premier esports platform where players of all levels can showcase their talents, connect with the community, and compete for glory. With cutting-edge technology, high-stakes competitions, and immersive experiences, Nebula Esports is redefining what it means to game competitively in Sri Lanka.
          <br/>
          This year, Nebula Esports 2025 is set to be the biggest edition yet, featuring intense matchups across popular titles including CS:GO, Valorant, Dota 2, and more. Whether you're a seasoned pro or an up-and-coming gamer, there’s a place for you here. We are building a stage where teamwork, strategy, and individual brilliance collide in spectacular fashion. With expanded registration, more viewing options, and a larger prize pool, Nebula 2025 is geared up to deliver an electrifying season of esports action.</p>
          <a class="text-indigo-500 inline-flex items-center" href='https://nebula.edu.lk' target='_blank'>Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-30"></div>

<div class="container px-5  mx-auto">
<div class="flex flex-col">
  <div class="h-1 bg-gray-200 rounded overflow-hidden">
    <div class="w-24 h-full bg-indigo-500"></div>
  </div>
  <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
    <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Game Titles</h1>
  </div>
</div>
</div>

<div class="container px-5 py-1 mx-auto">
    
    <div class="flex flex-wrap -m-4">
    <div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white border border-gray-200 bg-indigo-100 text-indigo-500 mb-4">
      <img src="https://cdn.worldvectorlogo.com/logos/call-of-duty.svg" alt="Call of Duty 4 Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Call of Duty 4</h2>
    <p class="leading-relaxed text-base">Classic FPS gameplay with intense, fast-paced combat across iconic war zones.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white border border-gray-200 bg-indigo-100 text-indigo-500 mb-4">
      <img src="https://images.seeklogo.com/logo-png/40/1/valorant-logo-png_seeklogo-405726.png" alt="Valorant Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Valorant</h2>
    <p class="leading-relaxed text-base">Tactical 5v5 shooter blending precise gunplay with powerful agent abilities.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white border border-gray-200  text-indigo-500 mb-4">
      <img src="https://images.seeklogo.com/logo-png/48/1/rocket-league-logo-png_seeklogo-481588.png?v=1954719335872389184" alt="Rocket League Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Rocket League</h2>
    <p class="leading-relaxed text-base">High-octane soccer with rocket-powered cars. Fast, fun, and competitive.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 bg-white border border-gray-200 text-indigo-500 mb-4">
      <img src="https://brandlogos.net/wp-content/uploads/2020/09/free-fire-logo-1-512x512.png" alt="FreeFire Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Free Fire</h2>
    <p class="leading-relaxed text-base">Battle royale action optimized for mobile, offering quick 10-minute matches.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100  bg-white border border-gray-200 text-indigo-500 mb-4">
      <img src="https://images.seeklogo.com/logo-png/35/1/pubg-logo-png_seeklogo-352312.png" alt="PUBG Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">PUBG</h2>
    <p class="leading-relaxed text-base">Pioneer of the battle royale genre. Strategic, immersive, and expansive.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 bg-white border border-gray-200 text-indigo-500 mb-4">
      <img src="https://images.seeklogo.com/logo-png/42/2/call-of-duty-mobile-logo-png_seeklogo-428818.png?v=1954996416085424112" alt="COD Mobile Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Call of Duty: Mobile</h2>
    <p class="leading-relaxed text-base">Experience console-quality shooting on your phone with multiple classic maps.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100  bg-white border border-gray-200 text-indigo-500 mb-4">
      <img src="https://images.seeklogo.com/logo-png/42/1/mobile-legends-bang-bang-logo-png_seeklogo-428731.png?v=1954996074674152376" alt="Mobile Legends Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Mobile Legends</h2>
    <p class="leading-relaxed text-base">5v5 mobile MOBA with short match times and intense strategic gameplay.</p>
  </div>
</div>

<div class="xl:w-1/3 md:w-1/2 p-4">
  <div class="border border-gray-200 p-6 rounded-lg">
    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 bg-white border border-gray-200 text-indigo-500 mb-4">
      <img src="https://images.seeklogo.com/logo-png/34/1/mortal-kombat-logo-png_seeklogo-348288.png?v=1954996040570090880" alt="Mortal Kombat Logo" class="w-6 h-6" />
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Mortal Kombat</h2>
    <p class="leading-relaxed text-base">Legendary fighting game known for brutal combos, iconic characters, and fatalities.</p>
  </div>
</div>

    </div>
  </div> 
  </section>
    )
}