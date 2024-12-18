import React from "react";
import testimonials from "../assets/testimonials.js";
import { TbLetterA, TbLetterL, TbLetterP } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center font-karla mt-8 px-[10%]">
      <h1 className="text-xl font-semibold">Testimonials</h1>

      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap justify-between mt-4">
        {testimonials.map((t, ind) => (
          <div
            key={ind}
            className="border border-green-dark p-4 w-[80vw] md:w-64 rounded-md"
          >
            <div className="">
              <p className="flex items-baseline">
                Rating:
                <div className="flex pl-2">
                  {Array.from({ length: t.rating }, (_, index) => (
                    <p key={index}>
                      <FaStar color="gold" />
                    </p>
                  ))}
                </div>
              </p>
            </div>
            <div className="flex items-center mt-2">
              <div className="border-2 rounded-full p-2">
                {(t.logo === "A" && <TbLetterA />) ||
                  (t.logo === "P" && <TbLetterP />) ||
                  (t.logo === "L" && <TbLetterL />)}
              </div>
              <p className="pl-4">{t.name}</p>
            </div>

			<div className="mt-2">
				<p className="text-neutral-500">{t.desc}</p>
			</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
