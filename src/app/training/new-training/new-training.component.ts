import { Component, OnInit, OnDestroy} from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit , OnDestroy{
 exercises: Exercise[] =[];
 exerciseSubscription: Subscription;
  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
   this.exercises = this.trainingService.getAvailableExercise();
  //  this.trainingService.fetchAvailableExercises();

  }

  onStartTraining(form: NgForm){
    console.log(form.value);
    console.log(form.value.selectedexercise);
    this.trainingService.startExercise(form.value.selectedexercise);

  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe();
  }

}
