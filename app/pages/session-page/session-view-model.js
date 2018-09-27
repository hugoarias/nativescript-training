"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var SessionViewModel = /** @class */ (function (_super) {
    __extends(SessionViewModel, _super);
    function SessionViewModel(source) {
        var _this = _super.call(this) || this;
        if (source) {
            _this._session = source;
        }
        return _this;
    }
    return SessionViewModel;
}(observable_1.Observable));
exports.SessionViewModel = SessionViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTRDO0FBRzVDO0lBQXNDLG9DQUFVO0lBRzVDLDBCQUFhLE1BQWdCO1FBQTdCLFlBQ0ksaUJBQU8sU0FLVjtRQUhHLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDUixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzQixDQUFDOztJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFWRCxDQUFzQyx1QkFBVSxHQVUvQztBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGV9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFNlc3Npb24sIFNwZWFrZXIsIFJvb21JbmZvIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIGltcGxlbWVudHMgU2Vzc2lvbntcclxuICAgIHByaXZhdGUgX3Nlc3Npb246IFNlc3Npb247XHJcbiAgICBwcml2YXRlIF9mYXZvcml0ZTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yIChzb3VyY2U/OiBTZXNzaW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb24gPSBzb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19