import { makeAutoObservable } from 'mobx'

class SearchStore {
	user = {
		self: {},
		button: true,
		clickHandler: () => {
			if (this.user.button) {
				return
			}
			this.clan.button = false
			this.user.button = true
			this.search.in = 'users'
		},
	}
	clan = {
		self: {},
		button: false,
		clickHandler: () => {
			if (this.clan.button) {
				return
			}
			this.user.button = false
			this.clan.button = true
			this.search.in = 'clans'
		},
	}
	search = {
		term: '',
		in: 'users',
		set: e => {
			this.search.term = e.target.value
		},
	}
	constructor() {
		makeAutoObservable(this)
	}
}

const searchStore = new SearchStore()

export default searchStore
