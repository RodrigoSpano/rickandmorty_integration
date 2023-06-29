import axios from "axios";

const URI = 'http://localhost:8080/rickandmorty'

export const loginReq = async (userData) => {
  try {
    const response = await axios(`${URI}/login?email=${userData.email}&password=${userData.password}`)
    return response.data.access
  } catch (error) {
    throw Error(error)
  }
} 