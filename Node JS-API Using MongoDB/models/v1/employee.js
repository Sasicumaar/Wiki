var _globals;

module.exports = {
    employeeSchema: {},
    init: function (globals) {
        _globals = globals;
        var modelName = _globals.MODEL_LIST.Employee;
        this.employeeSchema = new _globals.Schema({
            EmployeeID: {
                type: String,
                required: false
            },
            EmployeeName: {
                type: String,
                required: false
            },
            Gender: {
                type: String,
                required: false
            },
            Nationality: {
                type: String,
                required: false
            },
            CompanyID: {
                type: Object,
                required: false
            },
            DateofBirth: {
                type: Date,
                required: false
            },
            Country: {
                type: String,
                required: false
            },
            Email: {
                type: String,
                required: false
            },
            CreatedBy: {
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
                type: Date
            }
        }, {
            collection: modelName,
            autoIndex: false
        });

        var EMP_LIST = [{},
            {
                _id: 1,
                EmployeeID: 1,
                EmployeeName: 1,
                Gender: 1,
                Nationality: 1,
                CompanyID: 1,
                DateofBirth: 1,
                Country: 1,
                Email: 1,
                IsActive: 1,
                CreatedBy: 1,
                CreatedDate: 1,
                UpdatedBy: 1,
                UpdatedDate: 1,
            }, {
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
                    "EmployeeID": ret.EmployeeID,
                    "EmployeeName": ret.EmployeeName,
                    "Gender": ret.Gender,
                    "Nationality": ret.Nationality,
                    "CompanyID": ret.CompanyID,
                    "DateofBirth": ret.DateofBirth,
                    "Country": ret.Country,
                    "Email": ret.Email,
                    "IsActive": ret.IsActive,
                    "CreatedBy": ret.CreatedBy,
                    "CreatedDate": ret.CreatedDate,
                    "UpdatedBy": ret.UpdatedBy,
                    "UpdatedDate": ret.UpdatedDate,

                }
            } else {
                output = {
                    "id": ret._id,
                    "EmployeeID": ret.EmployeeID,
                    "EmployeeName": ret.EmployeeName,
                    "Gender": ret.Gender,
                    "Nationality": ret.Nationality,
                    "CompanyID": ret.CompanyID,
                    "DateofBirth": ret.DateofBirth,
                    "Country": ret.Country,
                    "Email": ret.Email,
                    "IsActive": ret.IsActive,
                    "CreatedBy": ret.CreatedBy,
                    "CreatedDate": ret.CreatedDate,
                    "UpdatedBy": ret.UpdatedBy,
                    "UpdatedDate": ret.UpdatedDate,
                }
            }
            return output;
        };

        this.employeeSchema.set("toJSON", {
            virtuals: true,
            getters: false,
            transform: transform_result
        });
        this.employeeSchema.set("toObject", {
            virtuals: true,
            getters: false,
            transform: transform_result
        });

        this.employeeSchema.statics.getById = function (data, opts, callBack) {
            var cond = {
                _id: data.id,
                IsActive: data.IsActive
            };
            var query = this.findOne(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };

        this.employeeSchema.statics.getAll = function (data, opts, callBack) {
            var cond = {
                Client_Id: data.Client_Id
            };
            var query = this.find(cond).sort({
                CreatedDate: -1
            });
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };

        _globals.mongoose.model(modelName, this.employeeSchema);
    }
};
