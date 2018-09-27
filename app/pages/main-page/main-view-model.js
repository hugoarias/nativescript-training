"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var MainViewModel = /** @class */ (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this._tempSession = new Array();
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._tempSession;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.toogleFavorite = function () {
    };
    MainViewModel.prototype.init = function () {
        var sessionsArray = [
            {
                id: '1',
                title: 'session 1',
                start: '2016-10-03T12:00:00Z',
                end: '2016-10-03T13:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 1 desc',
                descriptionShort: 'session 1 short desc',
                calendarEventId: '',
                isBreak: false
            },
            {
                id: '2',
                title: 'session 2',
                start: '2016-10-03T13:00:00Z',
                end: '2016-10-03T14:00:00Z',
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 2 desc',
                descriptionShort: 'session 2 short desc',
                calendarEventId: '',
                isBreak: true
            },
            {
                id: '3',
                title: 'session 3',
                start: '2016-10-03T14:00:00Z',
                end: '2016-10-03T15:00:00Z',
                room: 'room2',
                roomInfo: {
                    roomId: 'room2',
                    name: 'myroom2',
                    url: '',
                    theme: ''
                },
                speakers: [],
                description: 'session 3 desc',
                descriptionShort: 'session 3 short desc',
                calendarEventId: '',
                isBreak: false
            }
        ];
        for (var i = 0; i < sessionsArray.length; i++) {
            this._tempSession.push(sessionsArray[i]);
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDO0lBQW1DLGlDQUFVO0lBR3pDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBSk8sa0JBQVksR0FBbUIsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7SUFJNUQsQ0FBQztJQUVELHNCQUFJLG1DQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNDQUFjLEdBQWQ7SUFFQSxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksYUFBYSxHQUFtQjtZQUNoQztnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLE1BQU0sRUFBRSxPQUFPO29CQUNmLElBQUksRUFBRSxTQUFTO29CQUNmLEdBQUcsRUFBRSxFQUFFO29CQUNQLEtBQUssRUFBRSxFQUFFO2lCQUNaO2dCQUNELFFBQVEsRUFBRSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxnQkFBZ0I7Z0JBQzdCLGdCQUFnQixFQUFFLHNCQUFzQjtnQkFDeEMsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLEdBQUcsRUFBRSxzQkFBc0I7Z0JBQzNCLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixNQUFNLEVBQUUsT0FBTztvQkFDZixJQUFJLEVBQUUsU0FBUztvQkFDZixHQUFHLEVBQUUsRUFBRTtvQkFDUCxLQUFLLEVBQUUsRUFBRTtpQkFDWjtnQkFDRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsSUFBSTthQUNoQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ04sTUFBTSxFQUFFLE9BQU87b0JBQ2YsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsR0FBRyxFQUFFLEVBQUU7b0JBQ1AsS0FBSyxFQUFFLEVBQUU7aUJBQ1o7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osV0FBVyxFQUFFLGdCQUFnQjtnQkFDN0IsZ0JBQWdCLEVBQUUsc0JBQXNCO2dCQUN4QyxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsT0FBTyxFQUFFLEtBQUs7YUFDakI7U0FDSixDQUFDO1FBRUYsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE3RUQsQ0FBbUMsdUJBQVUsR0E2RTVDO0FBN0VZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICd+L3NoYXJlZC9pbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIHByaXZhdGUgX3RlbXBTZXNzaW9uOiBBcnJheTxTZXNzaW9uPiA9IG5ldyBBcnJheTxTZXNzaW9uPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlc3Npb25zKCkgOiBBcnJheTxTZXNzaW9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBTZXNzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHRvb2dsZUZhdm9yaXRlICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgdmFyIHNlc3Npb25zQXJyYXk6IEFycmF5PFNlc3Npb24+ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDEnLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICcyMDE2LTEwLTAzVDEyOjAwOjAwWicsXHJcbiAgICAgICAgICAgICAgICBlbmQ6ICcyMDE2LTEwLTAzVDEzOjAwOjAwWicsXHJcbiAgICAgICAgICAgICAgICByb29tOiAncm9vbTEnLFxyXG4gICAgICAgICAgICAgICAgcm9vbUluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6ICdyb29tMScsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215cm9vbTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzZXNzaW9uIDEgZGVzYycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNob3J0OiAnc2Vzc2lvbiAxIHNob3J0IGRlc2MnLFxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudElkOiAnJyxcclxuICAgICAgICAgICAgICAgIGlzQnJlYWs6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3Nlc3Npb24gMicsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogJzIwMTYtMTAtMDNUMTM6MDA6MDBaJyxcclxuICAgICAgICAgICAgICAgIGVuZDogJzIwMTYtMTAtMDNUMTQ6MDA6MDBaJyxcclxuICAgICAgICAgICAgICAgIHJvb206ICdyb29tMScsXHJcbiAgICAgICAgICAgICAgICByb29tSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb21JZDogJ3Jvb20xJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbXlyb29tMScsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGVha2VyczogW10sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Nlc3Npb24gMiBkZXNjJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2hvcnQ6ICdzZXNzaW9uIDIgc2hvcnQgZGVzYycsXHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhckV2ZW50SWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDMnLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICcyMDE2LTEwLTAzVDE0OjAwOjAwWicsXHJcbiAgICAgICAgICAgICAgICBlbmQ6ICcyMDE2LTEwLTAzVDE1OjAwOjAwWicsXHJcbiAgICAgICAgICAgICAgICByb29tOiAncm9vbTInLFxyXG4gICAgICAgICAgICAgICAgcm9vbUluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICByb29tSWQ6ICdyb29tMicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215cm9vbTInLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzZXNzaW9uIDMgZGVzYycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNob3J0OiAnc2Vzc2lvbiAzIHNob3J0IGRlc2MnLFxyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXJFdmVudElkOiAnJyxcclxuICAgICAgICAgICAgICAgIGlzQnJlYWs6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2Vzc2lvbnNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl90ZW1wU2Vzc2lvbi5wdXNoKHNlc3Npb25zQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==