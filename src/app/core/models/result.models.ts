export class CCT_Master_Result {
    ResultStatus: boolean;
    ErrorMessage: string;
    lstHeader: Array<CCT_Master_ListHeader>;
    lstDetail: Array<CCT_Master_ListDetail>;
    lstFileDetail: Array<File_Detail>;

    constructor() {
        this.ResultStatus = false;
        this.ErrorMessage = "";
        this.lstHeader = [];
        this.lstDetail = [];
        this.lstFileDetail = [];
    }
}
export class CCT_Master_ListHeader {
    FileName: string;
    lstDetail: Array<File_Detail>;

    constructor() {
        this.FileName = "";
        this.lstDetail = [];
    }
}
export class CCT_Master_ListDetail {
    AN: string;
    ListDetail_IPADT: Array<CCT_IPADT_Detail>;
    ListDetail_IPDX: Array<CCT_IPDX_Detail>;
    ListDetail_IPOP: Array<CCT_IPOP_Detail>;
    ListDetail_COINSURANCE: Array<CCT_COINSURANCE_Detail>;
    ListDetail_INVOICE_HEADER: Array<CCT_INVOICE_HEADER_Detail>;
    ListDetail_INVOICE_DTL: Array<CCT_INVOICE_DTL_Detail>;

    constructor() {
        this.AN = "";
        this.ListDetail_IPADT = [];
        this.ListDetail_IPDX = [];
        this.ListDetail_IPOP = [];
        this.ListDetail_COINSURANCE = [];
        this.ListDetail_INVOICE_HEADER = [];
        this.ListDetail_INVOICE_DTL = [];
    }
}
export class File_Detail {
    AN: string;
    FileName: string;
    DataFileBase64: string;

    constructor() {
        this.AN = "";
        this.FileName = "";
        this.DataFileBase64 = "";
    }
}
export class CCT_File_ListDetail {
    FileName: string;
    DataFileBase64: string;

    constructor() {
        this.FileName = "";
        this.DataFileBase64 = "";
    }
}
export class CCT_IPADT_Detail {
    AN: string;
    HN: string;
    IDTYPE: string;
    PIDPAT: string;
    TITLE: string;
    NAMEPAT: string;
    DOB: string;
    SEX: string;
    MARRIAGE: string;
    CHANGWAT: string;
    AMPHUR: string;
    NATION: string;
    AdmType: string;
    AdmSource: string;
    DTAdm: string;
    DTDisch: string;
    LeaveDay: string;
    DischStat: string;
    DischType: string;
    AdmWt: string;
    DischWard: string;
    Dept: string;
    ANSearchKey: string;

    constructor() {
        this.AN = "";
        this.HN = "";
        this.IDTYPE = "";
        this.PIDPAT = "";
        this.TITLE = "";
        this.NAMEPAT = "";
        this.DOB = "";
        this.SEX = "";
        this.MARRIAGE = "";
        this.CHANGWAT = "";
        this.AMPHUR = "";
        this.NATION = "";
        this.AdmType = "";
        this.AdmSource = "";
        this.DTAdm = "";
        this.DTDisch = "";
        this.LeaveDay = "";
        this.DischStat = "";
        this.DischType = "";
        this.AdmWt = "";
        this.DischWard = "";
        this.Dept = "";
        this.ANSearchKey = "";
    }
}
export class CCT_IPDX_Detail {
    sequence: string;
    DxType: string;
    CodeSys: string;
    Code: string;
    DiagTerm: string;
    DR: string;
    DateDiag: string;

    constructor() {
        this.sequence = "";
        this.DxType = "";
        this.CodeSys = "";
        this.Code = "";
        this.DiagTerm = "";
        this.DR = "";
        this.DateDiag = "";
    }
}
export class CCT_IPOP_Detail {
    sequence: string;
    CodeSys: string;
    Code: string;
    ProcTerm: string;
    DR: string;
    DateIn: string;
    DateOut: string;
    Location: string;

    constructor() {
        this.sequence = "";
        this.CodeSys = "";
        this.Code = "";
        this.ProcTerm = "";
        this.DR = "";
        this.DateIn = "";
        this.DateOut = "";
        this.Location = "";
    }
}
export class CCT_COINSURANCE_Detail {
    InsTypeCode: string;
    InsTotal: string;
    InsRoomBoard: string;
    InsProfFee: string;
    InsOther: string;

    constructor() {
        this.InsTypeCode = "";
        this.InsTotal = "";
        this.InsRoomBoard = "";
        this.InsProfFee = "";
        this.InsOther = "";
    }
}
export class CCT_INVOICE_HEADER_Detail {
    Invoice: string;
    InvNumber: string;
    InvDT: string;
    BillItems: string;
    InvAddDiscount: string;
    DRGCharge: string;
    XDRGClaim: string;

    constructor() {
        this.Invoice = "";
        this.InvNumber = "";
        this.InvDT = "";
        this.BillItems = "";
        this.InvAddDiscount = "";
        this.DRGCharge = "";
        this.XDRGClaim = "";
    }
}
export class CCT_INVOICE_DTL_Detail {
    sequence: string;
    ServDate: string;
    BillGr: string;
    LCCode: string;
    Descript: string;
    QTY: string;
    UnitPrice: string;
    ChargeAmt: string;
    Discount: string;
    ProcedureSeq: string;
    DiagnosisSeq: string;
    ClaimSys: string;
    BillGrCS: string;
    CSCode: string;
    CodeSys: string;
    STDCode: string;
    ClaimCat: string;
    DateRev: string;
    ClaimUP: string;
    ClaimAmt: string;

    constructor() {
        this.sequence = "";
        this.ServDate = "";
        this.BillGr = "";
        this.LCCode = "";
        this.Descript = "";
        this.QTY = "";
        this.UnitPrice = "";
        this.ChargeAmt = "";
        this.Discount = "";
        this.ProcedureSeq = "";
        this.DiagnosisSeq = "";
        this.ClaimSys = "";
        this.BillGrCS = "";
        this.CSCode = "";
        this.CodeSys = "";
        this.STDCode = "";
        this.ClaimCat = "";
        this.DateRev = "";
        this.ClaimUP = "";
        this.ClaimAmt = "";
    }
}
export class CCT_MasterXML_Result {
    ResultStatus: boolean;
    ErrorMessage: string;
    FileDataBase64: string;
    constructor() {
        this.ResultStatus = false;
        this.ErrorMessage = "";
        this.FileDataBase64 = "";
    }
}
export class EnumInfo {
	Code: string;
	NameShow: string;
	constructor() {
		this.Code = "";
		this.NameShow = "";
	}
}