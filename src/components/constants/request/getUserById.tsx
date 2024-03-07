const getUserById = async (id: string | string[]) => {
  try {
    const response = await fetch(`https://mi-club-app-back.vercel.app/api/v1/usuarios/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error desconocido al obtener el usuario: ${error}`);
  }
};

export default getUserById;