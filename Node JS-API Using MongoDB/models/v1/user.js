var _globals;

module.exports = {
    userSchema: {},
    init: function (globals) {
        _globals = globals;
        var modelName = _globals.MODEL_LIST.User;
        this.userSchema = new _globals.Schema({
            UserName: {
                type: String,
                required: true
            },
            UserID: {
                type: String,
                required: true
            },
            Email: {
                type: String,
                required: false
            },
            Designation: {
                type: String
            },
            MobileNumber: {
                type: String
            },
            Roles: {
                type: String
            },
            Password: {
                type: String,
                required: false
            },
            ExpiryDate: {
                type: Date,
                required: false
            },
            IsLocked: {
                type: Boolean,
                required: true,
                default: false
            },
            LastSuccess: {
                type: String,
                required: false
            },
            LastFailure: {
                type: String
            },
            EmployeeID: {
                type: Object
            },
            CompanyID: {
                type: Object
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

        this.userSchema.index({
            Email: 1,
            IsActive: 1
        });
        this.userSchema.index({
            cp_code: 1,
            IsActive: 1
        });
        var EMP_LIST = [{},
            {
                _id: 1,
                UserName: 1,
                UserID: 1,
                Email: 1,
                Designation: 1,
                Roles: 1,
                Password: 1,
                MobileNumber: 1,
                ExpiryDate: 1,
                CreatedBy: 1,
                IsLocked: 1,
                EmployeeID: 1,
                CompanyID: 1,
                IsActive: 1,
                UpdatedBy: 1,
                CreatedDate: 1,
                UpdatedDate: 1
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
                    "UserID": ret.UserID,
                    "UserName": ret.UserName,
                    "MobileNumber": ret.MobileNumber,
                    "Email": ret.Email,
                    "Designation": ret.Designation,
                    "Roles": ret.Roles,
                    "Password": ret.Password,
                    "ExpiryDate": ret.ExpiryDate,
                    "IsLocked": ret.IsLocked,
                    "EmployeeID": ret.EmployeeID,
                    "CompanyID": ret.CompanyID,
                    "IsActive": ret.IsActive,
                    "CreatedBy": ret.CreatedBy,
                    "CreatedDate": ret.CreatedDate,
                    "UpdatedBy": ret.UpdatedBy,
                    "UpdatedDate": ret.UpdatedDate,

                };
            } else {
                output = {
                    "id": ret._id,
                    "UserID": ret.UserID,
                    "UserName": ret.UserName,
                    "MobileNumber": ret.MobileNumber,
                    "Email": ret.Email,
                    "Designation": ret.Designation,
                    "Roles": ret.Roles,
                    "Password": ret.Password,
                    "ExpiryDate": ret.ExpiryDate,
                    "IsLocked": ret.IsLocked,
                    "EmployeeID": ret.EmployeeID,
                    "CompanyID": ret.CompanyID,
                    "IsActive": ret.IsActive,
                    "CreatedBy": ret.CreatedBy,
                    "CreatedDate": ret.CreatedDate,
                    "UpdatedBy": ret.UpdatedBy,
                    "UpdatedDate": ret.UpdatedDate,

                };
            }
            return output;
        };
        this.userSchema.set('toJSON', {
            getters: false,
            virtuals: true,
            transform: transform_result
        });
        this.userSchema.set('toObject', {
            getters: false,
            virtuals: true,
            transform: transform_result
        });


        this.userSchema.statics.getById = function (data, opts, callBack) {
            var cond = {
                _id: data.id,
                IsActive: data.IsActive
            };
            var query = this.findOne(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };

        this.userSchema.statics.getAll = function (data, opts, callBack) {
            var cond = {};
            var query = this.find(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };
        _globals.mongoose.model(modelName, this.userSchema);
    }
};
