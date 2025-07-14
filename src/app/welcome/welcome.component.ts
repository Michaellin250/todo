import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){

  }
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message = 'Some Welcome Message';
  name = "";
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){

    console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];


  }

}
