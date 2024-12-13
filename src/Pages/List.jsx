import { characters } from '../Data/characters.js'

export default function List() {
    return (
        <>
            <h1 className='sub-title'>Characters List</h1>
            <ul className='char-list'>
                {characters.map(char => (
                    <li key={char.id}>
                        <h3>{char.nome}</h3>
                        <p>{char.descrizione}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}