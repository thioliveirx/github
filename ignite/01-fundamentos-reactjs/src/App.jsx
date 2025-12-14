import { Hearder } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';  


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
