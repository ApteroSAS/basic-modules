export declare class ProtooHelper {
    private _protoo;
    init(urlWithParams: any): Promise<void>;
    join(_clientId: any, _device: any, _joinToken: any): Promise<any>;
    kick(clientId: any, permsToken: any, room: any): Promise<any>;
    block(clientId: any): Promise<any>;
    unblock(clientId: any): Promise<any>;
}
