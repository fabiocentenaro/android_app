import { Component } from "@angular/core";
import { EventData } from "data/observable";
import { Label } from "ui/label";
import { Switch } from "ui/switch";
import { ScrollEventData } from "ui/scroll-view";



@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {

  public oneway = "One way bound label";
  public twoway = "Two way bound label";
  public counter: number;

  public firstSwitchState = "OFF";
  public secondSwitchState = "ON";

  constructor() {
      this.counter = 0;
  }

  
  changeLabelText() {
      this.twoway += " Two way bound label ";
      this.counter += 1;
  }

  onTextChanged(args: EventData) {
      let label = <Label>args.object;
      console.log("onTextChanged for " + this.counter + " times for element " + label);
  }

  public onFirstChecked(args) {
    let firstSwitch = <Switch>args.object;
    if (firstSwitch.checked) {
        this.firstSwitchState = "ON";
    } else {
        this.firstSwitchState = "OFF";
    }
}

public onSecondChecked(args) {
    let secondSwitch = <Switch>args.object;
    if (secondSwitch.checked) {
        this.secondSwitchState = "ON";
    } else {
        this.secondSwitchState = "OFF";
    }
}

  // Your TypeScript logic goes here
}
