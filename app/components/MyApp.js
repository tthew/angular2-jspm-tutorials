import { Component, View, bootstrap } from 'angular2/angular2'
import DisplayComponent from './Display.js'


@Component({
  selector: 'my-app'
})
@View({
  template: `
    <h2>Hello {{ name }}</h1>
    <display></display>
    ???
  `
})

export default class MyAppComponent {
  name: string
  constructor() {
    this.name = 'Alice'
  }
}

