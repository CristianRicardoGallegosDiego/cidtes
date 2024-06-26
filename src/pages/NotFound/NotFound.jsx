import React from "react";
import { Boxes } from "../../components/ui/BackgroundBoxes";
import { cn } from "../../utils/cn";

const NotFound = () => {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
     
          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            404 - Not Found
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
          La página que buscas podría haber sido eliminada, cambiado de nombre o estar temporalmente no disponible.
          </p>
        </div>
      );
};

export default NotFound;