import Container from "../../components/Container";
import { workExperiences } from "../../constants";
import { useState, useRef } from 'react';

const Works = () => {
  const scrollContainerRef = useRef(null); // Menambahkan useRef untuk kontainer scroll
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startPosition) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Container className="py-20 flex flex-col  justify-center items-center gap-16 ">
      <h2 className="font-SpaceMono text-4xl underline">Work Experiences</h2>
      {/* Container Cards */}
      <div
        className="scrollbar-thin scrollbar-thumb-RedDarkest scrollbar-track-white flex flex-row gap-6 overflow-hidden w-full overflow-x-scroll pb-3 cursor-grab active:cursor-grabbing"
        ref={scrollContainerRef} // Menambahkan ref ke kontainer scroll
        onMouseDown={handleMouseDown} // Menambahkan event handler ke kontainer scroll
        onMouseLeave={handleMouseLeave} // Menambahkan event handler ke kontainer scroll
        onMouseUp={handleMouseUp} // Menambahkan event handler ke kontainer scroll
        onMouseMove={handleMouseMove} // Menambahkan event handler ke kontainer scroll
      >
        {/* Card */}
        {workExperiences?.map((item) => (
          <div key={item.id} className="flex min-w-[400px] sm:min-w-[1000px] h-auto flex-col sm:flex-row bg-gradient-to-tl from-gray-800 via-Gray to-Gray p-8 rounded-lg gap-5 sm:gap-10 group ">
            {/* Kiri */}
            <div className="flex flex-col gap-5 w-fit ">
              <div className="mb-2">
                <img
                  src={item.logo}
                  alt="Logo company"
                  className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-Gray hover:shadow-RedDarkest hover:shadow-lg shadow-lg shadow-slate-500 transition"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-white/30 ">Company:</div>
                <div className="text-xl font-SpaceMono">{item.company}</div>
              </div>
              <div className="flex-col flex ">
                <div className="text-sm text-white/30">Position:</div>
                <div className="text-xl font-SpaceMono">{item.position}</div>
              </div>
              <div className="flex-col flex">
                <div className="text-sm text-white/30">Interval:</div>
                <div className="text-xl font-SpaceMono">{item.interval}</div>
              </div>
            </div>
            <div className="h-full w-[1px] border-[1px] border-gray-600/20 my-auto hidden sm:block"></div>
            {/* Kanan */}
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-white/30">Responsibility:</div>
                <ol className=" flex flex-col gap-2">
                  {/* Looping Responsibilities */}
                  {item.responsibilities.map((item, index) => (
                    <li key={index + 1} className="flex">
                      <p className="mr-2">{index + 1}.</p>
                      <div>
                        {item}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-white/30">Tools:</div>
                <div className="flex flex-row gap-3">
                  {/* Looping Tools */}
                  {item.tools.map((tool, index) => (
                    <div key={index + 1}>
                      <img src={tool} alt="" className="w-7" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Works;
