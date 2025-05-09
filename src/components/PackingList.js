import { useState } from "react";
import Item from "./Item";

// Componente PackingList que recibe una lista de items y funciones para manejar eventos
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // Estado local para manejar el criterio de ordenación
  const [sortBy, setSortBy] = useState("input");

  // Si no se ordena la lista, se usa la lista original
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  // Si se ordena por descripción, se ordena alfabéticamente
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // Si se ordena por estado, se ordena por si está empacado o no. Convierte el booleano a número para la comparación
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* Mapea los items ordenados y renderiza un componente Item por cada uno */}
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      {/* Un select para elegir cómo ordenar */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Ordenar por orden de entrada</option>
          <option value="description">Ordenar por descripción</option>
          <option value="packed">Ordenar por estado</option>
        </select>
        <button onClick={onClearList}>Limpiar lista</button>
      </div>
    </div>
  );
}
