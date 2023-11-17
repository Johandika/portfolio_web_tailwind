import { banglele } from "../../assets/images";
import Container from "../../components/Container";

const Works = () => {
  return (
    <Container className="py-20 flex flex-col  justify-center items-center gap-16 ">
      <h2 className="font-SpaceMono text-4xl underline">Work Experience</h2>
      <div className="flex flex-row gap-6 overflow-hidden w-full overflow-x-scroll   pb-3">
        <div className="flex min-w-[900px] flex-row h-full bg-Gray p-8 rounded-lg ">
          <div className="flex-1 flex flex-col gap-5 w-fit ">
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
        </div>
        <div className="flex min-w-[900px]  flex-row h-full bg-Gray p-8 rounded-lg ">
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
        </div>
      </div>
    </Container>
  );
};

export default Works;
