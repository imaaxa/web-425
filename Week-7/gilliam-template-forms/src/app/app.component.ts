import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gilliam Template Forms';

  onSubmit(formData) {
    console.log(formData);
  }
}
