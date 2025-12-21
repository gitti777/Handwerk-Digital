import img1 from "@assets/heizung_full_1.png";
import img2 from "@assets/heizung_full_2.png";
import img3 from "@assets/heizung_full_3.png";
import img4 from "@assets/heizung_full_4.png";
import img5 from "@assets/heizung_full_5.png";

export default function HeatingDemo() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto">
        <img src={img1} alt="Sanitär & Heizung Müller - Header" className="w-full h-auto block" />
        <img src={img2} alt="Sanitär & Heizung Müller - Leistungen" className="w-full h-auto block" />
        <img src={img3} alt="Sanitär & Heizung Müller - Über Uns" className="w-full h-auto block" />
        <img src={img4} alt="Sanitär & Heizung Müller - Badplanung" className="w-full h-auto block" />
        <img src={img5} alt="Sanitär & Heizung Müller - Kontakt & Footer" className="w-full h-auto block" />
      </div>
    </div>
  );
}
