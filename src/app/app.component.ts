import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promise-example';
  counter: number = 0;
  time: number = 0

  constructor(private router: Router) {

  }


  ngOnInit() {
    this.resetTimer();
  }

  @HostListener('window:mousemove')
  @HostListener('window:keypress')
  @HostListener('window:click')
  @HostListener('window:wheel')
  resetTimer() {
    clearTimeout(this.time);
    //    console.log('cleared time=',this.time)
    this.time = window.setTimeout(() => {
      alert('Idle for 30 minutes.');
    }, 1800000);
    //    }, 5000);
    //    console.log('set time=', this.time)
  }

  async justWait20Secs() {
    console.log('inside justwait')
    await new Promise((resolve) => { setTimeout(() => console.log('justWait20Secs done waiting 15 secs'), 15000); resolve('done') })
    console.log('finished waiting first 15 secs')
    await new Promise((resolve) => { setTimeout(() => console.log('justWait20Secs done waiting 5 secs'), 5000); resolve('done') })
    console.log('finished waiting second 5 secs')
  }

  async onPressMe() {

    this.counter++

    console.log('inside onPressMe, before await')

    await new Promise((myResolve) => setTimeout(() => { console.log('inside timeout 1'), myResolve('1') }, 3000))

    console.log('between waits')

    await new Promise((myResolve) => setTimeout(() => { console.log('inside timeout 2'); myResolve('2') }, 3000))

    await this.justWait20Secs()
    //this.justWait20Secs()

    console.log('leaving onPressMe, navigate called next', this.counter)

    this.router.navigate(['progRoute'])

  }

  onNaVBtnRoute() {
    this.router.navigate(['btnRoute'])
  }
}
