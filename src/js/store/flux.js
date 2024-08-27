const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characters: [],
		planets: [],
		favorites: []
	  },
	  actions: {
		getCharacters: async () => {
		  try {
			const response = await fetch("https://swapi.tech/api/people/");
			if (!response.ok) throw new Error("Network response was not ok.");
			const data = await response.json();
			setStore({ characters: data.results });
		  } catch (err) {
			console.error("Error fetching characters:", err);
		  }
		},
		getPlanets: async () => {
		  try {
			const response = await fetch("https://swapi.tech/api/planets/");
			if (!response.ok) throw new Error("Network response was not ok.");
			const data = await response.json();
			setStore({ planets: data.results });
		  } catch (err) {
			console.error("Error fetching planets:", err);
		  }
		},
		addFavorite: (item) => {
		  const store = getStore();
		  if (!store.favorites.some(fav => fav.name === item.name)) {
			setStore({ favorites: [...store.favorites, item] });
		  } else {
			console.warn("Item is already in favorites");
		  }
		},
		removeFavorite: (index) => {
		  const store = getStore();
		  if (index >= 0 && index < store.favorites.length) {
			setStore({
			  favorites: store.favorites.filter((_, i) => i !== index)
			});
		  } else {
			console.warn("Invalid index for removing favorite");
		  }
		}
	  }
	};
  };
  
  export default getState;
  