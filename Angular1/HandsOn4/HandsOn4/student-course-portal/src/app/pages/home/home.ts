// [property] = One-way binding (Component ➜ DOM)
// [(ngModel)] = Two-way binding (Component ↔ DOM)
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
     standalone: true,

  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  // String Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-way Binding
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
  ngOnInit(): void {

  console.log('✅ HomeComponent initialized - courses loaded');

}

ngOnDestroy(): void {

  console.log('❌ HomeComponent destroyed');

}

}