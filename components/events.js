import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function Events(){
  const access_token = useSelector((state) => state.google.access_token);
  const [data, setData] = useState(null);

  // I will need to learn RTX thunks otherwise this to me is not it.
  
  useEffect(async () => {
    const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=${access_token}`);    
    const items = await res.json();
    setData(items)
  }, []);

  if (!data) return <p>No profile data</p>
    return(
        <ul>
            {
              data.items.map(event => <li key={event.id}>{event.summary}</li>)
            }
        </ul>
    )
}