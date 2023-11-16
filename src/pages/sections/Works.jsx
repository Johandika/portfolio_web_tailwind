import Container from "../../components/Container"

const Works = () => {
  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-16 ">
      <h2 className="font-SpaceMono text-4xl underline">Work Experience</h2>
      <div className="flex w-full flex-row h-full bg-Gray p-8 rounded-lg font-SpaceMono">
        <div className="flex-1 flex flex-col gap-5 ">
          <div>
            <img src="" alt="" className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-RedDarkest/70" />
          </div>
          <div className="">
            <div className="text-sm font-Poppins">Company:</div>
            <div className="text-2xl">PT Banglele Indonesia Maju</div>
          </div>
          <div className="">
            <div className="text-sm font-Poppins">Position:</div>
            <div className="text-2xl">Graphic Designer</div>
          </div>
          <div className="">
            <div className="text-sm font-Poppins">Interval:</div>
            <div className="text-2xl">Jan/21 - Jan/23</div>
          </div>
          
        </div>
        <div className="flex-1">
        <div className="  flex flex-col gap-4">
            <div className="text-sm font-Poppins">Responsibility:</div>
            <ul className="text-xl flex flex-col">
              <li>- Membubat desain</li>
              <li>- Membubat desain</li>
              <li>- Membubat desain</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Works