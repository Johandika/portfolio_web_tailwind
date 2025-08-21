
const Image = ({image,caption, medium}) => {
  return (
    <figure className="flex flex-col items-center gap-2 ">
      <img src={image} alt="Slashtheory web design" loading="lazy"
      className={`
      ${medium ? 'w-[95%] sm:w-[50%]':'w-[95%]'}
       ring-1 p-1 ring-gray-200 rounded-lg`} />
      <figcaption className="italic text-gray-500 text-sm">{caption}</figcaption>
    </figure>
  )
}

export default Image