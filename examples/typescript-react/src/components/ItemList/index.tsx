import type { ReactElement } from 'react'

import type { Item } from '../../types.js'

import { useCallback, useState } from 'react'

import { ItemForm } from '../ItemForm/index.js'

/**
 * Display a list of items.
 */
export function ItemList(): ReactElement {
  const [items, setItems] = useState<Item[]>([])

  const addItem = useCallback(
    (item: Item) => setItems([{ ...item, id: items.length }, ...items]),
    [items]
  )

  return (
    <div>
      <ItemForm onSubmit={addItem} />
      {items.length ? (
        <ul>
          {items.map(({ id, link, text }) => (
            <li key={id}>
              {link ? (
                <a href={link} rel="noopener noreferrer" target="_blank">
                  {text}
                </a>
              ) : (
                text
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  )
}
