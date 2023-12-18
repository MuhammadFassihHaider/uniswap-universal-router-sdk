import { BigNumberish } from 'ethers';
import { RoutePlanner } from '../../utils/routerCommands';
import { Command, RouterTradeType, TradeConfig } from '../Command';
export declare class UnwrapSTETH implements Command {
    readonly tradeType: RouterTradeType;
    readonly recipient: string;
    readonly amountMinimum: BigNumberish;
    constructor(recipient: string, amountMinimum: BigNumberish, chainId: number);
    encode(planner: RoutePlanner, _: TradeConfig): void;
}
