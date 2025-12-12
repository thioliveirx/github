import { Hearder } from "./components/Header";
import { Post } from "./Post";

import './global.css';  

export function App() {
  return (
    <div>
      <Hearder />

      <Post 
        author="Thiago Oliveira" 
        content="lorem" 
      />
      <Post 
        author="Artur Junqueira"
        content="acnkacndacnsanuinciau"
      />
    </div>
  );
}
