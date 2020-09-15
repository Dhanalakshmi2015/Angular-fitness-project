import { Exercise } from './exercise.model';
import {Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/internal/operators/map';



@Injectable()
export class TrainingService{
exerciseChanged = new Subject<Exercise>();
 availableExercises:Exercise[] = [
  {id:'crunches' , name:'Crunches', duration: 30 ,calories:8},
  {id:'touch-toes' , name:'Touch Toes', duration:180 ,calories:15},
  {id:'side-lunges' , name:'Side Lunges', duration:120 ,calories:18},
  {id:'burpees' , name:'Burpees', duration:60 ,calories:9}
];
private runningExercise: Exercise;
private exercises : Exercise[] = [];


constructor(
  private db: AngularFirestore
){

}


getAvailableExercise(){
  return this.availableExercises.slice();
}




startExercise(selectedId: string){
  this.runningExercise = this.availableExercises.
  find(ex => ex.id === selectedId);
  console.log(this.runningExercise);
  this.exerciseChanged.next({...this.runningExercise});

}

completeExercise(){
  this.exercises.push({...this.runningExercise , date: new Date() , state: 'completed'});
  this.runningExercise = null;
  this.exerciseChanged.next(null);
}


cancelExercise(progress: number){
  this.exercises.push({...this.runningExercise ,
    duration: this.runningExercise.duration * (progress / 100),
    calories: this.runningExercise.duration * (progress / 100),
     state: 'cancelled',
   date: new Date() });
  this.runningExercise = null;
  this.exerciseChanged.next(null);
}


getRunningExercise(){
  return {...this.runningExercise};
}

getCompletedorCancelledExercises(){
  return this.exercises.slice();
}

}
