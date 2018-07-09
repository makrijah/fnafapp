import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "fnaf-alert",
    templateUrl: "./fnaf-alert-component.html",
    styleUrls: [
        "./fnaf-alert-component.scss"
    ]
})
export class FnafAlertComponent implements OnInit{

    @Input("alert") public alert: string;

    @Input("alertTimer") public alertTimer: number;

    public alerting: boolean = false;

    @ViewChild('alarm') alarmRef: ElementRef;

    alarm(){
        this.alarmRef.nativeElement.play();
    }

    public ngOnInit() {
        setTimeout(() => {
            this.alerting = true;
            this.alarm();
        }, this.alertTimer)
    }

    public startReset() {
        this.alerting = false;
        this.alarmRef.nativeElement.pause();
    }
}