import { useEffect, useState } from "react";

const Github = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/alexsumoski/events")
      .then((response) => response.json())
      .then((data) => setActivity(data.slice(-5)));
  }, []);

  console.log(activity);

  return (
    <div className="h-full w-1/2 p-10 bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg bg-slate-600 border-[1px] border-stone-500">
      <h1 className="font-semibold text-3xl">Recent Activity</h1>
      <ul>
        {activity.map((event: any, index) => (
          <li key={index}>
            <p>{event.type}</p>
            <p>Repo: {event.repo.name}</p>
            <p>Date: {new Date(event.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
};

export default Github;
