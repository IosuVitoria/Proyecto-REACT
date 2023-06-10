const CharacterFilter = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <h3>Búsqueda por nombre</h3>
      <input
        type="text"
        placeholder="Enter character name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default CharacterFilter;