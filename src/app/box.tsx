interface iBox {
  image: string;
  title: string;
  text: string;
}

export default function Box(data: iBox) {
  return (
    <div className="relative w-56 h-56 overflow-hidden group m-auto my-4"
      style={
        {
          backgroundImage: "url(" + data.image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }>
      <p className="bg-blue-300 bg-opacity-60 text-center mt-44 h-56 p-1 text-white group-hover:mt-0 group-hover:bg-blue-950 transition-all duration-700 ease-out">
        <span className="inline-block font-extrabold text-3xl mb-4">{data.title}</span><br />
        <span>{data.text}</span>
      </p>
    </div>
  )
};