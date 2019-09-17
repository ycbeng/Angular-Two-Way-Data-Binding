import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Install Fest';
  subtitle='Install Fest';
  logo='http://www.southern.edu.my/mobile/images/logo.png';

  num: number = 0;
  increment() {
    this.num++;
  }


  
  movie:any = {
		name : 'The Secret Life of Pets'
  };

}
