System.register(['angular2/core', './services/data.service', './pipes/Test-filter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1, Test_filter_pipe_1;
    var CustomerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (Test_filter_pipe_1_1) {
                Test_filter_pipe_1 = Test_filter_pipe_1_1;
            }],
        execute: function() {
            CustomerComponent = (function () {
                function CustomerComponent(_dataService) {
                    this._dataService = _dataService;
                    this.clickEvent = new core_1.EventEmitter();
                    this.textEvent = new core_1.EventEmitter();
                }
                CustomerComponent.prototype.getData = function () {
                    var respData = this._dataService.getCustomers();
                    console.info("Data recieved: " + respData);
                };
                CustomerComponent.prototype.pasTextX = function () {
                    this.textEvent.emit(this.textX);
                };
                CustomerComponent.prototype.emmitEvent = function () {
                    this.clickEvent.emit({ name: this.name, address: this.address });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CustomerComponent.prototype, "clickEvent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CustomerComponent.prototype, "textEvent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CustomerComponent.prototype, "address", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CustomerComponent.prototype, "name", void 0);
                CustomerComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-customer',
                        templateUrl: 'app/home/customer.component.html',
                        // providers: [DataService],
                        pipes: [Test_filter_pipe_1.TestFilter]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], CustomerComponent);
                return CustomerComponent;
            }());
            exports_1("CustomerComponent", CustomerComponent);
        }
    }
});
//# sourceMappingURL=customer.component.js.map