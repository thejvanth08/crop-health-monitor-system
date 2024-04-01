const Input = ({type, name, placeholder, register}) => {
  return (
    <input
      className="bg-green-100 placeholder:text-green-600 max-w-96 w-full px-3 py-2 mb-2 outline-none rounded-lg"
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}
export default Input;