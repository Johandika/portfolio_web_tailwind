import Container from "../../components/Container";
import { workExperiences } from "../../constants";

const Works = () => {
  return (
    <Container className="py-20 flex flex-col  justify-center items-center gap-16 ">
      <h2 className="font-SpaceMono text-4xl underline">Work Experiences</h2>
      {/* Container Cards */}
      <div className="scrollbar-thin scrollbar-thumb-RedDarkest scrollbar-track-white flex flex-row gap-6 overflow-hidden w-full overflow-x-scroll pb-3">
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
                  {item.responsibilities.map((item,index) => (
                    <li key={index+1} className="flex">
                      <p className="mr-2">{index+1}.</p>
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
                {item.tools.map((tool,index)=> (
                  <div key={index+1}>
                    <img src={tool} alt="" className="w-7" />
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex min-w-[900px]  flex-row h-full bg-Gray p-8 rounded-lg ">
          <div className="flex-1 flex flex-col gap-5 ">
            <div>
              <img
                src={banglele}
                alt="Logo company"
                className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-RedDarkest/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm ">Company:</div>
              <div className="text-xl ">PT Banglele Indonesia Maju</div>
            </div>
            <div className="flex-col gap-2 flex">
              <div className="text-sm ">Position:</div>
              <div className="text-xl">Graphic Designer</div>
            </div>
            <div className="flex-col gap-2 flex">
              <div className="text-sm ">Interval:</div>
              <div className="text-xl">Jan/21 - Jan/23</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="  flex flex-col gap-4">
              <div className="text-sm ">Responsibility:</div>
              <ol className=" flex flex-col gap-2">
                <li className="flex">
                  <p className="mr-2">1.</p>
                  <div>
                    Design Instagram content needs such as feeds and reels.
                  </div>
                </li>
                <li className="flex">
                  <p className="mr-2">2.</p>
                  <div>
                    Design printing needs such as banners, posters, flyers, and
                    brochures.
                  </div>
                </li>
                <li className="flex">
                  <p className="mr-2">3.</p>
                  <div>Design presentation needs.</div>
                </li>
                <li className="flex">
                  <p className="mr-2">4.</p>
                  <div>Design business proposals and annual work reports.</div>
                </li>
                <li className="flex">
                  <p className="mr-2">5.</p>
                  <div>Designing a website using Figma, Figjam.</div>
                </li>
                <li className="flex">
                  <p className="mr-2">6.</p>
                  <div>
                    Editing corporate video content with Davinci Resolve.
                  </div>
                </li>
                <li className="flex">
                  <p className="mr-2">7.</p>
                  <div>
                    Doing website development with WordPress and Elementor.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Works;
