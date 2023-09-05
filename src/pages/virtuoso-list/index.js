import SecondaryHeader from "@/components/SecondaryHeader";
import { useGlobalContext } from "@/context/ContextProvider";
import { generateUsers } from "@/utils/user";
import { Virtuoso } from "react-virtuoso";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const { fontSize } = useGlobalContext();
  const personsList = useMemo(()=>generateUsers(2500),[]);
  const virtuosoRef = useRef(null);

  const router = useRouter();

  // Move Virtuoso to the selected person point
  useEffect(()=>{
    if(router.query.person){
      virtuosoRef.current.scrollToIndex({index: router.query.person, align: "start",behavior:"smooth"})
      // setInitialTopMostItemIndexPosition(router.query.person)
    }
  },[router.query.person])


  return (
    <div>
      <SecondaryHeader />
      <Virtuoso
        style={{ height: "calc(100vh - 90px)" }}
        data={personsList}
        ref={virtuosoRef}
        itemContent={(index, user) => (
          <div
            id={`person-${index}`}
            style={{
              backgroundColor: user.bgColor,
              padding: "1rem 0.5rem",
            }}
          >
            <h4 style={{ fontSize: fontSize + "px" }}><span className="px-3 py-1 bg-orange-300 rounded-full">{index}</span>: {user.name}</h4>
            <p style={{ marginTop: "1rem" }}>{user.jobTitle}</p>
            <div style={{ marginTop: "1rem" }}>{user.description}</div>
          </div>
        )}
      />
    </div>
  );
};

export default index;
