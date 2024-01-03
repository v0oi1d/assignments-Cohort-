/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.task = []
   
  }
  add(todo){
    this.task.push(todo);
  }
  remove(index){
    if(index>=0 && index<this.task.length){
      return this.task.splice(index,1);
      
    }
    return null;
  }
  update(index, updatedTodo){
    if(index>=0 && index<this.task.length){
      this.task.splice(index,1,updatedTodo);
  
    }
  
  
  }
  getAll(){
    return this.task;
  }
  get(index){
    if(index>=0 && index<this.task.length){
      return this.task[index];
    }
    return null;
    
  }
  clear(){
    this.task = [];
  }
  
  
  }
  
  
  module.exports = Todo;
  
