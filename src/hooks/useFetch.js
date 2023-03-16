// Custom Hook
import { useAuthContext } from './useAuthContext'
import { useEffect, useState } from "react";
const useFetch = (url) => {
  const {user} = useAuthContext()
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // the abort controller is used to solve a major problem when fetch is in process and other component is called. Now when the fetch is completed the DOM elements have changed. This causes errors. So we return abort function everytime the fetch is complete. When fetch is interfered the error is different so error checking is important in the setError phase in this code. If any other error occur we acknowledge them.

    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal ,headers: {
      'Authorization': `Bearer ${user.token}`
    }}) // adding a signal to know which fetch is aborted
      .then((res) => {
        if (!res.ok) {
          throw Error("could not find the data at the resource...");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch((err) => {
        // bypassing fetch errors
        // console.log(err.message);
        if (err.name === "AbortError") {
          abortCont.abort();
          console.log("Fetch Aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
  }, [url,user.token]);
  return { data, isPending, error };
};

export default useFetch;
