import { Hearder } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';  
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Hearder />

     <div className={styles.wrapper}>
      <Sidebar />
      <main>
         <Post 
        author="Thiago Oliveira" 
        content="lorem" 
      />
      <Post 
        author="Artur Junqueira"
        content="acnkacndacnsanuinciau"
      />
       </main>
      </div>
    </div>
  );
}
