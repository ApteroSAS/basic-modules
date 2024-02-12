import {inject, injectable} from "inversify";
import {EventInterface} from "./interface/EventInterface";
import {Properties} from "@root/properties/Properties";
import {PROPERTIES_SERVICE} from "@root/Identifier";

import {PropertiesFormat, PROPERTY_KEY} from "./PropertiesFormat";
import axios from "axios";

@injectable()
export class HttpEventService implements EventInterface{
    serviceURL: string;

    constructor(
        @inject(PROPERTIES_SERVICE) properties: Properties,
    ) {
        this.serviceURL = properties.get<PropertiesFormat>(PROPERTY_KEY).SERVICE_URL;
    }

    trackEvent(event: string, data?: Record<string, string|number>): void {
        if(this.serviceURL==="DISABLED") return;
        if(this.serviceURL) {
            axios.post(this.serviceURL, {
                event,
                ...data
            }).catch((e) => {
                console.error("HttpEventService:trackEvent", e);
            });
        }
    }

}
