export default function Search () {
  const handleSubmit = () => {

  }

  return (
    <form 
      className="flex items-center"
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        title="Buscar"
        placeholder="Buscar..."
        className="p-2 w-96 rounded-sm outline-none"
      />
      <button className="bg-secondary text-xl p-[11px] text-white rounded-sm">
        <i className='bx bx-search'></i>
      </button>
    </form>
  )
}