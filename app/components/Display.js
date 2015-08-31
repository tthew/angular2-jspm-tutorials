import { Component, View, NgFor, NgIf, bootstrap } from 'angular2/angular2'
import FriendsService from '../services/friends'

@Component({
  selector: 'display',
  hostInjector: [FriendsService]
})
@View({
  template: `
    <p>My name: {{ myName }}</p>
    <p>Friends:</p>
    <ul>
      <li *ng-for="#name of names">
        {{ name }}
      </li>
    </ul>
    <p *ng-if="names.length > 3">You have many friends!</p>
  `,
  directives: [NgFor, NgIf]
})

export default class DisplayComponent {
  myName: string
  names: Array<string>

  constructor(friendsService: FriendsService) {
    this.myName = 'Alice'
    this.names = friendsService.names
  }
}
