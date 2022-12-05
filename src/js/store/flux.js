const getState = ({ getStore, setStore }) => {
    return {

        store: {
            personajes: null,
            planetas: null,
            vehiculos: null,
            favoritos: [],
            personaje: null,
            planeta: null,
            vehiculo: null
        },

        actions: {
            getPersonajes: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ personajes: data })
                    })
            },
            getPersonajeById: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ personaje: data })
                    })
            },
            getPlanetas: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ planetas: data })
                    })
            },
            getPlanetaById: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ planeta: data })
                    })
            },
            getVehiculos: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ vehiculos: data })
                    })
            },
            getVehiculoById: (url) => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ vehiculo: data })
                    })
            },
            agregarFavoritos: (favorito) => {
                const { favoritos } = getStore();
                const favoritosActualizado = [favorito, ...favoritos];
                setStore({ favoritos: favoritosActualizado });

            }

        }

    }
}

export default getState;