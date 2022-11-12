import React, {useState} from "react";
import './App.css';
import {Layout} from 'antd';
import AppHeader from "./components/AppHeader";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";
import PostAddForm from "./components/PostAddForm";

function App() {

  return (
      <div className="App" style={{alignItems: "center"}}>
        <header>
          <Layout style={{width: "900px", height: "800px", marginLeft: "300px"}}>
            <AppHeader />
            <PostList/>
          </Layout>
        </header>
      </div>
  );
}

export default App;
