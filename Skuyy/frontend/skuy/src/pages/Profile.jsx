import {useState, useEffect} from "react";
import api from "../services/api";

export default function Profile() {
  
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    fetchProfile();
  }, []);

  async function fetchProfile() {
      try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/auth/profile",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      setUser(response.data);
      console.log(response.data);
    } catch (error) {
     console.log(error);
    }
  }

  if(!user){
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}