import img1 from "@assets/dach_v1_1.png";
import img2 from "@assets/dach_v1_2.png";
import img3 from "@assets/dach_v1_3.png";
import img4 from "@assets/dach_v1_4.png";
import img5 from "@assets/dach_v1_5.png";
import img6 from "@assets/dach_v1_6.png";

export default function RooferDemo() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto">
        <img src={img1} alt="Dachwerk Meister - Header" className="w-full h-auto block" />
        <img src={img2} alt="Dachwerk Meister - Leistungen" className="w-full h-auto block" />
        <img src={img3} alt="Dachwerk Meister - Über Uns" className="w-full h-auto block" />
        <img src={img4} alt="Dachwerk Meister - Kundenstimmen" className="w-full h-auto block" />
        <img src={img5} alt="Dachwerk Meister - Kontakt" className="w-full h-auto block" />
        <img src={img6} alt="Dachwerk Meister - Footer" className="w-full h-auto block" />
      </div>
    </div>
  );
}
