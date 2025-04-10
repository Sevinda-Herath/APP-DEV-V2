import banner1 from "../assets/NebulaEsports2_0.jpg";
import esportlogo from "../assets/Untitled.jpeg";
export default function About() {
    return(
        <section class="text-gray-600 body-font">
            <div class="mb-20"></div>

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
                      <a class="text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-30"></div>
        </section>
    )
}