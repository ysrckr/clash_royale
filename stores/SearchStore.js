import { makeAutoObservable } from 'mobx'

class SearchStore {
	user = {
		self: null,
		button: true,
		setSelf: info => {
			this.user.self = info
		},
		clickHandler: () => {
			if (this.user.button) {
				return
			}
			this.clan.button = false
			this.user.button = true
			this.search.in = 'users'
			this.search.setTerm('')
		},
	}
	clan = {
		self: null,
		button: false,
		setSelf: info => {
			this.clan.self = info
		},
		clickHandler: () => {
			if (this.clan.button) {
				return
			}
			this.user.button = false
			this.clan.button = true
			this.search.in = 'clans'
			this.search.setTerm('')
		},
	}
	search = {
		term: '',
		in: 'users',
		setTerm: term => {
			this.search.term = term
		},
		set: e => {
			this.search.setTerm(e.target.value)
		},
	}
	constructor() {
		makeAutoObservable(this)
	}
}

const searchStore = new SearchStore()

export default searchStore
