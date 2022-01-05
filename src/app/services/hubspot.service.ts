import { api_url } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HubspotService {
  private readonly baseUrl: string;
    
  constructor(private http: HttpClient) { 
    this.baseUrl = api_url.base_url
  }

  getAllContacs() {
    const url = this.baseUrl + 'get_all';
    return this.http.get(url, 
      {headers:  {Authorization: localStorage.getItem('apiKey') || ''}})
  }

  getContactById(id:number){
    const url = this.baseUrl + 'contact/' + id;
    return this.http.get(url, 
      {headers:  {Authorization: localStorage.getItem('apiKey') || ''}})
  }

  createContact(user: any){
    const url = this.baseUrl + 'create_contact';
    return this.http.post(url, user, 
      {headers:  {Authorization: localStorage.getItem('apiKey') || ''}})
  }

  updateContact(id: number, body: object){
    const url = this.baseUrl + 'update_contact/' + id;
    return this.http.put(url, body, 
      {headers:  {Authorization: localStorage.getItem('apiKey') || ''}})
  }

}
