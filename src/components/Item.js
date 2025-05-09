export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        // Al estar empacado, llama a la función onToggleItem para cambiar su estado
        onChange={() => onToggleItem(item.id)}
      />
      {/* Si el item está empacado, se muestra tachado */}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Botón para eliminar el item de la lista */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
