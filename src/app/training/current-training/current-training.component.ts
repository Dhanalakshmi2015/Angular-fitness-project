import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
  //@Output() trainingExit = new EventEmitter();
  progress = 0;
  timer: any;
  constructor(
    private dailog: MatDialog,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.startOrResumeTraining();
  }

  startOrResumeTraining() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }



  // onYesClick(){
  //   this.dailog.closeAll();
  // }

  // onNoClick(){

  // }

  onStop() {

    clearInterval(this.timer);
    const dialogRef = this.dailog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        this.trainingService.cancelExercise(this.progress);
      // this.trainingExit.emit();
      } else {
        this.startOrResumeTraining();
      }
    });
  }
}
