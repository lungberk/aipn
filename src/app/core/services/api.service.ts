import { Injectable, OnInit } from '@angular/core';
import { HttpClient, JsonpInterceptor, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./auth.service";
import { MessageService } from "./message.service";
import { CCT_Master_Param, CCT_MasterXML_Param } from '../models/param.models';
import { CCT_Master_Result, CCT_MasterXML_Result } from '../models/result.models';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    baseUrl = "";
    private param: object;

    constructor(private http: HttpClient, private auth: AuthenticationService, private msg: MessageService) {
        console.log("test ", this.auth.getConfig);
        if (this.auth.getConfig === null) {
            this.auth.setConfig();
        }
    }
    LoadMaster(param: CCT_Master_Param) {
        const ServiceName = "LoadMaster";
        const url = this.auth.getConfig.ws;
        return this.http.post<CCT_Master_Result>(url + ServiceName, { param: param });
    }
    LoadMasterFile(param: CCT_Master_Param) {
        const ServiceName = "LoadMasterFile";
        const url = this.auth.getConfig.ws;
        // const url = "http://localhost:1233/AIPN.svc/";
        return this.http.post<CCT_Master_Result>(url + ServiceName, { param: param });
    }
    LoadMasterXMLFile(param: CCT_Master_Param) {
        const ServiceName = "LoadMasterXMLFile";
        const url = this.auth.getConfig.ws;
        // const url = "http://localhost:1233/AIPN.svc/";
        return this.http.post<CCT_MasterXML_Result>(url + ServiceName, { param: param });
    }
}
