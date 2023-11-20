import Image from "./Image"

const Topic = ({title,description, description2, description3,description4,description5,description6,list, list2,list3,list4,list5,list6, process, process2, process3, process4, process5,process6,image,image2,image3,image4,image5,image6,caption,caption2,caption3,caption4,caption5,caption6}) => {
  return (
    <section className="gap-4 flex flex-col" >
      <h2 className="text-2xl text-Black font-bold">{title}</h2>
      {/* Pertama */}
      {process && (<h3 className="font-bold text-Black">{process}</h3>)}
      {description && (
       <p className="text-gray-500 leading-8 text-justify">{description}</p> 
      )}
      {list&& (
        <ol className="text-gray-500 leading-8 text-justify ml-0 sm:ml-6 ">
          {list.map((item, index) => (
            <li key={index} className="gap-7 flex flex-row relative">
              <span className="w-5  h-5 flex justify-center items-center text-white absolute bg-red-600 rounded-full top-1 text-xs">{index+1}.
              </span>
              <p className=" pl-8">{item}</p> 
            </li>
          ))}
        </ol>
      )}
      {image && ( <Image medium image={image} caption={caption}/>)}
      {/* Kedua */}
      {process2 && (<h3 className="font-bold text-Black">{process2}</h3>)}
      {description2 && (
        <p className="text-gray-500 leading-8 text-justify">{description2}</p>
      )}
      {list2 && (
        <ol className="text-gray-500 leading-8 text-justify ml-0 sm:ml-6">
          {list2.map((item, index) => (
            <li key={index} className="gap-7 flex flex-row relative">
              <span className="w-5  h-5 flex justify-center items-center text-white absolute bg-red-600 rounded-full top-1 text-xs">{index+1}.
              </span>
              <p className=" pl-8">{item}</p> 
            </li>
          ))}
        </ol>
      )}
      {image2 && ( <Image medium image={image2} caption={caption2}/>)}
      {/* Ketiga */}
      {process3 && (<h3 className="font-bold text-Black">{process3}</h3>)}
      {description3 && (
        <p className="text-gray-500 leading-8 text-justify">{description3}</p>
      )}
      {list3 && (
        <ol className="text-gray-500 leading-8 text-justify ml-0 sm:ml-6">
          {list3.map((item, index) => (
            <li key={index} className="gap-7 flex flex-row relative">
              <span className="w-5 h-5 flex justify-center items-center text-white absolute bg-red-600 rounded-full top-1 text-xs">{index+1}.
              </span>
              <p className=" pl-8">{item}</p> 
            </li>
          ))}
        </ol>
      )}
      {image3 && ( <Image medium image={image3} caption={caption3}/>)}
      {/* Keempat */}
      {process4 && (<h3 className="font-bold text-Black">{process4}</h3>)}
      {description4 && (
        <p className="text-gray-500 leading-8 text-justify">{description4}</p>
      )}
      {list4 && (
        <ol className="text-gray-500 leading-8 text-justify ml-0 sm:ml-6">
          {list4.map((item, index) => (
            <li key={index} className="gap-7 flex flex-row relative">
              <span className="w-5 h-5 flex justify-center items-center text-white absolute bg-red-600 rounded-full top-1 text-xs">{index+1}.
              </span>
              <p className=" pl-8">{item}</p> 
            </li>
          ))}
        </ol>
      )}
      {image4 && ( <Image medium image={image4} caption={caption4}/>)}
      {/* Kelima */}
      {process5 && (<h3 className="font-bold text-Black">{process5}</h3>)}
      {description5 && (
        <p className="text-gray-500 leading-8 text-justify">{description5}</p>
      )}
      {list5 && (
        <ol className="text-gray-500 leading-8 text-justify ml-0 sm:ml-6">
          {list5.map((item, index) => (
            <li key={index} className="gap-7 flex flex-row relative">
              <span className="w-5 h-5 flex justify-center items-center text-white absolute bg-red-600 rounded-full top-1 text-xs">{index+1}.
              </span>
              <p className=" pl-8">{item}</p> 
            </li>
          ))}
        </ol>
      )}
      {image5 && ( <Image medium image={image5} caption={caption5}/>)}
      {/* Keenam */}
      {process6 && (<h3 className="font-bold text-Black">{process6}</h3>)}
      {description6 && (
        <p className="text-gray-500 leading-8 text-justify">{description6}</p>
      )}
      {list6 && (
        <ol className="text-gray-500 leading-8 text-justify ml-0 sm:ml-6">
          {list6.map((item, index) => (
            <li key={index} className="gap-7 flex flex-row relative">
              <span className="w-5 h-5 flex justify-center items-center text-white absolute bg-red-600 rounded-full top-1 text-xs">{index+1}.
              </span>
              <p className=" pl-8">{item}</p> 
            </li>
          ))}
        </ol>
      )}
      {image6 && ( <Image medium image={image6} caption={caption6}/>)}
    </section>
  )
}

export default Topic