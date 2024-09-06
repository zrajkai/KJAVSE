"use client";
import Box from "./box";
import Weather from "./weather";
import { useState } from "react";

export default function Home() {
  const [boxes, setBoxes] = useState([
    {
      title: "Sport",
      text: "Egyesületünk büszke saját szervezésű versenyeire, de természetesen szívesen segítünk mindenben tagjainknak, hogy felkészüljenek a nagy hazai versenyekre is.",
      image: "/sail1.jpg",
    },
    {
      title: "Balaton",
      text: "A Balaton a világ egyik legjobb vitorlázó vize, és mi büszkék vagyunk, hogy ezen a vizen versenyezhetünk.",
      image: "/sail2.webp",
    },
    {
      title: "Versenyzés",
      text: "Az egyesületünkben a versenyzés mellett a szórakozás is fontos. Minden évben szervezünk közös programokat, kirándulásokat, és egyéb eseményeket.",
      image: "/sail3.webp",
    },
    {
      title: "Pihenés",
      text: "Az egyesületünkben a versenyzés mellett a szórakozás is fontos. Minden évben szervezünk közös programokat, kirándulásokat, és egyéb eseményeket.",
      image: "/sail4.webp",
    }
  ]);

  return (
    <main className="flex flex-col items-center justify-between bg-white px-2 md:px-0">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col pt-10">

        <div id="fourboxes" className="flex flex-col md:flex-row w-full justify-around just py-10">
          {boxes.map((box, index) => (
            <Box key={index} title={box.title} text={box.text} image={box.image}></Box>
          ))}
        </div>

        <div id="intro" className="w-full py-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-950 text-center">Keszthely + Balaton = KJAVSE</h1>
          <p className="text-lg font-bold mb-2 text-justify">Üdvözöljük vitorlás sportegyesületünk honlapján! Fedezd fel a vitorlázás izgalmas világát velünk, és csatlakozz közösségünkhöz, ahol a szél és a víz szeretete egyesít minket. Lépj be a fedélzetre, és éld át a szabadság élményét a hullámok hátán!</p>
          <p className="text-lg text-justify">
            A vitorlázás a természet és az ember tökéletes harmóniája, ahol a szél erejét használva szelídítjük meg a hullámokat, és szárnyalunk a víz felszínén.
            Az ég és a víz találkozásánál, a vitorlás fedélzetén átélhetjük a szabadság tiszta örömét.
            Minden egyes kihajózás új kihívásokat és lehetőségeket rejt magában, ahol a tapasztalat, a tudás és az ösztönök vezérelnek minket.
            A versenyzésben azonban a vitorlázás igazi lényege is megmutatkozik: a stratégia, a gyors döntéshozatal és a csapatszellem összjátéka.
            A tét magas, hiszen minden manőver számít, de éppen ez az, ami életre kelti a szenvedélyt a versenyzők szívében.
            A célvonal átlépésekor érzett diadal, vagy éppen a tisztességes küzdelem után átélt elégedettség az, ami újra és újra visszacsábít minket a vitorlák alá.
          </p>
        </div>
      </div>

      <Weather />

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col">
        <div id="events" className="w-full my-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Állandó eseményeink</h1>

          <div className="flex my-10 flex-col md:flex-row">
            <div className="hidden w-1/3 md:inline-block">
              <img src="/sail_race.jpg" className="" alt="sail1" />
            </div>
            <div className="flex-col md:w-2/3 md:ps-24">
              <h2 className="text-2xl text-blue-950 font-bold">Pacal kupa</h2>
              <hr />
              <p className="text-gray-500 my-2 flex text-lg">
                <img src="/calendar.svg" className="w-6 mr-3" />
                Aug 26
              </p>
              <p className="text-lg">A Pacal kupa minden évben megrendezésre kerül, ahol a legjobb pacalosok mérhetik össze tudásukat.</p>
            </div>
          </div>

          <div className="flex my-10 flex-col md:flex-row">
            <div className="hidden w-1/3 md:inline-block">
              <img src="/sail_race2.jpg" className="" alt="sail1" />
            </div>
            <div className="flex-col md:w-2/3 md:ps-24">
              <h2 className="text-2xl text-blue-950 font-bold">Pünkösdi regatta</h2>
              <hr />
              <p className="text-gray-500 my-2 flex text-lg">
                <img src="/calendar.svg" className="w-6 mr-3" />
                Május 18
              </p>
              <p className="text-lg">A háromnapos vitorlás találkozó a Kékszalag után a második legnagyobb balatoni túraverseny, Balatonföldvárról Keszthelyig vitorlázik el a mezőny. </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
