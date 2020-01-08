export function selectInterest(interest) {

	return {
		type: 'INTEREST_SELECTED',
		payload: interest
	};
}

export function selectCategories(categories) {

	return {
		type: 'CATEGORIES_SELECTED',
		payload: categories
	};
}

export function deselectCategories() {

	return {
		type: 'CATEGORIES_DESELECTED',
	};
}

export function filterCategory(category) {

	return {
		type: 'CATEGORY_UNSELECTED',
		payload: category
	}
}
