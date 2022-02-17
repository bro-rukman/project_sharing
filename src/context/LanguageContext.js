import React, { createContext, useState } from "react";
import useFetch from "../component/useFetch";
import { url } from "../service/api";
function LanguageContext() {
  const LangContext = createContext();

  const LangProvider = (props) => {
    const { data } = useFetch(`${url}/todos`);

    const [id, setId] = useState("id");
    const changeId = (e) => setId(e.target.value);
    const langState = { id, changeId, data };

    return (
      <LangContext.Provider value={langState}>
        {props.children}
      </LangContext.Provider>
    );
  };

  return {
    LangContext,
    LangProvider,
  };
}
export default LanguageContext;
