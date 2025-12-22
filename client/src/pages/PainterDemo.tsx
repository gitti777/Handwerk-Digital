import img1 from "@assets/maler_v3_1.png";
import img2 from "@assets/maler_v3_2.png";
import img3 from "@assets/maler_v3_3.png";
import img4 from "@assets/maler_v3_4.png";
import img5 from "@assets/maler_v3_5.png";

export default function PainterDemo() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto">
        <img src={img1} alt="Maler Meisterbetrieb Arnold - Startseite" className="w-full h-auto block" />
        <img src={img2} alt="Maler Meisterbetrieb Arnold - Vorteile" className="w-full h-auto block" />
        <img src={img3} alt="Maler Meisterbetrieb Arnold - Leistungen" className="w-full h-auto block" />
        <img src={img4} alt="Maler Meisterbetrieb Arnold - Tradition" className="w-full h-auto block" />
        <img src={img5} alt="Maler Meisterbetrieb Arnold - Kontakt & Footer" className="w-full h-auto block" />
      </div>
    </div>
  );
}
