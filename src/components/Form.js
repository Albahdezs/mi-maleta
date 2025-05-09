import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // Evitar que la página se recargue al enviar el formulario
    e.preventDefault();

    if (!description) return;

    // Crear un nuevo item con la descripción, cantidad y un id único
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Llamar a la función onAddItems para añadir el nuevo item a la lista
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    // Formulario para añadir un nuevo item a la lista
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>¿Qué necesitas para tu 😍 viaje?</h3>
      {/* Selector para elegir la cantidad. Se actualiza con setQuantity */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      {/* Campo de texto para escribir el artículo y agregarlo. Se actualiza con setDescription */}
      <input
        type="text"
        placeholder="Artículo..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
}
