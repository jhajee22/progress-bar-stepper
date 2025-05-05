import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  pendingActivities = [
    'STEP-1',
   'STEP-2',
   'STEP-3',
   'STEP-4',
   'STEP-5',
   'STEP-6',
   'STEP-7',
   'STEP-8',
   'STEP-9'
 ];
 currentStep = 'STEP-6';   // index - 5

 isPendingActivitiesCompleted(pendingActivity: string): boolean {
   return this.pendingActivities.indexOf(pendingActivity) <= this.pendingActivities.indexOf(this.currentStep);  
 }
}
