import { Observer } from './Observer';

export class LogToConsoleObserver /*extends Observer*/{
	constructor(subject) {
	 this.subject = subject;
	 this.subject.attach(this);
	};

	 update() {
	  console.log(`Console log: ${this.subject.stateForLogging};`);   
	};
}