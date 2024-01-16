import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export enum AuthType {}

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private m_isAuth = false;
	private m_isVerified = false;
	private m_token = "";

	constructor(private http: HttpClient) {}

	public login() {
		this.m_isAuth = true;
		this.m_isVerified = true;
		this.m_token = "334155";
	}

	public logout() {
		this.m_isAuth = false;
		this.m_isVerified = false;
		this.m_token = "";
	}

	public register() {
		this.m_isAuth = true;
		this.m_isVerified = false;
		this.m_token = "334155";
	}

	public verify() {
		if (this.m_isAuth) {
			this.m_isVerified = true;
		}
	}

	public isAuth(): boolean {
		return this.m_isAuth;
	}
}
