import {Persos } from './Persos'
import Champions from '../Champions'

export default function List() {
  const listItems = Persos.map((perso) => (
    <li key={perso.id}>
      <Champions name={perso.name} type={perso.type} favori={perso.favori} />
    </li>
  ))

  return <ul>{listItems}</ul>
}