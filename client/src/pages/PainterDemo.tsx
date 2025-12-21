import img1 from "@assets/maler_full_1.png";
import img2 from "@assets/maler_full_2.png";
import img3 from "@assets/maler_full_3.png";
import img4 from "@assets/maler_full_4.png";

export default function PainterDemo() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto">
        <img src={img1} alt="Maler Meisterbetrieb Arnold - Header" className="w-full h-auto block" />
        <img src={img2} alt="Maler Meisterbetrieb Arnold - Leistungen" className="w-full h-auto block" />
        <img src={img3} alt="Maler Meisterbetrieb Arnold - Über Uns" className="w-full h-auto block" />
        <img src={img4} alt="Maler Meisterbetrieb Arnold - Kontakt & Footer" className="w-full h-auto block" />
      </div>
    </div>
  );
}
