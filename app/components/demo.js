import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';
import templateOnly from '@ember/component/template-only';

const MyComponent = setComponentTemplate(hbs`@first`, templateOnly());

export default class DemoComponent extends Component {
  myComponent = MyComponent;

  myHelper = (...args) => console.log(...args);
  myModifier = (...args) => console.log(...args);
}

setComponentTemplate(
  hbs`
    {{yield
      (hash
        myComponent=(component this.myComponent first=1)
        myHelper=(helper this.myHelper 1 2)
        myModifier=(modifier this.myModifier 1 2)
      )
    }}
  `,
  DemoComponent
);
