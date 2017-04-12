export const addBook = (book) => ({
	type: 'ADD_BOOK',
	payload: book
})

export const removeBook = (book) => ({
	type: 'REMOVE_BOOK',
	payload: book
})

export const addRecommendedBook = (book) => ({
	type: 'ADD_RECOMMENDED_BOOK',
	payload: book
})

export const removeRecommendedBook = (book) => ({
	type: 'REMOVE_RECOMMENDED_BOOK',
	payload: book
})