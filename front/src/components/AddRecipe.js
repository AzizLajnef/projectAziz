import React, { useState } from 'react';

const AddRecipe = ({ addRecipe }) => { 
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) return;
    addRecipe({ title, ingredients, instructions, imageUrl });
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImageUrl('');
  };

  const closeForm = () => { 
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImageUrl('');
  }

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input type="text" value={ingredients} placeholder="Ingredients" onChange={e => setIngredients(e.target.value)} />
        <input type="text" value={instructions} placeholder="Instructions" onChange={e => setInstructions(e.target.value)} />
        <input type="text" value={imageUrl} placeholder="Image URL" onChange={e => setImageUrl(e.target.value)} />
        <button type="submit">Add Recipe</button>
       
      </form>
    </div>
  );
};

export default AddRecipe;
