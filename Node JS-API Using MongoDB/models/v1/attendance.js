var _globals;

module.exports = {
    attendanceSchema: {},
    init: function (globals) {
        _globals = globals;
        var modelName = _globals.MODEL_LIST.Attendance;
        this.attendanceSchema = new _globals.Schema({
            EmployeeID: { type: Object, required: false },  
            TimeIn: { type: Date, required: false },
            TimeOut: { type: Date, required: false }, 
            EntryType: { type: String, required: false },
            IsActive: { type: Boolean, required: true, default: true },
            CreatedBy: { type: String, required: false },
            UpdatedBy: { type: String, required: false },
            CreatedDate: { type: Date, default: Date.now },
            UpdatedDate: { type: Date, required: false   }
        }, { collection: modelName, autoIndex: false });

        this.attendanceSchema.index({ SalesOrder: 1, IsActive: 1 });

        var EMP_LIST = [{},
        {
            _id: 1, EmployeeID: 1,  Shift: 1, TimeIn: 1, TimeOut: 1, EntryType: 1,
            IsActive: 1, CreatedBy: 1, UpdatedBy: 1, CreatedDate: 1, UpdatedDate: 1,
        }, {
            _id: 1
        }];

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
                    "TimeIn": ret.TimeIn,
                    "TimeOut": ret.TimeOut, 
                    "EntryType": ret.EntryType,
                    "IsActive": ret.IsActive,
                    "CreatedBy": ret.CreatedBy,
                    "UpdatedBy": ret.UpdatedBy,
                    "CreatedDate": ret.CreatedDate,
                    "UpdatedDate": ret.UpdatedDate,
                }
            } else {
                output = {
                    "id": ret._id,
                    "EmployeeID": ret.EmployeeID,    
                    "EntryType": ret.EntryType,
                    "TimeIn": ret.TimeIn,
                    "TimeOut": ret.TimeOut,
                    "IsActive": ret.IsActive
                }
            }
            return output;
        };

        this.attendanceSchema.set("toJSON", { virtuals: true, getters: false, transform: transform_result });
        this.attendanceSchema.set("toObject", { virtuals: true, getters: false, transform: transform_result });

        this.attendanceSchema.statics.getById = function (data, opts, callBack) {
            var cond = { _id: data.id, IsActive: data.IsActive };
            var query = this.findOne(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };

        this.attendanceSchema.statics.getAll = function (data, opts, callBack) {
            var cond = { IsActive: data.IsActive };
            var query = this.find(cond);
            _globals.setOpts(query, opts, EMP_LIST);
            query.exec(callBack);
        };
        _globals.mongoose.model(modelName, this.attendanceSchema);
    }
}; 