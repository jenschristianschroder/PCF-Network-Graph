var _instance;
var MeasuringHandler = (function () {
    function MeasuringHandler() {
        var _this = this;
        this._previousDimensions = new Map();
        this._subscribers = [];
        this._pendingSubscribers = [];
        this._pendingUpdates = [];
        this._schedule = function () {
            _this.takeMeasurements();
            _this.flushPendingMeasuringNotifications();
        };
    }
    MeasuringHandler.getInstance = function () {
        if (!_instance) {
            _instance = new MeasuringHandler();
        }
        return _instance;
    };
    MeasuringHandler.prototype.setSchedulingFunction = function (schedule) {
        this._schedule = schedule;
    };
    Object.defineProperty(MeasuringHandler.prototype, "subscribers", {
        get: function () {
            return this._subscribers;
        },
        enumerable: false,
        configurable: true
    });
    MeasuringHandler.prototype.addMeasuringSubscribers = function (subscriber) {
        this._subscribers.push(subscriber);
        this.scheduleMeasuringUpdate();
    };
    MeasuringHandler.prototype.removeMeasuringSubscribers = function (subscriber) {
        var index = this._subscribers.indexOf(subscriber);
        if (index > -1) {
            this._subscribers.splice(index, 1);
            this._previousDimensions.delete(subscriber);
        }
    };
    MeasuringHandler.prototype.scheduleMeasuringUpdate = function () {
        this._schedule();
    };
    MeasuringHandler.prototype.flushPendingMeasuringNotifications = function () {
        var numOfUpdates = this._pendingUpdates.length;
        for (var i = 0; i < numOfUpdates; i++) {
            this._pendingUpdates[i]();
        }
        this._pendingUpdates = [];
        this._pendingSubscribers = [];
        return numOfUpdates;
    };
    MeasuringHandler.prototype.takeMeasurements = function () {
        if (this._subscribers) {
            for (var i = 0; i < this._subscribers.length; i++) {
                var subscriber = this._subscribers[i];
                var element = subscriber.getComponent();
                if (element) {
                    var elementDimension = this._previousDimensions.get(subscriber);
                    var dimension = element.getBoundingClientRect();
                    var width = dimension.width;
                    var height = dimension.height;
                    if (!elementDimension ||
                        elementDimension.Width !== width ||
                        elementDimension.Height !== height ||
                        this._subscribers[i].forceMeasure) {
                        var previousUpdateIndex = this._pendingSubscribers.indexOf(subscriber);
                        if (previousUpdateIndex > -1) {
                            this._pendingSubscribers.splice(previousUpdateIndex, 1);
                            this._pendingUpdates.splice(previousUpdateIndex, 1);
                        }
                        this._previousDimensions.set(subscriber, { Width: width, Height: height });
                        this._pendingUpdates.push(subscriber.onMeasure.bind(subscriber, width, height));
                        this._pendingSubscribers.push(subscriber);
                    }
                }
            }
        }
    };
    return MeasuringHandler;
}());
export { MeasuringHandler };
