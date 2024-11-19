export class CCT_Master_Param {
    ServerDB: string;
    AN: string;
    DischargeDateFrom: string;
    DischargeDateTo: string;
    AdmType: string;
    AdmSource: string;
    ANSearchKey: string;
    SiteVersion: string;
    HMain: string;
    ServiceType: string;
    ServiceSubType: string;
    CareAs: string;
    ProjectCode: string;
    EventCode: string;
    FileName: string;
    FileDataBase64: string;
    lstSetup: Array<string>;

    constructor() {
        this.ServerDB = "";
        this.AN = "";
        this.DischargeDateFrom = "";
        this.DischargeDateTo = "";
        this.AdmType = "";
        this.AdmSource = "";
        this.ANSearchKey = "";
        this.SiteVersion = "";
        this.HMain = "";
        this.ServiceType = "";
        this.ServiceSubType = "";
        this.CareAs = "";
        this.ProjectCode = "";
        this.EventCode = "";
        this.FileName = "";
        this.FileDataBase64 = "";
        this.lstSetup = [];
    }
}
