import Swal from "sweetalert2";
const createUser = async (userData: any) => {
    try {
      const response = await fetch(`https://mi-club-app-back.vercel.app/v1/auth/register`, {
        method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok){
            throw new Error('Error al Realizar el Registro');
        }
        const responseData = await response.json();
        console.log(responseData)
        Swal.fire({
            title: "Nice!",
            text: `Registro de ${responseData.userCreated.socio.name} Creado con Exito`,
            imageUrl: `${responseData.userCreated.socio.image}`,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: `${responseData.userCreated.socio.name}`,
            timer: 3500,
            showConfirmButton: false,
          });
    } catch (error) {
        if (error instanceof Error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:`Algo Salio mal. error: ${error.message}`,
                timer: 3500,
                showConfirmButton: false,
              });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:`Error desconocido al crear el producto`,
              });
        }
    }
}

  
  export default createUser;