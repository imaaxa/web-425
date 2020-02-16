import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gilliam Form Validation';

  onSubmit(formData) {
    console.log(formData);
  }
}
