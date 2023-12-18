import { BigNumberish } from 'ethers';
import { RoutePlanner } from '../../utils/routerCommands';
import { Permit2Permit } from '../../utils/inputTokens';
import { Command, RouterTradeType, TradeConfig } from '../Command';
export declare class WrapSTETH implements Command {
    readonly tradeType: RouterTradeType;
    readonly permit2Data: Permit2Permit;
    readonly stethAddress: string;
    readonly amount: BigNumberish;
    readonly wrapAmount: BigNumberish;
    constructor(amount: BigNumberish, chainId: number, permit2?: Permit2Permit, wrapAmount?: BigNumberish);
    encode(planner: RoutePlanner, _: TradeConfig): void;
}
