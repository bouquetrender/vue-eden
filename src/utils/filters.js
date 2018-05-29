export function toFixed(val, precision = 2) {
  let isNumber = Number(val)
  if (!isNaN(isNumber)) {
    return isNumber.toFixed(precision)
  }
  return val
}

export const number = {
  add(a, b) {
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return (
      (e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) + this.mul(b, e)) / e
    )
  },
  sub(a, b) {
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return (
      (e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) - this.mul(b, e)) / e
    )
  },
  mul(a, b) {
    let c = 0
    let d = a.toString()
    let e = b.toString()
    try {
      c += d.split('.')[1].length
    } catch (f) {
      console.error(f)
    }
    try {
      c += e.split('.')[1].length
    } catch (f) {
      console.error(f)
    }
    return (
      (Number(d.replace('.', '')) * Number(e.replace('.', ''))) /
      Math.pow(10, c)
    )
  },
  div(a, b) {
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    try {
      e = a.toString().split('.')[1].length
    } catch (g) {
      console.error(g)
    }
    try {
      f = b.toString().split('.')[1].length
    } catch (g) {
      console.error(g)
    }
    return (
      (c = Number(a.toString().replace('.', ''))),
      (d = Number(b.toString().replace('.', ''))),
      this.mul(c / d, Math.pow(10, f - e))
    )
  }
}
