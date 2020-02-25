import { get } from 'ramda';
import { FormsService } from '../services/forms.services';

export class FormsController {
	public async getAll(req: IRequest, res: IResponse, next: INext): Promise<void> {
		try {
			const forms = await FormsService.getAll(
				{
					size: get(1000, ['data', 'query', 'size', req]),
					page: get(1, ['data', 'query', 'page', req]),
					status: get('published', ['data', 'query', 'status', req]),
					online: get(true, ['data', 'query', 'online', req]),
				}
			);
			res.status(200).json(forms);
		} catch (error) {
			next(error);
		}
	}
}
