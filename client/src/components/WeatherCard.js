const WeatherCard = ({ month, date, temp, condition, img }) => {
  return (
    // styling based on state of the parent
    <div className="group w-[90%] h-40 mb-7 mx-auto flex gap-x-4">
      <div className="w-1/2 flex flex-col justify-center items-center gap-y-2 border-b-2 border-primary">
        <p className="text-5xl font-[700px]">{date}</p>
        <p>{month}</p>
      </div>
      {/* data */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-tertiary group-first:bg-primary group-first:text-tertiary rounded-lg relative bottom-1">
        <img className="w-16 h-16 mb-2" src={img} alt={`${img} image`} />
        <p className="font-semibold text-xl group-first:text-secondary">{temp}</p>
        <p>{condition}</p>
      </div>
    </div>
  )
}
export default WeatherCard;