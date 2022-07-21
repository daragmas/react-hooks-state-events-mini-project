import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (e) => {
    e.preventDefault()
    const newTasks = tasks.filter((task)=>task.text !== e.target.id)
    setTasks(newTasks)
  }
  
  const visibleTasks = tasks.filter((task)=>selectedCategory ==='All' || task.category === selectedCategory)

  const handleCategoryChange = (e)=> {
    const newCategory = e.target.value
    setSelectedCategory((selectedCategory) => selectedCategory = newCategory)
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onSelectCategory={handleCategoryChange} 
        selectedCategory={selectedCategory}/>
      <NewTaskForm onTaskFormSubmit={handleNewTask} categories={CATEGORIES.filter((category)=>category !== 'All')}/>
      <TaskList tasks={visibleTasks} removeTask={handleDeleteTask}/>
    </div>
  );
}

export default App;


/*
{
    "CATEGORIES": [
        "All",
        "Code",
        "Food",
        "Money",
        "Misc"
    ],
    "TASKS": [
        {
            "text": "Buy rice",
            "category": "Food"
        },
        {
            "text": "Save a tenner",
            "category": "Money"
        },
        {
            "text": "Build a todo app",
            "category": "Code"
        },
        {
            "text": "Build todo API",
            "category": "Code"
        },
        {
            "text": "Get an ISA",
            "category": "Money"
        },
        {
            "text": "Cook rice",
            "category": "Food"
        },
        {
            "text": "Tidy house",
            "category": "Misc"
        }
    ]
}
*/