export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Empieza a añadir artículos a tu maleta 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Tienes todo listo para viajar ✈️"
          : `💼 Tienes ${numItems} artículos en tu lista, y has guardado
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
