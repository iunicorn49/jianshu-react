class JS {
	constructor(any) {
		this._init(any)
	}
	_init(any) {
		this.value = any
	}
}

let lim = new JS({a: 'a'})

lim.value.a = '32332'

console.log(lim)