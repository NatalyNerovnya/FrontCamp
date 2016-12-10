export class Observable{
	constructor(){
		this.observers = [];
	}

	attach(observer){
		this.observers.push(observer);
	};

	detach(observer){
		const indexOfElement = this.observers.indexOf(observer);
		if(indexOfElement != -1) {
			this.observers.splice(indexOfElement, 1);
		}
	};

	notify() { 
		this.observers.forEach((o) => o.update());   
	};
};