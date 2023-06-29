import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const URI = "http://localhost:8080/rickandmorty";

export const useLoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validate = (user) => {
    let errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email))
      errors.email = "Invalid email";
    if (user.email.length < 15) errors.email = "Invalid email";
    if (user.password.length < 6)
      errors.password = "password must have at least 6 words";
    if (!/\d/.test(user.password))
      errors.password = "Password must contain a number";
    return errors;
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...credentials,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!Object.values(errors).length) {
      const resp = await axios(
        `${URI}/login?email=${credentials.email}&password=${credentials.password}`
      );
      sessionStorage.setItem("loged", resp.data.access);
      if (resp.data.access === true) {
        setCredentials({ email: "", password: "" });
        setErrors({ email: "", password: "" });
        navigate("/");
      } else {
        let timerInterval;
        Swal.fire({
          icon: "error",
          title: "Wrong credentials!",
          text: "Wrong email or password, please try again.",
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 5000,
          didOpen: () => {
            timerInterval = setInterval(() => {}, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
    }
  };

  return { handleLogin, handleChange, credentials, errors };
};
