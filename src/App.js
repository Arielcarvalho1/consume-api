import './styles/App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [Posts, setPosts] = useState([]);
  
  const client = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/posts" 
  });

  useEffect(() => {
   client.get('?_limit=10').then((response) => {
      console.log(response.data)
      setPosts(response.data);
   });
  }, []);

  return (
    
    <div className="App">
      <table>

      <tr>
          <th> {Posts[0]["title"]} </th>
          <th> Contact </th>
          <th> Example </th>
      </tr>

      <tr>
        <td> Business 1</td>
        <td> contact </td>
        <td> example </td>
      </tr>

      <tr>
        <td> sd </td>
        <td> sd </td>
        <td> sd </td>
      </tr>
      </table>
    </div>
  );
}

export default App;
