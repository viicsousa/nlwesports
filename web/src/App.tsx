import {MagnifyingGlassPlus} from 'phosphor-react'
import './styles/main.css'


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10" >
      <img src="/logo-nlw-esports.svg" alt="" />

      <h1 className='text-5xl text-white font-black m-5'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6'>
        <a href="">
          <img src="/game-1.png" alt="" />
        </a>
        <a href="">
          <img src="/game-2.png" alt="" />
        </a>
        <a href="">
          <img src="/game-3.png" alt="" />
        </a>
        <a href="">
          <img src="/game-4.png" alt="" />
        </a>
        <a href="">
          <img src="/game-5.png" alt="" />
        </a>
        <a href="">
          <img src="/game-6.png" alt="" />
        </a>

      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-5 overflow-hidden">
      <div className= "bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
        <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
        <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio 
        </button>
      </div>

      </div>
    </div>
  )
}

export default App
