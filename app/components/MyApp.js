import { Component, View, bootstrap } from 'angular2/angular2'
import DisplayComponent from './Display.js'
import TodoListComponent from './TodoList.js'

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <h2>Hello {{ name }}</h1>
    <display></display>
    <todo-list></todo-list>
  `,
  directives: [DisplayComponent, TodoListComponent]
})

export default class MyAppComponent {
  name: string
  constructor() {
    this.name = 'Alice'
  }
}
