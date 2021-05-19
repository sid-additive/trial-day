import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SubscriberListComponent extends Component {
  @tracked
  subscribers = [];

  constructor() {
    super(...arguments);

    this.subscribers = [
      {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'm',
        email: 'john.doe@mail.com',
        state: 'subscribed'
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'f',
        email: 'jane.doe@mail.com',
        state: 'subscribed'
      },
      {
        firstName: 'Mary',
        lastName: 'Rose',
        gender: 'f',
        email: 'mary.rose@mail.com',
        state: 'unsubscribed'
      },
      {
        firstName: 'Paul',
        lastName: 'Smith',
        gender: 'm',
        email: 'paul.smith@mail.com',
        state: 'subscribed'
      }
    ];
  }
}
