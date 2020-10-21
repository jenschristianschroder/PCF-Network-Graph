interface IMeasuringSubscriber {
    forceMeasure?: boolean;
    getComponent(): HTMLElement;
    onMeasure(width?: number, height?: number): void;
}
export { IMeasuringSubscriber };
