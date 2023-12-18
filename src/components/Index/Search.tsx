export default function Search() {
  return (
    <form 
      className="flex items-center"
      id="handleSubmit"
    >
      <input 
        type="text" 
        title="Buscar"
        placeholder="Buscar..."
        className="p-1 md:p-2 w-full md:w-96 rounded-sm outline-none"
      />
      <button className="bg-secondary text-xl p-[3px] md:p-[6px] text-white rounded-sm">
        <i className='bx bx-search'></i>
      </button>
    </form>
  )
}
