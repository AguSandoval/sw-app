import axios from "axios";

export const getCharacters = async () =>
    await axios.get("https://swapi.dev/api/people");

export const getPlanet = async (planetUrl: string) =>
    await axios.get(planetUrl);
