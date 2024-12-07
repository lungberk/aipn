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
export class CCT_MasterXML_Param {
    Hearder: CCT_MasterXML_Hearder_Param;
    ClaimAuth: CCT_MasterXML_ClaimAuth_Param;
    ListOfIPADT: Array<CCT_MasterXML_IPADT_Param>;
    ListOfIPDx: Array<CCT_MasterXML_IPDx_Param>;
    ListOfIPDp: Array<CCT_MasterXML_IPDp_Param>;
    Invoice: CCT_MasterXML_Invoice_Param;

    constructor() {
        this.Hearder = new CCT_MasterXML_Hearder_Param();
        this.ClaimAuth = new CCT_MasterXML_ClaimAuth_Param();
        this.ListOfIPADT = [];
        this.ListOfIPDx = [];
        this.ListOfIPDp = [];
        this.Invoice = new CCT_MasterXML_Invoice_Param();
    }
}
export class CCT_MasterXML_Hearder_Param {
    DocClass: string;
    DocSysID: string;
    DocSysID_Ver: string;
    ServiceEvent: string;
    AuthorID: string;
    AuthorName: string;
    EffectiveDateTime: string;

    constructor() {
        this.DocClass = "";
        this.DocSysID = "";
        this.DocSysID_Ver = "";
        this.ServiceEvent = "";
        this.AuthorID = "";
        this.AuthorName = "";
        this.EffectiveDateTime = "";
    }
}
export class CCT_MasterXML_ClaimAuth_Param {
    AuthCode: string;
    AuthDT: string;
    UPayPlan: string;
    ServiceType: string;
    ProjectCode: string;
    EventCode: string;
    UserReserve: string;
    Hmain: string;
    Hcare: string;
    CareAs: string;
    ServiceSubType: string;

    constructor() {
        this.AuthCode = "";
        this.AuthDT = "";
        this.UPayPlan = "";
        this.ServiceType = "";
        this.ProjectCode = "";
        this.EventCode = "";
        this.UserReserve = "";
        this.Hmain = "";
        this.Hcare = "";
        this.CareAs = "";
        this.ServiceSubType = "";
    }
}
export class CCT_MasterXML_IPADT_Param {
    AN: string;
    HN: string;
    IDType: string;
    PID: string;
    Title: string; //free text คำนำหน้า
    Name: string; //free text ชื่อสกุล
    BirthDate: string;
    Sex: string;
    Status: string;
    Provice: string;
    Ampore: string;
    National: string;
    AdmType: string;
    AdmSource: string;
    AdmitDateTime: string;
    DischargeDateTime: string;
    LeaveDay: string;
    DischargeStat: string;
    DischType: string;
    AmdWT: string;
    DischargeWard: string;
    Dept: string;
    constructor() {
        this.AN = "";
        this.HN = "";
        this.IDType = "";
        this.PID = "";
        this.Title = ""; //free text คำนำหน้า
        this.Name = ""; //free text ชื่อสกุล
        this.BirthDate = "";
        this.Sex = "";
        this.Status = "";
        this.Provice = "";
        this.Ampore = "";
        this.National = "";
        this.AdmType = "";
        this.AdmSource = "";
        this.AdmitDateTime = "";
        this.DischargeDateTime = "";
        this.LeaveDay = "";
        this.DischargeStat = "";
        this.DischType = "";
        this.AmdWT = "";
        this.DischargeWard = "";
        this.Dept = "";
    }
}
export class CCT_MasterXML_IPDx_Param {
    index: string;
    DxType: string;
    CodeSys: string;
    ICDCode: string;
    DiagTerm: string;
    DR: string;
    DiagDate: string;

    constructor() {
        this.index = "";
        this.DxType = "";
        this.CodeSys = "";
        this.ICDCode = "";
        this.DiagTerm = "";
        this.DR = "";
        this.DiagDate = "";
    }
}
export class CCT_MasterXML_IPDp_Param {
    index: string;
    DxType: string;
    CodeSys: string;
    ICDCMCode: string;
    ProcTerm: string;
    DR: string;
    DateIN: string;
    DateOut: string;
    Location: string;
    constructor() {
        this.index = "";
        this.DxType = "";
        this.CodeSys = "";
        this.ICDCMCode = "";
        this.ProcTerm = "";
        this.DR = "";
        this.DateIN = "";
        this.DateOut = "";
        this.Location = "";
    }
}
export class CCT_MasterXML_Invoice_Param {
    InvNumber: string;
    InvDT: string;
    InvAddDiscount: string;
    DRGCharge: string;
    XDRGClaim: string;
    ListOfBillItems: Array<CCT_MasterXML_BillItems_Param>;
    constructor() {
        this.InvNumber = "";
        this.InvDT = "";
        this.InvAddDiscount = "";
        this.DRGCharge = "";
        this.XDRGClaim = "";
        this.ListOfBillItems = [];
    }
}
export class CCT_MasterXML_BillItems_Param {
    index: string;
    LCCode: string;
    LCCodeName: string;
    LCNo: string;
    ServiceDate: string;
    QTY: string;
    UnitQYT: string;
    ChargeAmt: string;
    constructor() {
        this.index = "";
        this.ServiceDate = "";
        this.QTY = "";
        this.UnitQYT = "";
        this.ChargeAmt = "";
        this.LCCode = "";
        this.LCCodeName = "";
        this.LCNo = "";
    }
}

