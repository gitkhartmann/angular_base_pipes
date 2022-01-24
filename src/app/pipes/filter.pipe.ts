import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
	name: 'filter',
	pure: false
})
export class FilterPipe implements PipeTransform {

	transform(posts: Post[], search: string = '', field: keyof Post = 'title'): Post[] {
		if (!search.trim()) {
			return posts;
		}

		return posts.filter(p => {

			return p[field].toLowerCase().includes(search.toLowerCase())
		})
	}

}