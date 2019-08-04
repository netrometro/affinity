import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { }

  start() {
    let uid = this.route.snapshot.paramMap.get('uid');
    console.log('Tutorial uid: ', uid);
    
    this.router.navigate(['/questionary', { uid: uid }]);
  }
}