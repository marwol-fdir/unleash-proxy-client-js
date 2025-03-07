import { IContext } from '.';
import { v4 as uuidv4 } from 'uuid';

class EventsHandler {
    private generateEventId() {
        return uuidv4();
    }

    public createImpressionEvent(
        context: IContext,
        enabled: boolean,
        featureName: string,
        eventType: string,
        variant?: string
    ) {
        const baseEvent = this.createBaseEvent(
            context,
            enabled,
            featureName,
            eventType
        );

        if (variant) {
            return {
                ...baseEvent,
                variant,
            };
        }
        return baseEvent;
    }

    private createBaseEvent(
        context: IContext,
        enabled: boolean,
        featureName: string,
        eventType: string
    ) {
        return {
            eventType,
            eventId: this.generateEventId(),
            context,
            enabled,
            featureName,
        };
    }
}

export default EventsHandler;
