"use client";
import Field from "../../components/field";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";
import validator from "./validator";
import { Errors } from "../../components/constants/interfaces";
import createUser from "@/components/constants/request/createUser";

const RegisterPage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    dni: "",
    dob: "",
    phone: "",
    image: "",
    number: 0,
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));

    // Valida el campo actual y actualiza los errores
    const validationErrors: any = validator({ ...userData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");
  const handleSelectFile = (e: any) => setFile(e.target.files[0]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleImageUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("file", file || "");
      const res = await axios.post(`https://mi-club-app-back.vercel.app/api/v1/upload`, data);
      setRes(res.data.secure_url);
      setImageUrl(res.data.url);
      setShowDeleteButton(true);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteImage = () => {
    setImageUrl(null);
    setRes("");
    setShowDeleteButton(false);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setUserData( { ...userData, image: res });
    const validationErrors = validator(userData);
    setErrors(validationErrors);
    try {
      await createUser(userData).then((result) => {
        router.push("/login");
      });;
    }catch(error: any){
      console.error("Error en el Registro: ", error.message);
    }
  };

  const [viewPass, setViewPass] = useState(false);

  const handleView = () => {
    setViewPass((prevViewPass) => !prevViewPass);
  };

  return (
    <div className="flex flex-col justify-center items-center my-4 w-full pt-44">
      <div className="flex flex-col items-center h-full mb-4 bg-gray-100 mx-2 border border-gray-300 rounded-lg shadow">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center h-full w-full mx-2"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
              Registrate en Peuma Limay
            </h1>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu nombre:
            </label>
            <Field
              placeholder="Nombre"
              type="text"
              name="name"
              onChange={handleChange}
              value={userData.name}
            />
            <span className="text-red-500">{errors.name}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu Apellido:
            </label>
            <Field
              placeholder="Apellido"
              type="text"
              name="last_name"
              onChange={handleChange}
              value={userData.last_name}
            />
            <span className="text-red-500">{errors.last_name}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu email:
            </label>
            <Field
              placeholder="Tu email"
              type="text"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
            <span className="text-red-500">{errors.email}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu contraseña:
            </label>
            <div className="relative">
              <Field
                type={viewPass ? "text" : "password"}
                name="password"
                placeholder="Tu Contraseña"
                value={userData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute top-5 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                onClick={() => handleView()}
              >
                {viewPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <span className="text-red-500">{errors.password}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu dirección:
            </label>
            <Field
              placeholder="Tu dirección"
              type="text"
              name="address"
              onChange={handleChange}
              value={userData.address}
            />
            <span className="text-red-500">{errors.street}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu DNI:
            </label>
            <Field
              placeholder="D. N. I."
              type="text"
              name="dni"
              onChange={handleChange}
              value={userData.dni}
            />
            <span className="text-red-500">{errors.dni}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu Numero de Socio:
            </label>
            <Field
              placeholder="Numero de Socio"
              type="text"
              name="number"
              onChange={handleChange}
              value={userData.number}
            />
            <span className="text-red-500">{errors.dni}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Tu Fecha de Nacimiento:
            </label>
            <Field
              placeholder="Fecha de Nac."
              type="date"
              name="dob"
              onChange={handleChange}
              value={userData.dob}
            />
            <span className="text-red-500">{errors.dni}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Teléfono:
            </label>
            <Field
              placeholder="+54 - codigo de area - numero"
              type="tel"
              name="phone"
              onChange={handleChange}
              value={userData.phone}
            />
            <span className="text-red-500">{errors.dni}</span>
          </div>
          <div className="flex-col justify-start w-10/12">
            <label className="block mb-2 ml-2 text-sm font-medium dark:text-white">
              Imagen:
            </label>
            {imageUrl ? (
              <div className="flex flex-col items-center content-center justify-center text-center">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="my-2"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                ></img>
                <button
                  onClick={handleDeleteImage}
                  className="bg-red-600 font-bold text-sm text-black h-8 w-full my-2 rounded-xl"
                >
                  Eliminar
                </button>
              </div>
            ) : (
              <>
                <input
                  id="file"
                  type="file"
                  onChange={handleSelectFile}
                  multiple={false}
                  className="my-4 w-full text-lg bg-blue-200 hover:bg-blue-300 text-black font-normal rounded-full"
                />
                {file && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="bg-lime-600 font-bold text-sm text-black h-8 w-full my-2 rounded-xl"
                  >
                    {loading
                      ? "...Cargando [■■■■■■■□□□□□]"
                      : "Cargar a Cloudinary"}
                  </button>
                )}
              </>
            )}
            {errors.dni && (
              <p className="text-red-500 text-xs mb-1 ml-2">{errors.dni}</p>
            )}
          </div>
          <button
            type="submit"
            className="my-4 w-10/12 text-xl bg-blue-500 hover:bg-lime-300 text-black font-normal py-2 px-4 rounded-full"
          >
            Registrate.
          </button>
        </form>
        <div className="flex flex-row">
          <h1 className="block mb-2 ml-2 text-sm font-medium dark:text-white">
            ¿Ya tienes tu cuenta?
          </h1>
          <button
            onClick={() => router.push("/login")}
            className="block mb-2 ml-2 text-sm font-medium dark:text-white hover:text-blue-800"
          >
            Inicia Sesión.
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
