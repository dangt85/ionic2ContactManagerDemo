import {Component} from '@angular/core';
import {Loading, NavController} from 'ionic-angular';

import * as contactService from '../../providers/contact/contact';

@Component({
	templateUrl: 'build/pages/contact-page/contact-page.html'
})
export class ContactPage {
	static get parameters() {
		return [[NavController]];
	}

	constructor(_navController) {
		this._navControler = _navController;
	}

	presentLoading() {
		let loading = Loading.create({
			content: "Please wait...",
			duration: 3000,
			dismissOnPageChange: true
		});
		this._navControler.present(loading);
	}

	ionViewWillEnter() {
		contactService.findAll()
			.then(result => this.contacts = result.records)
			.catch(error => console.log(error));
	}
}
