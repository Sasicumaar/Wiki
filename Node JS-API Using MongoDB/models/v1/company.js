var _globals;

module.exports = {
    companySchema: {},
    init: function (globals) {
        _globals = globals;
        var modelName = _globals.MODEL_LIST.Company;
        this.companySchema = new _globals.Schema({
            CompanyName: {
                type: String,
                required: true
            },
            CompanyCode: {
                type: String,
                required: true
            },
            Email: {
                type: String,
                required: false
            },
            Address: {
                type: String
            },
            Address1: {
                type: String
            },
            Country: {
                type: String,
                required: false
            },
            Fax: {
                type: String,
                required: false
            },
            Telephone: {
                type: String,
                required: false
            },
            RegisterNumber: {
                type: String
            },
            Website: {
                type: String
            },
            Remarks: {
                type: String
            },
            Currency: {
                type: String
            },
            Createdby: {
                type: String,
                required: false
            },
            UpdatedBy: {
                type: String,
                required: false
            },
            IsActive: {
                type: Boolean,
                required: true,
                default: true
            },
            CreatedDate: {
                type: Date,
                default: Date.now
            },
            UpdatedDate: {
                type: Date,
                default: Date.now
            }
        }, {
            collection: modelName,
            autoIndex: false
        });

        this.companySchema.index({
            Email: 1,
            IsActive: 1
        });
        this.companySchema.index({
            CompanyCode: 1,
            IsActive: 1
        });
        var EMP_LIST = [{},
            {
                _id: 1,
                CompanyName: 1,
                CompanyCode: 1,
                Email: 1,
                Address: 1,
                Address1:1,
                Country: 1,
                Createdby: 1,
                UpdatedBy: 1,
                Currency: 1,
                Country: 1,
                Fax: 1,
                Telephone: 1,
                RegisterNumber: 1,
                Website: 1,
                Remarks: 1,
                IsActive: 1
            },
            {
                _id: 1
            }
        ];

        var transform_result = function (doc, ret, options) {
            var output = {};
            if (typeof doc.ownerDocument == "function") {
                return;
            }
            var index = -1;
            if (options.selector) {
                index = options.selector;
            }
            if (index == 1) {
                output = {
                    "id": ret._id,
                    "CompanyCode": ret.CompanyCode,
                    "CompanyName": ret.CompanyName,
                    "Email": ret.Email,
                    "Address": ret.Address,
                    "Address1": ret.Address1,
                    "Country": ret.Country,
                    "Currency": ret.Currency,
                    "Fax": ret.Fax,
                    "Telephone": ret.Telephone,
                    "RegisterNumber": ret.RegisterNumber,
                    "Remarks": ret.Remarks,
                    "Website": ret.Website,
                    "IsActive": ret.IsActive
                };
            } else {
                output = {
                    "id": ret._id,
                    "CompanyCode": ret.CompanyCode,
                    "CompanyName": ret.CompanyName,
                    "Email": ret.Email,
                    "Address": ret.Address,
                    "Address1": ret.Address1,
                    "Country": ret.Country,
                    "Currency": ret.Currency,
                    "Fax": ret.Fax,
                    "Telephone": ret.Telephone,
                    "RegisterNumber": ret.RegisterNumber,
                    "Remarks": ret.Remarks,
                    "Website": ret.Website,
                    "IsActive": ret.IsActive
                };
            }
            return output;
        };
        this.companySchema.set('toJSON', {
            getters: false,
            virtuals: true,
            transform: transform_result
        });
        this.companySchema.set('toObject', {
            getters: false,
            virtuals: true,
            transform: transform_result
        });

        this.companySchema.statics.checkByEmail = function (data, opts, callBack) {
            var cond = {
                email: data.Email,
                IsActive: data.IsActive
            };
            var query = this.findOne(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };

        this.companySchema.statics.getById = function (data, opts, callBack) {
            var cond = {
                _id: data.id,
                IsActive: data.IsActive
            };
            var query = this.findOne(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };

        this.companySchema.statics.getAll = function (data, opts, callBack) {
            var cond = {
                IsActive: data.IsActive
            };
            var query = this.find(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };
        _globals.mongoose.model(modelName, this.companySchema);
    }
};
