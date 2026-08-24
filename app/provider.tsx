"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Provider({ children }: { children: React.ReactNode }) {
  //React.ReactNode basically means anything React can render, such as JSX, text, numbers, fragments, etc.
  const [userDetail, setUserDetail] = useState<any>();
  useEffect(() => {
    CreateNewUser();
  }, []); //executre only when component loads

  const CreateNewUser = async () => {
    const result = await axios.post("/api/users");

    console.log(result.data);
    setUserDetail(result);
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
