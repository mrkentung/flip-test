import Axios from 'axios'

export const getTransactions = async () => {
	try {
		const { data } = await Axios({
			method: 'GET',
			url: 'https://nextar.flip.id/frontend-test',
		})

		return data
	} catch (error) {
		throw new Error('Error Something')
	}
}
