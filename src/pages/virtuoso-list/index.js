import { generateUsers } from "@/utils/user";
import React from "react";
import {  Virtuoso } from "react-virtuoso";

const index = () => {
  return (
    <div>
      <Virtuoso
        style={{ height: "calc(100vh - 90px)" }}
        data={generateUsers(100)}
        itemContent={(index, user) => (
          <div
            style={{
              backgroundColor: user.bgColor,
              padding: "1rem 0.5rem",
            }}
          >
            {console.log(user)}
            <h4>{user.name}</h4>
            <p style={{ marginTop: "1rem" }}>{user.jobTitle}</p>
            <div style={{ marginTop: "1rem" }}>{user.description}</div>
          </div>
        )}
      />
    </div>
  );
};


export default index;
