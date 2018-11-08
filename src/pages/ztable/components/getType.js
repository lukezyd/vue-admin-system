import { catType } from './api/ztable'

export function (){
	catType().then( response => {
		consoe.log(response)
	}).catch(error => {

	});
}