const mapData = (param) => {
    const tmp = []
    if (param) {
      Object.entries(param).forEach((item) => {
        tmp.push(item[1])
      })
    }
    return tmp
}

export default mapData