const indonesianDate = (date) => {
	const month = {
		1: 'Januari',
		2: 'Februari',
		3: 'Maret',
		4: 'April',
		5: 'Mei',
		6: 'Juni',
		7: 'Juli',
		8: 'Agustus',
		9: 'September',
		10: 'Oktober',
		11: 'November',
		12: 'Desember',
	}

	return `${new Date(date).getDate()} ${
		month[new Date().getMonth()]
	} ${new Date(date).getFullYear()}`
}

export default indonesianDate
