import {useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';

export const Github = () => {
      //  const data=useLoaderData()
      //  console.log("AnshuGithub",data);
    const [data, setData] = useState({});
    useEffect(() => {
      fetch('https://api.github.com/users/AnshuKumarAk')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data); 
          // Set fetched data to state
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
  return (
    <div className="flex justify-center">
    <div className="relative h-[400px] w-[340px] rounded-md mt-4 mb-4 ml-4">
    <img
      src={data.avatar_url}
      alt="Github Picture"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{data.login}</h1>
      <p className="mt-2 text-sm text-gray-300">
      {data.bio}
      </p>
      <h1 className="mt-2 text-sm text-gray-300">
       Followers : {data.followers}
      </h1>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        View Profile &rarr;
      </button>
    </div>
  </div>
  </div>
    );
  }

  // export const githubInfoLoader=async ()=>{
  //    const response=await fetch('https://api.github.com/users/AnshuKumarAk')
  //    return response.json
  // }