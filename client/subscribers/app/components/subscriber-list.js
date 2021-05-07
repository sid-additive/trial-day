import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class SubscriberListComponent extends Component {
  @tracked
  subscribers = [];

  constructor() {
    super(...arguments);

    this.subscribers = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@mail.com",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@mail.com",
      },
      {
        firstName: "Mary",
        lastName: "Rose",
        email: "mary.rose@mail.com",
      },
      {
        firstName: "Paul",
        lastName: "Smith",
        email: "paul.smith@mail.com",
      },
    ];
  }
}
