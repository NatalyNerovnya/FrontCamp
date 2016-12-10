import { dropdown as dropdownTemplate} from '../templates/dropdown';

export class SourceRender{
	constructor(){}

	setDropdowns(arr){
		var refArr = '';
	 	arr.forEach(c => {
	 		refArr = `${refArr} ${ dropdownTemplate(c)}`;
	 	})
	 	home.setContent("source-filter", refArr);
	};
}