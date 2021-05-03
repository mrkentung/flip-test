const totalAmount = (param) => {
    let total = 0
    if (param) {
      Object.entries(param).forEach((item) => {
        if (item[1].status === 'SUCCESS') {
          total = total + item[1].amount
        }
      })
    }
    return total
}

export default totalAmount