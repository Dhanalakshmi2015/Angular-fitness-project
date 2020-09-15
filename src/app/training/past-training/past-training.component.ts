import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss'],

})
export class PastTrainingComponent implements OnInit ,AfterViewInit , OnDestroy{
  displayedColumns= ['date' ,'name','duration','calories','state'];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort : MatSort;

  @ViewChild(MatPaginator)  paginator: MatPaginator;
    exChangedSubscription:Subscription;

  constructor(

    private trainingService: TrainingService
  ) { }
  ngOnInit() {
 // this.exChangedSubscription =  this.trainingService.finishedExercisesChanged.subscribe((exercise: Exercise[])=>{
      this.dataSource.data = this.trainingService.getCompletedorCancelledExercises();
 //   });
    // this.trainingService.fetchCompletedOrCancelledExercises();

  }

  ngAfterViewInit(){
  this.dataSource.sort =this.sort;
  this.dataSource.paginator=this.paginator;
  }

  doFilter(fliterValue:string){
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  ngOnDestroy(){
    this.exChangedSubscription.unsubscribe();
  }



}
