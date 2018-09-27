"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter = 42;
        _this.updateMessage();
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function () {
        this._counter -= 5;
        this.updateMessage();
    };
    HelloWorldModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7SUFDekIsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFhO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDL0MsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBU00sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sdUNBQWEsR0FBckI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRywrREFBK0QsQ0FBQztRQUNuRixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxHQUFNLElBQUksQ0FBQyxRQUFRLGVBQVksQ0FBQztRQUNoRCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBDRCxDQUFxQyx1QkFBVSxHQW9DOUM7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyO1xuICAgIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuX2NvdW50ZXIgPSA0MjtcbiAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIFxuICAgIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtZXNzYWdlJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIgLT0gNTtcbiAgICAgICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNZXNzYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5fY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnSG9vcnJhYWF5ISBZb3UgdW5sb2NrZWQgdGhlIE5hdGl2ZVNjcmlwdCBjbGlja2VyIGFjaGlldmVtZW50ISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9jb3VudGVyfSB0YXBzIGxlZnRgO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19