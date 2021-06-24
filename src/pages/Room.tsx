import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/rooms.scss'

type RoomParams = {
  id: string
}

export function Room() {
   const params = useParams<RoomParams>()

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id}/>
        </div>
      </header>

      <main>
        <div className="room-title">
          
          <h1>Sala</h1>

        </div>

        <form>
          <textarea 
            placeholder="O que você quer perguntas?" 
          />
          <div className="form-footer">
			<span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>

        <div className="question-list">
        </div>
      </main>
    </div>
  )
}