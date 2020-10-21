import { FlyoutPopupManagerSubscriberType } from "./IFlyoutPopupManagerSubscriber";
import { IsNullOrUndefined } from "../../../CustomControls/Models/CustomControlUtilityPointers";
var _instance;
var FlyoutPopupManager = (function () {
    function FlyoutPopupManager() {
        this._subscribers = [];
        this.fireEvent = this.fireEvent.bind(this);
    }
    Object.defineProperty(FlyoutPopupManager, "pointerDownEvent", {
        get: function () {
            return _isIOS() ? "touchstart" : "pointerdown";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlyoutPopupManager, "scrollEvent", {
        get: function () {
            return "scroll";
        },
        enumerable: false,
        configurable: true
    });
    FlyoutPopupManager.getInstance = function () {
        if (!_instance) {
            _instance = new FlyoutPopupManager();
        }
        return _instance;
    };
    Object.defineProperty(FlyoutPopupManager.prototype, "subscribers", {
        get: function () {
            return this._subscribers;
        },
        enumerable: false,
        configurable: true
    });
    FlyoutPopupManager.prototype.addSubscribers = function (subscriber) {
        var _this = this;
        setTimeout(function () {
            if (IsNullOrUndefined(_this.subscribers) || _this.subscribers.length <= 0) {
                document.addEventListener(FlyoutPopupManager.pointerDownEvent, _this.fireEvent);
                if (subscriber.onScroll) {
                    document.addEventListener(FlyoutPopupManager.scrollEvent, _this.fireEvent, true);
                }
            }
            _this._subscribers.push(subscriber);
        }, 100);
    };
    FlyoutPopupManager.prototype.removeSubscribers = function (subscriber) {
        this._subscribers = this._subscribers.filter(function (currentSubscriber) {
            return currentSubscriber !== subscriber;
        });
        if (IsNullOrUndefined(this.subscribers) || this.subscribers.length <= 0) {
            document.removeEventListener(FlyoutPopupManager.pointerDownEvent, this.fireEvent);
            document.removeEventListener(FlyoutPopupManager.scrollEvent, this.fireEvent);
        }
    };
    FlyoutPopupManager.prototype.fireEvent = function (event) {
        if (this.subscribers) {
            for (var i = this._subscribers.length - 1; i >= 0; i--) {
                var subscriber = this.subscribers[i];
                if (subscriber &&
                    subscriber.getComponent() &&
                    (subscriber.onPointerDown || subscriber.onScroll) &&
                    subscriber.getComponent().offsetHeight > 0) {
                    var isClickInsideSubscriber = subscriber.isClickInsideSubscriber && subscriber.isClickInsideSubscriber(event);
                    if (subscriber.onPointerDown && event.type === FlyoutPopupManager.pointerDownEvent) {
                        subscriber.onPointerDown.bind(subscriber, event)();
                    }
                    if (subscriber.onScroll && event.type === FlyoutPopupManager.scrollEvent) {
                        subscriber.onScroll.bind(subscriber, event)();
                    }
                    if (isClickInsideSubscriber) {
                        break;
                    }
                }
                if (subscriber && subscriber.type === FlyoutPopupManagerSubscriberType.Popup) {
                    break;
                }
            }
        }
    };
    return FlyoutPopupManager;
}());
function _isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
export { FlyoutPopupManager };
