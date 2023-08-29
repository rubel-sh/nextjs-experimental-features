import { useGlobalContext } from "@/context/ContextProvider";
import { generateUsers } from "@/utils/user";
import React from "react";
import { Virtuoso } from "react-virtuoso";

const index = () => {
  const { fontSize } = useGlobalContext();
  const users = generateUsers(2500);

  return (
    <div>
      {users.map((user) => (
        <div
          key={user.index}
          style={{
            backgroundColor: user.bgColor,
            padding: "1rem 0.5rem",
          }}
        >
          <h4 style={{ fontSize: fontSize + "px" }}>{user.name}</h4>
          <p style={{ marginTop: "1rem" }}>{user.jobTitle}</p>
          <div style={{ marginTop: "1rem" }}>{user.description}</div>
        </div>
      ))}
    </div>
  );
};

export default index;
