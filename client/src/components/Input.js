const Input = ({type, name, placeholder, register}) => {
  return (
    <input
      className="bg-tertiary font-semibold placeholder:font-normal placeholder:text-green-500 max-w-96 w-full px-3 py-2 mb-2 outline-none rounded-lg"
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}
export default Input;