
import Image from './Image'

const Preview = ({header,client, image,image2,year,descriptionPreview,caption,caption2}) => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl text-Black font-bold">{header}</h1>
      <Image image={image} caption={caption}/>
      <div className="text-gray-500 leading-8 text-justify">
        <p>Client : {client}</p>
        <p className="mb-4">Year : {year}</p>
        <p>{descriptionPreview}.</p>
      </div>
      {image2&&(<Image image={image2} caption={caption2}/>)}
    </section> 
  )
}

export default Preview