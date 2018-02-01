"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.oneway = "One way bound label";
        this.twoway = "Two way bound label";
        this.firstSwitchState = "OFF";
        this.secondSwitchState = "ON";
        this.counter = 0;
    }
    AppComponent.prototype.changeLabelText = function () {
        this.twoway += " Two way bound label ";
        this.counter += 1;
    };
    AppComponent.prototype.onTextChanged = function (args) {
        var label = args.object;
        console.log("onTextChanged for " + this.counter + " times for element " + label);
    };
    AppComponent.prototype.onFirstChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = "ON";
        }
        else {
            this.firstSwitchState = "OFF";
        }
    };
    AppComponent.prototype.onSecondChecked = function (args) {
        var secondSwitch = args.object;
        if (secondSwitch.checked) {
            this.secondSwitchState = "ON";
        }
        else {
            this.secondSwitchState = "OFF";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-app",
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFhMUM7SUFTRTtRQVBPLFdBQU0sR0FBRyxxQkFBcUIsQ0FBQztRQUMvQixXQUFNLEdBQUcscUJBQXFCLENBQUM7UUFHL0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUc1QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLElBQUksdUJBQXVCLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxJQUFlO1FBQ3pCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTSxxQ0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3hCLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBRU0sc0NBQWUsR0FBdEIsVUFBdUIsSUFBSTtRQUN2QixJQUFJLFlBQVksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQXZDWSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDOztPQUNXLFlBQVksQ0EwQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInVpL3N3aXRjaFwiO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICBwdWJsaWMgb25ld2F5ID0gXCJPbmUgd2F5IGJvdW5kIGxhYmVsXCI7XG4gIHB1YmxpYyB0d293YXkgPSBcIlR3byB3YXkgYm91bmQgbGFiZWxcIjtcbiAgcHVibGljIGNvdW50ZXI6IG51bWJlcjtcblxuICBwdWJsaWMgZmlyc3RTd2l0Y2hTdGF0ZSA9IFwiT0ZGXCI7XG4gIHB1YmxpYyBzZWNvbmRTd2l0Y2hTdGF0ZSA9IFwiT05cIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gIH1cblxuICBjaGFuZ2VMYWJlbFRleHQoKSB7XG4gICAgICB0aGlzLnR3b3dheSArPSBcIiBUd28gd2F5IGJvdW5kIGxhYmVsIFwiO1xuICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gIH1cblxuICBvblRleHRDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgbGV0IGxhYmVsID0gPExhYmVsPmFyZ3Mub2JqZWN0O1xuICAgICAgY29uc29sZS5sb2coXCJvblRleHRDaGFuZ2VkIGZvciBcIiArIHRoaXMuY291bnRlciArIFwiIHRpbWVzIGZvciBlbGVtZW50IFwiICsgbGFiZWwpO1xuICB9XG5cbiAgcHVibGljIG9uRmlyc3RDaGVja2VkKGFyZ3MpIHtcbiAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgIGlmIChmaXJzdFN3aXRjaC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZmlyc3RTd2l0Y2hTdGF0ZSA9IFwiT05cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpcnN0U3dpdGNoU3RhdGUgPSBcIk9GRlwiO1xuICAgIH1cbn1cblxucHVibGljIG9uU2Vjb25kQ2hlY2tlZChhcmdzKSB7XG4gICAgbGV0IHNlY29uZFN3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XG4gICAgaWYgKHNlY29uZFN3aXRjaC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kU3dpdGNoU3RhdGUgPSBcIk9OXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWNvbmRTd2l0Y2hTdGF0ZSA9IFwiT0ZGXCI7XG4gICAgfVxufVxuXG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbn1cbiJdfQ==