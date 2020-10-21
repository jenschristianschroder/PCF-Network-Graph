import { IMeasuringSubscriber } from "./IMeasuringSubscriber";
interface IMeasuringHandler {
    subscribers: IMeasuringSubscriber[];
    addMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
    removeMeasuringSubscribers(subscriber: IMeasuringSubscriber): void;
    scheduleMeasuringUpdate(): void;
    flushPendingMeasuringNotifications(): number;
    takeMeasurements(): void;
}
export { IMeasuringHandler };
