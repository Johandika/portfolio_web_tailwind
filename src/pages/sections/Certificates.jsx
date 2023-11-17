import Container from '../../components/Container'
import ImageSlider from '../../components/ImageSlider'

const Certificates = () => {
  return (
    <Container className="py-20 flex flex-col justify-center items-center gap-4 sm:gap-16  ">
      <h2 className="font-SpaceMono text-4xl underline">Certificates</h2>
      <ImageSlider/>
    </Container>
  )
}

export default Certificates